import getHash from "../utils/getHash";

const Modulos= async () => {
  const id = getHash();
  
    const view = `
    <h2> Módulos</h2>
<div class="image-top">
        <img class="imagen" src="https://enertik.ar/images/schema/enertik.png" alt="">
    </div>
<section class="Introduction">
    
    <div class="image">
        <a href="https://enertik.ar/panel-solar-fotovoltaico-policristalino-310w">
            <img src="https://enertik.ar/images/productos/ps/ps260.webp" alt=""> 
        </a>
    </div>
    
    <div class="Datos">
        <img src="https://enertik.ar/images/schema/enertik.png" alt=""> 
        <p class="precio">$69.237</p>
        <p class="potencia">310W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/panel-solar-fotovoltaico-policristalino-340w">
            <img src="https://enertik.ar/images/productos/ps/ps310.png" alt=""> 
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://enertik.ar/images/schema/enertik.png" alt=""> 
        <p class="precio">$76.851</p>
        <p class="potencia">340W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/panel-solar-fotovoltaico-policristalino-360w">
            <img src="https://enertik.ar/images/productos/ps/ps310.png" alt=""> 
        </a>
    </div>

    <div class="Datos">
        <img src="https://enertik.ar/images/schema/enertik.png" alt=""> 
        <p class="precio">$81.455</p>
        <p class="potencia">360W</p>
    </div>
    
    <div class="image">
        <a href="https://enertik.ar/trina-solar-tsm-375de08m-ii-honey-panel-solar-fotovoltaico-monocristalino-375w">
            <img src="https://enertik.ar/images/productos/trinasolar/tsm-370de08m-ii.webp" alt="">
        </a>
    </div>

    <div class="Datos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt=""> 
        <p class="precio">$80.570</p>
        <p class="potencia">375W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/trina-solar-tsm-450de17m-ii-tallmax-panel-solar-fotovoltaico-monocristalino-450w">
            <img src="https://enertik.ar/images/productos/trinasolar/tsm-370de08m-ii.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt="">
        <p class="precio">$104.652</p>
        <p class="potencia">450W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/trina-solar-tsm-550de19-vertex-panel-solar-fotovoltaico-monocristalino-550w">
            <img src="https://enertik.ar/images/productos/trinasolar/tsm-495de18m-ii.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trina_Solar_logo.svg/2560px-Trina_Solar_logo.svg.png" alt="">
        <p class="precio">$130.859</p>
        <p class="potencia">550W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/amerisolar-as-6p30-285w-panel-solar-fotovoltaico-policristalino-285w"></a>
            <img src="https://enertik.ar/images/productos/ams/as-6p30-285w.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt=""> 
        <p class="precio">$64.279</p>
        <p class="potencia">285W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/amerisolar-as-6p-345w-panel-solar-fotovoltaico-policristalino-345w">
            <img src="https://enertik.ar/images/productos/ams/as-6p30-285w.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt=""> 
        <p class="precio">$77.914</p>
        <p class="potencia">345W</p>
    </div>

    <div class="image">
        <a href="https://enertik.ar/amerisolar-as-6m144-hc-450w-panel-solar-fotovoltaico-monocristalino-450w">   
            <img src="https://enertik.ar/images/productos/ams/as-6m144-hc-450w.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://www.weamerisolar.eu/wp-content/uploads/2019/04/amerisolar-logo-1500p.png" alt="">
        <p class="precio">$112.089</p>
        <p class="potencia">450W</p>
    </div>

    <div class="image">
    <a href="https://enertik.ar/restarsolar-rt7i-460m-panel-solar-fotovoltaico-monocristalino-460w">
        <img src="https://enertik.ar/images/productos/restarsolar/rt7i-460m.webp" alt="">
    </a>
    </div>
    

    <div class="Datos">
        <img src="https://www.resunsolar.com/wp-content/uploads/2021/06/restar-solar.png" alt=""> 
        <p class="precio">$99.694</p>
        <p class="potencia">460W</p>
    </div>

    <div class="image">
    <a href="https://enertik.ar/restarsolar-rt8i-560m-panel-solar-fotovoltaico-monocristalino-560w">
        <img src="https://enertik.ar/images/productos/restarsolar/rt7i-460m.webp" alt="">
    </a>
    </div>
    

    <div class="Datos">
        <img src="https://www.resunsolar.com/wp-content/uploads/2021/06/restar-solar.png" alt="">
        <p class="precio">$125.193</p>
        <p class="potencia">560W</p>
    </div>
    
</section>
        
        
    `;
    return view;
  };
  
  export default Modulos