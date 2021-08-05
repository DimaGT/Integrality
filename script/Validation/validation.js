let regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
    regexName = /^[a-zа-яё]{1,25}$/i,
    nameValid = false,
    emailValid = false,
    phoneValid = false,
    areaValid = false,
    fileValid = false;
fileLinkValid = false;

//name validation start
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

//name validation end
//email validation start

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

//email validation end
//file validation start
const actualBtn = document.getElementById('actual-btn') !== undefined ? document.getElementById('actual-btn') : null;
const fileChosen = document.getElementById('file-chosen') !== undefined ? document.getElementById('file-chosen') : null;
const fileWrapper = document.getElementById('detailFile') !== undefined ? document.getElementById('detailFile') : null;

if (document.getElementById('actual-btn') !== null) {
    actualBtn.addEventListener('change', function () {


        let clickFile = null

        this.files[0].name !== undefined ? fileChosen.textContent = this.files[0].name : null
        if (this.files[0].size <= 5000000) {
            this.files[0] !== undefined ? fileValid = true : null
            fileWrapper.classList.remove('uncorrect')
            fileWrapper.classList.add('correct')
        } else {
            fileWrapper.classList.remove('correct')
            fileWrapper.classList.add('uncorrect')
            let element = document.createElement("div");
            element.innerHTML = "Max file size is 5 MB. You can <span id='click'>send a link</span> to your portfolio. ";
            element.className = "error email-error";
            document.getElementById("file").appendChild(element);
            clickFile = document.getElementById('click') !== undefined ? document.getElementById('click') : null;
        }


        if (clickFile !== null) {
            clickFile.addEventListener('click', function () {
                document.getElementById('file').classList.add('hide')
                document.getElementById('fileLink').classList.remove('hide')
            })
        } else {
            console.log(clickFile)
        }

    })
}

function validateFileLink(e) {
    if (e.value !== '') {
        e.classList.remove('uncorrect')
        e.classList.add('correct')
        fileLinkValid = true
    } else {
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        fileLinkValid = false
    }
}

//file validation end

// phone validation start
function validatePhone(e) {
    setTimeout(() => e.classList.contains('correct') ? phoneValid = true : null, 50)

}

// phone validation end
// area validation start

function validateArea(e) {
    if (e.value !== '') {
        e.classList.remove('uncorrect')
        e.classList.add('correct')
        areaValid = true
    } else {
        e.classList.remove('correct')
        e.classList.add('uncorrect')
        areaValid = false
    }
}

// area validation end


//file valid
let input = document.querySelector("#phone"),
    errorMsg = document.querySelector("#error-msg");

// here, the index maps to the error code returned from getValidationError
let errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
var iti = window.intlTelInput(input, {
    initialCountry: 'ua',
    hiddenInput: 'full_phone',
    autoHideDialCode: 'true',
    autoPlaceholder: 'aggressive',
    separateDialCode: 'false', //"true",
    preferredCountries: ['ua', 'ru', 'gb', 'se', 'fi', 'is', 'no', 'dk', 'nl', 'de', 'ch', 'at', 'sg', 'nz', 'my', 'ie', 'kr', 'gr', 'ee'],
    utilsScript: "script/Validation/phoneValidation/utils.js"
});

var reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', function () {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            input.classList.remove("uncorrect");
            input.classList.add("correct");
        } else {
            input.classList.remove("correct");
            input.classList.add("uncorrect");
            var errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);

//check on submit contacts form start
function formCheck() {
    !nameValid ? document.getElementById("nameInput").classList.add('uncorrect') : null
    !emailValid ? document.getElementById("emailInput").classList.add('uncorrect') : null
    !phoneValid ? document.getElementById("phone").classList.add('uncorrect') : null
    !areaValid ? document.getElementById("area").classList.add('uncorrect') : null

    return nameValid && emailValid && phoneValid && areaValid;
}

//check on submit contacts form end

//check on submit detail form start
function formCheckDetail() {
    !nameValid ? document.getElementById("nameInput").classList.add('uncorrect') : null
    !emailValid ? document.getElementById("emailInput").classList.add('uncorrect') : null
    !phoneValid ? document.getElementById("phone").classList.add('uncorrect') : null
    !fileValid ? document.getElementById("detailFile").classList.add('uncorrect') : null
    !fileLinkValid ? document.getElementById("fileLinkInput").classList.add('uncorrect') : null

    return nameValid && emailValid && phoneValid && (fileValid || fileLinkValid);
}

//check on submit detail form end
