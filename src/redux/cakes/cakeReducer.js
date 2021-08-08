import {BUY_CAKE} from './cakeType';

const initialState ={
    noOfCake:10
}

const cakeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                noOfCake:state.noOfCake-action.payload
            }
        default:
            return state;
    }
}

export default cakeReducer;