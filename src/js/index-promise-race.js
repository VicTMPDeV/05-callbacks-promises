import { slowPromise, normalPromise, fastPromise } from './js/promises';

//SIMULANDO CONDICIONES DE CARRERA CON TIMEOUTS
//---------------------------------------------
// slowPromise.then( (message) => console.log(message) ); //SINTAXIS CLASICA
// slowPromise.then( console.log ); //SINTAXIS CORTA .> SE RESOLVERÁ LA ULTIMA
// normalPromise.then( console.log ); //SE RESOLVERÁ LA INTERMEDIA
// fastPromise.then( console.log ); //SE RESOLVERÁ LA PRIMERA

// Promise.race DEVUELVE SÓLO LA PRIMERA PROMESA QUE SE RESUELVE O SE RECHAZA
//---------------------------------------------------------------------------

Promise.race([slowPromise, normalPromise, fastPromise]) //TIENE QUE RECIBIR COMO PARÁMETRO UN OBJETO ITERABLE, EN ESTE CASO UN ARRAY, SI NO DA UN ERROR.
       .then(message => console.log(message));

/* La única promesa que se resuelve es la más rápida.
Si alguna da un error, es ignorada y no se rompe */
