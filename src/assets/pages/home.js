
import {content} from '../functions/content';
import { removeChildren } from '../functions/removeChildren';



const overlay = document.createElement('div');
overlay.classList.add('overlay');
const heroTitle = document.createElement('div');
heroTitle.id = "hero-title";
heroTitle.textContent = "Discover the soul of Seoul's cooking";






// import backgroundImage from '../img/samgyeop-hero.jpg'

// removeChildren(); // this will be to reset the whole content section

const home = function(){
removeChildren(); // this will be to reset the whole content section
    console.log('home1');
    console.log(content);
    content.style.backgroundImage = "../img/samgyeopsal.png";

    // appending children
    overlay.appendChild(heroTitle);
    content.appendChild(overlay);
    
};


export default home;
