import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Modulos= async () => {
  
  const character = await getData(0);

  const superr = `<section class="Introduction">
      ${character.map(element => `
        <div class="image">
            <a href="https://enertik.ar/panel-solar-fotovoltaico-policristalino-310w">
                <img src=${element.imagen} alt=""> 
            </a>
        </div>

        <div class="Datos">
            <p>${element.marca}</p>
            <p class="precio">${element.precio}</p>
            <p class="potencia">${element.potencia}</p>
        </div>

      `).join('')}
      </section>
  `

    const view = `
    <h2> Módulos</h2>
    
<div class="image-top">
        <img class="imagen" src="https://enertik.ar/images/schema/enertik.png" alt="">
    </div>
    <div>${superr}</div>
    

        
    `;
    return view;
  };
  
  export default Modulos