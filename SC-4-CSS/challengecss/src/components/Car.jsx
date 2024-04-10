import React from 'react'
import styles from './Car.module.css'

const Car = () => {

  
    const cars = [
        {id: 1, brand:"BMW", color: "Blue", horsePower: "400"},
        {id: 2, brand:"Porschee", color: "Red", horsePower: "800"},
        {id: 3, brand:"Mercedez", color: "Silver", horsePower: "600"}

    ]
  return (
    <div>
        {cars.map((c) => (
          <div  key={c.id} className={styles.card_titles}>
            
            <p style=
            {c.brand === "BMW" ? {color:"Purple"} : {color: "red"}}>{c.brand}</p>
            <hr />
            <p > Cor: {c.color}</p>
            <p style={c.horsePower > 500 ? {color: "green"} : null}> Cavalos: {c.horsePower}</p>
          </div>  
        ))}

    </div>
  )
}

export default Car