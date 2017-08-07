import React from 'react'
import GuessInput from './guess-input'
import GuessButton from './guess-button'

export default class GuessForm extends React.Component {
  constructor (props) {
    super(props)
    this.onGuess = this.onGuess.bind(this)
  }
  onGuess () {
    e.preventDefault()
    const value = this.input.value
    this.props.onGuess(value)
    this.input.value = ''
  }
  render () {
    return (
            <form onSubmit={this.onGuess}/>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input name="userGuess" id="userGuess" type="text"
                    maxLength="3" placeholder="Enter your Guess"
                    ref={input => this.input = input} className="text" />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        )
    }
}
