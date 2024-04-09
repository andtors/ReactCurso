import { useState } from "react"

const ConditionalRender = () => {
    
    const[x] = useState(false)
    let[value, setValue] = useState(false)

  return (
    <div>
        <h1> Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}

        <br />

        <button onClick={() => setValue(value != true)}>Alterar!</button>
        {value && <p>O valor é verdadeiro!</p>}
        {!value && <p>O valor é falso!</p>}
        </div>
  )
}

export default ConditionalRender