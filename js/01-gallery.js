import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(item) {
  return item
    .map(
      (i) =>
        ` <div class="gallery__item">
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

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  showInstance(evt);
}

function showInstance(evt) {
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`
  );

  instance.show();
  const closeButton = (evt) => {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  };

  document.addEventListener("keydown", closeButton, { once: true });
}

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
