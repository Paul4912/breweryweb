import React, {useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router';
import { login, logout } from './LoginServices'

import Login from './Login'

function LoginContainer(props) {
    const [state, setState] = useState({loading:false})
    const [route, setRoute] = useState({fire:false})

    useEffect(() => {
        logout()
    }, [])

    const submitLogin = async (values) => {
        setState({loading:true})
        const user = await login(values.username, values.password)
        setState({loading:false})
        setRoute({fire:true})
    }

    if(route.fire) {
        return <Redirect to='/' />
    }
    return (state.loading ? <Spinner animation="border" /> : <Login submitLogin={submitLogin} />)
}
  
export default LoginContainer
  