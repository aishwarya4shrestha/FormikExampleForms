import React from "react";
import { withFormik } from "formik";
import { getSimpleValidationSchema } from "../validation/validationSchema";

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <br />
      Name:
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fullName}
        name="fullName"
      />
      {errors.fullName && touched.fullName && (
        <div id="feedback">{errors.fullName}</div>
      )}
      <br />
      Email:
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        name="email"
      />
      {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ fullName: "", email: "" }),
  validationSchema: getSimpleValidationSchema,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(MyForm);

export default MyEnhancedForm;
