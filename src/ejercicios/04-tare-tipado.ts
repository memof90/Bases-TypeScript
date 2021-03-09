// 
/*
    ===== Código de TypeScript =====
*/
/* Una interfaz es una clase que defini los tipos y reglas
con los que voy a trabajar fuciones o objetos
*/

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion;
    mostrarDireccion : () => string;
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

const superHeroe : SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const dirrecion = superHeroe.mostrarDireccion();
console.log(dirrecion);
