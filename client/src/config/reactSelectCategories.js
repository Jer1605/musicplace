const options = [
    {label: 'Ofertas', value: 'ofertas'},
    {label: 'Cursos', value: 'cursos'},
    {label: 'Conciertos', value: 'conciertos'},
    {label: 'Musicos', value: 'musicos'},
];

const styles = {
    control: (provided) => ({
        ...provided,
        lineHeight: 'inherit',
        padding: '.22rem',
        color: '#333',
    }),

}

const placeholder = 'Categorias';

export default {options, styles, placeholder};