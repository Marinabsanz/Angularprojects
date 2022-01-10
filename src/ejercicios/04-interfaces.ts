interface Superhero{
    nombre: string;
    edad: number;
    dirección: Dirección
    showAdress: ()=>string;
    
    }
    interface Dirección {
        calle:string,
        pais: string,
        ciudad: string,
    }
    
    const superHero= {
        nombre: 'Batman',
        edad: 30,
        dirección: {
            calle: 'main st',
            país: 'USA',
            ciudad: 'NY',
    
        },
        showAdress(){
            return 'hola soy ' + this.nombre + ' y soy de '+ this.dirección.país;
    
        }
    
    }
    
    const dirección = superHero.showAdress();
    
    console.log(dirección)