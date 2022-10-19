import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <div class="gallery__item">
 <a class="gallery__link" href="${original}">
     <img
     src="${preview}"
     class="gallery__image"
     alt="${description}"
     data-source="${original}"
     />
 </a>
 </div> `
    )
    .join(" ");
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// ================================================================
// const galleryEl = document.querySelector(".gallery");

// const galleryList = galleryItems
//   .map(({ preview, original, description }) => {
//       return
// `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img class="gallery_image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}" />
//   </a>
// </div>`;
//   })
//   .join(" ");

// galleryEl.insertAdjacentHTML("beforeend", galleryList);

// =================================================================
// const onClickImage = (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}"/>`
//   );
//   instance.show();
//   const closeButton = (evt) => {
//     if (evt.code === "Escape") {
//       instance.close();
//     }
//   };
//   document.addEventListener("keydown", closeButton, { once: true });
// };
// galleryRef.addEventListener("click", onClickImage);

// =============================================================================
// galleryRef.addEventListener("click", onClick);
// function onClick(evt) {
//   preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}"/>`
//   );
//   instance.show();

//   galleryRef.addEventListener("keydown", (evt) => {
//     if (evt.code === "Escape") {
//       instance.close();
//     }
//   });
// }

function onClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`
  );
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance.show();
  const closeButton = (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  };
  document.addEventListener("keydown", closeButton, { once: true });
}
galleryRef.addEventListener("click", onClick);
