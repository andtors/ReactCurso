import './App.css'
import { useState } from 'react'

import Itaquera from './assets/itaquera.webp'

import ConditionalRender from './components/ConditionalRender'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const name = "João"
  const [userName] = useState('Maria')

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 2323 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

  function showMessage() {
    alert('Evento do componente pai!')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Secão 3 - Avançando em React</h1>
      <hr />
      {/*Imagem em public*/}
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={Itaquera} alt="Estadio" />
      </div>
      <hr />
      <ManageData />
      <hr />
      <ListRender />
      <hr />
      <ConditionalRender />
      <hr />
      {/* props */}
      <ShowUserName name={userName} />
      <hr />
      {/* destructuring */}
      <h1>Destructuring</h1>
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branca" km={4500} newCar={false} />
      {/* loop em array */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <hr />
      {/* fragment */}
      <Fragment propFragment="Teste" />
      <hr />
      {/* children*/}
      <h1>Children</h1>
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando container</h5>
      </Container>
      <hr />
      {/* Executar função*/}
      <ExecuteFunction  myFunction={showMessage}/>
      <hr />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      <hr />
      <UserDetails />
    </> 
  )
}

export default App
