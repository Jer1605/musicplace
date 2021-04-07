import React from "react";
import '../../scss/pages/home.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

import reactSelectCategoriesConfiguration from "../../config/reactSelectCategories";
import Musicians from "./musicians/Musicians";

const Home: React.FunctionComponent = () => {
    return(
        <div className={'home'}>
            <section className={`intro bg-${Math.floor(Math.random() * 14)}`}>
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
                <div className={'grid grid-cols-2 gap-50'}>
                    <Musicians />
                    <Musicians />
                </div>
            </section>
        </div>
    )
}

export default Home;