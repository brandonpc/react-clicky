import React from "react";
import "./Card.css";

// prints the cards (no state)
const Card = props => (
    <div className="card img-container">
        <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.mixItUp(props.id)} className='shuffle' />
    </div>
);

export default Card;