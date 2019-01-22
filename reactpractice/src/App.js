import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Jumbo from "./components/Jumbo";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards
  };
  render() {
    return (
      <div>
        <Title>Clicky Game</Title>
        <Jumbo></Jumbo>
        {this.state.cards.map(card => (
          <CharCard
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
