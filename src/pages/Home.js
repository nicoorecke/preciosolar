import getData from "../utils/getData";


const Home = async () => {
  const id='https://enertik.ar'
  console.log(id)
  const character = await getData(id);
    
    
  const view = `
    <h2> Sobre el proyecto</h2>
        <section class="Introduction-home">
            
            
            <div>
              <p>Este es un proyecto que tiene como objetivo facilitar las tareas a la hora de implementar sistemas fotovoltaicos.
              Básicamente se traen todos los precios que uno pueda necesitar a la hora de realizar un presupuesto.
              Los productos son seleccionados de los siguientes proveedores, y por supuesto se cuenta con Mercado Libre:</p>
            </div>
            
        </section>
        <section class="Proveedores">
            <div>
              <img class="imagen-prov" src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/75/17009375/logo-2021092311324434800.png" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://enertik.ar/images/schema/enertik.png" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://www.metalsandmetalworkingsearch.com/system/companies/logos/000/002/893/original/omax-logo-horizontal-720x320.png?1652905734" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="http://www.intermepro.com/wp-content/uploads/2016/04/logo_transparente_400.png" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://www.multisolar.com.ar/wp-content/uploads/2022/07/LOGOMSOLAR.png" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://www.efergia.com.ar/resources/img/efergia-logo.png" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://energiaenmovimiento.com.ar/wp-content/uploads/2019/09/logo-qmax.jpg" alt="">
            </div>
            <div>
              <img class="imagen-prov" src="https://statics.eleconomista.com.ar/2020/03/614e2f5f8c618.png" alt="">
            </div>
            
        </section>
    `;
    return view;
  };
  
  export default Home;