import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards
  };
<<<<<<< HEAD

=======
>>>>>>> c6aede3a06334c64ec3661d02c71997737dcfee5
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cards.map(card => (
          <CharCard
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
