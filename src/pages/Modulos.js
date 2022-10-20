import getHash from "../utils/getHash";

const Modulos= async () => {
  const id = getHash();
  
    const view = `
    <h2> Modulos</h2>
    <div class="image-top">
            <img class="imagen" src="https://enertik.ar/images/schema/enertik.png" alt="">
        </div>
    <section class="Introduction">
        
        <div class="image">
            <img src="https://enertik.ar/images/schema/enertik.png" alt="">
        </div>
        <div class="Datos">
            <p>enertik</p>
            <p>$69.237</p>
            <p>310W</p>
        </div>
        
    </section>
        
        
    `;
    return view;
  };
  
  export default Modulos