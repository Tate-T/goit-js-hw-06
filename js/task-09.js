function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

colorBtn.addEventListener('click', e => {
  getRandomHexColor(colorRef)
})