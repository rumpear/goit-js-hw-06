const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('#value');

let counterValue = 0;

const decrementNum = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
  return counterValue;
};

const incrementNum = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
  return counterValue;
};

btnDecr.addEventListener('click', decrementNum);
btnIncr.addEventListener('click', incrementNum);

// * 2 способ
// const btnDecr = document.querySelector('button[data-action="decrement"]');
// const btnIncr = document.querySelector('button[data-action="increment"]');
// const counterRef = document.querySelector('#value');

// const counter = {
//   counterValue: 0,
//   decrementNum() {
//     this.counterValue -= 1;
//     counterRef.textContent = this.counterValue;
//   },
//   incrementNum() {
//     this.counterValue += 1;
//     counterRef.textContent = this.counterValue;
//   },
// };

// btnDecr.addEventListener('click', function () {
//   counter.decrementNum();
// });
// btnIncr.addEventListener('click', function () {
//   counter.incrementNum();
// });
