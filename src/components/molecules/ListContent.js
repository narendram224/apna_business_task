import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'
import { ChevronForwardOutline,StarOutline} from 'react-ionicons'



const ListContent = ({title,subtitle,body,icon=true,point=false}) => {
    return (
        <ListContentWrapper>
            <div className="main_content">
            <Title text={title} />
            <div className="content">{body}
</div>
            <span className="subtitle">{subtitle}</span>

            </div>
           {point&&<div className="comment_point">
            <p>{point}</p>
          <StarOutline
  color={'#00000'} 
  title="point"
  height="20px"
  width="20px"
/>
          </div>}
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
cursor: pointer;
.main_content{
    margin-right: 25px;
}

.comment_point{
position: absolute;
top: 24px;
right: 0;
display: flex;
    align-items: center;
    background-color: var( --primary-blue);
    padding: 5px;
    border-radius: 25px;
    margin-right: 5px;
    margin-top: 5px;
p{
  font-size: 0.9rem;
color: #fff; 


}
span{
  position: absolute;
  top: -9px;
    right: -9px;
    color: var(--primary-yellow);
    margin: 0;
}
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
    margin-right: 16px;
    font-family: var(--font);
    margin-top: 10px;

        }
        .icon_forword{
            position: absolute;
            top: 0;
            right: 0;
        }
`

export default ListContent
