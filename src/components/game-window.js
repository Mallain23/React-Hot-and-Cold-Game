import React from 'react'
import Headers from './headers'
import GuessCount from './guess-count'
import GuessSection from './GuessSection'
import GuessList from './guess-list'

export default class GameWindow extends React.Component (props) {
  constructor (props) {
    super(props)
    this.state = {
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make your guess!",
    }

    this.onNewGame = this.onNewGame.bind(this)
  }
    newGame() {
      this.setState({
              guesses: [],
              feedback: 'Make your guess!',
              correctAnswer: Math.floor(Math.random() * 100) + 1,
            })
        }
    guess(guess) {
      guess = parseInt(guess, 10);
      if (isNaN(guess)) {
          this.setState({
              feedback: 'Please enter a valid number'
          });
          return;
      }
      const difference = Math.abs(guess - this.state.correctAnswer)

      let feedback
      if (difference >= 50) {
        feedback = "You're Ice Cold"
      }
      else if (difference >= 30) {
        feedback = "You're Cold"
      }

      else if (difference >= 10) {
         feedback = "You're warm"
      }

      else if (difference >= 1) {
        feedback = "You're hot"
      }

      else {
        feedback = "You got it"
      }

      this.setState({
                      feedback,
                      guesses: [...this.state.guesses, guess]
                    })
    }

  render() {

        return (
              <div>
                  <Headers onNewGame={this.onNewGame}
                  <GuessSection feedback={this.state.feedback} onGuess={this.guess} />
                  <GuessCount count={this.state.guesses.length}
                  <GuessList guesses={this.state.guesses} />
            </div>
    )
  }
}
