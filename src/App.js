import React, { Component } from 'react'
import Count from './Components/Count'
export class App extends Component {
    state={
      isShow:false
    }
    handleClick = (()=> {
    this.setState({isShow: !this.state.isShow})
    })
  render() {
    return (
      <div style={{marginTop:'250px',textAlign:'center'}}>
        <button onClick={this.handleClick}> {this.state.isShow ? 'Hide' : 'Show'}</button>
        {this.state.isShow ? <Count/> : 'click again'}
      </div>
    )
  }
}

export default App
