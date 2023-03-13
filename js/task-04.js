let counterValue = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');

const handleClickDec = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const handleClickInc = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

buttonDec.addEventListener('click', handleClickDec);
buttonInc.addEventListener('click', handleClickInc);
