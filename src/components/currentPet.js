import {getPet} from "../utils/getDataLocal";
import HystModal from "../lib/generateModal.js";

const generateCurrentPetModal = async () => {
    new HystModal({
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: async (modal) => {
            const currentPetId = modal.starter.dataset.petid;
            const pet = await getPet(currentPetId);
            const modalContainer = modal.openedWindow.querySelector("#pet-modal-container");

            modalContainer.innerHTML = `
                <img class="gallery-item__img" src="data:image/png;base64, ${pet.image}" alt="Ваш друг">
                <h1 class="h1">${pet.nickName}</h1>
                <p>${pet.shortSummary}</p>
                <button>Another button</button>
            `;
        }
    });
};
  
export default generateCurrentPetModal;