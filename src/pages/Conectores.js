import getHash from "../utils/getHash";

const Conectores = async () => {
  const id = getHash();
  
    const view = `
    <h2>Estructuras</h2>
<div class="image-top">
        <img class="imagen" src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" alt="">
    </div>
<section class="Introduction">
    
    <div class="image">
        <a href="https://articulo.mercadolibre.com.ar/MLA-853933229-kit-riel-estructura-montaje-para-4-paneles-solares-en-techo-_JM#position=1&search_layout=stack&type=item&tracking_id=3616c2a2-5891-4063-ac93-54d8f638d7b0">
            <img src="https://http2.mlstatic.com/D_NQ_NP_919145-MLA51701036697_092022-O.webp" alt=""> 
        </a>
    </div>
    
    <div class="Datos">
        <img src="https://ishraqenergy.com/wp-content/uploads/2018/06/ishraq-energy-solar-partners-chiko-solar-colored.png" alt=""> 
        <p class="precio">$29.850</p>
        <p class="potencia">1600W</p>
    </div>

    <div class="image">
    
        <a href="https://articulo.mercadolibre.com.ar/MLA-1100171114-estructura-para-paneles-solares-de-aluminio-para-piso-_JM#position=2&search_layout=stack&type=item&tracking_id=def7adb4-3df4-4361-9c27-a899743a8830">
            <img src="https://http2.mlstatic.com/D_NQ_NP_694175-MLA47262612372_082021-O.webp" alt=""> 
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://ishraqenergy.com/wp-content/uploads/2018/06/ishraq-energy-solar-partners-chiko-solar-colored.png" alt=""> 
        <p class="precio">$91.600</p>
        <p class="potencia">1600W</p>
    </div>

    <div class="image">
        <a href="https://articulo.mercadolibre.com.ar/MLA-1100127518-estructura-para-paneles-solares-de-aluminio-para-tejas-_JM#position=3&search_layout=stack&type=item&tracking_id=0857aa10-ea85-46e6-b8db-6f1eb41de9d9">
            <img src="https://http2.mlstatic.com/D_NQ_NP_694130-MLA47259823378_082021-O.webp" alt=""> 
        </a>
    </div>

    <div class="Datos">
        <img src="https://ishraqenergy.com/wp-content/uploads/2018/06/ishraq-energy-solar-partners-chiko-solar-colored.png" alt=""> 
        <p class="precio">$63.225/p>
        <p class="potencia">1600W</p>
    </div>
    
    <div class="image">
        <a href="https://articulo.mercadolibre.com.ar/MLA-1144798329-soporte-panel-solar-fijo-reforzado-mod-patagonico-_JM#position=50&search_layout=stack&type=item&tracking_id=61fb6e10-7ace-4a4c-afe5-be5913830e69">
            <img src="https://http2.mlstatic.com/D_NQ_NP_782693-MLA50512306964_062022-O.webp" alt="">
        </a>
    </div>

    <div class="Datos">
        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/70/644853070/logo-2020102113494421000.png" alt=""> 
        <p class="precio">$102.300</p>
        <p class="potencia">1600W</p>
    </div>

    <div class="image">
        <a href="https://articulo.mercadolibre.com.ar/MLA-1144929766-soporte-panel-solar-fijo-techo-reforzado-modpatagonico-_JM#position=1&search_layout=stack&type=item&tracking_id=37c0c3a4-8746-4555-a41e-d810f5215df7">
            <img src="https://http2.mlstatic.com/D_NQ_NP_923403-MLA50527293949_062022-O.webp" alt="">
        </a>
    </div>
    

    <div class="Datos">
        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/70/644853070/logo-2020102113494421000.png" alt="">
        <p class="precio">$61.000</p>
        <p class="potencia">800W</p>
    </div>
    
</section>

<div class="link-bajo">
    <a href="https://enertik.ar/soportes-paneles-solares">
        Soportes en Enertik
    </a>
</div>
        
        
    `;
    return view;
  };
  
  export default Conectores;