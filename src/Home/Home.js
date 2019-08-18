import React from 'react'
import Table from '../utilities/Table'
import { Link } from 'react-router-dom'


function Home(props) {
  return (
    <div className="HomePage">
      <Link to="/EnterProduct">
        <button >List a product</button>
      </Link>
      <Table data={props.data}/>
    </div>
  );
}

export default Home;