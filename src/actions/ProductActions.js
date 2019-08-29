import * as types from '../constants/ActionTypes'

export const modifyProductAction = product => ({
    type: types.MODIFY_PRODUCT,
    product
})