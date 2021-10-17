import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 25%;
  margin: 0 auto;
  text-align: left;
`
const StyledInput = styled.input`
display: inline-block;
`;
const StyledP = styled.p`
display: inline-block;
`

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    
  render() {
    let {text} = this.props;
    return (
      <StyledDiv>
        <StyledInput type="checkbox" /><StyledP>{text}</StyledP>
      </StyledDiv>
    )
  }
}

export default Checkbox;