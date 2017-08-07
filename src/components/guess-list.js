import React from 'react'

export default function Guesses (props) {
  const guesses = props.guesses.map((guess, index) => <li key={index}>{guess}</li>)

  return (
          <ul className="guessBox clearfix" id="guessList">
            {guesses}
        </ul>
      )
};
