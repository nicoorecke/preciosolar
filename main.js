(()=>{"use strict";const s="https://rickandmortyapi.com/api/character/",n=async n=>{const a=n?`${s}${n}`:s;try{const s=await fetch(a);return await s.json()}catch(s){console.log("Fetch Error",s)}},a=()=>location.hash||"/",i=async()=>(a(),'\n    <h2> Modulos</h2>\n    <div class="image-top">\n            <img class="imagen" src="https://enertik.ar/images/schema/enertik.png" alt="">\n        </div>\n    <section class="Introduction">\n        \n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ps/ps260.webp" alt=""> \n        </div>\n        <div class="Datos">\n            <img src="https://enertik.ar/images/schema/enertik.png" alt=""> \n            <p class="precio">$69.237</p>\n            <p class="potencia">310W</p>\n        </div>\n    \n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ps/ps310.png" alt=""> \n        </div>\n\n        <div class="Datos">\n            <img src="https://enertik.ar/images/schema/enertik.png" alt=""> \n            <p class="precio">$76.851</p>\n            <p class="potencia">340W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ps/ps310.png" alt=""> \n        </div>\n\n        <div class="Datos">\n            <img src="https://enertik.ar/images/schema/enertik.png" alt=""> \n            <p class="precio">$81.455</p>\n            <p class="potencia">360W</p>\n        </div>\n        \n        <div class="image">\n            <img src="https://enertik.ar/images/productos/trinasolar/tsm-370de08m-ii.webp" alt=""> \n        </div>\n\n        <div class="Datos">\n            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt=""> \n            <p class="precio">$80.570</p>\n            <p class="potencia">375W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/trinasolar/tsm-370de08m-ii.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt="">\n            <p class="precio">$104.652</p>\n            <p class="potencia">450W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/trinasolar/tsm-495de18m-ii.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt="">\n            <p class="precio">$130.859</p>\n            <p class="potencia">550W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ams/as-6p30-285w.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt=""> \n            <p class="precio">$64.279</p>\n            <p class="potencia">285W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ams/as-6p30-285w.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt=""> \n            <p class="precio">$77.914</p>\n            <p class="potencia">345W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/ams/as-6m144-hc-450w.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt="">\n            <p class="precio">$112.089</p>\n            <p class="potencia">450W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/restarsolar/rt7i-460m.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://www.resunsolar.com/wp-content/uploads/2021/06/restar-solar.png" alt=""> \n            <p class="precio">$99.694</p>\n            <p class="potencia">460W</p>\n        </div>\n\n        <div class="image">\n            <img src="https://enertik.ar/images/productos/restarsolar/rt7i-460m.webp" alt=""> \n        </div>\n    \n        <div class="Datos">\n            <img src="https://www.resunsolar.com/wp-content/uploads/2021/06/restar-solar.png" alt="">\n            <p class="precio">$125.193</p>\n            <p class="potencia">460W</p>\n        </div>\n        \n    </section>\n        \n        \n    '),e=()=>'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',t={"/":async()=>(await n(),'\n    <h2> Sobre el proyecto</h2>\n        <section class="Introduction-home">\n            \n            \n            <div class="image">\n              <p>Este es un proyecto que tiene como objetivo facilitar las tareas a la hora de implementar sistemas fotovoltaicos</p>\n            </div>\n            \n        </section>\n    '),"/:id":async()=>{const s=a(),i=await n(s);return`\n      <div class="Characters-inner">\n        <article class="Characters-card">\n          <img src="${i.image}" alt="${i.name}">\n          <h2>${i.name}</h2>\n        </article>\n        <article class="Characters-card">\n          <h3>Episodes: <span>${i.episode.length}</span></h3>\n          <h3>Status: <span>${i.status}</span></h3>\n          <h3>Species: <span>${i.species}</span></h3>\n          <h3>Gender: <span>${i.gender}</span></h3>\n          <h3>Origin: <span>${i.origin.name}</span></h3>\n          <h3>Last Location: <span>${i.location.name}</span></h3>\n        </article>\n      </div>\n    `},"#modulos":i,"#estructuras":i},r=async()=>{const s=document.getElementById("header"),n=document.getElementById("content");s.innerHTML=await'\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/preciosolar/">\n                    Precio Solares\n                </a>\n            </h1>\n        </div>\n\n        <div class="Header-nav">\n            <nav class="navbar">\n                <ul>\n                    <li><a href="/preciosolar/#modulos">Módulos</a></li>\n                    <li><a href="/preciosolar/#estructuras">Estructuras</a></li>\n                    <li><a href="/preciosolar/#cables">Cables</a></li>\n                    <li><a href="/preciosolar/#conectores">Conectores</a></li>\n                </ul>\n            </nav>\n        </div>\n        \n    </div>\n    ',console.log("Esdoy principio del router");let i=a();console.log(i,"route");let r=t[i]?t[i]:e;n.innerHTML=await r()};window.addEventListener("load",r),window.addEventListener("popstate",r)})();