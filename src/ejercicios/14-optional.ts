// 
/*
    ===== Código de TypeScript =====
*/

/* Encadenamiento Opcional ? */

interface Pasajero {
    nombre: string;
    heroes?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'nave'
}

const pasajero2: Pasajero = {
    nombre: 'nave2',
    heroes: ['Iroman', 'Spiderman']
}

function imprimirHeores( pasajero: Pasajero): void {
    const cuantosHeroes = pasajero.heroes?.length || 0;

    console.log(cuantosHeroes);
}

imprimirHeores(pasajero1);