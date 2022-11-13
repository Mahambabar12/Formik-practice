import React from 'react'
import { Formik } from 'formik';

export default function Form() {
    
    return (
        <Formik 
        initialValues={{ name: '' }}  

        validate = {values => {
            let errors = {};
            if(!values.name) {
              errors.name = 'Name is required';
            }
            return errors;
          }}

        onSubmit={values => {  
            console.log('submitting', values);  
          }} >

            {({ handleSubmit,  handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
            <div>
              <input name="name" 
                     onChange={handleChange} 
                     name="name"
                     value={values.name} 
                     type="text" 
                     placeholder="Name">
              </input>
          
            {errors.name &&  
              <span style={{ color:"red", fontWeight: "bold" }}>  
              {errors.name}      
              </span>  
          
            } 
          </div>
            <div>
              <button>Submit</button>
            </div>
           </form>
            )}
        </Formik>
    )
}