import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
// import Dropdown from 'react-dropdown';
// const options = [
//   'MDL', 'USD', 'EUR'
// ];
// const defaultOption = options[0];
import 'react-dropdown/style.css';
import * as yup from "yup";

function Account() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="error">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    Account: yup.string().required(),
        iban:yup.number().required(),
        // Currency: yup
        // .string()
        // .oneOf(['Yes', 'No'])
        // .required('Please indicate your communications preference'),
        Amount:yup.string().required(),
        Brach:yup.string().required(),
    
  });
 
  return (
    <Formik
      initialValues={{
        Account: "",
        iban:"",
        // Currency:"",
        Amount:"",
        Brach:"",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="box">
      <div className="wrapper">
          <div className="form-item">
            <label className="">Account ID:</label>
            <Field
              name="Account"
              className="inputs"
              placeholder="12345"
            />
            <ErrorMessage name="Account:" render={renderError} />
          </div>
          
          <div className="form-item">
            <label className="">IBAN</label>
            <Field
              name="iban"
              className="inputs"
              placeholder="MDL3214124124rfd34141"
            />
            <ErrorMessage name="lastname" render={renderError} />
          </div>
          
          {/* <div className="form-item">
            <label className="">Currency</label>
            <Form.Field
    type="dropdownlist"
    data={['Yes', 'No']}
    name="contactPermission" />
          </div> */}
         
          <div className="form-item">
            <label className="">Amount:</label>
            <Field
              name="Amount"
              className="inputs"
              placeholder="min 100"
            />
            <ErrorMessage name="Amount" render={renderError} />
          </div>
          <div className="form-item">
            <label className="">Brach name</label>
            <Field
              name="Brach"
              className="inputs"
              placeholder="Brach"
            />
            <ErrorMessage name="Brach" render={renderError} />
          </div>
        
        <button
          className="button_next"
          type="submit"
        >
          NEXT STEP
        </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Account;
