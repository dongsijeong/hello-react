import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>child</div>
    )
  }
}
class Navbar extends Component {
  render() {
    return (
      <div>navbar
        <Child />
      </div>
    )
  }
}
function Swiper(){
  return (
    <div>Swiper</div>
  )
}
const Tabbar =()=> {
  return (
    <div>Tabbar</div>
  )
}
export default class AppQiantao extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Swiper />
        <Tabbar />
      </div>
    )
  }
}
