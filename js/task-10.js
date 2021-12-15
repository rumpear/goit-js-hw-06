const boxesDiv = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

inputRef.addEventListener('blur', getAmount);

function getAmount(event) {
  createBoxes(Number(event.currentTarget.value));
  event.currentTarget.value = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i++) {
    divWidth += 10;
    divHeight += 10;

    const newBoxDiv = document.createElement('div');

    newBoxDiv.style.backgroundColor = getRandomHexColor();
    newBoxDiv.style.width = divWidth + 'px';
    newBoxDiv.style.height = divHeight + 'px';
    newBoxDiv.style.margin = '5px';

    boxesDiv.append(newBoxDiv);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
