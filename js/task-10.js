function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

let number = 0;

const handleInput = event => {
  number = event.currentTarget.value;
};

const handleDestroy = () => {
  divBoxes.innerHTML = '';
  input.value = '';
};

const createBoxes = amount => {
  const arrBoxes = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(div);
    width += 10;
    height += 10;
  }
  divBoxes.append(...arrBoxes);
};

input.addEventListener('input', handleInput);
btnCreate.addEventListener('click', () => {
  createBoxes(number);
});
btnDestroy.addEventListener('click', handleDestroy);
