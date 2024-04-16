import React from 'react'
// import {useContext} from 'react'
// import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/UseTitleColorContext'

const About = () => {

  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

   // 5 - context mais complexo
   const {color, dispatch} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>
        About
      </h1>
      <p>Valor do contador: {counter}</p>
    
    </div>
  )
}

export default About