import React from 'react'

const Events = () => {
    var clicked = 0
    
    const handleMyEvent = () => {
        clicked++
        alert(clicked)

    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
    
                <hr />
            </div>
           
            <div>
                <button onClick={() => alert('Clicou!')}>Clique aqui tambem!</button>
            </div>
            <div>
            <hr />
            <button
                onClick={() => {
                    if (true) {
                        alert("isso não deveria existir!")
                    }
                }}
            > Clica aqui por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events