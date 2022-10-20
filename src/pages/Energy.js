import getHash from "../utils/getHash";

const Character = async () => {
  const id = getHash();
  
    const view = `
      <div class="Characters-inner">
        hola
      </div>
    `;
    return view;
  };
  
  export default Character;