import React from 'react'
import { useState, useEffect } from 'react'

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        console.log("Buscando Itens no db...")

        setMyItems(getItems)
    }, [getItems])

  return (
    <div>
        {myItems && myItems.map((item) => (
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}

export default List