import { removeChildren } from "../functions/removeChildren";
import { content } from "../functions/content";
import '../../styles/menu.css';
import '../../styles/nav.css';

function createElement(element, className, textContent, id){
    const createdElement = document.createElement(element);
    createdElement.id = id;
    createdElement.classList.add(className);
    createdElement.textContent = textContent;

    return createdElement


}


const aboutUsTitle = createElement('h2','menuSubtitle','About Us');

const aboutParagraph = "Fictional restaurant created by Antonio Gagliardo, an aspiring web developer who love Korean culture and food. He put  alot of effort to create all this, please contract him to get a free kimchi"

const aboutUsParagraph = createElement('p', 'dishP', aboutParagraph);



const aboutUs = ()=>{
    removeChildren();
    content.appendChild(aboutUsTitle);
    content.appendChild(aboutUsParagraph);


}

export default aboutUs;


