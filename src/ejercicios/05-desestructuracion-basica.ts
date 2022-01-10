interface Reproductor {
    volumen: number;
    segundo: number;
    canción: string;
    detalles:Detalles;
}

interface Detalles{
    autor: string;
    año: number;
}

const reproductor: Reproductor = {
    volumen:90,
    segundo:36,
    canción: 'happysong',
    detalles:{
       autor: 'pepito',
       año: 1988,
    }
}

  //desectructurando objs 
const { volumen, segundo, canción, detalles} = reproductor; 

//puedo crear otra const para el obj dealles
const {autor} = detalles

//console.log('el volumen actual es de: ',volumen);
//console.log('el segundo actual es de : ', segundo);
//console.log('la canción actual es de : ', canción);
//console.log('El autor es: ', autor);

/////////////////////////////
//desectrcturando arrays lo imp es la posición
const dbz: string []= ['Goku', 'Vegeta', 'Bulma'];

const [,,p3]= dbz; 

//console.log('El pesonaje  1 es: ', dbz[0])
//console.log('El pesonaje  2 es: ', dbz[1])
//console.log('El pesonaje  3 es: ', p3)

//desectructuración argumentos

