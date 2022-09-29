import axios from "axios";
import React from "react";
import Button from "./Button";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function callLoginApi(event) {
    event.preventDefault();

    if (password.length < 8) {
      setPasswordError("Password should be atleast 8 characters long");
      return;
    }

    console.log("sending data", email, password);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (password.length >= 8) {
      setPasswordError("");
    }
  }

  function handlePasswordOnBlur(event) {
    if (password.length < 8) {
      setPasswordError("Password should be atleast 8 characters long");
    }
  }

  function resetForm() {
    setPassword("");
    setEmail("");
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={callLoginApi}
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
            Username or email address <span className="text-red-500"> * </span>
          </h3>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email-address"
            type="email"
            required
            autoComplete="email"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <h3 className="mt-2">
            Password <span className="text-red-500"> * </span>
          </h3>
          <input
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordOnBlur}
            id="password"
            type="password"
            required
            autoComplete="current-password"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-non focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div className="mt-2 text-start">
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales" className="pl-2">
            Remember me
          </label>

          {passwordError && <div className="text-red-500">{passwordError}</div>}
        </div>
        <div className="flex justify-between mt-2">
          <Button type="button" onClick={resetForm} className="self-end mt-5">
            Reset
          </Button>
          <Button type="sumbit" className="self-end mt-5">
            Login
          </Button>
        </div>
        <div>
          <button>SignUp</button>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
