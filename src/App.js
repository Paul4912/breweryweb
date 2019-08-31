import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'

import HomeContainer from './features/Home/HomeContainer';
import EnterProductContainer from './features/EnterProduct/EnterProductContainer';
import ModifyProductContainer from './features/ModifyProduct/ModifyProductContainer';
import './App.scss'

function App() {

    const topNavBar = <div className='site-top-navbar'>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href=""></Nav.Link>
      <Nav.Link href="">About Us</Nav.Link>
      <Nav.Link href=""></Nav.Link>
      <Nav.Link href="">Contact:</Nav.Link>
      <Nav.Link href="">0412 123 123</Nav.Link>
      <Nav.Link href="">BrewDirect@gmail.com</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="">Logout</Nav.Link>
    </Nav>
    </Navbar>
    </div>

    return(
    <div className='App'>
    {topNavBar}
    <Router>
        <div className="Routing">
          <Route exact path="/" component={HomeContainer} />
          <Route path="/EnterProduct" component={EnterProductContainer} />
          <Route path="/ModifyProduct" component={ModifyProductContainer} />
        </div>
    </Router>
    </div>) 
}
  
export default App;