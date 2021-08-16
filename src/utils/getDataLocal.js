const PETS_LOCAL = 'http://localhost:3000/pets';
const DOGS_LOCAL = 'http://localhost:3000/pets?kind=dog';
const CATS_LOCAL = 'http://localhost:3000/pets?kind=cat';


const getResource = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const getAllPets = async () => {
  const res = await getResource(PETS_LOCAL);
  return res;
}

const getAllDogs = async () => {
  const res = await getResource(DOGS_LOCAL);
  return res;
}

const getAllCats = async () => {
  const res = await getResource(CATS_LOCAL);
  return res;
}

const getPet = async (id) => {
  const res = await getResource(`${PETS_LOCAL}/${id}`);
  return res;
}


export {getAllPets, getAllDogs, getAllCats, getPet};