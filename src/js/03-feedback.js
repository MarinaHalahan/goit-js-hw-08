const throttle = require('lodash.throttle');


const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector("input");
const textareaRef = document.querySelector("textarea");



formRef.addEventListener("input", throttle(onFormInput,500));
formRef.addEventListener("submit", onFormSubmit);

getFormData();

  

function onFormInput(event) {
  
  const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));

};

function onFormSubmit(event) {
  event.preventDefault();
  constDataRequired = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (!constDataRequired.email || !constDataRequired.message) {
    return;
  }

  console.log(localStorage.getItem("feedback-form-state"));
  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
  
};



function getFormData() {
    const savedFormData = localStorage.getItem("feedback-form-state");
    

  if (savedFormData) {
      const dataFromLocalStorage = JSON.parse(savedFormData);
     
        inputRef.value = dataFromLocalStorage.email||'';
        textareaRef.value = dataFromLocalStorage.message||'';
    }
   
};








