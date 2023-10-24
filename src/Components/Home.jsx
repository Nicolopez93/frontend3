import React from 'react'
import imgpizza from '../assets/muzza.jpg'
import Card from './Card'

const Home = () => {
    let pizzas = [
        { id:1, tipo:'Muzzarella', precio: '$1200', img: imgpizza},
        { id:2, tipo:'Fugazzetta', precio: '$1300', img: 'https://img-global.cpcdn.com/recipes/6bc24e2204fc621f/1200x630cq70/photo.jpg'},
        { id:3, tipo:'Napolitana', precio: '$1500', img:'https://img-global.cpcdn.com/recipes/6bc24e2204fc621f/1200x630cq70/photo.jpg'},
        { id:4, tipo:'Rucula', precio: '$1700', img: 'https://img-global.cpcdn.com/recipes/6bc24e2204fc621f/1200x630cq70/photo.jpg'},
        { id:5, tipo:'Provolone', precio: '$1800', img: 'https://img-global.cpcdn.com/recipes/6bc24e2204fc621f/1200x630cq70/photo.jpg'}
    ]
    return (
        <div>
            {pizzas.map(pizza => <Card key={pizza.id} te={pizza}/>
            )}    
        </div>
    )
}


export default Home