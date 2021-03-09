// 
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen : number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
    premio: Premio;
}

interface Detalles {
    author: string;
    anio: number
}

interface Premio {
    anio: number,
    nombre: string
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Tu Fidelidad',
    detalles: {
        author: 'jesus',
        anio: 2012
    },
    premio: {
        anio: 2020,
        nombre: 'grammy'
    }
}

console.log('El volumen actual es:',  reproductor.volumen);
console.log('El segundo actual es:', reproductor.segundo);
console.log('El cancion actual es:', reproductor.cancion);
console.log('El author es:', reproductor.detalles.author);


/* Destructurcion  de Objetos*/

const {volumen,segundo,cancion, detalles, premio:{nombre: nuevoNombre}} = reproductor;
console.log(volumen);

const {author,anio} = detalles;

console.log(author);

console.log(nuevoNombre);


