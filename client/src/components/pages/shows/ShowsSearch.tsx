import React from "react";
import Select from "react-select";

import selectSpain from '../../../config/selects/spain';
import musicalStyles from '../../../config/selects/styles';
import '../../../scss/pages/page_list.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MusiciansSearch : React.FunctionComponent = () => {

    return <div className={'musicians-search'}>
        <div className={'mosaic'} data-space={2}>
            <div className={'mosaic-item'} data-size={30}>
                <div className={'mosaic'}>
                    <div className={'mosaic-item'}>
                        <label className={'musicians-search-label'}>De</label>
                        <div><input className={'input'} type={'date'} /></div>
                    </div>
                    <div className={'mosaic-item'}>
                        <label className={'musicians-search-label'}>A</label>
                        <div><input className={'input'} type={'date'} /></div>
                    </div>
                </div>
            </div>
            <div className={'mosaic-item'} data-size={20}>
                <label className={'musicians-search-label'}>Provincia</label>
                <div className={'mosaic'}>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectSpain.provinces} /></div>
                </div>
            </div>
            <div className={'mosaic-item'} data-size={45}>
                <label className={'musicians-search-label'}>Styles</label>
                <div className={'mosaic-item'}>
                    <div className={'mosaic'} data-wrap={'wrap'}>
                        {musicalStyles.map((item, i) => <div className={'mosaic-item'} key={i}>
                            <input id={`${item}-${i}`} type="checkbox" className="checkbox mr-1" />
                            <label htmlFor={`${item}-${i}`}><small>{item}</small></label>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className={'mosaic-item'} data-dock={'right'}>
                <button className={'button-blue full-height'}><FontAwesomeIcon icon={['fas', 'search']} className={''} /></button>
            </div>
        </div>
    </div>;
}

export default MusiciansSearch;