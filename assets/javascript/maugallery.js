const buttons = document.querySelectorAll(".buttons button");
const images = document.querySelectorAll(".image-container .gallery-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    FilterButton(button.getAttribute("data-btn"));
    ActiveButton(button);
  });
});

function FilterButton(category) {
  images.forEach((item) => {
    const dataImg = item.getAttribute("data-img");
    if (category === "0" || dataImg === category) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
}

function ActiveButton(clickedButton) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  clickedButton.classList.add("active");
}
