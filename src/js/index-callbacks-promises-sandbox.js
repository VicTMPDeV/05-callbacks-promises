import './styles.css';

// SI NO PONGO UN ALIAS EN LA IMPORTACIÓN, NO VA A SABER DESAMBIGUAR CUAL ES EL QUE VOY A USAR.
import { findHero as findHeroCallback } from "./js/callbacks";
import { findHero as findHeroPromise } from "./js/promises";

const heroId1 = 'capam';
const heroId2 = 'spider';
const heroId3 = 'iron';


//CALLBACK -> La respuesta será SINCRONA
//--------------------------------------
// findHeroCallback(heroId1, (err, hero) => {

//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Using One Callback: ', hero);
//     }

// });

//CALLBACK HELL -> Cuando llamo varias veces a la función para traer más de 1 respuesta
//-------------------------------------------------------------------------------------
/* Los parametros van a ir numerados, ya que si dejo todos como hero, existen en el 
scope de la primera función y, o bien el intérprete del navegador sobreescribe la referencia
de los hero anidados dentro en función del scope de cada sub-función, o bien siempre 
referenciará al mismo, dando resultados inesperados */

// findHeroCallback(heroId1, (err, hero1) => {

//     if (err) { console.error(err); } //Si no existe hero1

//     findHeroCallback(heroId2, (err, hero2) => { //Aquí empieza el CallbackHell 

//         if (err) { console.error(err); } //Si no existe hero2

//         findHeroCallback(heroId3, (err, hero3) => {

//             /* Conforme voy realizando acciones en base a respuestas de otros Callbacks
//             el código empieza a anidarse y anidarse... y el código se vuelve ilegible (Callback Hell)*/

//             if (err) { console.error(err); } //Si no existe hero3

//             //Si todo va bien...
//             console.log('Using Many Callbacks: ', `Enviando a ${hero1.name} , ${hero2.name} y ${hero3.name} a la misión`);

//         })

//     });

// });


//PROMISE -> La respuesta será ASINCRONA
//--------------------------------------
// findHeroPromise(heroId1).then((hero) => {

//     console.log('Using one Promise: ', `Enviando a ${hero.name} a la misión`);

// });


//PROMISE -> Pedir varios elementos (WRONG WAY)
//---------------------------------------------
// findHeroPromise(heroId1).then((hero1) => {

//     findHeroPromise(heroId2).then((hero2) => {

//         findHeroPromise(heroId3).then((hero3) => {

//             //Esta manera de hacerlo sería un "Promise Hell" siguiendo la analogía del Callback Hell
//             console.log('Using Many Promises: ',
//                 `Enviando a ${hero1.name} , ${hero2.name} y ${hero3.name} a la misión`);

//         })
//     })
// });

//PROMISE -> Pedir varios elementos (RIGHT WAY)
//---------------------------------------------
/* JS permite hacer Promesas en paralelo. Dispara ambas promesas simultáneamente*/
Promise.all([findHeroPromise(heroId1), findHeroPromise(heroId2), findHeroPromise(heroId3)])
    // PASANDO UN UNICO ARGUMENTO AL ARROW FUNCTION
    // --------------------------------------------
    // .then(heroesArray => {
    //     console.log('Promise.all V.1.:', heroesArray); //Resultado en bruto (el array)
    //     console.log('Promise.all V.2.: ',
    //                 `Enviando a ${heroesArray[0].name} , ${heroesArray[1].name} y ${heroesArray[2].name} a la misión`);
    //
    // });

    // CON DESESTRUCTURACIÓN DEL ARRAY DEL ARGUMENTO
    // ---------------------------------------------
    .then(([hero1, hero2, hero3])=>{ //Sólo va a entrar al then si todas las promesas se resuelven, conque 1 sola de error, parará saltando al catch.
        console.log('Promise.all V.3.: ',
                    `Enviando a ${hero1.name} , ${hero2.name} y ${hero3.name} a la misión`);
    })
    //CONTROL DE EXCEPCIONES O ERRORES CON PROMISES
    //---------------------------------------------
    .catch((err)=>{
        alert(err);
    })
    //FINALLY
    //-------
    .finally(()=>{
        console.log('Fin del Promise.all');
    });









//COMPROBACIÓN DE LA SINCRONÍA/ASINCRONÍA (Podemos observar qué se ejecuta antes, si este mensaje o el callback o la promesa)
//---------------------------------------------------------------------------------------------------------------------------
/* Los callbacks pueden bloquear la ejecución del programa mientras resuelve las peticiones, las promesas no bloquean la 
ejecución del programa porque JS las saca de la cola de ejecución normal del programa, y cuando están resueltas, las devuelve
a la cola de ejecución normal del programa (ESTO ÚLTIMO ES IMPORTANTE, PORQUE JS NO ES MULTIHILO, COMO JAVA POR EJEMPLO*/

console.log('Fin del Programa');