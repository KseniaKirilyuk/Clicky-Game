import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    clickedCard:[],
    correctWord:"",
    score:0
  }
  clickHandler = (cardIndex) =>{
    const arr=[...this.state.clickedCard];
    arr.push(cardIndex)
    console.log(arr);
    this.setState({ 
      score: this.state.score + 1, 
      clickedCard:arr, 
      correctWord:"correct!"
    });
  }
  

render(){
return(
  <div>
  <Nav score={this.state.score} correct={this.state.correctWord} />
  <Jumbotron />
    <div className="imgContainer">
      {this.state.cards.map((card, id)=>{
        return <CharCard 
                click={() => this.clickHandler(id)}
                src={card.image}                
                key={card.id} />
        }  
      )}
    </div>
  </div>
  );
}
}

export default App;


