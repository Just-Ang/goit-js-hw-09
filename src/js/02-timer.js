import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');
const divEl = document.querySelector('.timer');

startBtn.setAttribute('disabled', 'true');
divEl.style.cssText =
  'font-size: 60px; display: flex; justify-content: space-around; margin-top: 100px; margin-left: 100px; margin-right : 100px';

let futureDate = 0;

flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureDate = selectedDates[0];
    const date = new Date();

    if (selectedDates[0] < date) {
     Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = 'true';
      return;
    }
    startBtn.removeAttribute('disabled');
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
    startBtn.setAttribute('disabled', 'true');
  const timerId = setInterval(() => {
    const dateNow = new Date().getTime();
    console.log(dateNow);
    const diff = futureDate - dateNow;
    //console.log(diff);
    const textTime = convertMs(diff);
    if (diff < 1000) {
      clearInterval(timerId);
      startBtn.removeAttribute('disabled');
    }
    secondEl.textContent = textTime.seconds;
    minuteEl.textContent = textTime.minutes;
    hourEl.textContent = textTime.hours;
    dayEl.textContent = textTime.days;
  }, 1000);

}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
