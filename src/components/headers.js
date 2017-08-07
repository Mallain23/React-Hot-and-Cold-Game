import React from 'react'
import NavBar from './NavBar.js'
import InfoModal from './info-modal'

export default class Headers extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInfoModal: false
    }

    this.toggleInfoModal = this.toggleInfoModal.bind(this)
  }
  toggleInfoModal() {
    this.setState({
            showInfoModal: !this.state.showInfoModal})
  }
  render() {
    let infoModal
    if (this.state.showInfoModal) {
        infoModal = <InfoModal onClose={this.toggleInfoModal} />
    }

    return (
          <header>
              <NavBar onInfo={this.toggleInfoModal} onNewGame={this.props.onNewGame} />
              {infoModal}
              <h1>Hot or Cold</h1>
        </header>
    )
  }
}
