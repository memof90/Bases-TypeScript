// 
/*
    ===== Código de TypeScript =====
*/
// las clases me sirven para crear instancias
class Heroes {
    // Acceder a el dentro de la clase
    private alterEgo: string;
    // acceder a le fuer de la clase
    public edad: number;
    // acceder a le sin instanciar la varible
    static nombreReal: number;
}

class HeroesTwo {
    alterEgo: string;
    edad: number;
    nombreReal: number;
}

// Intanciar una clase
const iromans = new HeroesTwo();
console.log(iromans);