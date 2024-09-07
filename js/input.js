const firstNameInput = document.querySelector('.firstname');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const button = document.querySelector('.input__button');

class validateForm {
    regExpFirstName = RegExp('\w');
    regExpEmail = RegExp('\w+@(?:gmail|mail|outlook|bk|yandex|Yahoo|inbox)\.(?:com|ru)');
    regExpPassword = RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');

    constructor(firstName, email, password) {
        this.firstName = firstName;
        this.email = email;
        this.password = password;
    }

    validateName() {
        return this.firstName.value.match(this.regExpFirstName) !== null;
    }

    validateEmail() {
        return this.email.value.match(this.regExpEmail) !== null;
    }

    validatePassword() {
        return this.password.value.match(this.regExpPassword) !== null;
    }
}

const validator = new validateForm(firstNameInput, emailInput, passwordInput);


button.addEventListener('click', () => {
    // event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    if (validator.validateName() && validator.validateEmail() && validator.validatePassword()) {
        alert('Информация успешно отправлена!');
    } else {
        alert('Пожалуйста, проверьте введённые данные.');
    }

});
