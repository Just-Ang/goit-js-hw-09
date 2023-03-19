import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayInput = document.querySelector('[name=delay]');
const stepInput = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name=amount]');

formEl.addEventListener('click', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  let delay = parseInt(delayInput.value);
  //console.log(delay);
  let position = 0;
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  for (let i = amount; i >= 1; i--) {
    position += 1;
    createPromise(position, delay + (amount - i) * step)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    const timerId = setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

