// import '../css/03-feedback.css';
import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input').value;
const message = document.querySelector('textarea').value;
const submitBtn = document.querySelector('button');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formInput = {
    email,
    message,
}

form.addEventListener('input', getFormInput);

submitBtn.addEventListener('submit', () => {
    form.addEventListener('input', getFormInput);
    console.log(formInput.value);
    form.reset()
})

function getFormInput(event) {
    event.preventDefault();
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formInput));
    saveFormInput();
    // throttle(storage, 500);
}
 
function saveFormInput() {
    const savedFormInput = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
    email = LOCAL_STORAGE_KEY.email.value;
    message = LOCAL_STORAGE_KEY.message.value;
}






