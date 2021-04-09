import React from "react";
import '../../scss/pages/home.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

import reactSelectCategoriesConfiguration from "../../config/reactSelectCategories";
import Musicians from "./musicians/Musicians";
import Offers from "./offers/Offers";
import Shows from "./shows/Shows";
import Classes from "./classes/Classes";

const Home: React.FunctionComponent = () => {
    return(
        <div className={'home'}>
            <section className={`intro intro-fixed bg-${Math.floor(Math.random() * 14)}`}>
                <div className={'absolute-centered search'}>
                    <div className={'container'}>
                    <div className={'mosaic'} data-halign={'center'}>
                        <div className={'mosaic-item input-icon'} data-size={50}>
                            <FontAwesomeIcon icon={['fas', 'search']} />
                            <input type={'text'} className={'input'} placeholder={'Jazz, guitaristas, amplificador...'} />
                        </div>
                        <div className={'mosaic-item'} data-size={15}>
                            <Select {...reactSelectCategoriesConfiguration} />
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
                    <Musicians />
                    <Offers />
                </div>
            </section>
            <section className={`intro intro-small bg-${Math.floor(Math.random() * 14)}`}>
                <h1 className={'absolute-centered text-center intro-title'}>Encuentra otros musicos en tu zona</h1>
            </section>
            <section className={'container section'}>
                <div className={'grid grid-cols-2 gap-200'}>
                    <Shows />
                    <Classes />
                </div>
            </section>
        </div>
    )
}

export default Home;