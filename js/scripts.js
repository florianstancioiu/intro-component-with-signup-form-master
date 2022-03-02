const btnClaim = document.querySelector('.btn-claim');
const firstNameInput = document.querySelector('.first-name-input');
const lastNameInput = document.querySelector('.last-name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;

    return re.test(email);
}

btnClaim.addEventListener('click', function (event) {
    event.preventDefault();

    if (firstNameInput.value.trim() === '') {
        firstNameInput.parentElement.classList.add('error');
    } else {
        firstNameInput.parentElement.classList.remove('error');
    }

    if (lastNameInput.value.trim() === '') {
        lastNameInput.parentElement.classList.add('error');
    } else {
        lastNameInput.parentElement.classList.remove('error');
    }

    if (!validateEmail(emailInput.value)) {
        emailInput.parentElement.classList.add('error');
    } else {
        emailInput.parentElement.classList.remove('error');
    }

    if (passwordInput.value.trim() === '') {
        passwordInput.parentElement.classList.add('error');
    } else {
        passwordInput.parentElement.classList.remove('error');
    }
});
