const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', e => {
if (e.target.value.length === Number(e.target.dataset.length)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
    return;
}
e.target.classList.add('invalid');
e.target.classList.remove('valid');
    
})