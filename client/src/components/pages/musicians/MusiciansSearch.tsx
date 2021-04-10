import React from "react";
import Select from "react-select";

import selectIam from '../../../config/selects/iam';
import selectStatus from '../../../config/selects/status';
import musicalStyles from '../../../config/selects/styles';
import '../../../scss/pages/musicians.scss';
import {ReactComponent} from "*.svg";

const MusiciansSearch : React.FunctionComponent = () => {

    return <div className={'musicians-search'}>
        <div className={'mosaic'} data-size={'1/3'} data-space={4}>
            <div className={'mosaic-item'}>
                <label className={'musicians-search-label'}>Soy</label>
                <Select {...selectIam} />
            </div>
            <div className={'mosaic-item'}>
                <label className={'musicians-search-label'}>Busco</label>
                <div className={'mosaic'}>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectIam} /></div>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectStatus} /></div>
                </div>
            </div>
            <div className={'mosaic-item'}>
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
        </div>
    </div>;
}

export default MusiciansSearch;