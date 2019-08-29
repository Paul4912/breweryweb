import * as types from '../constants/ActionTypes'

const initialState = {
    modify: null
}

const Product = (state = initialState, action) => {
    switch (action.type) {
        case types.MODIFY_PRODUCT:
            return {
                ...state,
                modify: action.product
            }
        default:
            return state
    }
}

export default Product