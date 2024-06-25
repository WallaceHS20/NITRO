import validator from 'validator';
import axios from 'axios';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export function setupFormHandlers() {
    const form = document.getElementById('registration-form');
    const passwordFields = document.querySelectorAll('.Passwords input');
    const toggleButtons = document.querySelectorAll('.toggle-password');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
        }
    };

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const type = passwordFields[index].type === 'password' ? 'text' : 'password';
            passwordFields[index].type = type;
            button.querySelector('i').classList.toggle('fa-eye');
            button.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });

    function enviarDados(data) {

        Toastify({
            duration: 7000,
            text: "Carregando informações, aguarde...",
            style: {
                
                background: "#1f1f1f",
            }

        }).showToast();
        
        return axios.post('http://localhost:8080', data, config)
            .then(response => {
                Toastify({

                    text: "Cadastro realizado com sucesso!",
                    duration: 3000

                }).showToast();
                window.location.href = "./pages/Home/home.html";
            })
            .catch(error => {
                let msg = ''
                const responseData = error.response.data;

                if (responseData.tipoErro === 'USUARIO_EXISTENTE') {
                    console.error('Erro: Usuário já existe');
                    msg = 'Usuário já existente';
                }

                if (responseData.tipoErro === 'CAMPO_INVALIDO') {
                    console.error('Campos inválidos');
                    msg = 'Campos inválidos'; 
                }
                Toastify({

                    text: msg,
                    duration: 3000,
                    style: {
                        background: "#f33434",
                    }

                }).showToast();
            });
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const groupBox = document.querySelectorAll('.group-box');
        const nome = form.elements['nome'];
        const email = form.elements['email'];
        const senha = form.elements['senha'];
        const confirmacaoSenha = form.elements['confirmacaoSenha'];

        let validado = true

        // RESETANDO AS CLASSE DE ERROS E SPANS
        const inputs = document.querySelectorAll('.input-error');
        inputs.forEach(input => {
            input.classList.remove('input-error');
            const groups = input.closest('.group-box');
            const spans = groups.querySelectorAll('span');
            spans.forEach(span => span.remove());
            toggleButtons.forEach(buttons => buttons.id = '')
        });

        if (!nome.value) {
            let spanNome = groupBox[0].querySelector('#spanNome');
            if (spanNome) spanNome.remove();
            nome.classList.add('input-error');
            const span = document.createElement('span');
            span.textContent = 'Campo Obrigatório';
            span.id = 'spanNome';
            groupBox[0].appendChild(span);
            validado = false
        }

        if (!email.value || !validator.isEmail(email.value)) {
            let spanEmail = groupBox[1].querySelector('#spanEmail');
            if (spanEmail) spanEmail.remove();
            email.classList.add('input-error');
            const span = document.createElement('span');
            span.textContent = email.value.length <= 0 ? 'Campo obrigatório' : 'E-mail inválido';
            span.id = 'spanEmail';
            groupBox[1].appendChild(span);
            validado = false
        }

        if (senha.value.length < 8 || !/[a-z]/.test(senha.value) || !/[A-Z]/.test(senha.value) || !/\d/.test(senha.value)) {
            let spanSenha = groupBox[2].querySelector('#spanSenha');
            if (spanSenha) spanSenha.remove();
            senha.classList.add('input-error');
            toggleButtons[0].id = 'toggle-password'
            const span = document.createElement('span');
            span.textContent = senha.value.length < 8 ? 'Mínimo 8 caracteres' :
                !/[a-z]/.test(senha.value) ? 'Mínimo de 1 caractere minúsculo' :
                    !/[A-Z]/.test(senha.value) ? 'Mínimo de 1 caractere maiúsculo' :
                        'Mínimo de um numeral';
            span.id = 'spanSenha';
            groupBox[2].appendChild(span);
            validado = false
        }

        if (!confirmacaoSenha.value || confirmacaoSenha.value !== senha.value) {
            let spanConfirmacaoSenha = groupBox[3].querySelector('#spanConfirmacaoSenha');
            if (spanConfirmacaoSenha) spanConfirmacaoSenha.remove();
            confirmacaoSenha.classList.add('input-error');
            toggleButtons[1].id = 'toggle-password'
            const span = document.createElement('span');
            span.textContent = !confirmacaoSenha.value ? 'Campo obrigatórios' : 'Senhas incorretas';
            span.id = 'spanConfirmacaoSenha';
            groupBox[3].appendChild(span);
            validado = false
        }

        if (validado) {

            let user = {
                "nome": nome.value,
                "email": email.value,
                "senha": senha.value,
                "confirmacaoSenha": confirmacaoSenha.value
            }

            enviarDados(user)

        } else {

            return false
        }
    });
}
