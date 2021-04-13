import React from "react";
import Select from "react-select";

import selectSpain from '../../../config/selects/spain';
import musicalStyles from '../../../config/selects/styles';
import '../../../scss/pages/page_list.scss';

const MusiciansSearch : React.FunctionComponent = () => {

    return <div className={'musicians-search'}>
        <div className={'mosaic'} data-size={'1/3'} data-space={4}>
            <div className={'mosaic-item'}>
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
            <div className={'mosaic-item'}>
                <label className={'musicians-search-label'}>Provincia</label>
                <div className={'mosaic'}>
                    <div className={'mosaic-item'} data-amplitud={'grow'}><Select {...selectSpain.provinces} /></div>
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