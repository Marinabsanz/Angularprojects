
export interface Producto { 
 descripción: string,
 pvp: number,

}

const teléfono: Producto = {
    descripción: 'Samsung A12',
    pvp: 200,
}

const tablet: Producto= {
    descripción: 'Ipad3',
    pvp: 350,
}

export function calculateIsv( productos: Producto[] ):[number, number] {


let total= 0;

productos.forEach(({pvp}) => {
    total += pvp;
    
})

return [total, total * 0.21];

}
//const artículos = [teléfono, tablet]
//const ISV = calculateIsv(artículos); 

//onsole.log('ISV',  ISV)