const inputValidationRef = document.querySelector('#validation-input');
const inputDataLength = Number(inputValidationRef.getAttribute('data-length'));

inputValidationRef.addEventListener('blur', onInputBlurCheck);

function onInputBlurCheck(event) {
  if (event.currentTarget.value.length === inputDataLength) {
    inputValidationRef.classList.remove('invalid');
    inputValidationRef.classList.add('valid');
  } else {
    inputValidationRef.classList.remove('valid');
    inputValidationRef.classList.add('invalid');
  }
}
