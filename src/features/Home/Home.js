import React from 'react'
import { Link } from 'react-router-dom'
import CardBootstrap from './CardBootstrap'
import Button from 'react-bootstrap/Button'

function Home(props) {
  const cards = props.data.map(element => {
    return <CardBootstrap data={element} />
  });

  return (
    <div className="HomePage">
      <div className='EnterProductButton'>
        <Link to="/EnterProduct">
          <Button variant="primary" size="lg">
            List a product
          </Button>
        </Link>
      </div>
      <h1>Brew Direct</h1>
      {cards}
    </div>
  );
}

export default Home;