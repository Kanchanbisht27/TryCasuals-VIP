import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ResetPassword() {
  function callResetApi(values) {
    console.log(
      "sending data",
      values.Oldpassword,
      values.password,
      values.Confirmpassword
    );
  }

  const schema = Yup.object().shape({
    Oldpassword: Yup.string().min(8).required(),
    password: Yup.string().min(8).required(),
    Confirmpassword: Yup.string().min(8).required(),
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
      Oldpassword: "",
      password: "",
      Confirmpassword: "",
    },
    onSubmit: callResetApi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-80"
      >
        <h1 className="self-center mb-4 text-2xl font-bold text-tomato-500">
          Rest Password
        </h1>

        <div>
          <label htmlFor="Oldpassword" className="sr-only">
            Old Password
          </label>
          <h3>
            Old Password <span className="text-red-500"> * </span>
          </h3>

          <input
            value={values.Oldpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Oldpassword"
            type="password"
            name="Oldpassword"
            required
            autoComplete="Oldpassword"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Old Password"
          />
          {touched.Oldpassword && (
            <div className="text-red-700">{errors.Oldpassword}</div>
          )}
        </div>

        <div>
          <label htmlFor="Password" className="sr-only">
            Password
          </label>
          <h3>
            Password <span className="text-red-500"> * </span>
          </h3>

          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            type="password"
            name="password"
            required
            autoComplete="password"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
          {touched.password && (
            <div className="text-red-700">{errors.password}</div>
          )}
        </div>
        <div>
          <label htmlFor="Confirmpassword" className="sr-only">
            Confirm Password
          </label>
          <h3>
            Confirm Password <span className="text-red-500"> * </span>
          </h3>

          <input
            value={values.Confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Confirmpassword"
            type="password"
            name="Confirmpassword"
            required
            autoComplete="Confirmpassword"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Confirm Password"
          />
          {touched.Confirmpassword && (
            <div className="text-red-700">{errors.Confirmpassword}</div>
          )}
        </div>
        <div className="flex justify-center mt-3 gap-7 ">
          <Button type="button" onClick={resetForm} className="w-2">
            Clear
          </Button>
          <Button type="submit" disabled={!isValid} className="">
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ResetPassword;
