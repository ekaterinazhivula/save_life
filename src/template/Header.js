import "../styles/css/main.css";
import bg_img1 from "../images/img/bg/bg_text_1.png";
import bg_img2 from "../images/img/bg/bg_text_2.png";
import bg_img3 from "../images/img/bg/bg_text_3.png";
import cat_bg from "../images/img/bg/cat_bg.png";

const Header = () => {
    const view = `
    <div class="header-img__dog"></div>
    <div class="header-img">
        <img src="${cat_bg}" alt="cat" class="header-img__cat">
    </div>
    <nav class="header-nav"> 
        <a class="header-nav__link nav__link--active" href="#help">Как помочь</a>
        <a class="header-nav__link" href="#wards-animals">Подопечные животные</a>
        <a class="header-nav__link" href="#info">О нас</a>
        <a class="header-nav__link" href="#contacts">Контакты</a>
    </nav>
    <div class="header-socials">
        <a href="#" class="socials__link socials__link--tw">Twitter</a>
        <a href="#" class="socials__link socials__link--fb">Facebook</a>
        <a href="#" class="socials__link socials__link--ok">Одноклассники</a>
    </div>
    <div class="header-promo">
    <h1 class="header-promo__title">СПАСИ ЖИЗНЬ</h1>

    <div class="header-promo__subtitle">Благотворительное общественное объединение защиты животных</div>
    <p class="header-promo__text">Наша цель: помощь бездомным животным. Мы поддерживаем хвостиков, которые оказались в пункте отлова и временного содержания. </p>
    <p class="header-promo__slogan">У животных, находящихся в пункте отлова и временного содержания бродячих животных, есть всего несколько дней до усыпления...</p>
    </div>
    <div class="slogan-text_1" ><img src="${bg_img1}" ></div>
    <div class="slogan-text_2" ><img src="${bg_img2}" ></div>
    <div class="slogan-text_3" ><img src="${bg_img3}" ></div>
    <button class="header-promo__btn">
        <div class="header-promo__btn-bg1"><div class="header-promo__btn-bg2"> <span class="promo-btn__text">Хочу помочь</span></div></div> 
    </button>
    `;
    return view;
}

export default Header;