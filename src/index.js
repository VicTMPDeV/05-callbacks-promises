import './styles.css';
import {} from "./js/heroes";
// SI NO PONGO UN ALIAS EN LA IMPORTACIÓN, NO VA A SABER DESAMBIGUAR CUAL ES EL QUE VOY A USAR.
// import { findHero as findHeroCallback } from "./js/callbacks"; 
import { findHero as findHeroPromise } from "./js/promises";

const heroId = 'spider';

//CALLBACK -> La respuesta será SINCRONA
//--------------------------------------
// findHeroCallback( heroId, (err, hero) => {
//     if( err ){
//         console.error(err);
//     }else{
//         console.log(hero);
//     }
// });

//PROMISE -> La respuesta será ASINCRONA
//--------------------------------------
findHeroPromise(heroId).then((hero) => {

    console.log(`Enviando a ${hero.name} a la misión`);

});


//COMPROBACIÓN DE LA SINCRONÍA/ASINCRONÍA (Podemos observar qué se ejecuta antes, si este mensaje o el callback o la promesa)
//---------------------------------------------------------------------------------------------------------------------------
/* Los callbacks pueden bloquear la ejecución del programa mientras resuelve las peticiones, las promesas no bloquean la 
ejecución del programa porque JS las saca de la cola de ejecución normal del programa */

console.log('Fin del Programa');