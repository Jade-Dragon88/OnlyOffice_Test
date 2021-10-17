import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledDiv = styled.div`
  width: 25%;
  margin: 0 auto;
  text-align: left;
`
const StyledButton = styled.button`
  width: 100%;
  height: 50px;
`



class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <StyledDiv>
        <StyledButton onClick={() => {
          console.log('111')
        }}>
          <p>Get cat</p>
        </StyledButton>
      </StyledDiv>
    )
  }
}

export default Button;