
import {content} from '../functions/content';
import { removeChildren } from '../functions/removeChildren';


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





// const overlay = document.createElement('div');
// overlay.classList.add('overlay');
// const heroTitle = document.createElement('div');
// heroTitle.id = "hero-title";
// heroTitle.textContent = "Discover the soul of Seoul's cooking";

// const heroSubtitle = document.createElement('h2');



// const buttons = document.createElement('div');
// buttons.classList.add('buttons');

// const heroBtn1 = document.createElement('button');
// heroBtn1.id = "hero-btn1";
// heroBtn1.textContent = "Menu";

// const heroBtn2 = document.createElement('div');
// heroBtn2.id = "hero-btn2";
// heroBtn2.textContent = "About us";



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
    heroButtons.appendChild(heroBtn2);
    overlay.appendChild(heroButtons);

    heroSection.appendChild(overlay);

    content.appendChild(heroSection);
    content.style.backgroundImage = "url('../src/assets/img/samgyeop-hero.jpg')" ;
    // content.style.backgroundImage  = backgroundImage;
    // content.style.backgroundImage = "url('./samgyeop-hero.jpg')";
};


export default home;
