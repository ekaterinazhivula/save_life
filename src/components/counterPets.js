const counterPets = () => {
    const currentCounter = document.querySelector('.gallery__counter');
    const listPets = document.querySelector('.gallery__list');
    const currentPets = listPets.getElementsByClassName('gallery-item').length;
    currentCounter.innerHTML = ` (${currentPets})`;
}


export default counterPets;