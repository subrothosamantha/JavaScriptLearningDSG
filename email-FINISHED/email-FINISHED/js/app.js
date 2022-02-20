//variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


//eventlistners

eventListeners();

function eventListeners(){
     //appInit
     document.addEventListener('DOMContentLoaded',appInit());

     //validate the field

     email.addEventListener('blur',validateField);
     subject.addEventListener('blur',validateField);
     message.addEventListener('blur',validateField); 
     resetBtn.addEventListener('click',resetForm);
     sendEmailForm.addEventListener('submit',sendEmail)
}





//functions

function appInit(){
    //disable sendButton
    sendBtn.disabled = true;
}



function sendEmail(e){
     console.log(e.type);
}



function validateField(){
    // this.style.borderBottomColor = 'red';
     let errors;
    //validating if fields are empty or not
     validateLength(this);

    //validating if email entered is valid or not

    if(this.type === 'email')
    emailValidate(this);

    //will fetch all the errors in form
    errors = document.querySelectorAll('.error');
    if(email.value !== '' && message.value !== '' && subject.value !== ''){
         if(errors.length === 0){
               sendBtn.disabled = false;
         }
    }
}


function validateLength(field) {
     if(field.value.length > 0 ) {
          field.style.borderBottomColor = 'green';
          field.classList.remove('error');
     } else {
          field.style.borderBottomColor = 'red';
          field.classList.add('error');
     }
}


//function to validate email

function emailValidate(field){
     let emailText = field.value;
     if(emailText.indexOf('@') !== -1){
          field.style.borderBottomColor = 'green';
          field.classList.remove('error');
     }
     else{
          field.style.borderBottomColor = 'red';
          field.classList.add('error');
     }
}

function resetForm(){
     sendEmailForm.reset();
}