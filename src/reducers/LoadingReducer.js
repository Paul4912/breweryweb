import * as types from '../constants/ActionTypes'

const initialState = {
    initialData: null
}

const Loading = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PAGE:
            return {
                ...state,
                initialData: action.initialData
            }
        default:
            return state
    }
}

export default Loading