(()=>{"use strict";var n={171:(n,e,t)=>{t.d(e,{c:()=>p});var r=t(500),i=t.n(r),o=t(312),a=t.n(o),s=t(536),c=t.n(s),l=new URL(t(406),t.b),d=a()(i()),u=c()(l);d.push([n.id,`@font-face {\n    font-family: "7swordsmen";\n    src: url(${u}) format('woff');\n  }\n\n:root{\n    color:white;\n    margin:0;\n}\n\n.nav-btn{\n    font-size: 1rem;\n}\n#title1, #hero-title{\n    font-family: "7swordsmen";\n    margin-top:0;\n    margin-bottom: 0;\n    color:white;\n    /* margin-left:10%; */\n}\n\n#title1{\n    font-size: 5rem;\n    margin-top: 2%;\n    margin-bottom: 1%;\n}\n\n\n\n#logo{\n    height: 8rem;\n    width: 8rem;\n    /* margin-right:-15%; */\n    /* border-radius: ; */\n}\n\n#restaurant-pre{\n    grid-column: 1/5;\n    display: flex;\n    align-items:center;\n    justify-content: center;\n    margin:0;\n    margin-left: 15%;\n}\n\nheader{\n    margin-top: 2%;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 3rem;\n    row-gap: 1rem;\n    justify-content: center;\n    text-align: center;\n}\n\nnav{\n    /* justify-self:center; */\n    display:grid;\n    grid-template-columns: 20% 20% 20%;\n    grid-template-rows: 1.5 rem;\n/* width:40%; */\njustify-content: center;\ngrid-column: 1/4;\n/* gap:2rem; */\n\n}\n\n#content{\n    grid-column: 1/5;\n}\n\n\n\n\n.githublogo{\n    height:2rem;\n    width:2rem;\n    background-color: white;\n    border-radius: 50%;\n  \n}\n\n.footer{\n    display:flex;\n    align-items:center;\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n   \n}\n\n.footer a{\n    text-decoration: none ;\n    color: #d2d441;\n    display:flex;\n    align-items:center;\n    }\n\n\n    @media only screen and (max-width: 600px) {\n     #title1{\n        font-size: 28px;\n     }\n     #logo{\n        height: 110px;\n        width: 110px;\n        /* border-radius: ; */\n    }\n         \n        }`,""]);const p=d},544:(n,e,t)=>{t.d(e,{c:()=>p});var r=t(500),i=t.n(r),o=t(312),a=t.n(o),s=t(536),c=t.n(s),l=new URL(t(404),t.b),d=a()(i()),u=c()(l);d.push([n.id,`\n:root{\n    background-color: black;\n}\n\n\n/* ../assets/img/ */\n\n#content{\n\n}\n\ndiv#hero-section{\n    width:100%;\n    height:75vh;\n    background-color: red;\n    background-image: url(${u});\n    background-color: #cccccc;\n    background-size: cover;\n    background-position: center top;\n    filter: blur(5px); /* Apply a blur effect */\n    /* Or */\n    filter: grayscale(30%); /* Apply a grayscale effect */\n}\n\n#hero-title{\n    font-size: 3rem;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n   padding-top: 5%;\n   width:70%\n\n}\n\n#hero-subtitle{\n    font-size:2.5rem;\n    color:white;\n}\n\n#hero-text{\n    font-size:1.5rem;\n    color:white;\n    padding-top: 10%;\n}\n\n#hero-btn1, #hero-btn2{\n    color:white;\n    font-size: 1.5rem;\n    border-radius: 6px;\n    height:100%\n}\n\n#hero-btn1{\n    background-color: orangered;\n\n}\n#hero-btn2{\nbackground-color: gray;\nfont-size: 1rem;\n}\n\n.overlay{\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    display:flex;\n    flex-direction:column;\n    /* justify-content: space-between; */\n    align-items: center;\n    align-content: center;\n    text-align: center;\n}\n.buttons{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap:1rem;\n}\n\n\n@media only screen and (max-width: 600px) {\n    #hero-title{\n        padding-top: 25%;\n        width: 100%;\n       font-size: 2.5rem;\n \n    }\n}\n\n    #hero-subtitle{\n        padding-top: 15%;\n        font-size: 2rem;\n        padding-bot:10%;\n    }\n    #hero-text{\n        padding-top: 20%;\n    }\n    div#hero-section{\n        width:100%;\n        height:80vh;\n        \n       }`,""]);const p=d},452:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),i=t.n(r),o=t(312),a=t.n(o)()(i());a.push([n.id,'\n#menuSection{\n\n    display:grid;\n    width:60%;\n    grid-template-columns: 1fr;\n    /* grid-auto-rows: 1fr; */\n   \n\n    align-items: center;\n    align-content: center;\n    text-align: center;\n    align-self: center;\n    margin:auto;\n}\n\n\n\n.menuSubtitle{\n    /* padding-top:2%; */\n    font-family: "7swordsmen";\n   \n}\n\n.item{\n    display:grid;\n    grid-template-columns: 50% 50%;\n  \n}\n\n.rightSideMenu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; \n    align-content: space-between;\n    height: 100%; \n}\n\n\n\n\n.menuImg {\n    width: 100%; \n    height: 25vh; \n    max-width: 100%; \n}\n\n\n.dishName,.dishP, .dishPrice{\n    margin: 0;\n    color:rgb(230, 228, 228)\n}\n\n.dishName{\n    font-size: 1.5rem;\n}\n\n.dishP{\n    font-size:1rem;\n}\n\n.dishPrice{\n    font-size:1rem;\n    color:orangered;\n    margin-bottom: 5%;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    #menuSection{\n        width:90%;\n    }\n}',""]);const s=a},996:(n,e,t)=>{t.d(e,{c:()=>p});var r=t(500),i=t.n(r),o=t(312),a=t.n(o),s=t(536),c=t.n(s),l=new URL(t(406),t.b),d=a()(i()),u=c()(l);d.push([n.id,`@font-face {\n    font-family: "7swordsmen";\n    src: url(${u}) format('woff');\n  }\n\n:root{\n    color:white;\n    margin:0;\n}\n\n.nav-btn{\n    font-size: 1rem;\n}\n#title1, #hero-title{\n    font-family: "7swordsmen";\n    margin-top:0;\n    margin-bottom: 0;\n    color:white;\n    /* margin-left:10%; */\n}\n\n#title1{\n    font-size: 5rem;\n    margin-top: 2%;\n    margin-bottom: 1%;\n}\n\n\n\n#logo{\n    height: 8rem;\n    width: 8rem;\n    /* margin-right:-15%; */\n    /* border-radius: ; */\n}\n\n#restaurant-pre{\n    grid-column: 1/5;\n    display: flex;\n    align-items:center;\n    justify-content: center;\n    margin:0;\n    margin-left: 15%;\n}\n\nheader{\n    margin-top: 2%;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 3rem;\n    row-gap: 1rem;\n    justify-content: center;\n    text-align: center;\n}\n\nnav{\n    /* justify-self:center; */\n    display:grid;\n    grid-template-columns: 20% 20% 20%;\n    grid-template-rows: 1.5 rem;\n/* width:40%; */\njustify-content: center;\ngrid-column: 1/4;\n/* gap:2rem; */\n\n}\n\n#content{\n    grid-column: 1/5;\n}\n\n\n\n\n.githublogo{\n    height:2rem;\n    width:2rem;\n    background-color: white;\n    border-radius: 50%;\n  \n}\n\n.footer{\n    display:flex;\n    align-items:center;\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n   \n}\n\n.footer a{\n    text-decoration: none ;\n    color: #d2d441;\n    display:flex;\n    align-items:center;\n    }\n\n\n    @media only screen and (max-width: 600px) {\n     #title1{\n        font-size: 28px;\n     }\n     #logo{\n        height: 110px;\n        width: 110px;\n        /* border-radius: ; */\n    }\n         \n        }`,""]);const p=d},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},536:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},406:(n,e,t)=>{n.exports=t.p+"4d016ba63890ef29c801.TTF"},404:(n,e,t)=>{n.exports=t.p+"60d044093ee51eec0118.jpg"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=document.getElementById("content");function e(){for(;content.firstChild;)content.removeChild(content.firstChild),content.style.backgroundImage=null}var r=t(596),i=t.n(r),o=t(520),a=t.n(o),s=t(176),c=t.n(s),l=t(120),d=t.n(l),u=t(808),p=t.n(u),m=t(936),h=t.n(m),g=t(452),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),i()(g.c,f),g.c&&g.c.locals&&g.c.locals;var b=t(996),y={};function v(n,e,t,r){const i=document.createElement(n);return i.id=r,i.classList.add(e),i.textContent=t,i}y.styleTagTransform=h(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),i()(b.c,y),b.c&&b.c.locals&&b.c.locals;const w=v("h2","menuSubtitle","About Us"),x=v("p","dishP","Fictional restaurant created by Antonio Gagliardo, an aspiring web developer who love Korean culture and food. He put  alot of effort to create all this, please contract him to get a free kimchi"),k=()=>{e(),n.appendChild(w),n.appendChild(x)};function C(n,e,t,r){const i=document.createElement(n);return i.classList.add(e),i.textContent=t,i.id=r,i}const j=C("div",null,null,"menuSection"),S=C("h1","menuSubtitle","Menu"),A=C("h2","menuSubtitle","Seoul's Special");function T(n,e,t,r){const i=C("div","item"),o=C("div","leftSideMenu"),a=C("img","menuImg");a.setAttribute("src",t);const s=C("div","rightSideMenu"),c=C("h3","dishName",n),l=C("p","dishP",r),d=C("p","dishPrice",e);return o.appendChild(a),s.appendChild(c),s.appendChild(l),s.appendChild(d),i.appendChild(o),i.appendChild(s),i}const E=T("Samgyeopsal","$25,99","../src/assets/img/samgyeopsal.jpg","A classic Korean dish featuring thick, juicy pork belly slices grilled to perfection. Served with a variety of accompaniments such as lettuce leaves, garlic, and dipping sauces, A delightful balance of savory flavors and tender textures."),I=T("Bibimbap","$16,99","../src/assets/img/bibimbap.jpg","Korean rice dish bursting with colors and flavors. Featuring a delightful assortment of fresh vegetables, tender meat (optional), and a fried egg atop a bed of steamed rice"),z=C("h2","menuSubtitle","Main Dishes"),M=T("Bulgogi","$18,99","../src/assets/img/bulgogi.jpg","Thinly sliced marinated beef that is grilled or stir-fried to perfection. The marinade, a harmonious blend of soy sauce, sugar, sesame oil, garlic, and other seasonings, infuses the meat with a sweet and savory flavor profile"),P=T("Jajangmyeong","$19,99","../src/assets/img/jajangmyeong.jpg","Jajangmyeon features thick, chewy noodles topped with a savory black bean sauce (jajang) made from fermented black soybeans. Mixed with diced pork, onions, and other vegetables"),$=T("Kimchi Stew","$14,99","../src/assets/img/kimchi-stew.jpg","A comforting and spicy Korean stew made with aged kimchi, tofu, pork, and a variety of vegetables. The fermented kimchi infuses the broth with a tangy and robust flavor"),L=T("Tteokbokki","$15,99","../src/assets/img/tteokbokki.jpg","A popular Korean street food, Tteokbokki features chewy rice cakes cooked in a spicy and sweet gochujang sauce. "),K=C("h2","menuSubtitle","Side Dishes"),B=T("Kimchi","$4,00","../src/assets/img/kimchi.jpg","A staple of Korean cuisine, Kimchi is a traditional fermented dish made with seasoned vegetables, most commonly napa cabbage and Korean radishes."),N=T("Rice","$3.50","../src/assets/img/rice.jpg","Korean rice is known for its distinctively sticky texture and subtle, nutty flavor. Rice plays an integral role in Korean culinary traditions, providing a satisfying and wholesome element to every meal"),R=function(){e(),j.appendChild(S),j.appendChild(A),j.appendChild(E),j.appendChild(I),j.appendChild(z),j.appendChild(M),j.appendChild(P),j.appendChild($),j.appendChild(L),j.appendChild(K),j.appendChild(B),j.appendChild(N),n.appendChild(j)};var U=t(544),F={};F.styleTagTransform=h(),F.setAttributes=d(),F.insert=c().bind(null,"head"),F.domAPI=a(),F.insertStyleElement=p(),i()(U.c,F),U.c&&U.c.locals&&U.c.locals;var O=t(171),D={};function _(n,e,t,r){const i=document.createElement(n);return i.id=e,i.classList.add(t),i.textContent=r,i}D.styleTagTransform=h(),D.setAttributes=d(),D.insert=c().bind(null,"head"),D.domAPI=a(),D.insertStyleElement=p(),i()(O.c,D),O.c&&O.c.locals&&O.c.locals;const H=_("div","hero-section",null,null),J=_("div",null,"overlay",null),q=_("h2","hero-title",null,"Discover the soul of Seoul's cooking"),G=_("h3","hero-subtitle",null,"Authentic taste and exciting experience"),Q=_("p","hero-text",null,"123 nonexistent Avenue, Vancouver"),V=_("div",null,"buttons",null),W=_("button","hero-btn1","btn","Menu"),X=_("button","hero-btn2","btns","About us"),Y=function(){e(),console.log("home1"),console.log(n),J.appendChild(q),J.appendChild(G),J.appendChild(Q),V.appendChild(W),W.addEventListener("click",(()=>{R()})),V.appendChild(X),X.addEventListener("click",(()=>{k()})),J.appendChild(V),H.appendChild(J),n.appendChild(H),n.style.backgroundImage="url('../src/assets/img/samgyeop-hero.jpg')"},Z=document.getElementById("homeBtn"),nn=document.getElementById("menuBtn"),en=document.getElementById("aboutBtn");console.log(Z),console.log(nn),Z.addEventListener("click",(()=>{Y()})),nn.addEventListener("click",(()=>{R()})),en.addEventListener("click",(()=>{k()})),Y()})()})();