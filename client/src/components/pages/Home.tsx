import React from "react";
import '../../scss/pages/home.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

import reactSelectCategoriesConfiguration from "../../config/reactSelectCategories";

const Home: React.FunctionComponent = () => {
    return(
        <div className={'home'}>
            <section className={`intro bg-${Math.floor(Math.random() * 19)}`}>
                <div className={'absolute-centered search'}>
                    <div className={'mosaic'} data-halign={'center'}>
                        <div className={'mosaic-item input-icon'} data-size={40}>
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
            </section>
            <section className={'container section'}>
                <h1>Ultimas ofertas</h1>
            </section>
        </div>
    )
}

export default Home;