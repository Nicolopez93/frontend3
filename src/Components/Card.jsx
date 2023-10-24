import React from 'react'

const Card = ({tech}) => {
    console.log(tech.img);
return (
    <div key={plato.id}>
        <img src={plato.img} alt="" />
        <h3>{plato.tipo}</h3>
        <h4>{plato.precio}</h4>
    </div>
)
}

export default Card