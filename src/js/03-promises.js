const submitBtn = document.querySelector('[type="submit"]');
const delayInput = document.querySelector('[name=delay]');
const stepInput = document.querySelector('[name=step]');
const amoountInput = document.querySelector('[name=amount]');


  

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const timerId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      const value = delayInput.value;
      console.log(value);
  

      if (shouldResolve) {
        resolve(1, value);
      } else {
        reject(1, value);
      }
    }, 1000);
  });
  

  promise.then((position, delay) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay} ms`);
  }); 
}



submitBtn.addEventListener('click', createPromise);



