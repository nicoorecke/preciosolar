import getData from "../utils/getData";


const Home = async () => {
    const characters = await getData();
    
    const view = `
    <h2> About me</h2>
        <section class="Introduction">
            
          
            <div class="image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="">
            </div>
            <div class="text">
                <h3>HTML</h3>
            </div>
            <div class="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="">
            </div>
            <div class="text">
                <h3>CSS</h3>
            </div>
            <div class="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="">
            </div>
            <div class="text">
                <h3>Javascript</h3>
            </div>
            <div class="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="">
            </div>
            <div class="text">
                <h3>React</h3>
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
      <div class="Characters">
        ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
       </article>
        `).join('')}

        
      </div>

      <div class="Characters">
        

        
      </div>
    `;
    return view;
  };
  
  export default Home;