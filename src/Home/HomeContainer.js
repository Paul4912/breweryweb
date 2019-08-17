import React from 'react'
import Home from './Home'

class HomeContainer extends React.Component {

  render() {
    const data = returnHardCodedData()
    return (<Home data={data} />)
  }
}

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
  
export default HomeContainer;
  