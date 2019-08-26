import React from 'react'
import Card from 'react-bootstrap/Card'

function CardBootstrap(props) {
    const data = props.data
    const imageUri = data.image ? data.image.large.uri : null
    return (
        <div className='CardBootstrap'>
          <Card border='dark' bg='light' style={{ width: '12rem' }}>
            <Card.Img variant="top" src={imageUri} />
            <Card.Body>
                <Card.Title>{data["name"]}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${data["price"]}</Card.Subtitle>
                <Card.Text>
                    Stock: {data["stock"]}
                </Card.Text>
                <Card.Text>
                    Description: {data["description"]}   
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
}

export default CardBootstrap;