import {getAllPets} from '../utils/getDataLocal';
import editImg from "../images/img/gallery/pencil.svg";

const generatePetsGallery = async (pets) => {
  pets = pets == undefined ? await getAllPets() : pets;
  const petsGallery = document.querySelector("#pets-gallery-page");
  petsGallery.innerHTML = '';
  pets.forEach((pet) => {
    petsGallery.innerHTML += `
          <li class="gallery-page__item page-item" id="pet_${pet.id}">
            <div class="page-item__content">
              <img class="page-item__img" src="${pet.image}" alt="Ваш друг">
              <h4 class="page-item__name">${pet.nickName}</h4>
              <br>
              <hr>
              <div class="page-item__desc">${pet.gender}, ${pet.age}</div>
              <p class="page-item__text">${pet.shortSummary}</p>
              <a href="#" data-hystmodal="#myModal" class="page-item__link" data-petId="${pet.id}">Подробнее</a>
              <button class="gallery__edit-btn" data-editPet="#edit-item" data-petId="${pet.id}"><img src="${editImg}" class="edit-btn__img"></button>
            </div>          
          </li>
        `;
  });
};

const addPetToGallery = async (pet) => {
  const petsGallery = document.querySelector("#pets-gallery-page");
  petsGallery.innerHTML += `
          <li class="gallery-page__item page-item" id="pet_${pet.id}">
            <div class="page-item__content">
              <img class="page-item__img" src="${pet.image}" alt="Ваш друг">
              <h4 class="page-item__name">${pet.nickName}</h4>
              <br>
              <hr>
              <div class="page-item__desc">${pet.gender}, ${pet.age}</div>
              <p class="page-item__text">${pet.shortSummary}</p>
              <a href="#" data-hystmodal="#myModal" class="page-item__link" data-petId="${pet.id}">Подробнее</a>
              <button class="gallery__edit-btn" data-editPet="#edit-item" data-petId="${pet.id}"><img src="${editImg}" class="edit-btn__img"></button>
            </div>          
          </li>
        `;
};

const updatePetInGallery = async (pet) => {
  const petContainer = document.getElementById(`pet_${pet.id}`);
  petContainer.innerHTML = `
          <div class="page-item__content">
              <img class="page-item__img" src="${pet.image}" alt="Ваш друг">
              <h4 class="page-item__name">${pet.nickName}</h4>
              <br>
              <hr>
              <div class="page-item__desc">${pet.gender}, ${pet.age}</div>
              <p class="page-item__text">${pet.shortSummary}</p>
              <a href="#" data-hystmodal="#myModal" class="page-item__link" data-petId="${pet.id}">Подробнее</a>
              <button class="gallery__edit-btn" data-editPet="#edit-item" data-petId="${pet.id}"><img src="${editImg}" class="edit-btn__img"></button>
          </div>
        `;
};

const deletePetFromGallery = async (petId) => {
  const petContainer = document.getElementById(`pet_${petId}`).remove();
}

export {generatePetsGallery, addPetToGallery, updatePetInGallery, deletePetFromGallery};