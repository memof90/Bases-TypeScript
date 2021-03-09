// 
/*
    ===== Código de TypeScript =====
*/

/* GENERICOS: Que puede resivir algo de tipo <T>
Que tipo de Dato va a retornar una funcion
que Tipo de Dato es la que va a obtener
*/

function queTipoSoy<T>(argumento:T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(5);

// Generico Explicito
let soyExplicito = queTipoSoy<number>(100);