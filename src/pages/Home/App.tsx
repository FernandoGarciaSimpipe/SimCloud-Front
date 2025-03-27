import './App.css'

function App() {
  return (
    <div>
      <div>
        <h1>SimCloud</h1>
      </div>
      <div>
        <h2>Bem-vindo ao SimCloud</h2>
      </div>
      <button onClick={() => {
        window.location.href = '/login'
      }}>Iniciar</button>
    </div>
  )
}

export default App
