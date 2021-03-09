// 
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'iphone',
    precio: 1500
}

const tableta: Producto = {
    desc: 'ipad Pro',
    precio: 3400
}

function calcularISV( productos: Producto[]): number {
    let total = 0;

    productos.forEach((producto, ) => {
        total += producto.precio;
    })
    return total * 0.15;
}

const articulos =  [telefono, tableta];

const isv = calcularISV(articulos);

console.log('ISV:' , isv);

/* Desctruturacion */

export function calularIva( productos: Producto[]) : [ number,number] {
    let precioTotal = 0;
    productos.forEach(({precio}) => {
        precioTotal += precio;
    })

    return [precioTotal, precioTotal*0.15];
}

const nuevosAritulos = [telefono, tableta];
const [precioTotal,Iva] = calularIva(nuevosAritulos);
console.log('IVA:', Iva);
console.log('precioTotal:', precioTotal);