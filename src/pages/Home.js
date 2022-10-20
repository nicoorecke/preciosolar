import getData from "../utils/getData";


const Home = async () => {
    const characters = await getData();
    
    const view = `
    <h2> Sobre el proyecto</h2>
        <section class="Introduction-home">
            
            
            <div class="image">
              <p>Este es un proyecto que tiene como objetivo facilitar las tareas a la hora de implementar sistemas fotovoltaicos</p>
            </div>
            
        </section>
    `;
    return view;
  };
  
  export default Home;