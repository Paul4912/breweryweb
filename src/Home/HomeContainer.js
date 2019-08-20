import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ClipLoader } from 'react-spinners';

import Home from './Home'
import { InsertInitialData } from '../actions/LoadingActions'
import { callGetProducts } from '../utilities/ApiCalls'

function HomeContainer(props) {
  const {initialData, loadInitialData} = props

  useEffect(() => {
    //loadInitialData(returnHardCodedData())
    callGetProducts().then(loadInitialData)
  }, [loadInitialData])

  return(initialData ? <Home data={initialData} /> : <ClipLoader/>)
}

const mapStateToProps = state => ({
  initialData: state.Loading.initialData
})

const mapDispatchToProps = (dispatch) => ({
  loadInitialData: initialData => dispatch(InsertInitialData(initialData))
})

function returnHardCodedData() {
    var data = [
        {
          "Image": "https://cdn10.bigcommerce.com/s-4dsnxp/products/5649/images/6518/Mountain_Goat_Lager__13752.1552004778.500.440.png?c=2",
          "Name": "Mountain Goat",
          "Volume Per Keg": "50L",
          "Number of Kegs": "50",
          "Price Per Keg": "$500",
          "Brewery": "Paul's Brewery",
          "Action": "Modifty"
        },
        {
          "Image": "https://cdn10.bigcommerce.com/s-4dsnxp/products/5649/images/6518/Mountain_Goat_Lager__13752.1552004778.500.440.png?c=2",
          "Name": "Lightning Bolt",
          "Volume Per Keg": "50L",
          "Number of Kegs": "77",
          "Price Per Keg": "$450",
          "Brewery": "Paul's Brewery",
          "Action": "Modifty"
        },
        {
          "Image": "https://cdn10.bigcommerce.com/s-4dsnxp/products/5649/images/6518/Mountain_Goat_Lager__13752.1552004778.500.440.png?c=2",
          "Name": "Newtowner",
          "Volume Per Keg": "50L",
          "Number of Kegs": "53",
          "Price Per Keg": "$600",
          "Brewery": "Paul's Brewery",
          "Action": "Modifty"
        },
        {
          "Image": "https://cdn10.bigcommerce.com/s-4dsnxp/products/5649/images/6518/Mountain_Goat_Lager__13752.1552004778.500.440.png?c=2",
          "Name": "Apple Cider",
          "Volume Per Keg": "50L",
          "Number of Kegs": "50",
          "Price Per Keg": "$500",
          "Brewery": "Another Brewery",
          "Action": ""
        }
    ]
    return data
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);