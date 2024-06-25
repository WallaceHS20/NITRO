import './home.css'

document.querySelector('#home').innerHTML = `
<div class="produtos-content">
        <article class="banner">
            <h1 class="banner-title">Seu companheiro para todas as horas do dia, todos os dias</h1>
        </article>
        <div class="produtos-container">
            <div class="card-produto">
                <div id="card1" class="card-image"></div>
                <h4 class="title-card">Qualidade</h4>
                <p class="title-descricao">Um jeito especial de selecionar, torrar e moer os grãos para fazer um café de
                    alta qualidade e pureza.</p>
            </div>
            <div class="card-produto">
                <div id="card2" class="card-image"></div>
                <h4 class="title-card">Carinho</h4>
                <p class="title-descricao">Procionar experiências prazerosas que promovam alegria e bem-estar, criando
                    laços duradouros e gerando valor para todos.</p>
            </div>
            <div class="card-produto">
                <div id="card3" class="card-image"></div>
                <h4 class="title-card">Comprometimento</h4>
                <p class="title-descricao">Todos os dias esperamos fazer duas coisas: dividir um ótimo café com nossos
                    amigos e ajudar a tornar o mundo um pouquinho melhor.</p>
            </div>
        </div>
        <footer>
            <span>Este é um pequeno projeto desenvolvido por Wallace Honorato. Para o desenvolvimento desta aplicação
                foi utilizado Javascript e Vanilla JS. Para saber mais <a href="https://github.com/WallaceHS20/NITRO/tree/javascriptPuro">clique
                    aqui.</a>
            </span>
            <div class="github">
                <img src="https://raw.githubusercontent.com/WallaceHS20/Bertoti/main/pngegg.png" alt="">
                <h1>GitHub</h1>
            </div>
        </footer>
    </div>
`