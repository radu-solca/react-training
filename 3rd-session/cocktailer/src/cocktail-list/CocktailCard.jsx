import React from 'react';
import './CocktailCard.css';

const CocktailCard = ({thumbnailUrl, text}) => {
    return <div class='card-container'>
        <img src={thumbnailUrl} alt={text}></img>
        <p>{text}</p>
    </div>
}

export default CocktailCard;