import {getAllPets} from '../utils/getDataLocal';

const generateAllPets = async () => {
  const pets = await getAllPets();

  pets.forEach((pet) => {
    const petsGallery = document.querySelector("#pets-gallery");
    petsGallery.innerHTML += `
          <li class="gallery__item gallery-item" data-petId="${pet.id}">
            <img class="gallery-item__img" src="${pet.image}" alt="Ваш друг">
            <h4 class="gallery-item__name">${pet.nickName}</h4>
            <br>
            <hr>
            <div class="gallery-item__desc">${pet.gender}, ${pet.age}</div>
            <p class="gallery-item__text">${pet.shortSummary}</p>
            <a href="#" data-hystmodal="#myModal" class="gallery-item__link" data-petId="${pet.id}">Подробнее</a>
          </li>
        `;
  });
};

export default generateAllPets;