import { setupFormHandlers } from './formHandler';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <article class="image-box"></article>
    <main class="login-box">
      <h1>Café da Vovó</h1>
      <h5>Faça parte da maior franquia de cafeteria do país!</h5>
      <form id="registration-form">
        <div class="group-box">
          <label>Nome</label>
          <input type="text" id="nome" autoComplete="off">
        </div>
        <div class="group-box">
          <label>E-mail</label>
          <input type="text" id="email">
        </div>
        <div class="group-box">
          <label>Senha</label>
          <div class="Passwords">
            <input type="password" id="senha">
            <button type="button" class="toggle-password">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="group-box">
          <label>Confirmar Senha</label>
          <div class="Passwords">
            <input type="password" id="confirmacaoSenha">
            <button type="button" class="toggle-password">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
        <button class="send-button" type="submit">Enviar</button>
        <p id="option-text">Ou</p>
        <div class="options">
          <a id="google" href="#">
            <i class="fab fa-google fa-lg"></i>
          </a>
          <a id="facebook" href="#">
            <i class="fab fa-facebook-square fa-lg"></i>
          </a>
        </div>
      </form>
    </main>
  </div>
 ` ;

setupFormHandlers();
