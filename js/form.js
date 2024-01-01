const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

const checkInput = () => {

const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const firstnameValue = firstname.value.trim();
const lastnameValue = lastname.value.trim();

if(firstnameValue === ''){
    setErrorFor(firstname, 'firstname cannot be blank');
}
else{
    setSuccessFor(firstname);
}
//lastname validation
if(lastnameValue === ''){
    setErrorFor(lastname, 'lastname cannot be blank');
}
else{
    setSuccessFor(lastname);
}
//username validation
if(usernameValue === ''){
    setErrorFor(username, 'username cannot be blank');
}
else if(usernameValue.length < 6){
    setErrorFor(username, 'username must be at least 6 character');
}
else{
    setSuccessFor(username);
}
//email validation
if(emailValue === ''){
    setErrorFor(email, 'email can not be blank');
}
else{
    setSuccessFor(email);
}

//password validation
if(passwordValue === ''){
    setErrorFor(password, 'password can not be blank');
}
else if(passwordValue.length < 8){
    setErrorFor(password, 'password must be at least 8 character');
}
else{
    setSuccessFor(password);
}
//confirm password validation
if(password2Value === ''){
    setErrorFor(password2, 'confirm password can not be blank');
}
else if(password2Value.length < 8){
    setErrorFor(password2, 'password must be at least 8 character');
}
else if(password2Value !== passwordValue){
    setErrorFor(password2, 'password does not match')
}
else{
    setSuccessFor(password2);
}
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error messae inside small
    small.innerText = message;

    formControl.className = 'form-control error'
}

const setSuccessFor = (input) => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}