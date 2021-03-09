// 
/*
    ===== Código de TypeScript =====
*/

class HeroeT {

     alterEgo: string;
     edad: number;
     nombreReal: number;

    //  Contructor: funcion que se va a llamar cuando
    // creo una instancia de la clase
    constructor(alterEgo: string) {
        this.alterEgo = alterEgo;
    }
}


// Intanciar una clase
const iromanT = new HeroeT('iroman');
console.log(iromanT);

class HeroeTwoT {
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,) {}
}

const capitanAmericaT = new HeroeTwoT('Capitan America', 500,'Steve Rogers');
console.log(capitanAmericaT);