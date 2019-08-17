import * as types from '../constants/ActionTypes'

const initialState = {
    initialData: null
}

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PAGE:
            return {
                ...state,
                initialData: action.payload
            }

        default:
            return state
    }
}

export default LoadingReducer