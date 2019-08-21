import React from 'react';
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
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
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Product Name</label>
              <Field
                required
                name="product"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Price</label>
              <Field
                required
                pattern='[0-9].+'
                name="price"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Stock</label>
              <Field
                required
                pattern='[0-9].+'
                name="stock"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Description</label>
              <Field name="description" component="textarea" placeholder="Optional" maxLength='68'/>
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