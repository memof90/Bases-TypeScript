// 
/*
    ===== Código de TypeScript =====
*/

/* Decoradores: Cambiar las clases cuando son definidas
En el momneto que este compilando va extenderles las funcionalidades

funcion que expande su clase añadiendo funcionalidades
especiales
*/


function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

  @classDecorator
  class MiSuperClase {
      public mipropiedad: String = 'ABC123';

      imprimir() {
          console.log('Hola Mundo');
      }
  }

  console.log(MiSuperClase);

  /* Instancia de esa clase */

  const miClase = new MiSuperClase();
  console.log(miClase.mipropiedad);