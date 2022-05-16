import { getHeroesArray } from "./js/await";

console.time('EXECUTION TIME');
// ESTRUCTURA PARA await.js EN EL CASO 1.
//-----------------------------------------------
// const heroes = getHeroesArray();
// console.table(heroes);

// ESTRUCTURA PARA await.js EN EL RESTO DE CASOS.
//-----------------------------------------------
getHeroesArray().then( heroes => {
    console.table(heroes);
    console.timeEnd('EXECUTION TIME');
});