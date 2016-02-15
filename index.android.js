'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

var CATJOKES = require('./catjokes.json')['jokes']

var CatJokes = React.createClass({

  getInitialState: function() {
    return {
      joke: null,
      jokeAnswer: '',
      previosJoke: null,
      previousJokeAnswer: '',
    }
  },

  componentDidMount: function() {
    this.newJoke();
  },

  previousJoke: function() {
    this.setState({
      joke: this.state.previousJoke,
      jokeAnswer: ''
    })
  },

  newJoke: function() {
    this.hideAnswer();
    var joke = CATJOKES[Math.floor(Math.random()*CATJOKES.length)];
    this.setState({ joke: joke })
  },

  showAnswer: function() {
    this.setState({ jokeAnswer: this.state.joke['answer'] })
  },

  hideAnswer: function() {
    this.setState({
      previousJoke: this.state.joke,
      previousJokeAnswer: this.state.jokeAnswer,
      joke: null,
      jokeAnswer: '',

    })
  },

  render: function() {
    if (!this.state.joke) {
      return this.renderLoadingView();
    }

    return this.renderJokeView();
  },

  renderLoadingView: function() {
    return (
      <View style={ styles.container }>
        <Text>
          Loading Joke . . .
        </Text>
      </View>
    );
  },

  handleTap: function() {
    if ( this.state.jokeAnswer.length ) {
      this.newJoke();
    } else {
      this.showAnswer();
    }
  },

  renderJokeView: function() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.previousJoke } onPress={ () => this.previousJoke() }> Previous </Text>
        <TouchableWithoutFeedback onPress={ () => this.handleTap() }>
          <Image source={ require('./background.jpg') } style={ styles.background }>
            <Text style={ [styles.jokeQuestion, styles.jokeContainer] }>
              {this.state.joke['question']}
            </Text>

            <Text style={ [styles.jokeAnswer, styles.jokeContainer] }>
              { this.state.jokeAnswer }
            </Text>
          </Image>
        </TouchableWithoutFeedback>
      </View>

    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  background: {
    width: 450,
    height: 300,
    flex: 1
  },

  jokeContainer: {
    textAlign: 'center',
    color: '#D6CBCB',
  },

  jokeQuestion: {
    marginTop: 110,
    marginBottom: 10
  },

  previousJoke: {
    marginTop: 15
  }
});

AppRegistry.registerComponent('CatJokes', () => CatJokes);
