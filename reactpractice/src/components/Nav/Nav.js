import React from "react";
import "./Nav.css";

const Nav = props => {
    return(
        <div className="Nav">
            <p>LOGO</p>
            <p>TITLE {props.correct}</p>
            <p>SCORE:{props.score} | HIGHEST SCORE:</p>
        </div>
    )       
}

export default Nav;
