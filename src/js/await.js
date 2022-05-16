import { findHeroAsync } from "./promises";

const heroesIds = ['capam','iron','spider'];

export const getHeroesArray = async () => {

    // const heroesArr = []; //SOLO NECESARIO PARA LOS CASOS 1,2 Y 3 , COMENTAR PARA EL CASO 4.

    //VAMOS A HACER UN PLANTEAMIENTO INICIAL... SÓLO CON LO QUE SABEMOS DE PROMISES, ESTO DEBERÍA FUNCIONAR
    //------------------------------------------------------------------------------------------------------------------------------------
    // for (const id of heroesIds) {
    //     findHeroAsync(id).then( hero => heroesArr.push(hero) ); //ESTO ES UN ERROR, NO DEVUELVE OBJETOS HEROE, DEVUELVE OBJETOS PROMISE
    // }

    //VOY A SIMULAR UN TIEMPO PARA QUE LA PROMESA SE RESUELVA, SI NO, NO PINTA NADA -> PARA ESTO SE CREO EL AWAIT
    //------------------------------------------------------------------------------------------------------------------------------------
    // setTimeout(() => {
    //     console.log('Obteniendo Héroes');
    //     console.table(heroesArr);
    // }, 1000);
    //
    // return heroesArr;
    //------------------------------------------------------------------------------------------------------------------------------------

    /*
    CÓMO SE USA EL AWAIT, PASO A PASO
    */
    // 1.
    //------------------------------------------------------------------------------------------------------------------------------------
    // for (const id of heroesIds) {
    //     const hero = findHeroAsync(id); 
    //     heroesArr.push(hero);
    // }
    //
    // return heroesArr;
    //------------------------------------------------------------------------------------------------------------------------------------
    /*Devuelve el objeto Promise, resuelta en el mejor de los casos, e inserto ese objeto Promise en el array.
    Pero lo que NO TENGO son Objetos HEROE.
    TENGO QUE ESPERAR A QUE LA PROMESA SE RESUELVA ANTES DE INSERTAR EN EL ARRAY... */
    
    // 2.
    //------------------------------------------------------------------------------------------------------------------------------------
    // for (const id of heroesIds) { //TAMBIÉN PODRÍA UTILIZAR for await (const id of heroesIds) { ... AHORRÁNDOME EL AWAIT DESPUÉS EN LA LÍNEA DE ABAJO...
    //     const hero = await findHeroAsync(id); //CUIDADO CON USAR EL AWAIT... PORQUE VA A ESPERAR EL RESULTADO DE LA EJECUCIÓN Y LA EJECUCIÓN SE VA A PARAR JUSTO AHÍ HASTA QUE SE RESUELVA
    //     heroesArr.push(hero);
    // }
    //
    // return heroesArr;
    //------------------------------------------------------------------------------------------------------------------------------------
    /*Si lo dejo así... siendo la función : getHeroesArray = () => { ... DEVUELVE UN ERROR...
    Y ESE ERROR NOS DICE QUE EL AWAIT NO SE PUEDE USAR FUERA DE UNA FUNCIÓN ASÍNCRONA...
    POR LO TANTO, NUESTRA FUNCIÓN getHeroesArray TIENE QUE SER ASYNC, QUEDANDO ASI...
    getHeroesArray = async () => { ... */

    // 3. 
    //------------------------------------------------------------------------------------------------------------------------------------
    /* LA VERSIÓN DEL CÓDIGO EN EL APARTADO 2. ES EFICAZ, PERO NO ES EFICIENTE, YA QUE EN CADA ITERACIÓN DEL 
    BUCLE FOR SE VA A ESPERAR, Y PODEMOS EXPERIMENTAR UNA RALENTIZACIÓN DE LA APLICACIÓN A LA HORA DE 
    RESOLVER LAS PROMESAS BASTANTE SIGNIFICATIVA (consultado una BD, por ejemplo). */
    //------------------------------------------------------------------------------------------------------------------------------------
    // for (const id of heroesIds) {
    //     heroesArr.push(findHeroAsync(id)); //ESTO SOLO REGRESA UN ARRAY DE PROMESAS
    // }

    // return await Promise.all(heroesArr); // EN LUGAR DE DEVOLVER UN ARRAY DE PROMESAS, DEVUELVO TODAS LAS PROMESAS EJECUTADAS.
    //------------------------------------------------------------------------------------------------------------------------------------
    /* ES MUY IMPORTANTE PONER EL AWAIT ANTES, PORQUE SINO DARÍA UN FALSO POSITIVO Y SEGUIRÍA RETARDÁNDOSE 
    ------------------------------------------------------------------------------------
    FINALMENTE RECALCAR... INTENTAR NO USAR EL AWAIT DENTRO DE ESTRUCTURAS DE ITERACIÓN 
    ------------------------------------------------------------------------------------
    */

    // 4. 
    //------------------------------------------------------------------------------------------------------------------------------------
    /* LO MISMO QUE EN 3, PERO DE UNA MANERA MÁS ELEGANTE  */
    // return await Promise.all(heroesIds.map( findHeroAsync ));

}

/* MANEJO DE EXCEPCIONES CON EL AWAIT */

export const getHeroesAwait = async(id) => {

    try{

        const hero = await findHeroAsync(id);
        return hero;

    }catch(err){

        console.log('CATCH!!!');
        // throw err; //OPCIÓN 1 -> RETORNO EL ERROR
        //OPCIÓN 2 -> RETORNO UN OBJETO LITERAL POR DEFECTO
        return {
            name: 'No One',
            power: 'No One'
        }
        /* EN LA OPCIÓN 2, A PESAR DE QUE SE DISPARA EL CATCH 
        ESTOY RECIBIENDO UN OBJETO Y EL CÓDIGO SE EJECUTA POR LA 
        VÍA DEL THEN (dentro de index.js) EN LUGAR DE POR LA 
        VÍA DEL CATCH
        */
    }

}