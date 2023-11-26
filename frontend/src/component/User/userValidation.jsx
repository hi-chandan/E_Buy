import * as Yup from "yup";

const MAX_FILE_SIZE = 1200000; //1Mb

export const signupSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20).required("please enter your name"),
  email: Yup.string().email().required("please enter you email"),
  password: Yup.string().min(8).max(20).required("please enter you password"),
  avatar: Yup.mixed()
    .required("Required less than 1MB")
    .test("is-valid-size", "Max allowed size is 1MB", (value) => {
      return value && value.length <= MAX_FILE_SIZE;
    }),
});
