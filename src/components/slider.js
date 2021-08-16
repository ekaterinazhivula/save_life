 /* этот код помечает картинки, для удобства разработки */
 const slider = () => {
     /*  let i = 1;
      for (let li of carousel.querySelectorAll('li')) {
          //li.style.position = 'relative';
          //li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
          i++;
      }
      */
  /* конфигурация */
     let width = 1; // ширина картинки
     //let count = 1; // видимое количество изображений */ 

     let list = carousel.querySelector('ul');
     let listElems = list.getElementsByTagName('li');

     let position = 1; // положение ленты прокрутки

     if (list.style.marginLeft === "0px") {
         listElems[0].style.opacity = 0.5;
         listElems[2].style.opacity = 0.5;
     }


     carousel.querySelector('.gallery-slider__left-btn').onclick = function () {
         // сдвиг влево
         //position += width * count;
         // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
         position = Math.min(position, 0);
         list.style.marginLeft = position + 'px';

         let arrList = [...listElems];
         arrList.unshift(arrList[arrList.length - 1]);
         arrList.pop();
         arrList.forEach(element => {
             list.appendChild(element);
         });
         for (let i = 0; i < listElems.length; i++) {
            listElems[i].style.opacity = 0.5;
            listElems[i + 2].style.opacity = 0.5;
            listElems[i + 1].style.opacity = 1;
            break;
        }
     };

     carousel.querySelector('.gallery-slider__right-btn').onclick = function () {
         // сдвиг вправо
         //position -= width * count;
         position = Math.max(position, -width);
         /*        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
                position = Math.max(position, -width * (listElems.length - count)); */
         list.style.marginLeft = position + 'px';

         list.appendChild(listElems[0]);

         for (let i = 0; i < listElems.length; i++) {
             listElems[i].style.opacity = 0.5;
             listElems[i + 2].style.opacity = 0.5;
             listElems[i + 1].style.opacity = 1;
             break;
         }
     };
 };
 export default slider;