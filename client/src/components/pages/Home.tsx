import React from "react";
import '../../scss/pages/home.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

import selectCategories from "../../config/selects/categories";
import MusiciansList from "./musicians/MusiciansList";
import OffersList from "./offers/OffersList";
import ShowsList from "./shows/ShowsList";
import ClassesList from "./classes/ClassesList";

const Home: React.FunctionComponent = () => {
    return(
        <div className={'home'}>
            <section className={`intro intro-fixed bg-${Math.floor(Math.random() * 11)}`}>
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
                <div className={'grid grid-cols-2 gap-200'}>
                    <MusiciansList title={'Musicos y bandas'} preview={true} />
                    <OffersList title={'Ofertas'} preview={true}  />
                </div>
            </section>
            <section className={`intro intro-small bg-${Math.floor(Math.random() * 11)}`}>
                <h1 className={'absolute-centered text-center intro-title'}>
                    <blockquote>
                        <p>Encuentra musicos, busca material, apuntate a una clase o vete a conciertos en Madrid !</p>
                    </blockquote>
                </h1>
            </section>
            <section className={'container section'}>
                <div className={'grid grid-cols-2 gap-200'}>
                    <ShowsList title={'Conciertos'} preview={true} />
                    <ClassesList title={'Cursos'} preview={true} />
                </div>
            </section>
        </div>
    )
}

export default Home;