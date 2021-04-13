import React from "react";
import Select from "react-select";

import spainCities from '../../../config/selects/spain';
import instruments from '../../../config/selects/iam';
import '../../../scss/pages/page_list.scss';
import InputRange, {Range} from 'react-input-range';


type SelectOption = {label: string, value: string};
type ConfigState = {
    priceRange: {
        runtime: Range | number,
        value: Range | number,
    };
    instrument: SelectOption | null;
    geo: {
        provinces: Array<SelectOption>,
        cities: {default: Array<SelectOption>, filtered: Array<SelectOption>},
        selected: {province: SelectOption | null, city: SelectOption | null}
    };
}

const ClassesSearch : React.FunctionComponent = () => {

    const [state, setState] = React.useState<ConfigState>({
        instrument: null,
        priceRange: {
            runtime: {min: 0, max: 50},
            value: {min: 0, max: 50}
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
            <div className={'mosaic-item'} data-size={40}>
                <label className={'musicians-search-label'}>Instrumento</label>
                <Select {...instruments} />
            </div>
            <div className={'mosaic-item'} data-size={20}>
                <label className={'musicians-search-label'}>Precio por hora</label>
                <InputRange
                    formatLabel={value => value === 50 ? `50€+` : `${value}€`}
                    minValue={0}
                    maxValue={80}
                    value={state.priceRange.runtime}
                    onChange={handlePriceRangeChange}
                    onChangeComplete={range => console.log(range)}
                />
            </div>
            <div className={'mosaic-item'} data-size={40}>
                <label className={'musicians-search-label'}>Provincia</label>
                <Select {...spainCities.provinces} />
            </div>
        </div>
    </div>;
}

export default ClassesSearch;