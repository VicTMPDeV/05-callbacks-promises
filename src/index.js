import './styles.css';
import { findHero } from "./js/callbacks";

const heroId = 'capam';

findHero( heroId, (err, hero) => {
    if( err ){
        console.error(err);
    }else{
        console.log(hero);
    }
});
