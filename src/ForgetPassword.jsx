import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ForgotPassword() {
  function callForgotApi(values) {
    console.log("sending data", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: callForgotApi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-80"
      >
        <h1 className="self-center mb-4 text-2xl font-bold text-tomato-500">
          Forgot Password
        </h1>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <h3>
            Email<span className="text-red-500"> * </span>
          </h3>

          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
          {touched.email && <div className="text-red-700">{errors.email}</div>}
        </div>

        <div className="flex justify-center mt-3 gap-7 ">
          <Button type="button" onClick={resetForm} className="w-2">
            Rest
          </Button>
          <Link to="/ResetPassword">
            <Button type="submit" disabled={!isValid}>
              Forgot Password
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default ForgotPassword;
