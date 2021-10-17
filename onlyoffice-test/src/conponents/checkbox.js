import React, { Component } from 'react'
import styled from 'styled-components'
import {StyledDiv} from '../App'


const StyledInput = styled.input`
  display: ${props=>props.enabled ? 'inline-block':'none'};
  /* display: inline-block; */
`;
const StyledP = styled.p`
  display: ${props=>props.enabled ? 'inline-block':'none'};
  /* display: inline-block; */
`

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    
  render() {
    let {text,type,checked,enabled,onChange} = this.props;
    // let {checked}= this.state;
    return (
      <StyledDiv>
        <StyledInput 
              type="checkbox" 
              checked={checked}
              enabled={enabled}
              onChange={()=>onChange(type)}
        />
          <StyledP enabled={enabled}>{text}</StyledP>
      </StyledDiv>
    )
  }
}

export default Checkbox;