import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'
import './CommentCard.css'


const CommentCard = ({ title, body, date }) => {
  // function take arug and return html for string 
  function createMarkup() {
    return {
      __html: body
    };
  };
  return (
    <CommentCardStyled >
      <img src="https://uifaces.co/our-content/donated/6f6p85he.jpg" alt="" />
      <div className="comment_header">
        <Title text={title ? title : 'N/A'} />
        <span>{date}</span>
        <div className="comment_body" dangerouslySetInnerHTML={createMarkup()} />
      </div>


    </CommentCardStyled>
  )
}

const CommentCardStyled = styled.div`
    background-color: #f8f9fa!important;
    display: flex;
    padding: 1rem;
    position: relative;
    margin-top: 3rem;
 
      img{
        width: 2.125rem;
    height: 2.125rem;
    font-size: 1rem;
    border-radius: 50%;
      }
      span{
        margin-left: 20px;
            font-weight: 400;
            font-size: 12px !important;
            color: var(--primary-green);
            font-family: var(--font);
      }
      .comment_header{
        margin-left: 1.5rem;
        font-family: var(--font);

      }
      .comment_body{
        margin-top: 1rem;
       
      }


`

export default CommentCard
