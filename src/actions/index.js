import router from "../routes";

import generateAllPets from "../components/pets";
import slider from "../components/slider";
import generateCurrentPetModal from "../components/currentPet";

/* import closePreloader from "../components/preloader";
import generateAllTasks from "../components/projectTasks";
import counterTasks from "../components/counterTasks";
import initDragAndDrop from "../components/dragAndDrop";
import { openCreatorIssue, closeCreatorIssue, closeIssueForm } from "../components/createIssue";
import { postTask } from "../utils/postDataLocal"; */

const getContent = async () => {
  // load page
  await router();

  if(document.querySelector("#pets-gallery")){
    await generateAllPets();
    slider();
    generateCurrentPetModal();
  }  

/*   // close preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    setTimeout(closePreloader, 1000);
  }

  // list tasks
  if(document.querySelector(`.task-col1`)){
    generateAllTasks();
  }
  

  //counter tasks
  counterTasks();

  //init drag and drop
  initDragAndDrop();

  //open/close creatorIssue
  if (document.querySelector('.create-issues')) {
    document.querySelector('.create-issues').addEventListener('click', openCreatorIssue);
    document.querySelector('.create-issue').addEventListener('click', closeCreatorIssue);
    document.querySelector('.cancel').addEventListener('click', closeIssueForm);
    //post data task
    document.querySelector('.info-task').addEventListener('submit', postTask);
  } */
};

export { getContent };