//PEQUEÑA FUENTE DE DATOS PARA PROBAR LOS CALLBACKS
const heroes = {
    capam: {
        name: 'Capitán América',
        power: 'Soldado de USA dopado hasta las trancas'
    },
    iron: {
        name: 'Iron Man',
        power: 'Multimillonario de USA con una armadura tela de chula'
    },
    spider: {
        name: 'Spiderman',
        power: 'Mutante picado por una araña'
    }
}

export const findHero = ( id, callback ) => {
    const hero = heroes[id];
    if(hero){
        callback(null, hero);
    }else{
        callback(`No existe un héroe con el id ${id}`);
    }
}