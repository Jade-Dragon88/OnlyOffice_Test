import React, { Component } from 'react'
import styled,{css} from 'styled-components'
import axios from 'axios'
import {StyledDiv} from '../App'
import Image from './image'


const StyledButton = styled.button`
  /* display: block; */
  display: ${props=>props.enabled ? 'block':'none'};
  width: 100%;
  height: 50px;
`
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:'https://cdn2.thecatapi.com/images/z4IVc7mpr.jpg'
    }
    this.myAxios = this.myAxios.bind(this);
  }
  myAxios(timer){
    axios.get('https://api.thecatapi.com/v1/images/search')
                  .then(res => {
                    console.log(res.data[0].url);
                    // clearTimeout(timer);
                    if (typeof timer != "undefined"){
                      clearTimeout(timer);
                    }
                    this.setState({
                      src: res.data[0].url
                    })
                  });
  }
  render() {
    const {enabled, refresh} = this.props;
    let timer;
    if (refresh && typeof timer === "undefined") {
      timer = setTimeout(() =>{
        this.myAxios(timer);
        // clearTimeout(timer)
      },5000)
    }
    return (
      <StyledDiv>
        <StyledButton className="btn" enabled={enabled}
            onClick={() => {this.myAxios()}}>
          <p>Get cat</p>
        </StyledButton>
        <Image className="img"
              enabled={enabled}
              src={this.state.src}/>
      </StyledDiv>
    )
  }
}

export default Button;