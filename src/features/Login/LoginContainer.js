import React, {useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router';

import Login from './Login'

function LoginContainer(props) {
    const [state, setState] = useState({loading:false})
    const [route, setRoute] = useState({fire:false})

    const submitLogin = async (values) => {
        setState({loading:true})
        //api call to login
        console.log("call api to login")
        setState({loading:false})
        setRoute({fire:true})
    }

    if(route.fire) {
        return <Redirect to='/' />
    }
    return (state.loading ? <Spinner animation="border" /> : <Login submitLogin={submitLogin} />)
}
  
export default LoginContainer
  