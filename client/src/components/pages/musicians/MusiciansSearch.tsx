import React from "react";
import Select from "react-select";

import selectIam from '../../../config/selects/iam';
import selectStatus from '../../../config/selects/status';
import musicalStyles from '../../../config/selects/styles';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MusiciansSearch : React.FunctionComponent = () => {

    return <div className={'search musicians-search'}>
        <div className={'mosaic'} data-space={2}>
            <div className={'mosaic-item'} data-size={20}>
                <label className={'musicians-search-label'}>Soy</label>
                <Select {...selectIam} />
            </div>
            <div className={'mosaic-item'} data-size={35}>
                <label className={'musicians-search-label'}>Busco</label>
                <div className={'mosaic'}>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectIam} /></div>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectStatus} /></div>
                </div>
            </div>
            <div className={'mosaic-item'} data-size={40}>
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