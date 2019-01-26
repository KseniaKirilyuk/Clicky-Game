import React from "react";
import "./CharCard.css";

const charCard = (props) =>{ 
    return(
        <div className="CharCard">
            <img src={props.src} alt="img" onClick={props.click} />
        </div>
    )
}


export default charCard;
