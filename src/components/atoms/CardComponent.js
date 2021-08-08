import React from 'react'
import styled from 'styled-components'

const CardComponent = ({children,onClick}) => {

    return (
        <CardWrapper onClick={onClick}>
            {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    width: 46%;
    margin: 0 24px 0 0;
    background: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 6px 12px -4px rgb(11 18 25 / 10%);
    box-shadow: 0 6px 12px -4px rgb(11 18 25 / 10%);
    position: relative;

    

    padding: 30px 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 11%) 0 15px 30px 0px, rgb(0 0 0 / 8%) 0 5px 15px 0 !important;

    /* background-color: #fff;
    border-color: #fff;
    color: rgba(0, 0, 0, 0.87); */

`

export default CardComponent
