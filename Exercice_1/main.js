let image = document.getElementById("image1");
image.addEventListener("mouseover", changeImage);
image.addEventListener("mouseout", revertImage);

function changeImage() {
  image.src = "../Exercice_1/images/image1_2.jpg";
}

function revertImage() {
  image.src = "../Exercice_1/images/image1.jpg";
}