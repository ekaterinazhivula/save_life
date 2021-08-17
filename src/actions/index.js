import router from "../routes";

import generateAllPets from "../components/pets";
import slider from "../components/slider";
import generateCurrentPetModal from "../components/currentPet";
import counterPets from "../components/counterPets";

import {generatePetsGallery} from "../components/petsGalleryPage";
import {filterPets} from "../components/filterPets";
import createPetItem from "../components/createPetItem";
import editPetItem from "../components/editPetItem";

const getContent = async () => {
  // load page
  await router();


  if (document.querySelector("#carousel")) {
    await generateAllPets();
    slider();
    generateCurrentPetModal();
    counterPets();
  }

  //gallery page
  if (document.querySelector("#gallery-page")) {
    await generatePetsGallery();

    document.querySelector("#gallery-page")
      .addEventListener('load', document.querySelector("#gallery-page__select").focus());

    generateCurrentPetModal();
    createPetItem();
    editPetItem();
  }

  // select filter
  if (document.querySelector("#gallery-page__select")) {
    document
      .querySelector("#gallery-page__select")
      .addEventListener("change", filterPets);
      
  } 

  /*   // close preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      setTimeout(closePreloader, 1000);
    }
   */
};

export {
  getContent
};