const inputFontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputFontSizeControl.addEventListener('input', onInputFontSizeChange);

function onInputFontSizeChange(event) {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
}
