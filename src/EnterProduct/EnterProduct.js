import React from 'react';
import { Form, Field } from 'react-final-form'
import Styles from './Styles'

function EnterProduct(props) {
  return (
    <div className="EnterProduct">
        <p>abc</p>
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