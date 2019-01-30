import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import cards from "./cards.json";
import Radium from 'radium';
import "./App.css";
import Shuffle from 'lodash.shuffle';

class App extends Component {
  state = {
    cards,
    clickedCard:[],
    correctWord:"",
    score:0,
    topscore:0
  };
  clickHandler = (index) =>{
    if(this.state.clickedCard.indexOf(index)<0){
    const arr=[...this.state.clickedCard];
    arr.push(index)
    const shuffledCrads=Shuffle(cards);
    this.setState({ 
      cards: shuffledCrads,
      score: this.state.score + 1, 
      clickedCard:arr, 
      correctWord:"correct!"
    })
    }
    else{this.resetGameHandler()};
    if(this.state.score > this.state.topscore){
      this.setState({topscore:this.state.score})
    }
  };
  resetGameHandler =()=>{
    this.setState({
      clickedCard:[],
      score:0,
      correctWord:"wrong!",
    })
  }

render(){

return(
  <div>

  <Nav score={this.state.score} correct={this.state.correctWord} topscore={this.state.topscore} />
  <Jumbotron />
    <div className="imgContainer">
      {this.state.cards.map((card, index)=>{
        return <CharCard 
                click={() => this.clickHandler(index)}
                src={card.image}                
                key={card.id} />
        }  
      )}
    </div>
  </div>
  );
}
}

export default Radium(App);


