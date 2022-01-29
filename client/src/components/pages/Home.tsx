import React from "react";
import Select from "react-select";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import '../../scss/pages/home.scss';

import selectCategories from "../../config/selects/categories";
import MusiciansList from "./musicians/MusiciansList";
import ShowsList from "./shows/ShowsList";

const Home: React.FunctionComponent = () => {
    return(
        <div className={'home'}>
            <section className={`intro intro-fixed bg-7`}>
                <div className={'absolute-centered search'}>
                    <div className={'container'}>
                    <div className={'mosaic'} data-halign={'center'}>
                        <div className={'mosaic-item input-icon'} data-size={50}>
                            <FontAwesomeIcon icon={['fas', 'search']} />
                            <input type={'text'} className={'input'} placeholder={'Jazz, guitaristas, amplificador...'} />
                        </div>
                        <div className={'mosaic-item'} data-size={15}>
                            <Select {...selectCategories} />
                        </div>
                        <div className={'mosaic-item'} data-size={15}>
                            <button>Buscar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className={'container section'}>
                <div className={'grid grid-cols-2 gap-x-200'}>
                    <div>
                        <MusiciansList title={'Ultimos anuncios'} preview={true} />
                        <div className={'text-center mt-3'}>
                            <Link to={'/musicos/new'}><button>Añadir un anucio</button></Link>
                        </div>
                    </div>
                    <div>
                        <MusiciansList title={'Jam sessiones'} preview={true} />
                        <div className={'text-center mt-3'}>
                            <Link to={'/jamsession/new'}><button>Anunciar una Jam session</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`intro intro-small bg-5`}>
                <h1 className={'absolute-centered text-center intro-title'}>
                    <blockquote>
                        <p>Encuentra musicos, busca material, apuntate a una clase o vete a conciertos en Madrid !</p>
                    </blockquote>
                </h1>
            </section>
            <section className={'container section'}>
                <div className={'grid grid-cols-2 gap-x-200'}>
                    <ShowsList title={'Proximos conciertos'} preview={true} />
                    <ShowsList title={'Conciertos con exito'} preview={true} />
                </div>
                <div className={'text-center mt-3'}>
                    <Link to={'/conciertos/new'}><button>Añadir mi concierto</button></Link>
                </div>
            </section>
        </div>
    )
}

export default Home;