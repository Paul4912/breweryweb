import React from 'react'

function Card(props) {
    const data = props.data
    return (
        <div className='Card'>
          <img src={data['Image']} height='250' width='250' alt=""></img>
          <div className="CardText">
            <p>{data["Name"]}</p>
            <p>Volume/Keg: {data["Volume Per Keg"]}</p>
            <p>Quantity: {data["Number of Kegs"]}</p>
            <p>Price/Keg: {data["Price Per Keg"]}</p>
            <p>Brewery: {data["Brewery"]}</p>
          </div>
        </div>
      );
}

export default Card;