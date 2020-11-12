import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

let score = 0;
let bestScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    bestScore: 0,
    message: "Click a character to test your memory!",
    clicked: new Set()

  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar title="Memory Clicky Game" message={this.state.message} score={this.state.clicked.size} bestScore={this.state.bestScore}></Navbar>

        <Jumbotron>Jumbotron</Jumbotron>
        {/* <Container> */}
        <div className="container">
          <div className="row">
            {this.state.friends.map(friends => (
              <FriendCard
                onClick={() => this.validateClick(friends.id)}
                id={friends.id}
                key={friends.id}
                name={friends.name}
                image={friends.image}
              />

            ))}
          </div>
        </div>
        {/* </Container> */}
      </Wrapper>
    );
  }
}

export default App;
