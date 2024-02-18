(()=>{"use strict";var n={491:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),d=new URL(t(193),t.b),l=a()(o()),p=c()(d);l.push([n.id,`\n:root{\n    background-color: black;\n}\n\n\n/* ../assets/img/ */\n\n#content{\n\n}\n\ndiv#hero-section{\n    width:100%;\n    height:75vh;\n    background-color: red;\n    background-image: url(${p});\n    background-color: #cccccc;\n    background-size: cover;\n    background-position: center top;\n    filter: blur(5px); /* Apply a blur effect */\n    /* Or */\n    filter: grayscale(30%); /* Apply a grayscale effect */\n}\n\n#hero-title{\n    font-size: 3rem;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n   padding-top: 5%;\n   width:70%\n\n}\n\n#hero-subtitle{\n    font-size:2.5rem;\n    color:white;\n}\n\n#hero-text{\n    font-size:1.5rem;\n    color:white;\n    padding-top: 0%;\n}\n\n#hero-btn1, #hero-btn2{\n    color:white;\n    font-size: 1.5rem;\n    border-radius: 6px;\n    height:100%\n}\n\n#hero-btn1{\n    background-color: orangered;\n\n}\n#hero-btn2{\nbackground-color: gray;\nfont-size: 1rem;\n}\n\n.overlay{\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    display:flex;\n    flex-direction:column;\n    /* justify-content: space-between; */\n    align-items: center;\n    align-content: center;\n    text-align: center;\n}\n.buttons{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap:1rem;\n}\n\n\n@media only screen and (max-width: 600px) {\n    #hero-title{\n        padding-top: 15%;\n        width: 100%;\n       font-size: 2.5rem;\n \n    }\n}\n\n    #hero-subtitle{\n        padding-top: 10%;\n        font-size: 2rem;\n\n    }\n    #hero-text{\n        padding-top: 10%;\n    }\n    div#hero-section{\n        width:100%;\n        height:80vh;\n        \n       }`,""]);const u=l},407:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'\n#menuSection{\n\n    display:grid;\n    width:50%;\n    grid-template-columns: 1fr;\n    /* grid-auto-rows: 1fr; */\n   \n\n    align-items: center;\n    align-content: center;\n    text-align: center;\n    align-self: center;\n    margin:auto;\n}\n\n\n\n.menuSubtitle{\n    /* padding-top:2%; */\n    font-family: "7swordsmen";\n   \n}\n\n.item{\n    display:grid;\n    grid-template-columns: 40% 60%;\n  \n}\n\n.rightSideMenu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; \n    align-content: space-between;\n    height: 100%; \n}\n\n\n\n\n.menuImg {\n    width: 100%; \n    height: 30vh; \n    max-width: 100%; \n}\n\n\n.dishName,.dishP, .dishPrice{\n    margin: 0;\n    color:rgb(230, 228, 228)\n}\n\n.dishName{\n    font-size: 1.5rem;\n}\n\n.dishP{\n    font-size:1rem;\n}\n\n.dishPrice{\n    font-size:1rem;\n    color:orangered;\n    margin-bottom: 5%;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    #menuSection{\n        width:90%;\n    }\n}',""]);const s=a},399:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),d=new URL(t(575),t.b),l=a()(o()),p=c()(d);l.push([n.id,`@font-face {\n    font-family: "7swordsmen";\n    src: url(${p}) format('woff');\n  }\n\n:root{\n    color:white;\n    margin:0;\n}\n\n.nav-btn{\n    font-size: 1rem;\n}\n#title1, #hero-title{\n    font-family: "7swordsmen";\n    margin-top:0;\n    margin-bottom: 0;\n    color:white;\n    /* margin-left:10%; */\n}\n\n#title1{\n    font-size: 5rem;\n    margin-top: 2%;\n    margin-bottom: 1%;\n}\n\n\n\n#logo{\n    height: 8rem;\n    width: 8rem;\n    /* margin-right:-15%; */\n    /* border-radius: ; */\n}\n\n#restaurant-pre{\n    grid-column: 1/5;\n    display: flex;\n    align-items:center;\n    justify-content: center;\n    margin:0;\n    /* margin-left: 15%; */\n}\n\nheader{\n    margin-top: 2%;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 3rem;\n    row-gap: 1rem;\n    justify-content: center;\n    text-align: center;\n}\n\nnav{\n    /* justify-self:center; */\n    display:grid;\n    grid-template-columns: 20% 20% 20%;\n    grid-template-rows: 1.5 rem;\n/* width:40%; */\njustify-content: center;\ngrid-column: 1/4;\n/* gap:2rem; */\n\n}\n\n#content{\n    grid-column: 1/5;\n}\n\n\n\n\n.githublogo{\n    height:2rem;\n    width:2rem;\n    background-color: white;\n    border-radius: 50%;\n  \n}\n\n.footer{\n    display:flex;\n    align-items:center;\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n   \n}\n\n.footer a{\n    text-decoration: none ;\n    color: #d2d441;\n    display:flex;\n    align-items:center;\n    }\n\n\n    @media only screen and (max-width: 600px) {\n     #title1{\n        font-size: 28px;\n     }\n     #logo{\n        height: 110px;\n        width: 110px;\n        /* border-radius: ; */\n    }\n\n    #restaurant-pre{\n \n        margin-left: 15%;\n    }\n         \n        }`,""]);const u=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},575:(n,e,t)=>{n.exports=t.p+"4d016ba63890ef29c801.TTF"},193:(n,e,t)=>{n.exports=t.p+"60d044093ee51eec0118.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=document.getElementById("content");function e(){for(;content.firstChild;)content.removeChild(content.firstChild),content.style.backgroundImage=null}var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(407),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;var b=t(399),v={};function y(n,e,t,r){const o=document.createElement(n);return o.id=r,o.classList.add(e),o.textContent=t,o}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals;const w=y("h2","menuSubtitle","About Us"),x=y("p","dishP","Fictional restaurant created by Antonio Gagliardo, an aspiring web developer who love Korean culture and food. He put  alot of effort to create all this, please contract him to get a free kimchi"),C=()=>{e(),n.appendChild(w),n.appendChild(x)},k=t.p+"806e6b275a4cc4f4748e.jpg",A=t.p+"7f49193f3888a606a6f6.jpg",S=t.p+"1ee925718d1a4bef2ad5.jpg",j=t.p+"b28972d4412f44ac05f7.jpg",E=t.p+"5d32770b16921857733f.jpg",T=t.p+"9e54a6b11f9e2b66f4e3.jpg",I=t.p+"72a4617387039282df06.jpg",M=t.p+"291fdc278eed7fe84852.jpg";function $(n,e,t,r){const o=document.createElement(n);return o.classList.add(e),o.textContent=t,o.id=r,o}const z=$("div",null,null,"menuSection"),P=$("h1","menuSubtitle","Menu"),L=$("h2","menuSubtitle","Seoul's Special");function K(n,e,t,r){const o=$("div","item"),i=$("div","leftSideMenu"),a=$("img","menuImg");a.setAttribute("src",t);const s=$("div","rightSideMenu"),c=$("h3","dishName",n),d=$("p","dishP",r),l=$("p","dishPrice",e);return i.appendChild(a),s.appendChild(c),s.appendChild(d),s.appendChild(l),o.appendChild(i),o.appendChild(s),o}const B=K("Samgyeopsal","$25,99",k,"A classic Korean dish featuring thick, juicy pork belly slices grilled to perfection. Served with a variety of accompaniments such as lettuce leaves, garlic, and dipping sauces, A delightful balance of savory flavors and tender textures."),N=K("Bibimbap","$16,99",A,"Korean rice dish bursting with colors and flavors. Featuring a delightful assortment of fresh vegetables, tender meat (optional), and a fried egg atop a bed of steamed rice"),R=$("h2","menuSubtitle","Main Dishes"),F=K("Bulgogi","$18,99",S,"Thinly sliced marinated beef that is grilled or stir-fried to perfection. The marinade, a harmonious blend of soy sauce, sugar, sesame oil, garlic, and other seasonings, infuses the meat with a sweet and savory flavor profile"),U=K("Jajangmyeong","$19,99",j,"Jajangmyeon features thick, chewy noodles topped with a savory black bean sauce (jajang) made from fermented black soybeans. Mixed with diced pork, onions, and other vegetables"),O=K("Kimchi Stew","$14,99",I,"A comforting and spicy Korean stew made with aged kimchi, tofu, pork, and a variety of vegetables. The fermented kimchi infuses the broth with a tangy and robust flavor"),D=K("Tteokbokki","$15,99",M,"A popular Korean street food, Tteokbokki features chewy rice cakes cooked in a spicy and sweet gochujang sauce. "),_=$("h2","menuSubtitle","Side Dishes"),H=K("Kimchi","$4,00",E,"A staple of Korean cuisine, Kimchi is a traditional fermented dish made with seasoned vegetables, most commonly napa cabbage and Korean radishes."),J=K("Rice","$3.50",T,"Korean rice is known for its distinctively sticky texture and subtle, nutty flavor. Rice plays an integral role in Korean culinary traditions, providing a satisfying and wholesome element to every meal"),q=function(){e(),z.appendChild(P),z.appendChild(L),z.appendChild(B),z.appendChild(N),z.appendChild(R),z.appendChild(F),z.appendChild(U),z.appendChild(O),z.appendChild(D),z.appendChild(_),z.appendChild(H),z.appendChild(J),n.appendChild(z)};var G=t(193);function Q(n,e,t,r){const o=document.createElement(n);return o.id=e,o.classList.add(t),o.textContent=r,o}const V=Q("div","hero-section",null,null),W=Q("div",null,"overlay",null),X=Q("h2","hero-title",null,"Discover the soul of Seoul's cooking"),Y=Q("h3","hero-subtitle",null,"Authentic taste and exciting experience"),Z=Q("p","hero-text",null,"123 nonexistent Avenue, Vancouver"),nn=Q("div",null,"buttons",null),en=Q("button","hero-btn1","btn","Menu"),tn=Q("button","hero-btn2","btns","About us"),rn=function(){e(),console.log("home1"),console.log(n),W.appendChild(X),W.appendChild(Y),W.appendChild(Z),nn.appendChild(en),en.addEventListener("click",(()=>{q()})),nn.appendChild(tn),tn.addEventListener("click",(()=>{C()})),W.appendChild(nn),V.appendChild(W),n.appendChild(V),n.style.backgroundImage=`url(${G})`};var on=t(491),an={};an.styleTagTransform=f(),an.setAttributes=l(),an.insert=c().bind(null,"head"),an.domAPI=a(),an.insertStyleElement=u(),o()(on.A,an),on.A&&on.A.locals&&on.A.locals;const sn=t.p+"d7d1d4523677ab1710f6.png";document.getElementById("logo").src=sn;const cn=document.getElementById("homeBtn"),dn=document.getElementById("menuBtn"),ln=document.getElementById("aboutBtn");console.log(cn),console.log(dn),cn.addEventListener("click",(()=>{rn()})),dn.addEventListener("click",(()=>{q()})),ln.addEventListener("click",(()=>{C()})),rn()})()})();