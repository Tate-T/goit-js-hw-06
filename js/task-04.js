const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
decrementBtn.addEventListener('click', e => {
    if (e.currentTarget) {
    counterValue -= 1;
    };
    value.textContent = counterValue;
});
incrementBtn.addEventListener('click', e => {
    if (e.currentTarget) {
        counterValue += 1;
        };
        value.textContent = counterValue;
});