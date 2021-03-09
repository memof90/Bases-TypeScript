// 
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string,
    ) {
        
    }
}

class Heroe extends PersonaNormal {
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,) {
            // super llamar a la clase del contructor el 
        // extiende
        super(nombreReal, 'NY');
    }
}

const capitanAmerica = new Heroe('Capitan America', 500,'Steve Rogers');
console.log(capitanAmerica);