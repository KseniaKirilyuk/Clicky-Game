import React from "react";
import "./Nav.css";

const Nav = props => {
    return(
        <div className="Nav">
            <p>Click an image to begin!</p>
            <p>{props.correct}</p>
            <p>SCORE:{props.score} | HIGHEST SCORE:{props.topscore}</p>
        </div>
    )       
}

export default Nav;
