import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Modulos from '../pages/Modulos';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  'contact': 'Contact',
  '/#modulos': Modulos,
  '/#estructuras': Modulos,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  console.log('sdoy principio del router')
  let hash = getHash();
  let route = await resolveRoutes(hash);
  console.log(hash, 'hash')
  console.log(route, 'route')
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  
};

export default router;