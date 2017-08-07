import React from 'react'

export default class NavBar extends React.Component {
    constructor (props) {
      super(props)
      this.onInfo = this.onInfo.binds(this)
      this.onNewGame = this.onNewGame.binds(this)
    }
    onInfo() {
      e.preventDefault()
      this.props.onInfo
    }

    onNewGame() {
      e.preventDefault()
      this.props.onNewGame
    }
  return (
          <nav>
              <ul className="clearfix">
                  <li>
                      <a href="#" onClick={this.onInfo}>What?</a>
                      <a href="#" onClick={this.onNewGame}New Game</a>
                </li>
            </ul>
        </nav>
      )
}
