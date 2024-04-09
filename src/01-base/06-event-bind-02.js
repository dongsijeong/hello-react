import React, { Component } from 'react'

export default class AppEventBind02 extends Component {
  a = 100
  render() {
    return (
      <div>
        <input />
        <button onClick={()=> {
          console.log(this.a)
        }}>add1</button>
        <button onClick={this.handerClick.bind(this)}>add2</button>
        <button onClick={this.handerClick2}>add3</button>
        <button onClick={() => this.handerClick3()}>add4</button>
      </div>
    )
  }
  handerClick() {
    console.log("add2 click", this.a)
  }
  handerClick2 = ()=> {
    console.log("add3 click", this.a)
  }
  handerClick3 = ()=> {
    console.log("add4 click", this.a)
  }
}
