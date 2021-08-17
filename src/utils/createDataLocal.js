import { getFormData } from "./getFormData";
const PETS_LOCAL = 'http://localhost:3000/pets';

const createPet = async (event) => {
  event.preventDefault();
  
  const data = getFormData("#createPetForm");

  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    }
  };

  try {
    const response = await fetch(PETS_LOCAL, settings);
    const pet = await response.json();
    console.log(pet);
    return pet;
  } catch (e) {
    return e;
  }        
}

export { createPet };
