let regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
    regexName = /^[a-zа-яё]{1,25}$/i,
    nameValid = false,
    emailValid = false,
    phoneValid = false,
    areaValid = false;

function validateName(e) {
    let element = document.createElement("div");
    let textnode = document.createTextNode("Name is not valid");
    element.className = "error name-error";
    element.appendChild(textnode);
    let error = document.getElementsByClassName('name-error')[0];
    if (regexName.test(e.value)) {
        error !== undefined ? error.remove() : null
        e.classList.remove('uncorrect')
        e.classList.add('correct')
        nameValid = true
    } else {
        error !== undefined ? error.remove() : null
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        document.getElementById("name").appendChild(element);
        nameValid = false
    }
}

function validateEmail(e) {
    let element = document.createElement("div");
    let textnode = document.createTextNode("Email is not valid");
    element.className = "error email-error";
    element.appendChild(textnode);
    let error = document.getElementsByClassName('email-error')[0];
    if (regexEmail.test(e.value)) {
        error !== undefined ? error.remove() : null
        e.classList.remove('uncorrect')
        e.classList.add('correct')
        emailValid = true
    } else {
        error !== undefined ? error.remove() : null
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        document.getElementById("email").appendChild(element);
        emailValid = false
    }
}

function validatePhone(e) {
    setTimeout(() => e.classList.contains("correct") ? phoneValid = true :  phoneValid = false , 10 )

}
function validateArea(e) {
    if (e.value !== ''){
        e.classList.remove('uncorrect')
        e.classList.add('correct')
        areaValid = true
    } else {
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        areaValid = false
    }
}
function formCheck() {
    !nameValid ? document.getElementById("nameInput").classList.add('uncorrect') : null
    !emailValid ? document.getElementById("emailInput").classList.add('uncorrect') : null
    !phoneValid ? document.getElementById("phone").classList.add('uncorrect') : null
    !areaValid ? document.getElementById("area").classList.add('uncorrect') : null

    return nameValid && emailValid && phoneValid && areaValid;
}
//file valid

