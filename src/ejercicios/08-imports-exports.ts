// 
/*
    ===== Código de TypeScript =====
*/

import { calularIva, Producto } from "./07-Desestruturacion-Argumentos";

const carritoCompras: Producto[] = [
    {
        desc: 'Ipad Air',
        precio: 1300
    },
    {
        desc: 'Iphone Pro',
        precio: 3300
    },
];

const [total, isv] = calularIva( carritoCompras);

console.log('Total', total);
console.log('ISV', isv);