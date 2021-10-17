import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {StyledDiv} from '../App'
import Image from './image'

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
`
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:'https://cdn2.thecatapi.com/images/z4IVc7mpr.jpg'
    }
  }
  render() {
    return (
      <StyledDiv>
        <StyledButton onClick={() => {
          axios.get('https://api.thecatapi.com/v1/images/search')
              .then(res => {
                console.log(res.data[0].url);
                // Imgurl = res.data[0].url;
                this.setState({
                  src: res.data[0].url
                })
              });
        }}>
          <p>Get cat</p>
        </StyledButton>
        <Image src={this.state.src}/>
      </StyledDiv>
    )
  }
}

export default Button;