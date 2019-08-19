import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Home(props) {

  const cards = props.data.map(element => {
    return <Card data={element} />
  });

  return (
    <div className="HomePage">
      <div className='EnterProductButton'>
        <Link to="/EnterProduct">
        <button>List a product</button>
        </Link>
      </div>
      <h1>Brew Direct</h1>
      {cards}
    </div>
  );
}

export default Home;