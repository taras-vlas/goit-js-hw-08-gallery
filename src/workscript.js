
import galleryItems from "./gallery-items.js"; /* імпорт функції default в ІНШИЙ файл script
                                                 "d:/GitHub/goit-js-hw-08-gallery/src/gallery-items" */
//console.log(galleryItems);  /* galleryItems[0] */

const galleryRef = document.querySelector(".gallery");  /*шукаємо список .gallery зі значення елем. по id */
const lightBoxRef = document.querySelector(".lightbox");         /*modal */
const substImgRef = document.querySelector(".lightbox__image");  /*замінник */
const closeBtnRef = document.querySelector("button[data-action='close-lightbox']");
  const overlayRef = document.querySelector(".lightbox__overlay");

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
    console.log("acc", acc);
    return acc += img;
}, '');
            //       <span class="gallery__icon">
            //          <i class="material-icons">zoom_out_map</i>
            //       </span>

            // </a>


galleryRef.insertAdjacentHTML('afterbegin', imagesElement);

const openLightBox = (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    event.preventDefault();                /* (event)  */
    lightBoxRef.classList.add('is-open');
    /*  ('src')  */
    substImgRef.setAttribute('src', `${event.target.getAttribute('data-source')}`);
    substImgRef.setAttribute('alt', `${event.target.getAttribute('alt')}`);
}

const closeLightBox = (event) => {
    if (lightBoxRef.classList.contains('is-open')) {
 // if (lightBoxRef.classList.contains('is-open') && event.target !== substImgRef) {
        lightBoxRef.classList.remove('is-open');
     // При закрытии попапа нужно очищать значение атрибутов src, alt
        substImgRef.removeAttribute('src', `${event.target.removeAttribute('data-source')}`);
        substImgRef.removeAttribute('alt', `${event.target.removeAttribute('alt')}`);
    }
    return;
}

galleryRef.addEventListener('click', openLightBox);
closeBtnRef.addEventListener('click', closeLightBox);

  overlayRef.addEventListener('click', closeLightBox);


  const closeByKey = (event) => {
      if (event.keyCode === 27);       /* код кл. 'Escape'  https://keycode.info//*/ 
    lightBoxRef.classList.remove('is-open');
  }

  document.addEventListener('keydown', closeByKey);



  const rightArrowKey = (event) => {
    if (event.keyCode === 39)        /* код кл. 'rightArrow'  https://keycode.info//*/ 
      substImgRef.removeAttribute('src', `${event.target.removeAttribute('data-source')}`,'alt', `${event.target.removeAttribute('alt')}`);
     //ImgRef.setAttribute('src', `${event.current.target.getAttribute('data-source')}`);   
  }
  
//}         //  galleryItems[0]

  const leftArrowKey = (event) => {
    if (event.keyCode === 37)        /* код кл. 'leftArrow'  https://keycode.info//*/ 
    //lightBoxRef.classList.remove('is-open');
     substImgRef.removeAttribute('src', `${event.target.removeAttribute('data-source')}`); 
  }