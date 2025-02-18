import React from 'react'
interface InputFiledProps { 
    type: string,
    name: string,
    id: string,
    autoComplete: string,
    title: string,
    placeholder: string,


}
export default function InputFiled({type,name,autoComplete,id,placeholder,title}:InputFiledProps) {
  return (
    <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
         {title}
        </label>
        <div className="mt-2">
          <input
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            placeholder={placeholder}
           
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />
        </div>
      </div> 
  )
}
