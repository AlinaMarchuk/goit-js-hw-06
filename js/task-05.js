const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleInput = event => {
  if (event.currentTarget.value === '') {
    output.textContent = 'Anonymus';
  } else {
    output.textContent = event.currentTarget.value;
  }
  console.log(event);
};
textInput.addEventListener('input', handleInput);
