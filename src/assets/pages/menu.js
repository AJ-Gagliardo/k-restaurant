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
const specialDishes = createMenuElement('h2','menuSubtitle',"Seoul's Special");




function createMenuItem(dishName, price, imgsrc, text){
const itemDiv = createMenuElement('div', 'item');
const leftSideDiv = createMenuElement('div','leftSideMenu');
const menuImg = createMenuElement('img','menuImg');
menuImg.setAttribute('src', imgsrc)
// here put the src of the image


const rightSideDiv = createMenuElement('div','rightSideMenu');
const itemTitle = createMenuElement('h3','dishName',dishName);
const dishPara = createMenuElement('p','dishP',text);
const dishPrice = createMenuElement('p','dishPrice',price);


//appending all to have the right order

leftSideDiv.appendChild(menuImg);

rightSideDiv.appendChild(itemTitle);
rightSideDiv.appendChild(dishPara);
rightSideDiv.appendChild(dishPrice);

itemDiv.appendChild(leftSideDiv);
itemDiv.appendChild(rightSideDiv);



return itemDiv

}





const item1= createMenuItem('Samgyeopsal:', "$25,99","../src/assets/img/samgyeopsal.webp" , 
"A classic Korean dish featuring thick, juicy pork belly slices grilled to perfection. Served with a variety of accompaniments such as lettuce leaves, garlic, and dipping sauces, A delightful balance of savory flavors and tender textures.");



const menu = function(){
 removeChildren();

menuSection.appendChild(menuSubtitle);
menuSection.appendChild(specialDishes);
menuSection.appendChild(item1);




content.appendChild(menuSection);
}

export default menu;