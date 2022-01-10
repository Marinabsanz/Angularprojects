

function sumar (a:number, b:number):number {
    return a+b;
    
    }
    const sumarflecha = (a:number ,b:number) :number => {return a+b;}
    
    function multiplicar(numero:number, otroNumero?:number, base:number= 2):number {
        return numero*base;
    }
   // const result = multiplicar(5,0, 10)
   ////////////////////////////////////////////

interface PersonajeMio  {
    nombre: string;
    puntos: number;
    mostrarHp: ()=> void;

}

   function curar(personaje:PersonajeMio, curarX:number):void{
    personaje.puntos += curarX 
    console.log(personaje)
   }

   const newPersonaje: PersonajeMio = {
nombre: 'Pepito',
puntos: 60,
mostrarHp() {
    console.log('puntos de vida', this.puntos)
}

   }
   curar(newPersonaje, 20)
