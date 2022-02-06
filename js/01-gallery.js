import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = elementGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryClick);


function elementGalleryMarkup(items) {
   return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
   }).join('');
};

function onGalleryClick(sample) {

   sample.preventDefault();

   const isGalleryImageLi = sample.target.classList.contains('gallery__image');
   if (!isGalleryImageLi) {
      return;
   };

   const instance = basicLightbox.create(`<img src="assets/images/image.png" width="800" height="600">`, {
   
      onShow: instance => {
         ('onShow', instance);
         window.addEventListener('keydown', onSamplePress);
      },
      onClose: instance => ('onClose', instance),
   });  

   function onSamplePress(event) {
      if (event.code === 'Escape') {
         instance.close();
      }
   };

   instance.element().querySelector('img').src = sample.target.getAttribute('data-source');
   instance.show();
};

console.log(galleryItems);

