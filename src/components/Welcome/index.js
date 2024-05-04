// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
  }

  onClickSubscribe = () => {
    this.setState({isSubscribe: false})
  }

  onClickSubscribed = () => {
    this.setState({isSubscribe: true})
  }

  render() {
    const {isSubscribe} = this.state

    let authButton
    if (isSubscribe) {
      authButton = (
        <button type="button" onClick={this.onClickSubscribe}>
          Subscribe
        </button>
      )
    } else {
      authButton = (
        <button type="button" onClick={this.onClickSubscribed}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="details">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
