(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};console.log(location.hash.substring(1),"getHash");const e=()=>location.hash||"/",s=async()=>(e(),'\n    <h2> Modulos</h2>\n    <div class="image-top">\n            <img class="imagen" src="https://enertik.ar/images/schema/enertik.png" alt="">\n        </div>\n    <section class="Introduction">\n        \n        <div class="image">\n            <img src="https://enertik.ar/images/schema/enertik.png" alt="">\n        </div>\n        <div class="Datos">\n            <p>enertik</p>\n            <p>$69.237</p>\n            <p>310W</p>\n        </div>\n        \n    </section>\n        \n        \n    '),t=()=>'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',i={"/":async()=>(await a(),'\n    <h2> Sobre el proyecto</h2>\n        <section class="Introduction-home">\n            \n            \n            <div class="image">\n              <p>Este es un proyecto que tiene como objetivo facilitar las tareas a la hora de implementar sistemas fotovoltaicos</p>\n            </div>\n            \n        </section>\n    '),"/:id":async()=>{const n=e(),s=await a(n);return`\n      <div class="Characters-inner">\n        <article class="Characters-card">\n          <img src="${s.image}" alt="${s.name}">\n          <h2>${s.name}</h2>\n        </article>\n        <article class="Characters-card">\n          <h3>Episodes: <span>${s.episode.length}</span></h3>\n          <h3>Status: <span>${s.status}</span></h3>\n          <h3>Species: <span>${s.species}</span></h3>\n          <h3>Gender: <span>${s.gender}</span></h3>\n          <h3>Origin: <span>${s.origin.name}</span></h3>\n          <h3>Last Location: <span>${s.location.name}</span></h3>\n        </article>\n      </div>\n    `},"/#modulos":s,"/#estructuras":s},o=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/">\n                    Precio Solares\n                </a>\n            </h1>\n        </div>\n\n        <div class="Header-nav">\n            <nav class="navbar">\n                <ul>\n                    <li><a href="/#modulos">Módulos</a></li>\n                    <li><a href="/#estructuras">Estructuras</a></li>\n                    <li><a href="/#cables">Cables</a></li>\n                    <li><a href="/#conectores">Conectores</a></li>\n                </ul>\n            </nav>\n        </div>\n        \n    </div>\n    ',console.log("Esdoy principio del router");let s=e();console.log(s,"route");let o=i[s]?i[s]:t;a.innerHTML=await o()};window.addEventListener("load",o),window.addEventListener("popstate",o)})();