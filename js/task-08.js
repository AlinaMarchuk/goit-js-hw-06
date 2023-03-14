const form = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value);

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    form.reset();
  }
};
form.addEventListener('submit', handleSubmit);
