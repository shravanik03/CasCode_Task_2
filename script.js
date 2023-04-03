const sform = document.querySelector('form');
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const userDob = document.querySelector('#date');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const userAdd = document.querySelector('#street');
const userCity = document.querySelector('#city');
const userState = document.querySelector('#state');
const userPin = document.querySelector('#pin');
const contact = document.querySelector("#preferred");
const userAge = document.querySelector('#age');
const userGender = document.querySelector('#gender');
const disease = document.querySelector('#diseases');
const medication = document.querySelector('#medications');
const allergy = document.querySelector('#food-allergies');
const foodtext = document.querySelector("#food-allergy-describe");
const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const userBmi = document.querySelector('#user-bmi');
const fa1 = document.querySelector("#food-yes");
const fa2 = document.querySelector("#food-no");
const exerciseTimes = document.querySelector('#exercise-time');
const exType = document.querySelector('#exercise-kind');
const exUnable = document.querySelector('#unable-things');
const userRating = document.querySelector('.rate');
const doExercise = document.querySelector('#do-exercise');
const smoking = document.querySelector('#smoking');
const sleep = document.querySelector('#sleeping');

function validateForm() {
    //Check if Details are valid
    validName();
    validateField(userDob);
    validEmail();
    validPhone();
    validateField(userAdd);
    validateField(userCity);
    validateField(userState);
    validPin();
    checkedContact();
    checkNumber(userAge, "Enter valid age");
    checkGender()
    //Check if Medical Details are valid
    validDisease();
    validMedical();
    validFoodRadio();
    describeit();
    //Check if BMI Details are valid
    checkNumber(userWeight, "Enter valid weight");
    checkNumber(userHeight, "Enter valid height");
    checkNumber(userBmi, "Enter a valid BMI");
    //Check if Exercise Details are valid
    checkNumber(exerciseTimes, "Enter valid information");
    validateField(exType);
    validateField(exUnable);
    checkRating();
    checkExercise();
    checkSmoking();
    checkSleeping();
}

sform.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});


function validName() {

    let userFirstName = firstName.value.trim();
    let userLastName = lastName.value.trim();
    if (userFirstName == '' && userLastName == '') {
        setError(firstName, "First Name not entered");
        setError(lastName, "Last Name not entered");
        return false;
    }
    else if (userFirstName != '' && userLastName == '') {
        setError(lastName, "Last Name not entered");
        return false;
    }
    else if (userFirstName == '' && userLastName != '') {
        setError(firstName, "First Name not entered");
        return false;
    }
    else {
        setSuccess(firstName);
        setSuccess(lastName);
        return true;
    }
}

function validateField(element) {
    let val = element.value.trim();
    if (val == "") {
        setError(element, "");
        return false;
    }
    else {
        setSuccess(element);
        return true;
    }
}

function validEmail() {
    let email = userEmail.value.trim();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
        setError(userEmail, "");
        return false;
    }
    else {
        if (pattern.test(email)) {
            setSuccess(userEmail);
        }
        else {
            setError(userEmail, "Enter a valid email address");
        }
    }
}

function validPhone() {
    let phone = userPhone.value.trim();
    if (phone.length == 0) {
        setError(userPhone, "");
    }
    else if (phone.length == 10) {
        setSuccess(userPhone);
    }
    else {
        setError(userPhone, "Enter a valid phone number");
    }
}

function validPin() {
    let pincode = userPin.value.trim();
    pincode = pincode.replaceAll(" ", '');
    if (pincode.length == 0) {
        setError(userPin, "");
    }
    else if (pincode.length == 6) {
        setSuccess(userPin);
    }
    else {
        setError(userPin, "Enter a valid pincode");
    }
}

const call = document.querySelector("#Calling");
const mail = document.querySelector("#Email");
const textMsg = document.querySelector("#TextMessage");
const other = document.querySelector("#Other");

function checkedContact() {
    if (call.checked == false && mail.checked == false && textMsg.checked == false && other.checked == false) {
        setError(contact, "");
        return false;
    }
    else {
        setSuccess(contact);
        return true;
    }
}

function checkNumber(element, emessage) {
    let val = element.value.trim();
    if (val == "") {
        setError(element, "");
        return false;
    }
    else if (val.charAt(0) === '-') {
        setError(element, emessage);
        return false;
    }
    else {
        setSuccess(element);
        return true;
    }
}

function checkGender() {
    if (userGender.selectedIndex == 0) {
        setError(userGender, "");
        return false;
    }
    else {
        setSuccess(userGender);
        return false;
    }
}

const d1 = document.querySelector("#disease1");
const d2 = document.querySelector("#disease2");
const d3 = document.querySelector("#disease3");
const d4 = document.querySelector("#disease4");
const d5 = document.querySelector("#disease5");

function validDisease() {
    if (d1.checked == false && d2.checked == false && d3.checked == false && d4.checked == false && d5.checked == false) {
        setError(disease, "");
        return false;
    }
    else {
        setSuccess(disease);
        return true;
    }
}

const m1 = document.querySelector("#medication1");
const m2 = document.querySelector("#medication2");
const m3 = document.querySelector("#medication3");
const m4 = document.querySelector("#medication4");
const m5 = document.querySelector("#medication5");
const m6 = document.querySelector("#medication6");
const m7 = document.querySelector("#medication7");

function validMedical() {
    if (m1.checked == false && m2.checked == false && m3.checked == false && m4.checked == false && m5.checked == false && m6.checked == false && m7.checked == false) {
        setError(medication, "");
        return false;
    }
    else {
        setSuccess(medication);
        return true;
    }
}


function validFoodRadio() {
    if (fa1.checked == false && fa2.checked == false) {
        setError(allergy, "");
        return false;
    }
    else {
        setSuccess(allergy);
        return true;
    }
}

function describeit() {
    if (fa1.checked == true) {
        if (foodtext.value.trim() == "") {
            setError(foodtext, "");
            return false;
        }
        else {
            setSuccess(foodtext);
            return true;
        }
    }
    else {
        setSuccess(foodtext);
        return true;
    }
}

const r1 = document.querySelector("#rate-1");
const r2 = document.querySelector("#rate-2");
const r3 = document.querySelector("#rate-3");
const r4 = document.querySelector("#rate-4");
const r5 = document.querySelector("#rate-5");
const r6 = document.querySelector("#rate-6");
const r7 = document.querySelector("#rate-7");
const r8 = document.querySelector("#rate-8");
const r9 = document.querySelector("#rate-9");
const r10 = document.querySelector("#rate-10");
function checkRating() {
    if (r1.checked == false && r2.checked == false && r3.checked == false && r4.checked == false && r5.checked == false && r6.checked == false && r7.checked == false && r8.checked == false && r9.checked == false && r10.checked == false) {
        setError(userRating, "");
        return false;
    }
    else {
        setSuccess(userRating);
        return true;
    }
}

const do1 = document.querySelector("#do-exercise-1");
const do2 = document.querySelector("#do-exercise-2");
const do3 = document.querySelector("#do-exercise-3");
const do4 = document.querySelector("#do-exercise-4");

function checkExercise(){
    if(do1.checked == false && do2.checked == false && do3.checked == false && do4.checked == false){
        setError(doExercise,"");
        return false;
    }
    else{
        setSuccess(doExercise);
        return true;
    }
}

const s1 = document.querySelector("#smoke-1");
const s2 = document.querySelector("#smoke-2");
const s3 = document.querySelector("#smoke-3");
const s4 = document.querySelector("#smoke-4");
function checkSmoking(){
    if(s1.checked == false && s2.checked == false && s3.checked == false && s4.checked == false){
        setError(smoking,"");
        return false;
    }
    else{
        setSuccess(smoking);
        return true;
    }
}

const slp1 = document.querySelector("#sleep-1");
const slp2 = document.querySelector("#sleep-2");
const slp3 = document.querySelector("#sleep-3");
const slp4 = document.querySelector("#sleep-4");
const slp5 = document.querySelector("#sleep-5");
function checkSleeping(){
    if(slp1.checked == false && slp2.checked == false && slp3.checked == false && slp4.checked == false && slp5.checked == false){
        setError(sleep,"");
        return false;
    }
    else{
        setSuccess(sleep);
        return true;
    }
}

function setError(element, message) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove("success");
    }
    parent.classList.add("error");
    const spanElement = parent.querySelector('span');
    if (message != "") {
        spanElement.textContent = message;
    }
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove("error");
    }
    parent.classList.add("success");
}

