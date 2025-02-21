import InputFiled from "./InputFiled";

import useValidation from "../../hooks/useValidation";
import { z } from "zod";
import { urlApi } from "../../utils/urlApi";

export default function PageSignUp() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit,errorMessage } =
    useValidation(
      {
        username: z.string().min(3, {
          message: "Name must be at least 3 characters",
        }),
        email: z
          .string()
          .min(3, {
            message: "Email must be at least 3 characters",
          })
          .email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      },
      urlApi.user.signUp
    );

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
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputFiled
            type="text"
            id="name"
            autoComplete="name"
            register={register("username")}
            placeholder="Enter name"
            title="Name"
          />
          {errors.username && (
            <p className="text-red-500 text-xs">
              {errors.username.message?.toString()}
            </p>
          )}
          <InputFiled
            type="email"
            register={register("email")}
            autoComplete="email"
            id="email"
            placeholder="Email address"
            title="Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">
              {errors.email.message?.toString()}
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
              disabled={isSubmitting}
              className={`flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
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
