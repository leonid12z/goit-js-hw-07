import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
const galleryMarkup = elementGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onGalleryClick);

function elementGalleryMarkup(items) {
   return galleryItems.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
   }).join('');
};

function onGalleryClick(sample) {

   sample.preventDefault();

   const isGalleryImageLi = sample.target.classList.contains('gallery__image')
   if (!isGalleryImageLi) {
      return;
   };
   
   let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
};