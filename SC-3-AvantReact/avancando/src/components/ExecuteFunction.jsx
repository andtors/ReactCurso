import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h1>Executar função no componente pai</h1>
        <button onClick={myFunction}>Clique aqui para executar minha função!</button>
    </div>
  )
}

export default ExecuteFunction