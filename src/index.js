import home from "./assets/pages/home";
import menu from "./assets/pages/menu";
import { content } from "./assets/functions/content";
import { removeChildren } from "./assets/functions/removeChildren";
import aboutUs from "./assets/pages/about";






// const content = document.getElementById('content');
// const footer = document.getElementsByClassName('footer');

const homeBtn= document.getElementById('homeBtn');
const menuBtn= document.getElementById('menuBtn');
const aboutBtn= document.getElementById('aboutBtn');

// const currentPage= 'home';
console.log(homeBtn);
console.log(menuBtn);


homeBtn.addEventListener('click',()=>{
    home();
})

menuBtn.addEventListener('click',()=>{

    menu();
})


aboutBtn.addEventListener('click',()=>{

    aboutUs();
})

home();
// menu();
