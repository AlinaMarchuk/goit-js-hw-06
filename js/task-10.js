const input = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

let width = 30;
let height = 30;

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', handleDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const arrBoxes = [];
  const amount = input.value;

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
}

function handleDestroy() {
  divBoxes.innerHTML = '';
  input.value = '';
  width = 30;
  height = 30;
}
