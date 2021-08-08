import React from 'react'
import styled from 'styled-components'

const MainLayout = ({children}) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}

const MainWrapper =styled.main`
    width: 90%;
    margin-left: 142px;
    font-family: var(--font);
    margin-top: 10rem;


`
export default MainLayout
