import React, { Component } from 'react'

export default class AppArray extends Component {
  state = {
    list: ['1111', '2222', '3333'],
    list2: [
      {
        id: 1,
        text: 'aaaa'
      },
      {
        id: 2,
        text: 'bbbb'
      },
      {
        id: 3,
        text: 'cccc'
      }
    ]
  }
  render() {
    const newList = this.state.list.map((item, index) => <li key={index}>{item} -- {index}</li>);
    const newList2 = this.state.list2.map(item => <li key={item.id}>{item.text}</li>)
    return (
      <div>
        <ul>
          {
            // this.state.list.map(item => <li>{item}</li>)
            newList
          }
        </ul>
        <ul>
          {newList2}
        </ul>
      </div>
    )
  }
}
var obj = ['aaa', 'bbb', 'ccc']
var item = obj.map(item => `<li>${item}</li>`)
console.log(item.join(''))