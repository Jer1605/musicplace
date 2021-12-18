const options = [
    {label: 'Profesional', value: 'profesional'},
    {label: 'Semi-profesional', value: 'semi-profesional'},
    {label: 'Amator', value: 'amator'},
];

const styles = {
    control: (provided) => ({
        ...provided,
        lineHeight: 'inherit',
        padding: '.22rem',
        color: '#333',
    }),

}

const placeholder = 'Estatuto';

export default {options, styles, placeholder};