import * as Yup from "yup";

/**
 * Formik HOC implementation schema
 */
export function getSimpleValidationSchema() {
  return Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .required("Please enter your full name.")
      .min(5, "Please enter you name more then five characters!")
      .max(50, "Please enter you name less then two characters!!")
      .matches(/^[A-Za-z.\s_-]+$/, `You can't use numbers.`)
      .required("Required"),
    email: Yup.string()
      .email("Please valid enter email address.")
      .trim()
      .required("Please valid enter email address.")
  });
}

export function getFirstScreenValidationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email("Please valid enter email address.")
      .trim()
      .required("Please valid enter email address."),
    password: Yup.string()
      .trim()
      .min(6, "Your password must contain atleast 6 characters.")
      .required("Please enter password."),
    passwordConfirmation: Yup.string()
      .required("Please enter confirm password.")
      .oneOf([Yup.ref("password")], "Password does not match.")
  });
}

export function getSecondSignUpPageValidationSchema() {
  return Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .required("Please enter your full name.")
      .matches(/^[A-Za-z.\s_-]+$/, `You can't use numbers.`),
    companyName: Yup.string().required("Please enter your company name."),
    phoneNumber: Yup.string()
      .trim()
      .required("Please enter your phone number.")
      .matches(
        /^(0|[1-9]\d*)$/,
        `You can't use alphabets or special characters.`
      )
      .matches(/^\b\d{10}$\b/, "Please enter a valid 10 digit number."),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must accept Terms and Conditions."
    )
  });
}

export function getAdvertiserProfileValidationSchema() {
  return Yup.object().shape({
    oldPassword: Yup.string()
      .min(6, "Your password must contain atleast 6 characters.")
      .trim()
      .required("Please enter old password."),
    newPassword: Yup.string()
      .min(6, "Your password must contain atleast 6 characters.")
      .trim()
      .required("Please enter new password.")
      .notOneOf([Yup.ref("oldPassword")], "Password should not match"),
    passwordConfirmation: Yup.string()
      .required("Please enter confirm password.")
      .trim()
      .oneOf([Yup.ref("newPassword")], "Password does not match")
      .notOneOf([Yup.ref("oldPassword")], "Password should not match")
  });
}

export function getAdminProfileValidationSchema() {
  return Yup.object().shape({
    oldPassword: Yup.string()
      .min(6, "Your password must contain atleast 6 characters.")
      .trim()
      .required("Please enter old password."),
    newPassword: Yup.string()
      .min(6, "Your password must contain atleast 6 characters.")
      .trim()
      .required("Please enter new password.")
      .notOneOf([Yup.ref("oldPassword")], "Password should not match"),
    passwordConfirmation: Yup.string()
      .required("Please enter confirm password.")
      .trim()
      .oneOf([Yup.ref("newPassword")], "Password does not match.")
      .notOneOf([Yup.ref("oldPassword")], "Password should not match.")
  });
}

export function getCreateNewAdValidationSchema(allCities) {
  return Yup.object().shape({
    adName: Yup.string()
      .required("Please enter Advertisement Name.")
      .trim(),
    targetArea: Yup.array()
      .of(Yup.string().required("Target Area options should be a string."))
      .min(1)
      .test("city-id-test", "Validation failure message", function(
        selectedCityIds
      ) {
        if (selectedCityIds && selectedCityIds.length < 1) {
          return false;
        }
        const isValidForm = selectedCityIds.reduce((valid, cityId) => {
          let localValid = false;

          allCities.forEach(city => {
            if (cityId === `${city.id}`) {
              localValid = true;
            }
          });

          return localValid;
        }, true);

        return isValidForm;
      })
      .required("Please select atleast one city.")
  });
}
