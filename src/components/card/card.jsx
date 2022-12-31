import React from 'react';
import "./card.css"

const Card = ({monster}) => {

    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?size=180x180`} alt={monster.username} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card;