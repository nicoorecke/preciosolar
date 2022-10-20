import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Modulos from '../pages/Modulos';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/preciosolar': Home,
  '/:id': Character,
  '/#modulos': Modulos,
  '/#estructuras': Modulos,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  console.log('Esdoy principio del router')
  let hash = getHash();
  let route = '/preciosolar/' + await resolveRoutes(hash);
  console.log(hash, 'hash')
  console.log(route, 'route')
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  
};

export default router;