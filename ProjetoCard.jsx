// Esse é o seu "molde" de projeto
function ProjetoCard({ titulo, link }) {
  return (
    <div style={{ 
      border: '1px solid #646cff', 
      padding: '15px', 
      borderRadius: '8px', 
      margin: '10px 0',
      textAlign: 'left' 
    }}>
      <h3>{titulo}</h3>
      <p>Clique no link abaixo para ver o código no GitHub:</p>
      <a href={link} target="_blank" rel="noreferrer" style={{ color: '#646cff' }}>
        Acessar Repositório
      </a>
    </div>
  );
}

export default ProjetoCard;