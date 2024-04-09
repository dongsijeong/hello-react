import React, { Component } from 'react'
// import './css/02-option.css'
import Film from './optioncomponent/Film'
import Cinema from './optioncomponent/Cinema'
import Center from './optioncomponent/Center'

export default class AppOption extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ],
    current: 1
  }
  which() {
    switch (this.state.current) {
      case 1:
        return <Film />
      case 2:
        return <Cinema />    
      case 3:
        return <Center />    
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.current === 1 && <Film />}
        {this.state.current === 2 && <Cinema />}
        {this.state.current === 3 && <Center />} */}
        {/* 支持函数表达式 */}
        {this.which()}
        <ul>
          {
            this.state.list.map(item => 
              <li key={item.id} 
                className={this.state.current === item.id ? 'active' : ''}
                onClick={() => this.handleClick(item.id)}
                >
                  {item.text}
              </li>)
          }
        </ul>
      </div>
    )
  }
  handleClick = (id) => {
    this.setState(prevState => (
      {
        current: id
      }
    ))
  }
}
