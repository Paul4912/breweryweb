import * as types from '../constants/ActionTypes'

export const InsertInitialData = (initalData) => ({
    type: types.LOAD_PAGE,
    payload: initalData
})