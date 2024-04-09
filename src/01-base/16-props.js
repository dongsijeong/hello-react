import React, { Component } from 'react'
import Navbar from './propscomponent/Navbar'

export default class AppProps extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar />
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar />
        </div>
      </div>
    )
  }
}
