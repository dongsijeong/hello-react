import React, { Component } from 'react'

export default class AppState02 extends Component {
  constructor() {
    super();
    this.state = {
      showText: true,
      context: 'Tom'
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome React Dev {this.state.context}</h1>
        <button onClick={() => this.addClick() }>{this.state.showText ? '收藏' : '取消收藏'}</button>
      </div>
    )
  }
  addClick = ()=> {
    this.setState(prevState => ({
      showText: !prevState.showText,
      context: 'Cat'
    }))
  }
}
