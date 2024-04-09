import React, { Component } from 'react'

export default class AppEventBind01 extends Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={()=> {
          console.log("add1 click")
        }}>add1</button>
        <button onClick={this.handerClick}>add2</button>
        <button onClick={this.handerClick2}>add3</button>
        <button onClick={() => {
          this.handerClick3()
        }}>add4</button>
      </div>
    )
  }
  handerClick() {
    console.log("add2 click")
  }
  handerClick2 = ()=> {
    console.log("add3 click")
  }
  handerClick3 = ()=> {
    console.log("add4 click")
  }
}
