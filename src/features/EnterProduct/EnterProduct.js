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
              <label>Container</label>
              <Field required name="container" component="select" type="text" placeholder="">
                <option value="Keg50L">Keg50L</option>
                <option value="Keg25L">Keg25L</option>
                <option value="Keg20L">Keg20L</option>
                <option value="Case(24)">Case(24)</option>
                <option value="Case(10)">Case(10)</option>
                <option value="Other">Other(Specify in description)</option>
              </Field>
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