import React, { Component } from 'react'

export default class post extends Component {

    state = {
        posts: []
    }

    async componentDidMount(){

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json();

        this.setState({
            posts: json
        })
       

    }
  render() {
    return( 
         <div> 
           
        </div> 
    )
  }
}
