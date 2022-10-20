const getHash = () =>
  location.hash.substring() || '/';
  console.log(location.hash.substring(), 'gethash');

export default getHash;