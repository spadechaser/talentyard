"use client";

import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {}
  };

  const handleForgotPassword = () => {};

  return (
    <div className="w-full max-w-xs sm:max-w-[608px] mx-auto mt-10 space-y-[33px]">
      <h2 className="text-black text-[32px] font-normal leading-[41.92px] tracking-wide">
        Welcome back
      </h2>
      <p className="text-black text-sm font-light leading-[18.34px] tracking-tight">
        Sign in to get access to your work reports, status updates, profile and
        invoices.
      </p>
      <form onSubmit={handleSignIn} className="space-y-[31px]">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 pl-4 focus:outline-none bg-white rounded-[7px] w-full m-auto border border-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black leading-normal tracking-tight"
          />
        </div>
        <div className="space-y-[19px]">
          <div className="space-y-[14px]">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 pl-4 focus:outline-none bg-white rounded-[7px] w-full m-auto border border-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black leading-normal tracking-tight"
            />
            <p
              onClick={handleForgotPassword}
              className="text-sky-800 text-right text-sm font-normal leading-[18.34px] tracking-tight cursor-pointer hover:underline"
            >
              Forgot Password
            </p>
          </div>
          <button
            type="submit"
            className="w-full max-w-[227px] py-3 bg-primary rounded-xl hover:shadow-lg shadow-accentSecondary/30 transition delay-150 ease-in-out hover:scale-105 duration-300 hover:bg-dark text-white text-lg font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
