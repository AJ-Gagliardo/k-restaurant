
import { content } from '../assets/functions/content';
import { removeChildren } from '../assets/functions/removeChildren';
import aboutUs from './about';
import menu from './menu';
import samgyeopsal from "../assets/img/samgyeop-hero.jpg";





// function createDiv(){
//     document.createElement('div');
// }

function createElement(element, id, className, textContent){
    const createdElement = document.createElement(element);
    createdElement.id = id;
    createdElement.classList.add(className);
    createdElement.textContent = textContent;

    return createdElement


}

const heroSection= createElement('div','hero-section',null,null);
const overlay = createElement('div', null, 'overlay', null );
const heroTitle= createElement('h2','hero-title', null, "Discover the soul of Seoul's cooking");
const heroSubtitle = createElement('h3','hero-subtitle',null,'Authentic taste and exciting experience');
const heroText = createElement('p','hero-text',null,'123 nonexistent Avenue, Vancouver');
const heroButtons = createElement('div',null,'buttons', null);
const heroBtn1 = createElement('button','hero-btn1','btn','Menu');
const heroBtn2 = createElement('button','hero-btn2','btns', 'About us');








// import backgroundImage from '../img/samgyeop-hero.jpg';

// removeChildren(); // this will be to reset the whole content section

const home = function(){
removeChildren(); // this will be to reset the whole content section
    console.log('home1');
    console.log(content);
    

    // appending children
    overlay.appendChild(heroTitle);
    overlay.appendChild(heroSubtitle);
    overlay.appendChild(heroText);

    heroButtons.appendChild(heroBtn1);

    heroBtn1.addEventListener('click',()=>{
       menu();
    })

    heroButtons.appendChild(heroBtn2);

    heroBtn2.addEventListener('click',()=>{
        aboutUs();
     })
    overlay.appendChild(heroButtons);

    heroSection.appendChild(overlay);

    content.appendChild(heroSection);

    // had to use npm install file-loader --save-dev 
    // to be able to use the code below 
    content.style.backgroundImage = `url(${samgyeopsal})` ;
    // content.style.backgroundImage  = backgroundImage;
    // content.style.backgroundImage = "url('./samgyeop-hero.jpg')";
};




export default home;

