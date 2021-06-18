// components/layout.js
import React from 'react'
import { useRouter } from 'next/router'

import {
  BrowserRouter as 
  Redirect
} from "react-router-dom";

export default class TestSplash extends React.Component {
  
  componentDidMount () {
    let visited = localStorage["alreadyVisited"];
        if(!visited) {
             //this is the first time
             console.log('test');
             localStorage["alreadyVisited"] = true;
            return (

<Redirect to="/splash" />
            )

        }
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}