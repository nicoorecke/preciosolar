import getHash from "../utils/getHash";

const Modulos= async () => {
  const id = getHash();
  
    const view = `
    <h2> Modulos</h2>
    <section class="Introduction">
        
        
        <div class="image">
          <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/75/17009375/logo-2021092311324434800.png" alt="">
        </div>
        <div class="text">
            <h3>Solarline</h3>
        </div>

        <div class="image">
            <img src="https://enertik.ar/images/schema/enertik.png" alt="">
        </div>
        <div class="text">
            <h3>enertik</h3>
        </div>
        <div class="image">
            <img src="http://www.intermepro.com/wp-content/uploads/2016/04/logo_transparente_400.png" alt="">
        </div>
        <div class="text">
            <h3>intermepro</h3>
        
        
    `;
    return view;
  };
  
  export default Modulos