import React from 'react'
import { useState } from "react"

const UserDetails = () => {
    const [persons, setPersons] = useState ([
        {id:1, name: "André", age: 12},
        {id:2, name: "Bia", age: 15},
        {id:3, name: "Rubens", age: 40},
        {id:4, name: "Paula", age: 44}
    ])
  return (
    <div>
      <h1>Desafio</h1>
      <ul>
        {persons.map((p) =>  (
          <li key={p.id} > {p.name} - {p.age} {p.age >= 18 && <span>- Pode tirar a CNH!</span>}</li>
        ))}
        <br />
        </ul>
    </div>
  )
}

export default UserDetails