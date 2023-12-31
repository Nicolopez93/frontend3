import React, { useState } from 'react'

const Card = ({plato, pedidos, setPedidos}) => {
    const {img, tipo, precio} = plato
    const [counter, setCounter]= useState(0)
    
    const sumar = ()=>{
        setCounter (counter + 1)
    }
    const restar = ()=>{
        setCounter (counter - 1)
    }
return (
    <div className='card'>
        <img src = {img} alt=''className='card-img'/>
        <h3>{tipo}</h3>
        <h4>{precio}</h4>
        <div className='buttons'>
            <button onClick={restar}> - </button>
            <h4>{counter}</h4>
            <button onClick={sumar}> + </button>
        </div>
        <button
        onClick={()= setPedidos((prev)=>[...prev, plato])}
        style={{margin: "10pc"}}
        >
            Agregar Pedidos
        </button>
    </div>
)
}

export default Card