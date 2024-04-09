import React, { Component } from 'react'

export default class AppSetStateAsync extends Component {
  state = (
    {
      count: 1
    }
  )
  render() {
    return (
      <div>
        {this.state.count}
        {<button onClick={this.add1}>add1</button>}
        {<button onClick={this.add2}>add2</button>}
      </div>
    )
  }

  add1 = ()=> {
    this.setState(prevState => (
      {
        count: this.state.count + 1
      }
    ))
    console.log(this.state.count);
    this.setState(prevState => (
      {
        count: this.state.count + 1
      }
    ))
    console.log(this.state.count);
    this.setState(prevState => (
      {
        count: this.state.count + 1
      }
    ))
    console.log(this.state.count);
  }
  add2 = ()=> {
    setTimeout(() => {
      this.setState(prevState => (
        {
          count: this.state.count + 1
        }
      ))
      console.log(this.state.count);
      this.setState(prevState => (
        {
          count: this.state.count + 1
        }
      ))
      console.log(this.state.count);
      this.setState(prevState => (
        {
          count: this.state.count + 1
        }
      ))
      console.log(this.state.count);
    }, 0)
  }
}
