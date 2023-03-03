import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(getFormInput, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  const formInput = {
    email: email.value,
    message: message.value,
  };
  console.log(formInput);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
});

function getFormInput() {
  const formInput = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formInput));
};

let stringInput = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
if (stringInput !== '') {
  parsedInput = JSON.parse(stringInput);
  email.value = parsedInput.email;
  message.value = parsedInput.message;
};