import axios from 'axios';

const enertik = ['paneles-solares','cables-fotovoltaicos','accesorios-y-protecciones']

const BASE_URL = 'https://api.scraperapi.com?api_key=60ae15c4e20edcc002f97d648fc6e399&url=https://enertik.ar/'

const getData = async (id) => {
  try {
    var parser = new DOMParser();
    const response = await axios.get(`${BASE_URL}`+ `${enertik[id]}`);
    const datos = response.data;
    var doc = parser.parseFromString(datos, 'text/html');
    if (id==0){
      
      let powerArr = Array.from(doc.querySelector('#productGridPage ul').querySelectorAll('.backLI p:first-of-type'))
      //console.log(powerArr)
      let pricesArr = Array.from(doc.querySelector('#productGridPage ul').querySelectorAll('.priceMenu'))
      //console.log(pricesArr)

      let listapiola = pricesArr.map(function(element, i){
        console.log(i)
        return {'precio' : element.innerText, 'potencia' : powerArr[i].innerText}
      })

      console.log(listapiola);
    
    return listapiola
    } else{
      return 'eerrrorrr'
    }
    


    

    
  } catch (errors) {
    console.error(errors);
  }
};

export default getData;