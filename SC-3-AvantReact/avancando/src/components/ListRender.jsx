
import { useState } from "react"

const ListRender = () => {

const [list] = useState(["Matheus", "Pedro", "Josias","Maria"])

const [users, setUsers] = useState([
    {id:1, name:"Matheus", age:31},
    {id:2, name:"João", age:28},
    {id:3, name:"Pedro", age:44},

])

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
    })
}
  return (
    <div>
        <h2>Listas em React</h2>
        <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>

        <br />
        <h2>Usando a propriedade key</h2>
        <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age}
                </li>
        ))}
        </ul>
        <br />
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
    
  )
}



export default ListRender