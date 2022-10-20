const getHash = () =>
  location.hash || '/';
  console.log(location.hash.substring(1), 'getHash');

export default getHash;