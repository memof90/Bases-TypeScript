
/*
    ===== Código de TypeScript =====
*/

let avengers: String[] = ['Thor', 'Capitan America', 'Spiderman'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje :Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'Healing'],
}

personaje.puebloNatal = 'JavaScript';

console.table(personaje);
