import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer : React.FunctionComponent = () => {
    return <footer>
        <div className={'mosaic'} data-valign={'center'} data-space={3}>
            <div className={'mosaic-item'}><h1 className={'mosaic-item logo-font my-0 reverse'}><Link to={'/'}>Colibri</Link></h1></div>
            <div className={'mosaic-item ml-4'}><Link to={'/musicians'}>Musicos</Link></div>
            <div className={'mosaic-item'}><Link to={'/ofertas'}>Ofertas</Link></div>
            <div className={'mosaic-item'}><Link to={'/cursos'}>Cursos</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Conciertos</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Aviso Legal</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Cookies</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Privacidad</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Mapa del sitio</Link></div>
            <div className={'mosaic-item'}><Link to={'/conciertos'}>Contact</Link></div>
            <div className={'mosaic-item'} data-dock={'right'}>
                <Link to={'/login'}>
                    <FontAwesomeIcon icon={['fas', 'user']} />
                </Link>
            </div>
        </div>
    </footer>
}

export default Footer;