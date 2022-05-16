import { getHeroesArray, getHeroesAwait } from "./js/await";

console.time('EXECUTION TIME');
// ESTRUCTURA PARA await.js EN EL CASO 1.
//-----------------------------------------------
// const heroes = getHeroesArray();
// console.table(heroes);

// ESTRUCTURA PARA await.js EN EL RESTO DE CASOS.
//-----------------------------------------------
// getHeroesArray().then( heroes => {
//     console.table(heroes);
//     console.timeEnd('EXECUTION TIME');
// });

// ESTRUCTURA PARA EL MANEJO DE EXCEPCIONES CON AWAIT
//---------------------------------------------------
getHeroesAwait('capa')
    .then( (hero) => {
        console.log(hero);
        console.timeEnd('EXECUTION TIME');
    })
    .catch( err => console.warn(err));