let regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
    regexName = /^[a-zA-Zа-яёА-ЯЁ].{1,25}$/;

function validateName(e) {
    let element = document.createElement("div"),
        textnode = document.createTextNode("Name is not valid");
    element.className = "error name-error";
    element.appendChild(textnode);
    let error = document.getElementsByClassName('name-error')[0];
    if (regexName.test(e.value)) {
         error !== undefined ? error.remove() : null
        e.classList.remove('uncorrect')
        e.classList.add('correct')
    } else {
        error !== undefined ? error.remove() : null
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        document.getElementById("name").appendChild(element);
        return false;
    }
}

function validateEmail(value) {
    if (regexEmail.test(value)) {
        alert("good");
    } else {
        alert('huevo')
        return false;
    }
}