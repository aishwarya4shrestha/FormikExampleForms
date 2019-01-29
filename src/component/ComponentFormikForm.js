import React from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          FirstName:
          <Field name="firstName" />
          <div className="form-field-error">
            {touched.firstName && errors.firstName}
          </div>
          <br />
          LastName: <Field name="lastName" />
          <div className="form-field-error">
            {touched.lastName && errors.lastName}
          </div>
          <br />
          Email:
          <Field name="email" type="email" />
          <div className="form-field-error">
            {touched.email && errors.email}
          </div>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
