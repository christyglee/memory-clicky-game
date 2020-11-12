import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

let score = 0;
let bestScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    bestScore: 0,
    message: "Click a character to test your memory! Try not to click an image twice!",
    clicked: new Set()

  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Title>Friends List</Title>
        <Jumbotron>Jumbotron</Jumbotron>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
