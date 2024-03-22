import { ActionTypes } from '../Constant/Constants';
const initState = {
    cart: [],
};

const CartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.AddToCart:
            return {
                ...state,
                cart: payload,
            }
    }
}

export default CartReducer;