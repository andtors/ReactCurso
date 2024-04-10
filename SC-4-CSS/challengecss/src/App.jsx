import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Carros</h1>
      <Car />
    <h1 className='footer'>Salão</h1>  
    </>
  )
}

export default App
