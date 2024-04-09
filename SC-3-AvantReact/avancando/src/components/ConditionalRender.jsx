import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(false)
  const [value, setValue] = useState(false)
  const [name, setName] = useState('Matheus')

  return (
    <div>
      <h1> Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}

      <br />

      <button onClick={() => setValue(value != true)}>Alterar!</button>
      {value && <p>O valor é verdadeiro!</p>}
      {!value && <p>O valor é falso!</p>}
      <br />
      <h1>if ternário</h1>
      {name === "João" ? (
        <div>
          <p>Seu nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clica aqui</button>
    </div>
  )
}

export default ConditionalRender