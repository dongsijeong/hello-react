import React, { Component } from 'react'
import axios from 'axios';
export default class Cinema extends Component {
  state = {
    cinemaList: []
  }
  constructor() {
    super();
    // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8248764').then(
    //   res => {
    //     console.log(res)
    //   }).catch(err => console.log("axios get error"));
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8248764",
        method: "get",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17104054401172461647298561","bc":"110100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(
        res => {
          // console.log(res.data)
          this.setState(prevState => ({
            cinemaList: res.data.data.cinemas,
            backCinemaList: res.data.data.cinemas
          }))
        }).catch(err => console.log("axios get error"));
  }
  render() {
    return (
      <div>
        <div>
          <input onInput={this.textInput} />
          {
            this.state.cinemaList.map(item => 
              <dl key={item.cinemaId} 
                >
                  <dt>{item.name}</dt>
                  <dd>{item.address}</dd>
              </dl>)
          }
        </div>
      </div>
    )
  }
  textInput = (event) => {
    const newCinemaList =  this.state.backCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()));
    this.setState(prevState => ({
      cinemaList: newCinemaList
    }))
  }
}
