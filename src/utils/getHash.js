const getHash = () =>
  location.href.substring(location.href.lastIndexOf('/') + 1) || '/';
  console.log(location, 'gethash');

export default getHash;