import axios from 'axios';

const enertik = ['paneles-solares','cables-fotovoltaicos','accesorios-y-protecciones']

const BASE_URL = 'https://api.scraperapi.com?api_key=60ae15c4e20edcc002f97d648fc6e399&url=https://enertik.ar/'
const enertikbase = 'https://enertik.ar/'


const getData = async (id) => {
  try {
    var parser = new DOMParser();
    const response = await axios.get(`${BASE_URL}`+ `${enertik[id]}`);
    const datos = response.data;
    var doc = parser.parseFromString(datos, 'text/html');
    if (id==0){
      let panel = doc.querySelector('#productGridPage ul')


      let imgArr = Array.from(panel.querySelectorAll('.frontLI'))
      console.log(imgArr)
      let powerArr = Array.from(panel.querySelectorAll('.backLI p:first-of-type'))
      //console.log(powerArr)
      let pricesArr = Array.from(panel.querySelectorAll('.priceMenu'))
      //console.log(pricesArr)
      let marca
      let listapiola = pricesArr.map(function(element, i){
        if (imgArr[i].querySelector('.blueTopTag') ) {
          marca = imgArr[i].querySelector('.blueTopTag').innerText
        }
        else  if (imgArr[i].querySelector('.orangeTopTag')){
          marca = imgArr[i].querySelector('.orangeTopTag').innerText
        }

        else  if (imgArr[i].querySelector('.greyTopTag')){
          marca = imgArr[i].querySelector('.greyTopTag').innerText
        }

        else {
          marca = 'Enertik' 
        }
        return {
          'imagen' : enertikbase + imgArr[i].querySelector('picture img').dataset.src,
          'marca' : marca,
          'precio' : element.innerText,
          'potencia' : powerArr[i].innerText}
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