import React, { Component } from 'react'

export default class AppRef extends Component {
  myref = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={() => this.add1Click() }>add1</button>
      </div>
    )
  }
  add1Click = ()=> {
    console.log("addClick", this.myref.current.value)
  }
}
