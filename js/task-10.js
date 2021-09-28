function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDeleteEl = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('input');


btnCreateEl.addEventListener("click", createBegin);

function createBegin() {
    const amount = Number(inputEl.value);
createBoxes(amount);
}

function createBoxes(amount) {
    const newDivx = [];
    let currentSize = 30;
    for (let i = 0; i < amount; i += 1) {
        const colour = getRandomHexColor();

        const divNewEl = document.createElement("div");

        divNewEl.style.width = `${currentSize}px`;
        divNewEl.style.height = `${currentSize}px`;
        divNewEl.style.backgroundColor = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
        newDivx.push(divNewEl);

        currentSize +=10;
    }
    divEl.append(...newDivx);
}

// function getColour() {
//     const colourArrey = [];
//     const firstRandomNumber = Number((Math.random() * (255 - 0) + 0).toFixed(0));
//     const secondRandomNumber = Number((Math.random() * (255 - 0) + 0).toFixed(0));
//     const thirdRandomNumber = Number((Math.random() * (255 - 0) + 0).toFixed(0));
// colourArrey.push(firstRandomNumber, secondRandomNumber, thirdRandomNumber);
// return colourArrey
// }
