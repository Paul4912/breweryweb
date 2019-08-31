import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'

import Home from './Home'
import { InsertInitialData } from '../../actions/LoadingActions'
import { callGetProducts } from '../../utilities/ApiCalls'

function HomeContainer(props) {
  const {initialData, loadInitialData} = props

  useEffect(() => {
    callGetProducts().then(loadInitialData)
  }, [loadInitialData])

  return(initialData ? <Home data={initialData} /> : <Spinner animation="border" />)
}

const mapStateToProps = state => ({
  initialData: state.Loading.initialData
})

const mapDispatchToProps = (dispatch) => ({
  loadInitialData: initialData => dispatch(InsertInitialData(initialData))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);