import { Producto, calculateIsv } from './06-desec-Argumentos';



const carritoCompras: Producto[]=  [

    {
descripción: 'prod1',
pvp:100
    },

    {
        descripción: 'prod2',
        pvp:200
            }

];

const [total, isv] = calculateIsv( carritoCompras );

console.log( 'Total', total );
console.log( 'ISV', isv )




