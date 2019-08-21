import React from 'react'
import EnterProduct from './EnterProduct'
import { callCreateProduct } from '../../utilities/ApiCalls'


function EnterProductContainer() {
    return (<EnterProduct submit={submitProduct} />)
}

function submitProduct(product) {
    console.log(product)
    callCreateProduct(product)
}
  
export default EnterProductContainer;
  