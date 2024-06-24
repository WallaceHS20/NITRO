import './produtos.css'

export default function Produtos() {
    return (
        <div className="produtos-content">
            <article className="banner">
                <h1 className="banner-title">Seu companheiro para todas as horas do dia, todos os dias</h1>
            </article>
            <div className="produtos-container">
                <div className="card-produto">
                    <div id='card1' className="card-image"></div>
                    <h4 className="title-card">Qualidade</h4>
                    <p className="title-descricao">Um jeito especial de selecionar, torrar e moer os grãos para fazer um café de alta qualidade e pureza.</p>
                </div>
                <div className="card-produto">
                    <div id='card2' className="card-image"></div>
                    <h4 className="title-card">Carinho</h4>
                    <p className="title-descricao">Procionar experiências prazerosas que promovam alegria e bem-estar, criando laços duradouros e gerando valor para todos.</p>
                </div>
                <div className="card-produto">
                    <div id='card3' className="card-image"></div>
                    <h4 className="title-card">Comprometimento</h4>
                    <p className="title-descricao">Todos os dias esperamos fazer duas coisas: dividir um ótimo café com nossos amigos e ajudar a tornar o mundo um pouquinho melhor. </p>
                </div>
            </div>
            <footer>
                <span>Este é um pequeno projeto desenvolvido por Wallace Honorato. Para o desenvolvimento desta aplicação foi utilizado typescript, React, React-router-dom,
                    React Hoock Forms. Para saber mais <a href='https://github.com/WallaceHS20/NITRO/tree/react'>clique aqui.</a>
                </span>
                <div className='github'>
                    <img src="https://raw.githubusercontent.com/WallaceHS20/Bertoti/main/pngegg.png" alt="" />
                    <h1>GitHub</h1>
                </div>
            </footer>
        </div>
    )
}