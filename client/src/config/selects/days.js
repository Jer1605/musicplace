const options = [
    {"label": "Lunes", "value": "Lunes"},
    {"label": "Martes", "value": "Martes"},
    {"label": "Miercoles", "value": "Miercoles"},
    {"label": "Jueves", "value": "Jueves"},
    {"label": "Viernes", "value": "Viernes"},
    {"label": "Sabado", "value": "Sabado"},
    {"label": "Domingo", "value": "Domingo"},
];

const styles = {
    control: (provided) => ({
        ...provided,
        lineHeight: 'inherit',
        padding: '.22rem',
        color: '#333',
    }),
    option: (providedValue) => ({
        ...providedValue,
        color: '#333',
    }),

}

const placeholder = 'Dia';

export default {options, styles, placeholder};