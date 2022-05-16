import { heroes } from "./heroes"; 

//SIN ASYNC
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

//CON ASYNC
/* Transformo la función a una función ASÍNCRONA.
Esto quiere decir que al poner async, por defecto estaremos devolviendo una nueva Promise.
Es básicamente azúcar sintáctico para escribir menos líneas. */
export const findHeroAsync = async(id) => { 

    const hero = heroes[id];        

    if(hero){
        return hero;
    }else{
        throw `No existe un héroe con el id ${id}`;
        // throw Error(`No existe un héroe con el id ${id}`); //DA MÁS INFORMACIÓN
    }
  
}



//FUNCIONES PARA USAR CON Promise.race
//------------------------------------

const slowPromise = new Promise( (resolve, reject ) => {
    setTimeout(()=> resolve('Promesa Lenta'), 2000);
});

const normalPromise = new Promise( (resolve, reject ) => {
    setTimeout(()=> resolve('Promesa Normal'), 1500);
});

const fastPromise = new Promise( (resolve, reject ) => {
    setTimeout(()=> resolve('Promesa Rápida'), 1000);
});

//OTRA MANERA DE EXPORTAR FUNCIONALIDADES (COMPONENTES) EN BLOQUE
//---------------------------------------------------------------

export {
    slowPromise,
    normalPromise,
    fastPromise
}