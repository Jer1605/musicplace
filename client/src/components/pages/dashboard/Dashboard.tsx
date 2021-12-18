import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dashboard: React.FunctionComponent = () => {
    return <section className={'dashboard'}>
        <section className={`intro intro-small bg-yawil`}>
            <h1 className={'absolute-centered text-center intro-title'}>Dashboard</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <div className={'mosaic'} data-space={2} data-halign={'flex-end'}>
                    <div className={'mosaic-item'} data-dock={'left'}><Link to={"/micuenta/perfil"}><FontAwesomeIcon className={'mr-1'} icon={['fas', 'user-cog']} />Mi cuenta</Link></div>
                    <div className={'mosaic-item'}><Link to={"/micuenta/Musicos"}>Musicos (0)</Link></div>
                    <div className={'mosaic-item'}><Link to={"/micuenta/Ofertas"}>Ofertas (0)</Link></div>
                    <div className={'mosaic-item'}><Link to={"/micuenta/Cursos"}>Cursos (0)</Link></div>
                    <div className={'mosaic-item'}><Link to={"/micuenta/Conciertos"}>Conciertos (0)</Link></div>
                </div>
            </div>
        </section>
    </section>
}

export default Dashboard;