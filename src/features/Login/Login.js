import React from 'react';
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import Styles from '../../utilities/bootstrap/Styles'

function Login(props) {

  const readImageBeforeSubmit = (values) => {
    props.submitLogin(values)
  }

  return (
    <div className="Login">
    <Styles>
      <h1>Login</h1>
      <Form
        onSubmit={readImageBeforeSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <Field
                required
                name="username"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                required
                name="password"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
    </div>
  );
}



export default Login;