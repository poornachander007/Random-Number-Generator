// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  getRandom = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({num})
  }

  render() {
    const {num} = this.state
    return (
      <div className="page_container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.getRandom} type="button" className="button">
            Generate
          </button>
          <p className="displayNum">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
