import { useState } from "react";
import PopuUp from "./PopuUp";

export default function BtnAdd() {
    const [show,setShow]=useState(false);
  return (
    <>
    <button onClick={()=>{
        setShow(true)
    }} className=" flex items-center justify-center p-0.5 fixed end-2 bottom-2 w-8 h-8 bg-blue-400 text-white  rounded-full">
        +
    </button>
    <PopuUp isShow={show} onHide={()=>{setShow(false)}}  >
    <div className="p-4 md:p-5 text-center">

    <div className="space-y-12">
  <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
    <p className="mt-1 text-sm/6 text-gray-600">
      This information will be displayed publicly so be careful what you share.
    </p>
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label
          htmlFor="username"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
           
            <input
              type="text"
              name="username"
              id="username"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              placeholder="janesmith"
            />
          </div>
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm/6 font-medium text-gray-900"
        >
          About
        </label>
        <div className="mt-2">
          <textarea
            name="about"
            id="about"
            rows={3}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            defaultValue={""}
          />
        </div>
        <p className="mt-3 text-sm/6 text-gray-600">
          Write a few sentences about yourself.
        </p>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="photo"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Photo
        </label>
        <div className="mt-2 flex items-center gap-x-3">
          <svg
            className="size-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          <button
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
          >
            Change
          </button>
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Cover photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto size-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm/6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    </PopuUp>
    </>
  )
}
