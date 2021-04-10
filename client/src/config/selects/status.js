const options = [
    {label: 'Professional', value: 'professional'},
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