const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClickChangeColorBody);

function onClickChangeColorBody() {
  // const a = (bodyRef.style.backgroundColor = getRandomHexColor());
  // colorSpan.textContent = a;
  // console.log((colorSpan.textContent = a));

  bodyRef.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
