import React from 'react'
import MainLayout from '../styled/MainLayout'
import NavBar from '../components/oranasium/NavBar'
import Skelton from '../components/Skelton'
import ListContent from '../components/molecules/ListContent'
import CardComponent from '../components/atoms/CardComponent'
import { useSelector } from 'react-redux'
import { isoDateConverter } from '../Helper/IsoDateConverter'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const initialstate = useSelector((state)=>state.search)
    const searchedResult =initialstate.searchResult;
    const loading =initialstate.loading.query;
    const error =initialstate.error.query;
console.log("the searchg",searchedResult);
console.log("the loading",loading);
console.log("the error",error);

const navigateToDetail = (objectId)=>{
        history.push(`/detail/${objectId}`);
}   



    return (
        <div>
            <NavBar />
            <MainLayout>
                    {loading&&<Skelton profile={false} />}

                    {!loading&&searchedResult.length>0?
                    searchedResult.map((sItem)=>{
                        return (
                    <CardComponent key={sItem['objectID']} onClick={()=>navigateToDetail(sItem['objectID'])}  >
                             <ListContent title={sItem['title']} subtitle={isoDateConverter(sItem['created_at'])}  />
                     </CardComponent>
                        )
                    })
                    
                     :(
                         !loading &&searchedResult.length===0&&
                         <CardComponent>
                             {error?<ListContent title={error}  icon={false} />:
                             
                        <ListContent title="No Data Found" icon={false}   />}
                        </CardComponent>
                     )
                    }
                   
                    {/* <CommentCard/> */}
            </MainLayout>
        </div>
    )
}

export default HomePage
