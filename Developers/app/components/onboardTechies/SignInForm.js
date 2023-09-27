"use client";

import Link from "next/link";
import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      setError(error.message);
    }
  };

  const handleForgotPassword = () => { };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-black text-[32px] font-semibold leading-[41.92px] tracking-wide">
          Welcome back
        </h2>
        <p className="text-black text-base font-extralight leading-[18.34px] tracking-tight">
          Sign in to get access to your work reports, status updates, profile and
          invoices.
        </p>
      </div>
      <form
        onSubmit={handleSignIn}
        className="space-y-6 w-full max-w-[608px]"
      >
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            required
            onChange={handleInputChange}
            className="relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-extralight placeholder:text-black"
          />
        </div>
        <div className="space-y-4 w-full">
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              required
              onChange={handleInputChange}
              className="relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-extralight placeholder:text-black"
            />
            <div className="w-full flex justify-end">
              <a
                onClick={handleForgotPassword}
                className="text-sky-800 text-right text-sm font-normal leading-[18.34px] tracking-tight cursor-pointer hover:underline"
              >
                Forgot Password
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-full py-3 bg-primary rounded-xl transition delay-150 ease-in-out hover:scale-105 duration-300 hover:bg-dark text-white text-lg font-semibold"
            >
              Login
            </button>
            <span className="font-extralight">{"Don't"} have an account?<Link href={"/onboard"} className="ml-1 text-primary hover:underline-offset-4 hover:underline">Create Account</Link></span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
