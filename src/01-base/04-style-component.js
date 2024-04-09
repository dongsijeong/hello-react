import React, { Component } from 'react'
import './css/01-index.css'
export default class AppStyle extends Component {
  render() {
    const myname = 'test'
    const obj = {
      backgroundColor: 'yellow',
      fontSize: '30px'
    }
    return (
      <div>
        {10 + 20} - {myname}
        {10 > 20 ? 'a' : 'b'}
        <div style={obj}>1111111111111</div>
        <div style={{background: 'red'}}>222222222222</div>
        <div className="active">333333333333333</div>
      </div>
    )
  }
}
