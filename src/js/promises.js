import { heroes } from "./heroes"; 

export const findHero = (id) => {

    // Paso 1: Pido el elemento que quiero obtener de una fuente externa.
    const hero = heroes[id];        

    // Paso 2: Creo una nueva Promesa, la cual recibe un Callback en sus argumentos.
    return new Promise( (resolve, reject) => { // Paso 3: Recibe 2 argumentos -> todo ocurre correctamente o ha ocurrido un error
        // Este Callback se va a ejecutar asíncronamente 
        if(hero){
            resolve(hero);
        }else{
            reject(`No existe un héroe con el id ${id}`);
        }
    }); 

}