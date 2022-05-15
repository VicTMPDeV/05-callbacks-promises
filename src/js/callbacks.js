//PEQUEÑA FUENTE DE DATOS PARA PROBAR LOS CALLBACKS
import { heroes } from "./heroes"; 

export const findHero = ( id, callback ) => {
    
    const hero = heroes[id];
    
    if(hero){
        callback(null, hero);
    }else{
        callback(`No existe un héroe con el id ${id}`);
    }
}
