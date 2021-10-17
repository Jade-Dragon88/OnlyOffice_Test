import React, { Component } from 'react'
import './App.css';
import Checkbox from './conponents/checkbox'
import Button from './conponents/button'
import styled from 'styled-components'

export const StyledDiv = styled.div`
  width: 25%;
  margin: 0 auto;
  text-align: left;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Checkbox text='Enabled'/>
        <Checkbox text='Auto-refresh every 5 second'/>
        <Button/>
      </div>
    )
  }
}

export default App;