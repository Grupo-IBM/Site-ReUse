const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

let validNome = false
let validSenha = false
let validEmail = false
let validTwoSenha = false

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
    cadastrar( )
})


function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    if(usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo')
        validNome = false
    } else {
        setSuccessFor(username)
         validNome = true
    }

    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
         validEmail = false
    } else {
        setSuccessFor(email)
         validEmail = true
    }
   
    if(passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo')
        validSenha = false
    } else if(passwordValue.length < 6) { 
        setErrorFor(password, 'Senha deve ter mais que 6 caracteres!')
        validSenha = false
    } else {
        setSuccessFor(password)
        validSenha = true
    }

    if(passwordtwoValue === '') {
        
        setErrorFor(passwordtwo, 'Preencha esse campo')
        validTwoSenha = false
    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não estão iguais')
        validTwoSenha = false
    } else {
        setSuccessFor(passwordtwo)
        validTwoSenha = true
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function cadastrar(){
    if (validEmail && validNome && validSenha && validTwoSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') ||'[]' )
        listaUser.push({
            nomeCad: username.value,
            emailCad: email.value,
            passwordCad: password.value,
            passwordtwoCad: password.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        setTimeout(()=>{
            window.location.href="../login.html"
        },3000)
    }
}