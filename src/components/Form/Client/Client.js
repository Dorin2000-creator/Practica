import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";
import "./main.css"

function Client() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="error">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    idnp: yup.number().required(),
    email: yup.string().email().required(),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        idnp: "",
        email: "",
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
            <label className="">First Name:</label>
            <Field
              name="firstname"
              className="inputs"
              placeholder="Dragan"
            />
            <ErrorMessage name="firstname" render={renderError} />
          </div>
          
          <div className="form-item">
            <label className="">Last Name:</label>
            <Field
              name="lastname"
              className="inputs"
              placeholder="Dorin"
            />
            <ErrorMessage name="lastname" render={renderError} />
          </div>
          
          <div className="form-item">
            <label className="">IDNP:</label>
            <Field
              name="idnp"
              className="inputs"
              placeholder="13 numbers"
            />
             <ErrorMessage name="idnp" render={renderError} />
          </div>
         
          <div className="form-item">
            <label className="">Email:</label>
            <Field
              name="email"
              className="inputs"
              placeholder="dorin@gmail.com"
            />
            <ErrorMessage name="email" render={renderError} />
          </div>
        
        
        <button
          className="button_next"
          type="next"
        >
          NEXT STEP
        </button>
       
        </div>
      </Form>
    </Formik>
  );
}

export default Client;
