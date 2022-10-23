import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.addEventListener("click", onImgClick);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(item) {
  return item
    .map(
      (i) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${i.original}">
      <img
      class="gallery__image"
      src="${i.preview}"
      data-source="${i.original}"
      alt="${i.description}"
      />
    </a>
 </div> `
    )
    .join(" ");
}

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  showInstance(evt);
}

function showInstance(evt) {
  const imgUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
      <img src="${imgUrl}" width="800" height="600">
      `,
    {
      onClose: () => document.removeEventListener("keydown", closeByEscape),
    }
  );

  instance.show();

  function closeByEscape(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  document.addEventListener("keydown", closeByEscape);
}

// function onClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   showInstance(evt);
// }

// function showInstance(evt) {
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}"/>`
//   );

//   instance.show();

//   const closeButton = (evt) => {
//     if (evt.code === "Escape") {
//       instance.close();
//       document.removeEventListener("keydown", closeButton);
//       console.log("j");
//     }
//     return;
//   };

//   document.addEventListener("keydown", closeButton);
// }
