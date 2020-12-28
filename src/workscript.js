
import {default as galleryItems} from "./gallery-items.js"; /* імпорт функції default в ІНШИЙ файл script
                                                 "d:/GitHub/goit-js-hw-08-gallery/src/gallery-items" */

const galleryRef = document.querySelector(".gallery");  /*шукаємо список .gallery зі значення елем. по id */
const lightBoxRef = document.querySelector(".lightbox");
const substImgRef = document.querySelector(".lightbox__image");                    /*замінник */
const closeBtnRef = document.querySelector("button[data-action='close-lightbox']");

/*Ссилка на оригінал зображ. - data-атрибут source. А в href ссилки (це для доступності) */
const imagesElement = galleryItems.reduce((acc, img) => {    
   img = (`<li class="gallery__item">   
            <a
                class="gallery__link"
                href="${img.original}"
                >
                    <img
                    class="gallery__image"
                    src="${img.preview}"
                    data-source="${img.original}"       
                    alt='${img.description}'
                    />
            </a>
        </li>`);
    return acc += img;
}, '');


galleryRef.insertAdjacentHTML('afterbegin', imagesElement);


const openLightBox = (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    event.preventDefault();                /* (event)  */
    lightBoxRef.classList.add('is-open');
    /*  ('src')  */
    substImgRef.setAttribute('src', `${event.target.getAttribute('data-source')}`);
}

const closeLightBox = (event) => {
    if (lightBoxRef.classList.contains('is-open')) {
        lightBoxRef.classList.remove('is-open');
        }
    return;
}

galleryRef.addEventListener('click', openLightBox);
closeBtnRef.addEventListener('click', closeLightBox);

