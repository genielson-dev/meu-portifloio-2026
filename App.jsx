import './App.css'
import ProjetoCard from './ProjetoCard'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Meu Portfólio em React</h1>
        <p>Desenvolvedor em formação | Parte 2</p>
      </header>

      <section className="sobre">
        <h2>Sobre Mim</h2>
        <p>Olá! Este é o meu portfólio desenvolvido para React.</p>
      </section>

      <section className="projetos">
        <h2>Meus Projetos</h2>
        <div className="cards-list">
          {/* Aqui chamamos o componente que você criou! */}
          <ProjetoCard 
            titulo="Portfólio Parte 1" 
            link="https://github.com/genielson-dev/meu-portifloio-2026" 
          />
          <ProjetoCard 
            titulo="Projeto React Parte 2" 
            link="https://github.com/genielson-dev" 
          />
        </div>
      </section>

      <footer>
        <p>© 2026 - Genielson</p>
      </footer>
    </div>
  )
}

export default App