import React from "react";
import {Link} from "react-router-dom";

const Header: React.FunctionComponent = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'mosaic'} data-valign={'center'}>
                    <h1 className={'logo-font my-0'}><Link to={'/'}>MusicPlace</Link></h1>
                    <div><Link to={'/ofertas'}>Ofertas</Link></div>
                    <div><Link to={'/cursos'}>Cursos</Link></div>
                    <div><Link to={'/conciertos'}>Conciertos</Link></div>
                    <div data-dock={'right'}><Link to={'/login'}>login</Link></div>
                </div>
            </div>
        </header>
    )
}

export default Header;