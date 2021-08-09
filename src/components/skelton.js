import React from 'react'
import styled from 'styled-components'

const Skelton = ({profile}) => {
    return (
  <SkeltonWrapper>
    {profile&&<div className="comment_circle load-pulse"></div>}
    <div className="text_frame">
      <div className="comment_text load-pulse"></div>
      <div className="comment_text load-pulse"></div>
      <div className="comment_text load-pulse"></div>
    </div>
  </SkeltonWrapper>
    )
}


const SkeltonWrapper = styled.div`
    width: 49%;
    display: inline-block;
    margin: 10px 0 40px 0;
  
  
  .comment_circle {
    width: 80px;
    height: 80px;
    border-radius: 80%;
    display: inline-block;
  }
  
  .text_frame {
    display: inline-block;
    width: 97%;
    vertical-align: top;
  }
  
  .comment_text {
    width: 100%;
    height: 10px;
    margin: 10px;
  }

.load-pulse {
    background-color: #777777;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation:pluseAnimation 2s infinite;
  }
   /* Chrome, Safari, Opera */
  
   @-webkit-keyframes pluseAnimation {
    0% {
      background-color: #aaaaaa;
    }
    50% {
      background-color: #dddddd;
    }
    100% {
      background-color: #aaaaaa;
    }
  }
  
  
  /* Standard syntax */
  
  @keyframes pluseAnimation {
    0% {
      background-color: #aaaaaa;
    }
    50% {
      background-color: #dddddd;
    }
    100% {
      background-color: #aaaaaa;
    }
  }

`

export default Skelton
