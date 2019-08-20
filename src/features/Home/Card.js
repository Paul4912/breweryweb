import React from 'react'

function Card(props) {
    const data = props.data
    return (
        <div className='Card'>
          <img src={data['Image']} alt=""></img>
          <div className="CardText">
            <p>{data["name"]}</p>
            <p>Description: {data["description"]}</p>
            <p>Stock: {data["stock"]}</p>
            <p>Price: {data["price"]}</p>
            <p>Brewery: {data["Brewery"]}</p>
          </div>
        </div>
      );
}

export default Card;