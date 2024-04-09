import React, { Component } from 'react'

export default class AppState01 extends Component {
  state = {
    showText: true
  }
  render() {
    return (
      <div>
        <h1>Welcome React Dev</h1>
        <button onClick={() => this.addClick() }>{this.state.showText ? '收藏' : '取消收藏'}</button>
      </div>
    )
  }
  addClick = ()=> {
    this.setState(prevState => ({
      showText: !prevState.showText
    }))
  }
}
