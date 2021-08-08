import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'
import { ChevronForwardOutline } from 'react-ionicons'


const ListContent = ({title,subtitle,body,icon=true}) => {
    return (
        <ListContentWrapper>
            <div className="main_content">
            <Title text={title} />
            <div className="content">{body}</div>
            <span className="subtitle">{subtitle}</span>

            </div>
           
           {icon&&<div className="icon_forword">
            <ChevronForwardOutline
  color={'#ff9601'} 
  shake 
  height="30px"
  width="30px"
/>
            </div>} 
  
        </ListContentWrapper>
    )
}

const ListContentWrapper = styled.div`
position: relative;
.main_content{
    margin-right: 25px;
}
.subtitle{
            margin-left: 24px;
            font-weight: 400;
            font-size: 12px !important;
            color: var(--primary-green);
            font-family: var(--font);
            position: absolute;
            top: -24px;
            right: 0;
            
        }
        .content{
            overflow-y: auto;
    margin-left: 32px;
    margin-right: 16px;
    font-family: var(--font);

        }
        .icon_forword{
            position: absolute;
            top: 0;
            right: 0;
        }
`

export default ListContent
