'use strict';
(function () {

    // form (Jarne)

    const form = document.querySelector('form')

    const firstname = document.querySelector('#firstname');
    const firstError = document.querySelector('#firstname-valid');

    const email = document.querySelector('#email');
    const emailError = document.querySelector('#email-valid');

    const message = document.querySelector('#Orders');
    const messageError = document.querySelector('#message-valid');

    const privacy = document.querySelector('#privacy');
    const privacyError = document.querySelector('#checkbox-valid');


    form.addEventListener('submit', e => {
        e.preventDefault();

        resetErrors();
        console.log('form was sent but page did not reload')
        const isValid = validation();
        if (isValid) {
            resetForm();
            console.log('form is valid');
        } else {
            console.warn('form is invalid')
        }
    })
    const validation = () => {
        let isValid = true;

        if (firstname.value === '') {
            setError(firstError, 'Please enter your name');
            isValid = false;
        }

        if (email.value === '') {
            setError(emailError, 'Please enter an E-mail');
            isValid = false;
        } else if (
            !email.value.includes('@') ||
            !email.value.includes('.')
        ) {
            isValid = false;
            setError(emailError, ' E-mail not right');
        }
        if (message.value === '') {
            setError(messageError, 'Please write a message');
            isValid = false;
        }

        if (privacy.checked === false) {
            setError(privacyError, 'privacy button not checked');
            isValid = false;
        }
        return isValid;
    };
    const resetErrors = () => {
        firstError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
        privacyError.style.display = 'none';


    }
    const resetForm = () => {
        firstname.value = '';
        email.value = '';
        message.value = '';
        privacy.checked = false;

    }
    const setError = (element, message) => {
        element.style.display = 'block'
        element.innerText = message;
    }


    //hamburger (shaher)
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    const hamb = document.querySelectorAll(".nav-link");
    hamb.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

})();

/*bla*/
