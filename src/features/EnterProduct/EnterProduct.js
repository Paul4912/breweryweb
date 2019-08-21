import React from 'react';
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function EnterProduct(props) {
  return (
    <div className="EnterProduct">
      <div className='HomeButton'>
        <Link to="/">
          <Button variant="primary" size="lg">
            Home
          </Button>
        </Link>
      </div>
    <Styles>
      <h1>List a Product</h1>
      <Form
        onSubmit={props.submit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
    </div>
  );
}



export default EnterProduct;