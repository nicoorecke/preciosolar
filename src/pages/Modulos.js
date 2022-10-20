import getHash from "../utils/getHash";

const Modulos= async () => {
  const id = getHash();
  
    const view = `
      <h2> Modulos</h2>
      <section class="Introduction">
          
          
          <div class="image">
            <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/75/17009375/logo-2021092311324434800.png" alt="">
          </div>
          
          
          multisolar
          efergia
          Qmax multiradio
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
              <img src="https://www.metalsandmetalworkingsearch.com/system/companies/logos/000/002/893/original/omax-logo-horizontal-720x320.png?1652905734" alt="">
          </div>
          <div class="text">
              <h3>omax</h3>
          </div>
          <div class="image">
              <img src="http://www.intermepro.com/wp-content/uploads/2016/04/logo_transparente_400.png" alt="">
          </div>
          <div class="text">
              <h3>intermepro</h3>
          </div>
          <div class="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="">
          </div>
          <div class="text">
              <h3>NodeJS</h3>
          </div>
          <div class="image">
              <img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png" alt="">
          </div>
          <div class="text">
              <h3>Python</h3>
          </div>
          <div class="image">
              <img src="https://ubunlog.com/wp-content/uploads/2015/09/Unity-Logo-830x400.jpg" alt="">
          </div>
          <div class="text">
              <h3>Unity3D</h3>
          </div>
          <div class="image">
              <img src="https://cdn.worldvectorlogo.com/logos/premiere-cc-1.svg" alt="">
          </div>
          <div class="text">
              <h3>Premiere</h3>
          </div>
          </div>
          <div class="image">
              <img src="https://seeklogo.com/images/A/after-effects-cc-logo-BCC55BAFF7-seeklogo.com.png" alt="">
          </div>
          <div class="text">
              <p>After Effects</p>
          </div>
          </section>
    `;
    return view;
  };
  
  export default Modulos