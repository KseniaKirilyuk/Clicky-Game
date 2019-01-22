import React from "react";
import "./Title.css";

class Title extends React.Component {
    state = {
        scoreWin: 0,
        scoreLoose:0
      };

    handleIncrementWin = () => {
        this.setState({ count: this.state.scoreWin + 1 });
      };
      handleIncrementLoose = () => {
        this.setState({ count: this.state.scoreLoose + 1 });
      };
      render() {
        return (
            <div className="nav">
                <ul>    
                    <li>Clicky Game</li>
                    <li>Click an image to begin!</li>
                    <li>Score:{this.state.scoreWin} | TopScore:{this.state.scoreLoose}</li>
                </ul>

            </div>
        );
      }    
}

export default Title;
