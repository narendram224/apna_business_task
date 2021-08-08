import {BUY_CAKE} from './cakeType';

export const buycake=(number=1)=>{
        return{
            type:BUY_CAKE,
            payload:number
        }
}