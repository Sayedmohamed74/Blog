import React from "react";
import InputFiled from "./InputFiled";
import { urlApi } from "../../utils/urlApi";
import useValidation from "../../hooks/useValidation";
import { z } from "zod";

export default function PageSignIn() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit,errorMessage } =
    useValidation(

      {
        username: z.string().min(3, {
          message: "Name must be at least 3 characters",
        }),
        password: z.string().min(4, "Password must be at least 4 characters"),
      },
      urlApi.user.signIn
    );
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto hidden  sm:block"
          src="./logo.svg"
          alt="Your Blog"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputFiled
            type="text"
        
            register={register("username")}
            autoComplete="text"
            id="name"
            placeholder="Email name"
            title="Email name"
          />
          {errors.username && (
            <p className="text-red-500 text-xs">
              {errors.username.message?.toString()}
            </p>
          )}
          <InputFiled
            type="password"
            
            register={register("password")}
            autoComplete="current-password"
            id="password"
            placeholder="Password"
            title="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">
              {errors.password.message?.toString()}
            </p>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             {isSubmitting ? "Loading..." : "Sign in"}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-xs">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
