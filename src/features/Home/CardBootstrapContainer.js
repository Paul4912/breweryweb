import React from 'react'
import { connect } from 'react-redux'

import { modifyProductAction } from '../../actions/ProductActions'
import CardBootstrap from './CardBootstrap'

function CardBootstrapContainer(props) {
    const { data, modifyProduct } = props

    const modifyElement = (product) => {
        modifyProduct(product)
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