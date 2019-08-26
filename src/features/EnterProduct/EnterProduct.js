import React, {useState} from 'react';
import { Form } from 'react-final-form'
import { Field } from 'react-final-form-html5-validation'
import Styles from './Styles'

function EnterProduct(props) {
  const [state, setState] = useState({file:null})

  const fileSelectedHandler = event => {
    event.preventDefault();
    setState({file:event.target.files[0]})
  }

  const readImageBeforeSubmit = (values) => {
    props.submit(values, state.file)
  }

  return (
    <div className="EnterProduct">
    <Styles>
      <h1>List a Product</h1>
      <Form
        onSubmit={readImageBeforeSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Product Name</label>
              <Field
                required
                name="name"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Price</label>
              <Field
                required
                pattern='^\d*\.?\d*$'
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
                pattern='[0-9]+'
                name="stock"
                component="input"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label>Short Description</label>
              <Field name="description" component="textarea" placeholder="Optional" maxLength='68'/>
            </div>
            <div>
            <label>Product Image</label>
              <input
                type="file"
                onChange = {fileSelectedHandler}
                accept=".jpg, .jpeg, .png"
              />
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