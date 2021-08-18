import "../styles/css/modal.css";
import { getPet } from "../utils/getDataLocal";
import HystModal from "../lib/generateModal.js";

const generateTakeHomeModal = async () => {
    const takeHomeModal = new HystModal({
        linkAttributeName: "data-takeHome",
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: async (modal) => {
            const petId = document.getElementById("markedPet").dataset.petid;

            const modalContainer = modal.openedWindow.querySelector("#take-home-modal-container");
            const pet = await getPet(petId);
            modalContainer.innerHTML = takeHomeModalContent(pet);

            submitTakeHomeForm(modalContainer, takeHomeModal);
        }
    });
};

const takeHomeModalContent = (pet) => {
    return `
            <form id="takeHomeForm" class="take-home-form" >
                <div class="take-home-form__header">Забрать домой</div>
                <div class="take-home-form__line"></div>
                <div class="image-container">
                    <img id="petImage" name="image" class="take-home-form__image" src="${pet.image}" alt="Ваш друг">
                </div>
                <div class="take-home-form__input-container">
                    <label for="firstName">Имя:</label>
                    <input id="firstName" type="text" class="take-home-form__input" name="firstName" required />
                </div>
                <div class="take-home-form__input-container">
                    <label for="lastName">Фамилия:</label>
                    <input id="lastName" type="text" class="take-home-form__input" name="lastName" required />
                </div>
                <div class="take-home-form__input-container">
                    <label for="phone">Номер телефона:</label>
                    <input id="phone" type="tel" placeholder="xx xxx-xx-xx" pattern="[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}" class="take-home-form__input" name="phone" required />
                </div>
                <div class="take-home-form__input-container">c
                    <label for="remarks">Замечания:</label>
                    <textarea id="remarks" class="take-home-form__textarea" name="remarks" rows="5"></textarea>
                </div>
                <div class="take-home-form__buttons-container">
                    <button class="take-home-form__save-button" id="savePet" type="submit">
                        <div class="take-home-form__save-button-bg">
                            <span class="take-home-form__save-button-text">Забрать домой</span>
                        </div>
                    </button>
                </div>
            </form>
        `;
 };

const submitTakeHomeForm = (modalContainer, modal) => {
    modalContainer.querySelector("#takeHomeForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        modal.close();
    });
};

 export default generateTakeHomeModal;