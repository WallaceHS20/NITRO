import { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form"
import validator from "validator";
import axios, { AxiosRequestConfig } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader';

import './App.css';

import { PiEyeSlash } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";


interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>();

  //CAPTURA DE PROPS SENHA
  const watchSenha = watch("senha");

  //STATE LOADER
  const [loader, setLoader] = useState(false)

  //STATE DE BOTAO VISUALIZAR SENHA (CHAVE - OBJETO:BOLEANO)
  const [showPasswords, setShowPasswords] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
  });

  //FUNÇÃO DE ATIVAÇÃO
  const togglePasswordVisibility = (index: number) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  //VALIDAÇÃO DE SENHA REQUISITOS MINIMOS
  const validatePassword = (value: string) => {
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    if (!hasLowerCase) {
      return "Mínimo de 1 caractere minusculo";
    }
    if (!hasUpperCase) {
      return "Mínimo de 1 caractere maiúsculo";
    }
    if (!hasNumber) {
      return "Mínimo de um numeral";
    }
    return true;
  };

  //HEADER
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'ECA1AB4CE8583613A2C759B445E98'
    }
  };

  //ENVIO DE DADOS AO FORMULÁRIO
  const onSubmit = async (data: FieldValues) => {
    try {

      //LOADER - ATIVAÇÃO DA TELA DE CARREGAMENTO
      setLoader(true);

      const response = await axios.post('http://localhost:8080', data, config);

      setLoader(false);
      toast.success("Cadastrado com sucesso!");
      console.log('Sucesso:', response.data);

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {

        setLoader(false)

        const responseData = error.response.data;

        if (responseData.erro && responseData.tipoErro === 'USUARIO_EXISTENTE') {
          console.error('Erro: Usuário já existe');
          toast.error('Usuário já existente');
        }
        
        if (responseData.erro && responseData.tipoErro === 'CAMPO_INVALIDO') {
          console.error('Campos inválidos');
          toast.error('Campos inválidos');
        }

      } else {
        console.error('Erro inesperado:', error);
      }

    }
  };

  return (
    <div className='container'>

      {loader && <Loader/>}
      <ToastContainer />

      <article className='image-box' />

      <main className='login-box'>
        <h1>Café da Vovó</h1>
        <h5>Faça parte da maior franquia de cafeteria do país!</h5>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* NOME */}
          <div className='group-box'>
            <label>Nome</label>
            <input
              type="text"
              autoComplete="off"
              className={errors.nome && "input-error"}
              {...register("nome", {
                required: true
              })}
            />
            {errors?.nome?.type === "required" && (
              <span>Campo Obrigatório</span>
            )}
          </div>

          {/* E-MAIL */}
          <div className='group-box'>
            <label>E-mail</label>
            <input
              type="text"
              className={errors.email && "input-error"}
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <span>Campo Obrigatório</span>
            )}
            {errors?.email?.type === "validate" && (
              <span>E-mail inválido</span>
            )}
          </div>

          {/* SENHA */}
          <div className='group-box'>
            <label>Senha</label>
            <div className='Passwords'>
              <input
                type={showPasswords[1] ? "text" : "password"}
                className={errors.senha && "input-error"}
                {...register("senha", {
                  required: true,
                  minLength: 8,
                  validate: validatePassword
                })}
              />
              <button
                type="button"
                id={errors.senha ? "button-error" : ""}
                onClick={() => togglePasswordVisibility(1)}>
                {showPasswords[1] ? <LiaEyeSolid size={30} /> : <PiEyeSlash size={30} />}
              </button>
            </div>

            {errors?.senha?.type === "required" && (
              <span>Campo Obrigatório</span>
            )}
            {errors?.senha?.type === "minLength" && (
              <span>Mínimo 8 caracteres</span>
            )}
            {errors?.senha?.type === "validate" && (
              <span>{errors.senha.message as string}</span>
            )}

          </div>

          {/* CONFIRMA-SENHA */}
          <div className='group-box'>
            <label>Confirmar Senha</label>
            <div className='Passwords'>
              <input
                className={errors.confirmacaoSenha && "input-error"}
                type={showPasswords[2] ? "text" : "password"}
                {...register("confirmacaoSenha", {
                  required: true,
                  validate: (value) => value === watchSenha
                })}
              />
              <button
                type="button"
                id={errors.confirmacaoSenha ? "button-error" : "#"}
                onClick={() => togglePasswordVisibility(2)}>
                {showPasswords[2] ? <LiaEyeSolid size={30} /> : <PiEyeSlash size={30} />}
              </button>
            </div>

            {errors?.confirmacaoSenha?.type === "required" && (
              <span>Campo Obrigatório</span>
            )}
            {errors?.confirmacaoSenha?.type === "validate" && (
              <span>Senhas incoerentes</span>
            )}
          </div>

          <button
            className='send-button'
            type='submit'>
            Enviar
          </button>

          <p id='option-text'>Ou</p>

          <div className='options'>
            <a id='google' href="#">
              <FcGoogle size={30} />
            </a>

            <a id='facebook' href="#">
              <FaFacebookSquare size={30} />
            </a>
          </div>

        </form>
      </main>
    </div>
  )
}

export default App;
