import React from 'react'
import { useState, useReducer } from 'react'

const HookUseState = () => {
    // 1- useState
    let userName = "João"

    const [name, setName] = useState("Matheus")

    const changeName = () => {
        userName = "João Souza"
        setName("Matheus Battisti")
        
        console.log({name})
        console.log({userName})
    }
    
    // 2 - useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()
        //envio a uma api
        console.log(age)
    }

    
  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>Mudar nomes!</button>
       
        {/* 2 - useState e input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos</p>
        <hr />
       
        
    </div>
  )
}

export default HookUseState