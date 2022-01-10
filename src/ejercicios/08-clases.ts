//Clases Private public  static
// Para private hay que crear el constructor con el this, para la static no necesito crear instancia de clase. (La constante de clase)
//Públicas por defecto
//Con la clase puedo crear instancias, métodos

class PersonaNormal {


    constructor(
    public name: string,
    public adress: string,
    
    ) 
        
    {}


}

class Hero extends PersonaNormal{
//public alterEgo: string;
//public edad: number;
//public nombreReal: number;
 
constructor(
    public alterEgo?: string,
    public edad?: number,
    public nombreReal?: string,
    
     ) {

super(nombreReal, 'New York, Usa');


     }

}
const ironman = new Hero('ironman', 45, 'Tony Stark');
console.log(ironman)
