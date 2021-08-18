import "../styles/css/modal.css";
import { getPet } from "../utils/getDataLocal";
import HystModal from "../lib/generateModal";
import { updatePet } from "../utils/updateDataLocal";
import { deletePet } from "../utils/deleteDataLocal";
import { updatePetInGallery, deletePetFromGallery } from "../components/petsGalleryPage";

const editPetItem = async () => {
    const modal = new HystModal({
        linkAttributeName: "data-editPet",
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: async (modal) => {
            const currentPetId = modal.starter.dataset.petid;
            console.log(currentPetId);
            const pet = await getPet(currentPetId);
            const modalContainer = modal.openedWindow.querySelector("#edit-item-container");

            modalContainer.innerHTML = editPetItemModal(pet);
            
            updatePetForm(modalContainer, modal);

            deletePetForm(modalContainer);

            setPetImage(modalContainer);
        }
    });
};
  
const editPetItemModal = (pet) => {
    return `
        <form id="updatePetForm" class="update-form" >
            <div class="update-form__header">Изменить питомца</div>
            <div class="update-form__line"></div>
            <div class="image-container">
                <img id="petImage" name="image" class="update-form__image" src="${pet.image}" alt="Ваш друг">
            </div>
            <div class="update-form__input-container">
                <label>Вид питомца:</label>
                <input type="radio" name="kind" id="dog" value="dog"` + (pet.kind === "dog" ? `checked` : ``) + `>
                <label for="dog">Собака</label>
                <input type="radio" name="kind" id="cat" value="cat"` + (pet.kind === "cat" ? `checked` : ``) + `>
                <label for="cat">Кот</label>
            </div>
            <div class="update-form__input-container">
                <label>Пол:</label>
                <input type="radio" name="gender" id="boy" value="Мальчик"` + (pet.gender === "Мальчик" ? `checked` : ``) + `>
                <label for="boy">Мальчик</label>
                <input type="radio" name="gender" id="girl" value="Девочка"` + (pet.gender === "Девочка" ? `checked` : ``) + `>
                <label for="girl">Девочка</label>
            </div>
            <div class="update-form__input-container">
                <label for="nickName">Кличка:</label>
                <input id="nickName" type="text" class="update-form__input" name="nickName" value="${pet.nickName}" required />
            </div>
            <div class="update-form__input-container">
                <label for="age">Возраст:</label>
                <input id="age" type="text" class="update-form__input" name="age" value="${pet.age}" required />
            </div>
            <div class="update-form__input-container">
                <label for="shortSummary">Краткое описание:</label>
                <input id="shortSummary" type="text" class="update-form__input" name="shortSummary" value="${pet.shortSummary}" required />
            </div>
            <div class="update-form__input-container">
                <label for="petDescription">Подробнее:</label>
                <textarea id="petDescription" class="update-form__textarea" name="description" rows="5" required>${pet.description}</textarea>
            </div>
            <div class="update-form__input-container">
                <label for="image">Фото:</label>
                <input id="image" type="file" name="image"/>
            </div>
            <div class="update-form__buttons-container">
                <button class="update-form__save-button" id="savePet" type="submit" data-petId="${pet.id}">
                    <div class="update-form__save-button-bg">
                        <span class="update-form__save-button-text">Сохранить</span>
                    </div>
                </button>
                <button class="update-form__delete-button" id="deletePet" data-hystclose data-petId="${pet.id}">
                    <div class="update-form__delete-button-bg">
                        <span class="update-form__delete-button-text">Удалить</span>
                    </div>
                </button>
            </div>
        </form>                
    `;
};

const updatePetForm = (modalContainer, modal) => {
    modalContainer.querySelector("#updatePetForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const petId = event.submitter.dataset.petid;
        let pet = await updatePet(petId);
        modal.close();
        updatePetInGallery(pet);
    });
};

const deletePetForm = (modalContainer) => {
    modalContainer.querySelector("#deletePet").addEventListener("click", async (event) => {
        event.preventDefault();
        const petId = event.currentTarget.dataset.petid;
        await deletePet(petId);
        deletePetFromGallery(petId);
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
}

export default editPetItem;