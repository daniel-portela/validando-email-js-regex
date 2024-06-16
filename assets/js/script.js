document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('togglePassword').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir o envio do formulário
    togglePasswordVisibility();
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value);
});

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    const successMessage = document.getElementById('success-message');
    successMessage.textContent = '';

    if (isEmailValid && isPasswordValid) {
        successMessage.textContent = 'Formulário enviado com sucesso!';
        successMessage.style.color = 'green';
    }
}

function validateEmail(email) {
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.textContent = '';

    if (!emailRegex.test(email)) {
        displayError(emailError, 'E-mail inválido.');
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword(password) {
    const passwordError = document.getElementById('password-error');
    const passwordLengthRegex = /.{8,}/;
    const passwordUppercaseRegex = /[A-Z]/;
    const passwordLowercaseRegex = /[a-z]/;
    const passwordNumberRegex = /\d/;
    const passwordSpecialCharRegex = /[@$!%*?&]/;

    passwordError.textContent = '';

    if (!passwordLengthRegex.test(password)) {
        displayError(passwordError, 'A senha deve ter pelo menos 8 caracteres.');
        return false;
    } else if (!passwordUppercaseRegex.test(password)) {
        displayError(passwordError, 'A senha deve ter pelo menos uma letra maiúscula.');
        return false;
    } else if (!passwordLowercaseRegex.test(password)) {
        displayError(passwordError, 'A senha deve ter pelo menos uma letra minúscula.');
        return false;
    } else if (!passwordNumberRegex.test(password)) {
        displayError(passwordError, 'A senha deve ter pelo menos um número.');
        return false;
    } else if (!passwordSpecialCharRegex.test(password)) {
        displayError(passwordError, 'A senha deve ter pelo menos um caractere especial (@$!%*?&).');
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function displayError(element, message) {
    element.textContent = message;
    element.style.color = 'red';
}

function togglePasswordVisibility() {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    document.getElementById('togglePassword').querySelector('i').classList.toggle('fa-eye');
    document.getElementById('togglePassword').querySelector('i').classList.toggle('fa-eye-slash');
}
