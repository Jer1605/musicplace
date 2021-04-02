import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FunctionComponent = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'mosaic'} data-valign={'center'}>
                    <h1 className={'logo-font my-0'}><Link to={'/'}>M</Link></h1>
                    <nav data-amplitud={'grow'}>
                        <div className={'mosaic'}>
                            <div className={'ml-4'}><Link to={'/ofertas'}>Ofertas</Link></div>
                            <div><Link to={'/cursos'}>Cursos</Link></div>
                            <div><Link to={'/conciertos'}>Conciertos</Link></div>
                            <div data-dock={'right'}>
                                <Link to={'/login'}>
                                    <FontAwesomeIcon icon={['fas', 'user']} />
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;