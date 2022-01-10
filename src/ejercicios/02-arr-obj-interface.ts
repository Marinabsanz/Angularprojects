
/*
    =====TypeScript =====
*/
//evitar el any


let superPowers:  string[] = ['Poder', 'Volar', 'Teletransporte'];
superPowers.push('invisibilidad')
console.log(superPowers)
//trabajar con obj, hacer interface
interface Personaje{
    nombre: string;
    hp: number;
    superPowers: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Marina',
    hp:100,
    superPowers : ['Poder', 'Volar', 'Teletransporte'],
    
}
personaje.puebloNatal = 'pueblito'

console.table(personaje)