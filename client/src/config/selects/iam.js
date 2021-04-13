const options = [
    {"label": "Groupe", "value": "groupe"},
    {"label": "Guitariste", "value": "guitariste"},
    {"label": "Bassiste", "value": "bassiste"},
    {"label": "Contrebassiste", "value": "contrebassiste"},
    {"label": "Pianiste", "value": "pianiste"},
    {"label": "Violoniste", "value": "violoniste"},
    {"label": "Violoncelliste", "value": "violoncelliste"},
    {"label": "Batteur", "value": "batteur"},
    {"label": "Percussionniste", "value": "percussionniste"},
    {"label": "Chanteur/chanteuse", "value": "chanteur/chanteuse"},
    {"label": "Accordéoniste", "value": "accordeoniste"},
    {"label": "Flûtiste", "value": "flutiste"},
    {"label": "Harmoniciste", "value": "harmoniciste"},
    {"label": "Saxophoniste", "value": "saxophoniste"},
    {"label": "Trompettiste", "value": "trompettiste"},
    {"label": "Tromboniste", "value": "tromboniste"},
    {"label": "Clarinettiste", "value": "clarinettiste"},
    {"label": "Tubas", "value": "tubas"},
    {"label": "Claviériste", "value": "clavieriste"},
    {"label": "MAO", "value": "mao"},
    {"label": "DJ", "value": "dj"}
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

const placeholder = 'Instrumento';

export default {options, styles, placeholder};