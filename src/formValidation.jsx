import * as Yup from "yup";

export const formValidation = Yup.object({
  //   name: Yup.string().min(3).required("Name is required"),
  name: Yup.string()
    .min(3)
    .matches(/^[^\d]+$/, "Name cannot contain numbers")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter valid Email")
    .required("Pleaae enter email"),
  mobile: Yup.string()
    .min(10)
    .max(10)
    .matches(/^\d+$/, "Phone number must contain only digits")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
