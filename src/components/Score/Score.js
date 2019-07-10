// again, need react and styling from this folder
import React from "react";
import "./Score.css";

//Prints score and applies logic of "total" and "status"
const Score = props => (
    <div className="userScore">
        <h3 className="score">Characters Clicked: {props.total}</h3>
        <h3 className="status">{props.status}</h3>
    </div>
);

export default Score;