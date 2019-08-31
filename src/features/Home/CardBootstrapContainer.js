import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import { modifyProductAction } from '../../actions/ProductActions'
import CardBootstrap from './CardBootstrap'

function CardBootstrapContainer(props) {
    const { data, modifyProduct } = props
    const [route, setRoute] = useState({fire:false})

    const modifyElement = async (product) => {
        await modifyProduct(product)
        setRoute({fire:true})
    }

    if(route.fire) {
        return <Redirect to='/ModifyProduct' />
    }
    return(<CardBootstrap data={data} clickModify={modifyElement} />)
}

//Currently not used
const mapStateToProps = state => ({
    product: state.Product.modify
})
  
const mapDispatchToProps = (dispatch) => ({
    modifyProduct: product => dispatch(modifyProductAction(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardBootstrapContainer);