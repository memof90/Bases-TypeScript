// 
/*
    ===== Código de TypeScript =====
*/

/* Destruturacion Arreglos */

console.log('Destruturacion Arreglos');

const avengersNames: string[] = ['Capitan America', 'Thor', 'Iroman'];

console.log('Personaje 1:', avengersNames[0]);

const [, , p3] = avengersNames;
console.log(p3);
