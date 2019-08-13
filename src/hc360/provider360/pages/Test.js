import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Test extends Component {
  render() {
    return (
      <div>
       <Link to="/member/test/test1">Test Component</Link> 
      </div>
    )
  }
}
