import { removeChildren } from "../functions/removeChildren"
import { content } from "../functions/content";



function createMenuElement(element, className, content, id ){
const elementCreated = document.createElement(element);
elementCreated.classList.add(className);
elementCreated.textContent = content;
elementCreated.id = id;

return elementCreated;

}

const menuSection = createMenuElement('div', null, null,'menuSection');
const menuSubtitle = createMenuElement('h1','menuSubtitle','Menu');


function createMenuItem(dishName, price, imgsrc, text){

}



const menu = function(){
    removeChildren();

menuSection.appendChild(menuSubtitle);
content.appendChild(menuSection);
}

export default menu;