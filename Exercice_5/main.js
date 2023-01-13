const images = document.querySelectorAll("img");
let currentIndex = 0;

function changeImage() {
  images.forEach(image => image.style.display = "none");
  images[currentIndex].style.display = "block";
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

images.forEach(image => image.addEventListener("mouseover", changeImage));
