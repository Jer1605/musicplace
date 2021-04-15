import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FunctionComponent = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'mosaic'} data-valign={'center'} data-space={3}>
                    <h1 className={'mosaic-item logo-font my-0'}><Link to={'/'}>Colibri</Link></h1>
                    <nav className={'mosaic-item'} data-amplitud={'grow'}>
                        <div className={'mosaic'} data-space={2}>
                            <div className={'mosaic-item ml-4'}><Link to={'/musicos'}>Musicos</Link></div>
                            <div className={'mosaic-item'}><Link to={'/ofertas'}>Ofertas</Link></div>
                            <div className={'mosaic-item'}><Link to={'/cursos'}>Cursos</Link></div>
                            <div className={'mosaic-item'}><Link to={'/conciertos'}>Conciertos</Link></div>
                            <div className={'mosaic-item'} data-dock={'right'}>
                                <div className={'mosaic'}>
                                    <div className={'mosaic-item'}>
                                        <Link to={'/login'}><FontAwesomeIcon icon={['fas', 'comment']} /></Link>
                                    </div>
                                    <div className={'mosaic-item'}>
                                        <Link to={'/login'}><FontAwesomeIcon icon={['fas', 'user']} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;