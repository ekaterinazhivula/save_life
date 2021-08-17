const PETS_LOCAL = 'http://localhost:3000/pets';

const deletePet = async (petId) => {
    await fetch(`${PETS_LOCAL}/${petId}`, {method: "DELETE"});
}

export {deletePet};