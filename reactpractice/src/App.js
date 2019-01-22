import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

  // Map over this.state.friends and render a CharCard component for each friend object
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
