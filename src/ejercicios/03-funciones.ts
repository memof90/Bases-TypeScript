// 
/*
    ===== Código de TypeScript =====
*/
// fuction Normal
function sumar(a: number, b:number) : number {
    return a + b;
}
// fuccion de flecha
const sumarFlecha = (a:number, b:number) =>
a + b;

// funcion de flecha con argumentos
/*                      obligatorios   opcionales   variable con valores */
const multiplicar = (numero: number, otroNumero?: number, base:number = 2) =>
numero * base;


const resultado = multiplicar(5);
console.log(resultado);



/* Una interfaz es una clase que defini los tipos y reglas
con los que voy a trabajar fuciones o objetos
*/

interface PersonajeLOR {
    nombre: string,
    pv: number
}

function curar(personaje:PersonajeLOR, curarX: number) {
  return  personaje.pv += curarX
}

const nuevoP: PersonajeLOR = {
    nombre: 'strider',
    pv: 50,
}

const Cur = curar(nuevoP, 20);
console.log(Cur);