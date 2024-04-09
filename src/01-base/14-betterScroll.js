
import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class AppBetterScroll extends Component {
  state = ({
    list: []
  })
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>click</button>
        <div className="wrapperdiv" style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
          <ul className="content">
            {this.state.list.map((item, index) => <li key={index}>{item} -- {index}</li>)}
          </ul>
        </div>
      </div>
    )
  }
  getData = () => {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,14,15];
    this.setState(prevState => ({
      list: list
    }), () => new BScroll('.wrapperdiv'))
  }
}
