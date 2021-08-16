import {getAllPets} from '../utils/getDataLocal';

const generatePetsGallery = async (pets) => {
  pets = pets == undefined ? await getAllPets() : pets;
  const petsGallery = document.querySelector("#pets-gallery-page");
  petsGallery.innerHTML = '';
  pets.forEach((pet) => {
    petsGallery.innerHTML += `
          <li class="gallery-page__item page-item">
            <div class="page-item__content">
              <img class="page-item__img" src="data:image/png;base64, ${pet.image}" alt="Ваш друг">
              <h4 class="page-item__name">${pet.nickName}</h4>
              <br>
              <hr>
              <div class="page-item__desc">${pet.gender}, ${pet.age}</div>
              <p class="page-item__text">${pet.shortSummary}</p>
              <a href="#" data-hystmodal="#myModal" class="page-item__link" data-petId="${pet.id}">Подробнее</a>
            </div>          
          </li>
        `;
  });
};

export default generatePetsGallery;