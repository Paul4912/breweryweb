import { combineReducers } from 'redux'
import Loading from './LoadingReducer'
import Product from './ProductReducer'

export default combineReducers({
    Loading,
    Product
})