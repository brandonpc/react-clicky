import React from "react";
import "./Card.css";

// prints the cards
const Card = props => (
    <div className="card img-container">
        <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' />
    </div>
);

export default Card;