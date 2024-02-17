import { removeChildren } from "../assets/functions/removeChildren"
import { content } from "../assets/functions/content";
import '../styles/menu.css';
import '../styles/nav.css';



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





const item1= createMenuItem('Samgyeopsal', "$25,99","../src/assets/img/samgyeopsal.jpg" , 
"A classic Korean dish featuring thick, juicy pork belly slices grilled to perfection. Served with a variety of accompaniments such as lettuce leaves, garlic, and dipping sauces, A delightful balance of savory flavors and tender textures.");
const item2=  createMenuItem('Bibimbap','$16,99',"../src/assets/img/bibimbap.jpg",
"Korean rice dish bursting with colors and flavors. Featuring a delightful assortment of fresh vegetables, tender meat (optional), and a fried egg atop a bed of steamed rice")

const section2 = createMenuElement('h2','menuSubtitle','Main Dishes');
const item3=createMenuItem('Bulgogi', '$18,99','../src/assets/img/bulgogi.jpg',
"Thinly sliced marinated beef that is grilled or stir-fried to perfection. The marinade, a harmonious blend of soy sauce, sugar, sesame oil, garlic, and other seasonings, infuses the meat with a sweet and savory flavor profile")
const item4= createMenuItem('Jajangmyeong', '$19,99','../src/assets/img/jajangmyeong.jpg',
"Jajangmyeon features thick, chewy noodles topped with a savory black bean sauce (jajang) made from fermented black soybeans. Mixed with diced pork, onions, and other vegetables")
const item5=createMenuItem('Kimchi Stew', '$14,99', '../src/assets/img/kimchi-stew.jpg', 
"A comforting and spicy Korean stew made with aged kimchi, tofu, pork, and a variety of vegetables. The fermented kimchi infuses the broth with a tangy and robust flavor")
const item6= createMenuItem('Tteokbokki','$15,99', '../src/assets/img/tteokbokki.jpg',
"A popular Korean street food, Tteokbokki features chewy rice cakes cooked in a spicy and sweet gochujang sauce. ");


const section3 = createMenuElement('h2','menuSubtitle','Side Dishes');
const item7= createMenuItem('Kimchi','$4,00','../src/assets/img/kimchi.jpg',
"A staple of Korean cuisine, Kimchi is a traditional fermented dish made with seasoned vegetables, most commonly napa cabbage and Korean radishes.");
const item8= createMenuItem('Rice', '$3.50','../src/assets/img/rice.jpg',
"Korean rice is known for its distinctively sticky texture and subtle, nutty flavor. Rice plays an integral role in Korean culinary traditions, providing a satisfying and wholesome element to every meal");

const menu = function(){
 removeChildren();

menuSection.appendChild(menuSubtitle);
menuSection.appendChild(specialDishes);
menuSection.appendChild(item1);
menuSection.appendChild(item2);



menuSection.appendChild(section2);
menuSection.appendChild(item3);
menuSection.appendChild(item4);
menuSection.appendChild(item5);
menuSection.appendChild(item6);

menuSection.appendChild(section3);
menuSection.appendChild(item7);
menuSection.appendChild(item8);





content.appendChild(menuSection);

}

export default menu;