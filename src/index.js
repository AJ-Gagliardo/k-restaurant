import home from "./pages/home";
import menu from "./pages/menu";
import { content } from "./assets/functions/content";
import { removeChildren } from "./assets/functions/removeChildren";
import aboutUs from "./pages/about";
import "./styles/nav.css";
import "./styles/menu.css";
import "./styles/home.css";
import logo from "./assets/img/logo-bowl.png";
import githublogo from './assets/img/githubwhite.png';

import samgyeopsal from './assets/img/samgyeopsal.jpg'
import bibimbap from './assets/img/bibimbap.jpg';






// const content = document.getElementById('content');
// const footer = document.getElementsByClassName('footer');
const logoElement = document.getElementById('logo');
logoElement.src = logo;
const githublogo1 = document.getElementById('githublogo');
githublogo1.src = githublogo;

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
