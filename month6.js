import { photo } from "./september.js";

const content = document.getElementById("image-container");

function render() {
  let section = "";
  const allPhoto = photo;
  for (let photos of allPhoto) {
    section += `
    
    <div class="fred-item">
    <a href="#" class="fred-link">
    <img src="${photos.photo}">
    <p class="date">${photos.date}</p>
    </div>
    </a>
    </div>
    `;
  }
  content.innerHTML = section;
}

render();

// Get all images in the gallery
const images = document.querySelectorAll(".fred-item img");

// Add a click event listener to each image
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Create a new image element to display the full-size image
    const fullSizeImage = document.createElement("img");
    fullSizeImage.src = image.src;
    fullSizeImage.alt = image.alt;
    fullSizeImage.classList.add("full-size");

    // Create a div to act as a modal overlay
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Add the full-size image and modal to the document
    modal.appendChild(fullSizeImage);
    document.body.appendChild(modal);

    // Add a click event listener to the modal to close it when clicked
    modal.addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  });
});

const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("navigate");
});
