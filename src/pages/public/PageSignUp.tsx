import React from "react";
import InputFiled from "./InputFiled";

export default function PageSignUp() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto hidden  sm:block"
          src="./logo.svg"
          alt="Your Blog"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 whitespace-nowrap">
          Sign up for an account in sayed blog
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <InputFiled
            type="text"
            id="name"
            autoComplete="name"
            name="name"
            placeholder="Enter name"
            title="Name"
          />
          <InputFiled
            type="email"
            name="email"
            autoComplete="email"
            id="email"
            placeholder="Email address"
            title="Email address"
          />
          <InputFiled
            type="password"
            name="password"
            autoComplete="current-password"
            id="password"
            placeholder="Password"
            title="Password"
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
