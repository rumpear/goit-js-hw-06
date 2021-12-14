const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener(
  'input',
  event => (outputName.textContent = event.currentTarget.value)
);

// * v2
// inputName.addEventListener('input', spanChange);
// function spanChange(event) {
//   outputName.textContent = event.currentTarget.value;
//   console.log(event.currentTarget.value);
// }
