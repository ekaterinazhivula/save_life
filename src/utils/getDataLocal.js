const PETS_LOCAL = 'http://localhost:3000/pets';


const getResource = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const getAllPets = async () => {
  const res = await getResource(PETS_LOCAL);
  return res;
}

const getPet = async (id) => {
  const res = await getResource(`${PETS_LOCAL}/${id}`);
  return res;
}


export {getAllPets, getPet};