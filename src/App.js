import React, { Component } from 'react';
// import css and apply to all on page
import './App.css';
import Images from './components/Images';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import characters from './characters.json';

// bootstrap installed via npm and not via index.html
import 'bootstrap/dist/css/bootstrap.min.css';

// randomize characters from json
var shuffle = function(array) {
  // get current index
  var currentIndex = array.length;
  // declare variables
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// call suffle array on page load
shuffle(characters);

class App extends Component {
  state = {
    characters,
    score: 0
  };

  handleClick = e => {
    this.setState({
      score: this.state.score + 1
    });

    console.log(this.state.score);
    if (!e.isClicked) {
      console.log('this just fired');
      console.log('e is', e);
      shuffle(characters);
      // console.log(characters);
      // call a function that calls images
    }
  };

  render() {
    return (
      <div className="App">
        {/* render Header component, send props*/}
        <Header branding="Click Game" />
        {/* render Header component, for game intro*/}
        <Banner />
        {/* render Images component, send props */}

        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Images
                key={character.name}
                image={character.photo}
                isClicked={character.isClicked}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
    //console.log(this.state.characters);
  }
}

export default App;
