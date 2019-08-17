import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomeContainer from './Home/HomeContainer';
import EnterProductContainer from './EnterProduct/EnterProductContainer';
import React from 'react'
import './App.scss'

function App() {
    return(
    <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route path="/EnterProduct" component={EnterProductContainer} />
        </div>
    </Router>) 
}
  
export default App;