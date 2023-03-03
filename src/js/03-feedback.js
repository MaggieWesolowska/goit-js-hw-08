import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(getFormInput, 500));

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formElements = {
        email: email.value,
        message: message.value,
    }
    console.log(formElements);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset()
})

function getFormInput() {
    const formElements = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formElements));
}

    let parsedInput = localStorage.getItem(LOCAL_STORAGE_KEY) ||'';
         if (parsedInput !== '') {
            parsedInput = JSON.parse(parsedInput);
            email.value = parsedInput.email;
            message.value = parsedInput.message;
    }
