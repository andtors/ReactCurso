import React from 'react'

import './Challenge.css'


const Challenge = () => {

    const a = 10
    const b = 15

    const showResult = () => {
       alert(a + b)
    }

    return (
        <div className="desafio">
            <hr />
            <h1>Desafio</h1>
            <h2>valores:</h2>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <button onClick={showResult}>Soma dos dois valores 1</button>
            &nbsp;
            <button onClick={() => alert(a+b)}>Soma dos dois valores 2</button>
        </div>
    )
}

export default Challenge