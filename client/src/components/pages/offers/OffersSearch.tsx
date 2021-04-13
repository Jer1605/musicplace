import React from "react";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InputRange, {Range} from 'react-input-range';

import spainCities from '../../../config/selects/spain';
import '../../../scss/pages/page_list.scss';
import '../../../scss/vendors/input_range.scss';

type SelectOption = {label: string, value: string};
type ConfigState = {
    priceRange: {
        runtime: Range | number,
        value: Range | number,
    };
    geo: {
        provinces: Array<SelectOption>,
        cities: {default: Array<SelectOption>, filtered: Array<SelectOption>},
        selected: {province: SelectOption | null, city: SelectOption | null}
    };
}

const OffersSearch : React.FunctionComponent = () => {

    const [state, setState] = React.useState<ConfigState>({
        priceRange: {
            runtime: {min: 0, max: 4000},
            value: {min: 0, max: 4000}
        },
        geo: {
            provinces: [],
            cities: {default: [], filtered: []},
            selected: {province: null, city: null}
        }
    });

    const handlePriceRangeChange = (range : Range | number) :void => {
        const currentState = {...state};
        currentState.priceRange.runtime = range;
        setState(currentState);
    }

    return <div className={'musicians-search'}>
        <div className={'mosaic'} data-space={4}>
            <div className={'mosaic-item'} data-size={50}>
                <label className={'musicians-search-label'}>Busco</label>
                <div className={'input-icon'}>
                    <FontAwesomeIcon icon={['fas', 'search']} />
                    <input type={'text'} className={'input'} placeholder={'Guitara, Amplificador, Bajo...'} />
                </div>
            </div>

            <div className={'mosaic-item'} data-size={20}>
                <label className={'musicians-search-label'}>Precio</label>
                <InputRange
                    formatLabel={value => value === 5000 ? `5000€+` : `${value}€`}
                    minValue={0}
                    maxValue={5000}
                    value={state.priceRange.runtime}
                    onChange={handlePriceRangeChange}
                    onChangeComplete={range => console.log(range)}
                />
            </div>
            <div className={'mosaic-item'} data-size={30}>
                <label className={'musicians-search-label'}>Provincia</label>
                <Select {...spainCities.provinces} />
            </div>
        </div>
    </div>;
}

export default OffersSearch;