import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pics from "./cards.json";
import "./App.css";

class App extends Component {
  // sets the state
  state = {
    pics,
    clickedPics: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  mixItUp = id => {
    let clickedPics = this.state.clickedPics;

    if (clickedPics.includes(id)) {
      this.setState({ clickedPics: [], score: 0, status: "Not quite. Try again." });
      return;
    } else {
      clickedPics.push(id)

      if (clickedPics.length === 8) {
        this.setState({ score: 8, status: "Congratulations! You Won!!", clickedPics: [] });
        console.log('You Win');
        return;
      }

      this.setState({ pics, clickedPics, score: clickedPics.length, status: " " });

      for (let i = pics.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pics[i], pics[j]] = [pics[j], pics[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky React App</h1>
          <p className="App-intro">
            Here's how it works: you can't click the same picture twice.
          </p>
        </header>
        <Score total={this.state.score}
          goal={8}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.pics.map(picture => (
            <Card
              mixItUp={this.mixItUp}
              id={picture.id}
              key={picture.id}
              image={picture.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;