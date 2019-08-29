import React, {useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router';

import EnterProduct from './EnterProduct'
import { callCreateProduct, callUploadImage } from '../../utilities/ApiCalls'


function EnterProductContainer(props) {
    const [state, setState] = useState({loading:false})
    const [route, setRoute] = useState({fire:false})

    const submitProduct = async (product, file) => {
        setState({loading:true})
        const response = await callCreateProduct(product)
        if(response.id && file) {
            const fd = new FormData()
            fd.append('image', file, file.name)
            await callUploadImage(response.id, fd)
        }
        setState({loading:false})
        setRoute({fire:true})
    }

    if(route.fire) {
        return <Redirect to='/' />
    }
    return (state.loading ? <Spinner animation="border" /> : <EnterProduct submit={submitProduct} />)
}
  
export default EnterProductContainer
  