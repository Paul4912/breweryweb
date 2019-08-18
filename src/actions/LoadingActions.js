import * as types from '../constants/ActionTypes'

export const InsertInitialData = initialData => ({
    type: types.LOAD_PAGE,
    initialData
})