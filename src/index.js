import { findHero, findHeroAsync } from './js/promises';

//Usando Promise clásico
findHero('capa')
    .then( hero => console.log(hero))
    .catch( hero=> console.warn(hero));

//Usando Async
findHeroAsync('iro')
    .then(hero => console.log(hero))
    .catch(hero => console.warn(hero));