import './styles.css';

// SI NO PONGO UN ALIAS EN LA IMPORTACIÓN, NO VA A SABER DESAMBIGUAR CUAL ES EL QUE VOY A USAR.
import { findHero as findHeroCallback } from "./js/callbacks"; 
import { findHero as findHeroPromise } from "./js/promises";

const heroId1 = 'capam';
const heroId2 = 'spider';
const heroId3 = 'iron';


//CALLBACK -> La respuesta será SINCRONA
//--------------------------------------
findHeroCallback( heroId1, (err, hero) => {
    
    if( err ){
        console.error(err);
    }else{
        console.log(hero);
    }
    
});

//CALLBACK HELL -> Cuando llamo varias veces a la función para traer más de 1 respuesta
//-------------------------------------------------------------------------------------
/* Los parametros van a ir numerados, ya que si dejo todos como hero, existen en el 
scope de la primera función y, o bien el intérprete del navegador sobreescribe la referencia
de los hero anidados dentro en función del scope de cada sub-función, o bien siempre 
referenciará al mismo, dando resultados inesperados */

findHeroCallback(heroId1, (err, hero1) => {

    if( err ){ console.error(err); } //Si no existe hero1

    findHeroCallback(heroId2, (err, hero2) =>{ //Aquí empieza el CallbackHell 

        if( err ){ console.error(err); } //Si no existe hero2

        findHeroCallback(heroId3, (err, hero3) =>{

            /* Conforme voy realizando acciones en base a respuestas de otros Callbacks
            el código empieza a anidarse y anidarse... y el código se vuelve ilegible (Callback Hell)*/

            if( err ){ console.error(err); } //Si no existe hero3
            
            //Si todo va bien...
            console.log(`Enviando a ${hero1.name} , ${hero2.name} y ${hero3.name} a la misión`);

        })
        
    });

});





//PROMISE -> La respuesta será ASINCRONA
//--------------------------------------
// findHeroPromise(heroId1).then((hero) => {

//     console.log(`Enviando a ${hero.name} a la misión`);

// });


//COMPROBACIÓN DE LA SINCRONÍA/ASINCRONÍA (Podemos observar qué se ejecuta antes, si este mensaje o el callback o la promesa)
//---------------------------------------------------------------------------------------------------------------------------
/* Los callbacks pueden bloquear la ejecución del programa mientras resuelve las peticiones, las promesas no bloquean la 
ejecución del programa porque JS las saca de la cola de ejecución normal del programa */

console.log('Fin del Programa');