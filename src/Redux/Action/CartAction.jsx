import { ActionTypes } from '../Constant/Constants';

export const addToCart = (payload) =>{
    return {
        type : ActionTypes.AddToCart,
        payload : payload,
    };
};