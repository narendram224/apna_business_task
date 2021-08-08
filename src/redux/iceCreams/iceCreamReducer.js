
import {BUY_ICECREAMS} from './iceCreamType';
const initialState={
    noOfIceCreams:10
}

const iceCreamReducer = (state=initialState,action)=>{

    switch (action.type) {
        case  BUY_ICECREAMS:
           return {
               ...state,
               noOfIceCreams:state.noOfIceCreams -1
           } 
           
        default:
            return state;
    }
}

export default iceCreamReducer;