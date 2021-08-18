import "../styles/css/modal.css";
import noImage from "../images/img/bg/no_image.png";
import HystModal from "../lib/generateModal.js";
import { createPet } from "../utils/createDataLocal";
import { addPetToGallery } from "../components/petsGalleryPage";

const createPetItem = async () => {
    const createModal = new HystModal({
        linkAttributeName: "data-newPet",
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: (modal) => {
            const modalContainer = modal.openedWindow.querySelector("#create-item-container");

            modalContainer.innerHTML = createPetItemModal();

            submitCreateForm(modalContainer, createModal);

            setPetImage(modalContainer);
        }
    });
};
  
const createPetItemModal = () => {
   return `
                <form id="createPetForm" class="create-form" >
                    <div class="create-form__header">Добавить питомца</div>
                    <div class="create-form__line"></div>
                    <div class="image-container">
                        <img id="petImage" name="image" class="create-form__image" src="${noImage}" alt="Ваш друг">
                    </div>
                    <div class="create-form__input-container">
                        <label>Вид питомца:</label>
                        <input type="radio" name="kind" id="dog" value="dog">
                        <label for="dog">Собака</label>
                        <input type="radio" name="kind" id="cat" value="cat">
                        <label for="cat">Кот</label>
                    </div>
                    <div class="create-form__input-container">
                        <label>Пол:</label>
                        <input type="radio" name="gender" id="boy" value="Мальчик">
                        <label for="boy">Мальчик</label>
                        <input type="radio" name="gender" id="girl" value="Девочка">
                        <label for="girl">Девочка</label>
                    </div>
                    <div class="create-form__input-container">
                        <label for="nickName">Кличка:</label>
                        <input id="nickName" type="text" class="create-form__input" name="nickName" required />
                    </div>
                    <div class="create-form__input-container">
                        <label for="age">Возраст:</label>
                        <input id="age" type="text" class="create-form__input" name="age" required />
                    </div>
                    <div class="create-form__input-container">
                        <label for="shortSummary">Краткое описание:</label>
                        <input id="shortSummary" type="text" class="create-form__input" name="shortSummary" required />
                    </div>
                    <div class="create-form__input-container">
                        <label for="petDescription">Подробнее:</label>
                        <textarea id="petDescription" class="create-form__textarea" name="description" rows="5" required></textarea>
                    </div>
                    <div class="create-form__input-container">
                        <label for="image">Фото:</label>
                        <input id="image" type="file" name="image"/>
                    </div>
                    <div class="create-form__buttons-container">
                        <button class="create-form__save-button" id="savePet" type="submit" >
                            <div class="create-form__save-button-bg">
                                <span class="create-form__save-button-text">Сохранить</span>
                            </div>
                        </button>
                    </div>
                </form>
            `;
};

const submitCreateForm = (modalContainer, modal) => {
    modalContainer.querySelector("#createPetForm").addEventListener("submit", async (event) => {
        let pet = await createPet(event);
        modal.close();
        addPetToGallery(pet);
    });
};

const setPetImage = (modalContainer) => {
    modalContainer.querySelector('#image').addEventListener("change", async (event) => {
        let promise = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = async (e) => {
              resolve(e.target.result);
            };
            reader.onerror = (error) => {
              reject(error);
            };
            reader.readAsDataURL(event.currentTarget.files[0]);
          });
  
          await promise.then(image => modalContainer.querySelector('#petImage').setAttribute('src', image));
    });
};

export default createPetItem;