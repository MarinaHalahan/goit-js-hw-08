const throttle = require('lodash.throttle');


const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector("input");
const textareaRef = document.querySelector("textarea");

getFormData();

formRef.addEventListener("input", throttle(onFormInput,500));
formRef.addEventListener("submit", onFormSubmit);

  const formData = {
  
};
  

function onFormInput(event) {

  formData[event.target.name]= event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));

};

function onFormSubmit(event) {
  event.preventDefault();

  if (localStorage.getItem("feedback-form-state")) {
    console.log(localStorage.getItem("feedback-form-state"))
  };
      
 localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
  
};



function getFormData() {
    const savedFormData = localStorage.getItem("feedback-form-state");
    const dataFromLocalStorage = JSON.parse(savedFormData);

    if (dataFromLocalStorage===null) {
      return;
       
    }
    inputRef.value = dataFromLocalStorage.email||'';
        textareaRef.value = dataFromLocalStorage.message||'';
};









