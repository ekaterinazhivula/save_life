import "../styles/css/modal.css";
import { getPet } from "../utils/getDataLocal";
import HystModal from "../lib/generateModal.js";

const generatePickUpForOverexposureModal = async () => {
    const pickUpForOverexposureModal = new HystModal({
        linkAttributeName: "data-pickUpForOverexposure",
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: async (modal) => {
            const petId = document.getElementById("markedPet").dataset.petid;

            const modalContainer = modal.openedWindow.querySelector("#pick-up-for-overexposure-modal-container");
            const pet = await getPet(petId);
            modalContainer.innerHTML = pickUpForOverexposureModalContent(pet);

            submitPickUpForOverexposureForm(modalContainer, pickUpForOverexposureModal);
        }
    });
};

const pickUpForOverexposureModalContent = (pet) => {
    return `
            <form id="pickUpForOverexposureForm" class="pick-up-for-overexposure-form" >
                <div class="pick-up-for-overexposure-form__header">Забрать на передержку</div>
                <div class="pick-up-for-overexposure-form__line"></div>
                <div class="image-container">
                    <img id="petImage" name="image" class="pick-up-for-overexposure-form__image" src="${pet.image}" alt="Ваш друг">
                </div>
                <div class="pick-up-for-overexposure-form__input-container">
                    <label for="firstName">Имя:</label>
                    <input id="firstName" type="text" class="pick-up-for-overexposure-form__input" name="firstName" required />
                </div>
                <div class="pick-up-for-overexposure-form__input-container">
                    <label for="lastName">Фамилия:</label>
                    <input id="lastName" type="text" class="pick-up-for-overexposure-form__input" name="lastName" required />
                </div>
                <div class="pick-up-for-overexposure-form__input-container">
                    <label for="phone">Номер телефона:</label>
                    <input id="phone" type="tel" placeholder="xx xxx-xx-xx" pattern="[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}" class="pick-up-for-overexposure-form__input" name="phone" required />
                </div>
                <div class="pick-up-for-overexposure-form__input-container">
                    <label for="remarks">Замечания:</label>
                    <textarea id="remarks" class="pick-up-for-overexposure-form__textarea" name="remarks" rows="5"></textarea>
                </div>
                <div class="pick-up-for-overexposure-form__coment">
                    Наши волонтеры будут активно искать будущий дом хвостику, пока вы помогаете нам с передержкой.
                </div>
                <div class="pick-up-for-overexposure-form__coment">
                    Спасибо за помощь!
                </div>
                <div class="pick-up-for-overexposure-form__buttons-container">
                    <button class="pick-up-for-overexposure-form__save-button" id="savePet" type="submit">
                        <div class="pick-up-for-overexposure-form__save-button-bg">
                            <span class="pick-up-for-overexposure-form__save-button-text">Забрать на передержку</span>
                        </div>
                    </button>
                </div>
            </form>
        `;
 };

const submitPickUpForOverexposureForm = (modalContainer, modal) => {
    modalContainer.querySelector("#pickUpForOverexposureForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        modal.close();
    });
};

 export default generatePickUpForOverexposureModal;