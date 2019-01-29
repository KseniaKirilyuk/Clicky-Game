import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import cards from "./cards.json";
import Radium from 'radium';
import "./App.css";

class App extends Component {
  state = {
    cards,
    clickedCard:[],
    correctWord:"",
    score:0
  };
  clickHandler = (cardIndex) =>{
    const arr=[...this.state.clickedCard];
    arr.push(cardIndex)
    console.log(arr);
    this.setState({ 
      score: this.state.score + 1, 
      clickedCard:arr, 
      correctWord:"correct!"
    });
  };
  // newGameHandler = () =>{
  //   const newArr=[];
  //   this.setState({ 
  //     score: 0, 
  //     clickedCard:newArr, 
  //     correctWord:"wrong!"
  //   });
  // };
render(){

  // if(this.state.clickedCard.indexOf(index)<0){

  // }
return(
  <div>

  <Nav score={this.state.score} correct={this.state.correctWord} />
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


