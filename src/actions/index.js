import router from "../routes";

import generateAllPets from "../components/pets";
import slider from "../components/slider";
import generateCurrentPetModal from "../components/currentPet";
import counterPets from "../components/counterPets";

import generatePetsGallery from "../components/petsGalleryPage";
import {
  filterPets
} from "../components/filterPets";
import createPetItem from "../components/createPetItem";
/* import closePreloader from "../components/preloader";
import generateAllTasks from "../components/projectTasks";
import counterTasks from "../components/counterTasks";
import initDragAndDrop from "../components/dragAndDrop";
import { openCreatorIssue, closeCreatorIssue, closeIssueForm } from "../components/createIssue";
import { postTask } from "../utils/postDataLocal"; */

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

    document.querySelector("#gallery-page").addEventListener('load',
    document.querySelector("#gallery-page__select").focus());

    generateCurrentPetModal();
    createPetItem();

  }

  // select filter

  if (document.querySelector("#gallery-page__select")) {
    document
      .querySelector("#gallery-page__select")
      .addEventListener("change", filterPets);
  }

  //open/close creatorItem
    //post data task
   /*  document.querySelector(".info-pet").addEventListener("submit", postItem); */
  

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