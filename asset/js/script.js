let nome = document.querySelector('#inputNome')
let email = document.querySelector('#inputEmail')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        nome.style.border = '2px solid red'

        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'


    }else{
        nome.style.border = '2px solid green'

        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true

    }
}



function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 ){

        email.style.border = '2px solid red'

        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        email.style.border = '2px solid green'

        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}


function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){

        assunto.style.border = '2px solid red'

        txtAssunto.innerHTML = 'Digite novamente, máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }
    else{
        assunto.style.border = '2px solid green'

        txtAssunto.style.color = 'green'
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }

}

function enviar(){
if(nomeOk == true && emailOk == true  && assuntoOk == true) {
    alert('Reserva concluida')
}
else {
        alert('Preencha o formulario corretamente')
}
}
