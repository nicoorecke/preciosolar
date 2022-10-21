import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Modulos from '../pages/Modulos';
import Estructuras from '../pages/Estructuras';
import Cables from '../pages/Cables';
import Conectores from '../pages/Conectores';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';


const routes = {
  '/': Home,
  '/:id': Character,
  '#modulos': Modulos,
  '#estructuras': Estructuras,
  '#cables': Cables,
  '#conectores': Conectores,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

 

  header.innerHTML = await Header();
  console.log('Esdoy principio del router')
  //let hash = getHash();
  //let route = await resolveRoutes(hash);
  let route = getHash();
  //console.log(hash, 'hash')
  console.log(route, 'route')
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  
};

export default router;