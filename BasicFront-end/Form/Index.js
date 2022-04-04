//Inputs
const email = document.getElementById("email")
const password = document.getElementById("password")
const permissions = document.querySelectorAll("input[type='checkbox']:checked");
const sex = document.querySelector("select")
const button = document.getElementById("submit")
const form = document.querySelector('form')

//Errors
const errorTag = document.getElementById('error')

//Results
const result = document.getElementById('result')
const confEmail = document.getElementById('confEmail')
const confPassword = document.getElementById('confPassword')
const confPerms = document.getElementById('confPerms')
const confButton = document.getElementById('confirm')


result.style.display = 'none'
confButton.style.display = "none"


const validateForm = () => {
    if (permissions.length < 2) {
        let error = 'Please choose atleast 2 permissions'
        errorTag.innerHTML = error
    }
    else {

        confEmail.innerHTML = email
        confPassword.innerHTML = password
        form.style.display = 'none'
        result.style.display = 'block'
        button.style.display = 'none'
        confButton.style.display = true
    }
}