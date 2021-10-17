import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDivImg = styled.div`
  display: inline-block;
  width: 100% !important;
  height: 50vh;
  margin: 0 auto;
  margin-top: 2rem !important;
`;

const StyledImage = styled.img`
  display: ${props=>props.enabled ? 'block':'none'};
  height: auto;
  width: 100%;
`;

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    var {enabled,src} = this.props;
    return (
      <StyledDivImg>
        <StyledImage enabled={enabled} src={src}/>
      </StyledDivImg>
    )
  }
}

export default Image;