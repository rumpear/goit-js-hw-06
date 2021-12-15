const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   const formData = {
//     email,
//     password,
//   };

//   console.log(formData.email.value, formData.password.value);
// }

// console.log(loginFormRef);

// * alert
function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email,
    password,
  };

  if (formData.email.value === '' || formData.password.value === '') {
    alert('Все поля должны быть заполнены');
  } else {
    console.log(
      `The email is: ${formData.email.value}. The password is: ${formData.password.value}`
    );
    loginFormRef.reset();
  }
}

// event.currentTarget.elements.email.value === '' ||
// event.currentTarget.elements.password.value === ''
