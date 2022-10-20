const resolveRoutes = (route) => {
    if (route.length <= 3) {
      console.log(route, 'ggg', route.length, 'shhh')
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;