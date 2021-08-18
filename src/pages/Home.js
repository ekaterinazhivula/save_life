import "../styles/css/main.css";
import "../styles/css/hystmodal.css";
import cat from "../images/img/bg/desc_img_2.png";
import dog from "../images/img/bg/desc_img_1.png";
import section_1 from "../images/icons/sections/section_1.png";
import section_2 from "../images/icons/sections/section_2.png";
import section_3 from "../images/icons/sections/section_3.png";
import section_4 from "../images/icons/sections/section_4.png";
import section_5 from "../images/icons/sections/section_5.png";
import left_btn from "../images/icons/left-btn.png";
import right_btn from "../images/icons/right-btn.png";

import regeneratorRuntime from "regenerator-runtime";

const Home = async () => {
    const view = `
    <section id="description" >
    <div class="section-description">
        <div class="section-description__body">
            <h2 class="section-description__title">Тут большие добрые сердца помогают жить маленьким сердечкам</h2>
            <p class="section-description__text">
             Ежедневно в пункт временного содержания, путём отлова, попадают безнадзорные собаки и коты. По закону, у животных находящихся в САХе есть всего лишь несколько дней, чтобы найти прежнего или обрести нового хозяина. В противном случае невостребованных животных ждёт УСЫПЛЕНИЕ! Здесь вы сможете найти своего как потерявшегося, так и нового верного друга! 
            </p>
            <p class="section-description__text">
             Если нет возможности забрать хвостика, вы можете помочь нам финансово или другой материальной помощью. Еще нам всегда нужны добрые и отзывчивые люди - волонтеры, без вас очень трудно!
            </p>
        </div>
        <div class="section-description__image">
            <div class="section-description__image-sqr"></div>
            <div class="section-description__image-crc"></div>
            <div> <img src="${dog}" alt="dog" class="section-description__image_1"></div>
            <div class="section-description__image-crc_2"></div>
            <div> <img src="${cat}" alt="cat" class="section-description__image_2"></div>
        </div>
    </div>

</section>

<section id = "help" class ="help-nav">
    <h2 class ="help-nav__title">Как помочь?</h2>
    <ul class ="help-nav__list">
        <li class ="help-nav__item help-item">
            <a href="#home-help" class="help-item__link">
                <div class="help-item__img"><img src="${section_1}"></div>
                <div class="help-item__text">Дать хвостику дом или взять на передержку</div> 
            </a>
            </li>
        <li class ="help-nav__item help-item">
            <a href="#home-help" class="help-item__link">
                <div class="help-item__img"><img src="${section_2}"></div>
                <div class="help-item__text">Перечислить деньги в фонд помощи</div> 
            </a>
            </li>
        <li class ="help-nav__item help-item">
            <a href="#home-help" class="help-item__link">
                <div class="help-item__img"><img src="${section_3}"></div>
                <div class="help-item__text">Привезти корм, лекарства или другие вещи</div> 
            </a>
            </li>
        <li class ="help-nav__item help-item">
            <a href="#home-help" class="help-item__link">
                <div class="help-item__img"><img src="${section_4}"></div>
                <div class="help-item__text">Доставить животным еду или отвезти в больницу</div> 
            </a>
            </li>
        <li class ="help-nav__item help-item">
            <a href="#home-help" class="help-item__link">
                <div class="help-item__img"><img src="${section_5}"></div>
                <div class="help-item__text">Выгуливать, кормить, мыть или лечить хвостиков</div>
            </a>
            </li>
    </ul>
</section>

<section id="home-help" >
    <div class="create-form__line"></div>
    <div class="home-help__logo"></div>
    <div class="home-help__body">
        <div class="home-help__item home-item">
            <h3 class="home-item__title">Дом и любовь для хвостика</h3>
            <p class="home-item__text">Самая большая помощь - это спасти жизнь животному, забрать домой, или помочь хвостику с поиском дома. У наших подопечных очень мало времени. Рассказывайте друзья и и знакомым о наших хвостиках, возможно кому-то нужен будет именно такой друг.</p>
        </div>
        <div class="home-help__item">
            <h3 class="home-item__title">Передержка</h3>
            <p class="home-item__text">Когда животных ждет скорое усыпление, очень важно найти ему дом. Но пока дом и новые или старые хозяева разыскиваются, хвостику нужно где-то жить. Вы можете забрать к себе домой животных на время. Волонтеры, в свою очередь, обязательно помогут с поиском нового дома.
            </p>
        </div>
    </div>

    
</section>

<section id="wards-animals" class="gallery">
    <h2 class="gallery__title">Наши подопечные</h2>
    <a href="/#/gallery" class="gallery__link">Посмотреть всех<span class="gallery__counter"></span></a>
    <div id="carousel" class="carousel">
        <div class="gallery gallery-slider">
            <ul id="pets-gallery" class="gallery__list" style="margin-left: 0px"></ul>
            <button class="gallery-slider__left-btn"><img src="${left_btn}"></button>
            <button class="gallery-slider__right-btn"><img src="${right_btn}"></button>
            <button class="gallery__btn1" data-takeHome="#takeHomeModal">
                <div class="gallery__btn1-bg"><span class="gallery-btn1__text">Забрать домой</span></div>
            </button>
            <button class="gallery__btn2" data-pickUpForOverexposure="#pickUpForOverexposureModal">
                <div class="gallery__btn2-bg"><span class="gallery-btn2__text">Забрать на передержку</span></div>
            </button>  
        </div>
    </div>          
</section>

<!-- <section id="financial-help">
    <hr>
    <h3>Финансовая поддержка</h3>
    <p> Такая помощь необходима для оплаты стерилизации, прививок, лечения больных животных, покупка корма и других жизненно необходимых вещей.</p>
    <div>
        <h4>Расчетный счет в Банке</h4>
        <p>БООЗЖ "СПАСИ ЖИЗНЬ"<br>
            УНП: 590375680 <br>
            Текущий (расчетный) счет в BYN: <br>
            BY13ALFA30152555460010270000 <br>
            ЗАО 'Альфа-Банк'<br>
            БИК: ALFABY2X <br>
        </p>
        <button class="financial-help__btn">Быстрый платеж</button>
    </div>
    <div>
    <h4>Коробочки в городе</h4>
        <ol type="1"><p>Наши коробочки для пожертвований в г. Гродно:</p>
            <li>Зоомаркет «Зообазар», ул. Комарова, 26а; </li>
            <li>Учебный корпус ГГАУ,  ул. Волковича, 1;</li>
            <li>Парикмахерская «ПРИМАДОННА», ул. Гоголя, 11;</li>
            <li>Зоомаркет «Зообазар» ул. Пушкина, 31а;</li>
            <li>Гипермаркет «Евроопт», ул. Тимирязева, 8;</li>
            <li>Гипермаркет «Евроопт», ул. Янки Купалы, 82А;</li>
            <li>Фитнес-центр «АДРЕНАЛИН», ул. Подольная, д.37.</li>
        </ol>
    </div>
</section>

<section id="other-help">
    <hr>
    <h3>Прочая помощь</h3>
    <h4>Корма</h4>
    <ul>Можно помочь с покупкой и доставкой еды для хвостатых:
        <li>Быстроразваривающиеся крупы: дроблёная гречка, овсянка, сечка, овсяные/гречневые хлопья, не требующие варки;</li>
        <li>Сухие и влажные корма для собак и котов (кроме Рекс и Petboom),</li>
        <li> Фарш для собак, "БОБИКИ" и др.</li>
        <div>Вы можете помочь в приготовлении каш и их доставке!</div>
    </ul>
    <h4>Лекарства</h4>
    <p>Нам необходимы препараты: цефтриаксон (флакон по 0,5 г); новокаин (раствор для инъекций); гискан; гамавит; катозал; антитокс фоспренил; энтеросгель (паста); препараты от глистов, блох, клещей, для заживления ран.
    </p>
    <h4>Другие нужные вещи</h4>
    <ul>Для содержания животных всегда необходимы:
        <li>Ошейники, поводки, намордники;</li>
        <li>Опилки и солома в любом количестве;</li>
        <li>Посуда для животных и для приготовления еды - миски, кастрюли, ножи, черпаки и др.);</li>
        <li>Теплые вещи, лежаки для утепления и уюта животных;</li>
        <li>Будки.</li>
    </ul>
</section>

<section id="car-help">
    <hr>
    <h3>Автопомощь</h3>
    <p>Важной помощью будет транспортировка. Необходимо отвозить животных в ветеринарную клинику в сопровождении нашего волонтера или привозить еду. Если у вас есть автомобиль, немного свободного времени и доброе сердце - будем вам рады.</p>
</section>

<section id="volunteering">
    <hr>
    <h2>Волонтерство</h2>
    <p>Катастрофически не хватает добрых людей, которые готовы поделиться своим временем и окружить заботой животных. Много опыта не нужно, все расскажем и поможем! Если Вы располагаете несколькими часами свободного времени, проведите его с пользой! Главное условие - это Ваше совершеннолетие и любовь к животным!
        Часто животным не хватает обычных прогулок и игры, они сидят в клетках и грустят.</p>
</section>

<section class="news">
    <h2 class="news__title">Новости</h2>
    <ul class="news__list">
        <li class="news__item news-item">
          <h4 class="news-item__title">Заголовок новости</h4>
          <div class="news-item__text">
            <p>Найдены бедомные щенки по улице Горького д.56. Сегодня будут перевезены в вольеры САХа. Если у вас есть возможность взять на передержку или пристроить малышей - будем вам очень благодарны.</p>
            <a href="#" class="news-item__link">Читать дальше</a>
          </div>
          
        </li>
   
</section>
<section id="info">
    <h2>О нас</h2>
    <h3 id="contacts">Контакты</h3>
    <address></address>
</section>
-->

    <!--Current pet Modal-->
    <div class="hystmodal" id="myModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button>  
                <div id="pet-modal-container"></div>
            </div>
        </div> 
    </div>

    <!--Take home pet Modal-->
    <div class="hystmodal" id="takeHomeModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button>  
                <div id="take-home-modal-container"></div>
            </div>
        </div> 
    </div>

    <!--Pick up pet for overexposure Modal-->
    <div class="hystmodal" id="pickUpForOverexposureModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Закрыть</button>  
                <div id="pick-up-for-overexposure-modal-container"></div>
            </div>
        </div> 
    </div>
    `;

    return view;
}

export default Home;