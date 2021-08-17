import { getFormData } from "./getFormData";
const PETS_LOCAL = 'http://localhost:3000/pets';

const updatePet = async (petId) => {
  
    const data = getFormData("#updatePetForm");

    const settings = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };
  
    try {
      const response = await fetch(`${PETS_LOCAL}/${petId}`, settings);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      return e;
    }
};

export { updatePet };