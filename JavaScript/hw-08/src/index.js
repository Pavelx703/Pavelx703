"use strict";
import images from "./gallery-items.js";

const image = document.createElement("img");
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const modal = document.querySelector(".lightbox__content");
const lightboxImage = document.querySelector(".lightbox__image");

const galleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a class="gallery__link" href=${original}> <img class="gallery__image"
    src=${preview} data-source=${original} alt=${description}/></a></li>`;
const allGallery = images.reduce((acc, item) => acc + galleryItem(item), "");
gallery.insertAdjacentHTML("afterbegin", allGallery);

image.classList.add("gallery__image");

gallery.addEventListener("click", galleryClick);

modal.addEventListener("click", closeClick);

closeButton.addEventListener("click", closeLightbox);

function galleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  if (e.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    lightboxImage.src = e.target.getAttribute("data-source");
    lightboxImage.alt = e.target.alt;
  }
  window.addEventListener("keyup", closePressKey);
}

function closeLightbox(e) {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  window.removeEventListener("keyup", closePressKey);
}

function closeClick(click) {
  if (click.target === click.currentTarget) {
    closeLightbox();
  }
}

function closePressKey(pressKey) {
  if (pressKey.code === "Escape") {
    closeLightbox();
  }
}
