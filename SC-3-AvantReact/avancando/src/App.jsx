import './App.css'

import Itaquera from './assets/itaquera.webp'

import ManageData from './components/ManageData'

function App() {

  return (
    <>
    
      <h1>Secão 3 - Avançando em React</h1>
      <hr />
      {/*Imagem em public*/}
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>
     
      {/*Imagem em assets*/}
      <div>
        <img src={Itaquera} alt="Estadio" />
      </div>
      <hr />
      <ManageData />
      <hr />
    </>
  )
}

export default App
