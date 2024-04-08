import { useState } from "react"

const ManageData = () => {

    let someData = 10

    const [number, setNumber] = useState(15)
    let [click, setClick] = useState(0)

    return (
        <div>
            <h1>useState e setState</h1>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() =>
                    (someData = 15)}>Mudar valor</button>
            </div>
            <br />
            <div>Valor: {number}
                <br />
                <br />
                <button onClick={() => setNumber(25)}>Mudar o state:</button>
            </div>
            <br />
            <div>Vezes clicada: {click}
                <br />
                <br />
                <button onClick={() => setClick(click++)}>Clique</button>
            </div>


        </div>
    )
}

export default ManageData