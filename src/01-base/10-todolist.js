import React, { Component } from 'react'
import './css/01-index.css'

export default class AppTodoList extends Component {
  inputText = React.createRef();
  state = {
    list: ['aaa', 'bbb', 'ccc'],
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
        text: 'dddd'
      },
    ]
  }
  render() {
    return (
      <div>
        <input ref={this.inputText} />
        <button onClick={() => this.addClick()}>ADD</button>
        <ul>
          {this.state.list.map(item => <li>{item}</li>)}
        </ul>
        <ul>
          {this.state.list2.map((item, index) => <li key={item.id}>{item.text}
          <button onClick={() => this.removeClick(index)}>remove</button>
          </li>)}
        </ul>
        {
          // this.state.list2.length === 0 ? <div>暂无待办事项</div> : null
          // this.state.list2.length === 0 && <div>暂无待办事项</div>
        }
        <div className={this.state.list2.length === 0 ? '': 'hidden'}>暂无待办事项</div>
        <ul>
          {this.state.list2.map((item, index) => <li key={item.id}>
            <span dangerouslySetInnerHTML={{
              __html: item.text
            }}></span>
          <button onClick={() => this.removeClick(index)}>remove</button>
          </li>)}
        </ul>
      </div>
    )
  }
  addClick = ()=> {
    let tempList = [...this.state.list];
    tempList.push(this.inputText.current.value);
    let tempList2 = [...this.state.list2];
    tempList2.push({id: 4, text: this.inputText.current.value});
    this.setState(prevState => (
      {
        list: tempList,
        list2: tempList2
      })
    )
    this.inputText.current.value = '';
  }
  removeClick = (index)=> {
    let newList2 = [...this.state.list2];
    newList2.splice(index,1);
    this.setState(prevState => (
      {
        list2: newList2
      })
    )
  }
}
