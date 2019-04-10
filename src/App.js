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
  // set initial state of items
  state = {
    characters,
    score: null
  };

  handleClickImg = (indexCaptured, name) => {
    console.log(this.state.characters[indexCaptured]);

    const characters = this.state.characters;
    characters.map((character, index) => {
      if (index === indexCaptured) {
        // check if already clicked
        if (character.isClicked === true) {
          console.log('error, already true');
          this.setState(
            {
              score: 0
            },
            () => {
              // reload page after 1.5 seconds
              setTimeout(function() {
                window.location.reload();
              }, 1500);
            }
          );
        } else {
          // update score somehow and update isClicked, cant next setState in setState
          character.isClicked = true;
          // return updated characters, this causes a warning, use componentDidUpdate or callback
          this.setState(
            {
              score: this.state.score + 1,
              characters
              // setState uses callback below
            },
            () => {
              console.log(this.state);
            }
          );
          shuffle(characters);
        }
      }
    });

    // this no longer works

    console.log('character index', indexCaptured, name);
    console.log('score is ', this.state.score);
  };

  render() {
    return (
      <div className="App">
        {/* render Header component, send props branding and score*/}
        <Header branding="Click Game" curScore={this.state.score} />
        {/* render Header component, for game intro*/}
        <Banner />
        {/* render Images component, send props */}

        <div className="container">
          <div className="row">
            {/* map characters and get index for use in updating click state */}
            {this.state.characters.map((character, index) => (
              <Images
                // props passed to Images
                name={character.name}
                key={index}
                image={character.photo}
                isClicked={character.isClicked}
                // pass in function with property name handleClickImg, bind to character object's index  and name within array
                handleClickImg={this.handleClickImg.bind(
                  this,
                  index,
                  character.name
                )}
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
