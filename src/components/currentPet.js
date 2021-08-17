import {getPet} from "../utils/getDataLocal";
import HystModal from "../lib/generateModal.js";
import "../styles/css/modal.css";

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
            <div class="pet-modal">
                <div class="pet-modal__header">${pet.nickName}</div>
                <div class="pet-modal__line"></div>
                <div class="pet-modal__desc">${pet.gender}, ${pet.age}</div>
                <p class="pet-modal__text">${pet.shortSummary}</p>
                <p class="pet-modal__text">${pet.description}</p>
                <div class="image-container">
                    <img id="petImage" name="image" class="pet-modal__image" src="${pet.image}" alt="Ваш друг">
                </div>

                <div class="pet-modal__buttons-container">
                    <button class="pet-modal__takeHome-button" id="takeHome" data-petId="${pet.id}">
                        <div class="pet-modal__takeHome-button-bg">
                            <span class="pet-modal__takeHome-button-text">Забрать домой</span>
                        </div>
                    </button>
                    <button class="pet-modal__overexposure-button" id="pickUpForOverexposure" data-petId="${pet.id}">
                        <div class="pet-modal__overexposure-button-bg">
                            <span class="pet-modal__overexposure-button-text">Забрать на передержку</span>
                        </div>
                    </button>
                </div>
            </div>
            `;
        }
    });
};
  
export default generateCurrentPetModal;