import React, {useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import ModifyProduct from './ModifyProduct'
import { callUpdateProduct, callUploadImage } from '../../utilities/ApiCalls'


function ModifyProductContainer(props) {
    const [state, setState] = useState({loading:false})
    const [route, setRoute] = useState({fire:false})
    const { existingProduct } = props

    const submitProduct = async (product, file) => {
        setState({loading:true})
        console.log(existingProduct)
        await callUpdateProduct(product, existingProduct.id)
        if(file) {
            const fd = new FormData()
            fd.append('image', file, file.name)
            await callUploadImage(existingProduct.id, fd)
        }
        setState({loading:false})
        setRoute({fire:true})
    }

    if(route.fire) {
        return <Redirect to='/' />
    }
    return (state.loading ? <Spinner animation="border" /> : <ModifyProduct submit={submitProduct} currentProduct={existingProduct} />)
}

const mapStateToProps = state => ({
    existingProduct: state.Product.modify
})
  
export default connect(mapStateToProps)(ModifyProductContainer);
  