
import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const name = useState("Matheus")

  const redTitle = true
  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Componente */}
      <MyComponent />
      <p>Este paragrado é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "5px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinamico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinamico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinamico</h2>
      <h2 style={name === "Matheus" ? null : ({ color: "green", backgroundColor: "#000" })}>Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Meu titulo</h2>
    </>
  )
}

export default App
