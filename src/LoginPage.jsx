import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function LoginPage() {
  function callLoginApi(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
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
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-80"
      >
        <h1 className="self-center mb-4 text-2xl font-bold text-tomato-500">
          Login TryCasual.com
        </h1>

        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <h3>
            Email address <span className="text-red-500"> * </span>
          </h3>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email-address"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
          {touched.email && <div className="text-red-700">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <h3 className="mt-2">
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
            autoComplete="current-password"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
          {touched.password && (
            <div className="text-red-700">{errors.password}</div>
          )}
        </div>
        <div className="mt-2 text-start">
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales" className="pl-2">
            Remember me
          </label>
        </div>
        <div className="flex justify-between mt-2">
          <Button type="button" onClick={resetForm} className="self-end mt-5">
            Reset
          </Button>
          <Button type="sumbit" className="self-end mt-5" disabled={!isValid}>
            Login
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/ForgotPassword">
            <button className="mx-2 font-bold text-gray-700">
              Forgot password
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <h1 className="text-gray-500 ">Dont have an account?</h1>
          <Link to="/SignUp">
            <button className="mx-2 font-bold text-gray-700">SignUp</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
