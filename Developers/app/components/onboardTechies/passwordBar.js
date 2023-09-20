"use client";

import React, { useState } from "react";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const updateRules = (value) => {
    setHasMinLength(value.length >= 8);
    setHasLowerCase(/[a-z]/.test(value));
    setHasSpecialChar(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value));
    setHasUpperCase(/[A-Z]/.test(value));
    setHasNumber(/[0-9]/.test(value));
  };

  const ruleText = "text-xs font-light leading-none tracking-tight";
  return (
    <div
      className={`${lexend.className} relative w-full max-sm:px-3 sm:px-[20%] xl:px-[30%] mx-auto pt-8 space-y-[14px]`}
    >
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          const newPassword = e.target.value;
          setPassword(newPassword);
          updateRules(newPassword);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="py-2 px-4 focus:outline-none bg-white rounded-[7px] w-full m-auto shadow border border-gray-200 text-black text-lg font-light leading-normal tracking-tight"
      />
      {isFocused && (
        <div
          className={`relative space-y-3 opacity-${isFocused ? "100" : "0"}`}
        >
          <p className="text-black text-xs font-light leading-none tracking-tight text-left">
            Password should contain
          </p>
          <div className="flex justify-between sm:pr-[41px]">
            <ul className="list-disc list-inside text-left space-y-3">
              <li
                className={`${ruleText} ${
                  hasMinLength ? "text-green-600" : "text-red-600"
                }`}
              >
                At least 8 characters
              </li>
              <li
                className={`${ruleText} ${
                  hasLowerCase ? "text-green-600" : "text-red-600"
                }`}
              >
                Minimum 1 lowercase
              </li>
              <li
                className={`${ruleText} ${
                  hasSpecialChar ? "text-green-600" : "text-red-600"
                }`}
              >
                Minimum 1 special character
              </li>
            </ul>
            <ul className="list-disc list-outside text-left space-y-3">
              <li
                className={`${ruleText} ${
                  hasUpperCase ? "text-green-600" : "text-red-600"
                }`}
              >
                Minimum 1 uppercase
              </li>
              <li
                className={`${ruleText} ${
                  hasNumber ? "text-green-600" : "text-red-600"
                }`}
              >
                Minimum 1 number
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
