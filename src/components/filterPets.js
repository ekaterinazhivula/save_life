import {getAllPets, getAllDogs, getAllCats} from "../utils/getDataLocal";
import generatePetsGallery from "./petsGalleryPage";

const filterPets = async (event) => {
    const searchValue = event.target.value;

    if(searchValue == "cat") {
        const allCats = await getAllCats();
        generatePetsGallery(allCats);
    } else if (searchValue == "dog") {
        const allDogs = await getAllDogs();
        generatePetsGallery(allDogs);
    } else {
        const allPets = await getAllPets();
        generatePetsGallery(allPets);
    }    
};

export {filterPets};