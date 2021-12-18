import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DashboardMenu = () => {
    return <nav className={'mb-4'}>
        <div className={'mosaic'} data-space={2} data-halign={'flex-end mb-5'}>
            <div className={'mosaic-item'} data-dock={'left'}><Link to={"/micuenta"}><FontAwesomeIcon className={'mr-1'} icon={['fas', 'user-cog']} />Mi cuenta</Link></div>
            <div className={'mosaic-item'}><Link to={"/micuenta/Musicos"}>Musicos (0)</Link></div>
            <div className={'mosaic-item'}><Link to={"/micuenta/Ofertas"}>Ofertas (0)</Link></div>
            <div className={'mosaic-item'}><Link to={"/micuenta/Cursos"}>Cursos (0)</Link></div>
            <div className={'mosaic-item'}><Link to={"/micuenta/Conciertos"}>Conciertos (0)</Link></div>
            <div className={'mosaic-item'}><Link to={"/micuenta/Conciertos"}>Mensajes (2)</Link></div>
        </div>
    </nav>
}

export default DashboardMenu;