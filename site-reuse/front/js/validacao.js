const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    entrar()
})


function checkInputs() {
    if (checkInputs){
        let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]' )
        listaUser.push({
            nomeCad: username.value,
            emailCad: email.value,
            passwordCad: password.value,
            passwordtwoCad: password.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        setTimeout(()=>{
            window.location.href="../index.html"
        },3000)
    }
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    if(usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo')
    } else {
    
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres!')
    } else {
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não estão iguais')
    } else {
       
        setSuccessFor(passwordtwo)
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

function entrar(){
    let usuario = document.querySelector('#username')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#password')
    let senhaLabel = document.querySelector('#passwordLabel')

    let email = document.querySelector("#email")
    let emailLabel = document.querySelector("#emailLabel")

    listaUser = []
    let userValid = {
        user: '',
        senha: '',
        email: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item)=>{
        if(usuario.value == item.nomeCad && senha.value == item.passwordCad && email.value == item.emailCad){
            userValid = {
                user: item.nomeCad,
                senha:item.passwordCad,
                email:item.emailCad
            }
        }
    })
    if(usuario.value == userValid.user && senha.value == userValid.senha && email.value == userValid.email){
        alert("Bem vindo :)")
        usuario.setAttribute('style', 'border-color: green')
        senha.setAttribute('style', 'border-color: green')
        email.setAttribute('style', 'border-color: green')
        userLabel.setAttribute('style', 'color:green')
        senhaLabel.setAttribute('style', 'color:green')
        emailLabel.setAttribute('style', 'color:green')
        setTimeout(()=>{
            window.location.href="../usuario.html"
        },3000)
    }else{
        usuario.setAttribute('style', 'border-color: red')
        senha.setAttribute('style', 'border-color: red')
        email.setAttribute('style', 'border-color: red')
        userLabel.setAttribute('style', 'color:red')
        senhaLabel.setAttribute('style', 'color:red')
        emailLabel.setAttribute('style', 'color:red')
        alert("Algum dado está errado")
    }
}