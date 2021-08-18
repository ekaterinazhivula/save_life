import "../styles/css/gallery.css";
import "../styles/css/hystmodal.css";


const Gallery = async () => {
    const view = `

    <section id="gallery-page" >
    <div class="gallery-page__header">
        <h2 class="gallery-page__title">Наши подопечные</h2>
        <a href="/save_life/dist/index.html/#carousel" class="gallery-page__link">Вернуться назад</a>
        <select id="gallery-page__select" name="select" size="1">
            <option selected value="all">Коты и собаки</option>
            <option value="cat">Только коты</option>
            <option value="dog">Тольки собаки</option>
        </select>
    </div>  
    <div class="gallery-page">
        <ul id="pets-gallery-page" class="gallery-page__list"></ul>   
    </div>
    <div class="gallery-buttons-container">
        <button class="gallery__add-btn" data-newPet="#create-item">
            <div class="gallery__add-btn-bg">
                <span class="gallery__add-btn-text">Добавить</span>
            </div>
        </button>
    </div>

    </section>

    <!--Current pet Modal-->
    <div class="hystmodal" id="myModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button>  
                <div id="pet-modal-container"></div>
            </div>
        </div> 
    </div>

    <!--Create pet Modal-->
    <div class="hystmodal" id="create-item" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button> 
                <div id="create-item-container"></div> 
            </div>
        </div> 
    </div>

    <!--Edit pet Modal-->
    <div class="hystmodal" id="edit-item" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button> 
                <div id="edit-item-container"></div> 
            </div>
        </div> 
    </div>


    `;
    return view;
};
export default Gallery;