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
    this.state = {
      enabled: true,
      refresh: false,
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(type){
    // console.log(type);
    switch (type) {
      case 'enabled':
        this.setState({enabled: !this.state.enabled});
        break;
      case 'refresh':
        this.setState({refresh: !this.state.refresh});
        break;    
      default:
        break;
    }
  }
  render() {
    const {enabled, refresh} = this.state;
    console.log(`enabled = ${enabled}, refresh = ${refresh},`);
    return (
      <div className="App">
        <Checkbox text='Enabled'
                  type='enabled'
                  enabled
                  checked={enabled}
                  onChange={this.onChange}/>
        <Checkbox text='Auto-refresh every 5 second' 
                  type='refresh'
                  enabled={enabled}
                  checked={refresh}
                  onChange={this.onChange}/>
        <Button enabled={enabled}
                refresh={refresh}/>
      </div>
    )
  }
}

export default App;