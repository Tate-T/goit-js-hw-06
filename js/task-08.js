const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', e => {
    e.preventDefault();
    const {
        elements: { email, password }
       } = e.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены');
    };

    const user = {
        email: email.value,
        password: password.value,
      };

      console.log(user);
      
    e.currentTarget.reset();
})

   
