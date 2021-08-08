import React from 'react'
import styled from 'styled-components'

const Title = ({text}) => {
    return (
        <TitleStyled>
            {text}
        </TitleStyled>
    )
}

const TitleStyled = styled.label`
    font-size: 1.9rem;
    line-height: 26px;
    font-family: roboto,sans-serif;
    color: #0b1219;
    margin: 0;

    /* font-size: 20px !important;
    font-weight: 700;
    line-height: 1 !important;
    letter-spacing: 0.02em !important; */
`
export default Title
