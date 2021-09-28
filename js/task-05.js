const inputText = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputText.addEventListener('input', e => {
    if (e.target.value !== '') {
    userName.textContent = e.target.value;
    return };
    userName.textContent = 'Anonymous';
})