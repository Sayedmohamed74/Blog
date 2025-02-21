import React, { useState } from "react";
import PopuUp from "./PopuUp";
import useValidation from "../hooks/useValidation";
import { z } from "zod";
import TextError from "./TextError";
import axios from "axios";
import { urlApi } from "../utils/urlApi";
import { useUser } from "../context/UserProvider";
import Loader from "./Loader";

export default function ModelAddCategory() {
const store =useUser();
  const [show, setShow] = useState(false);
  const [errorMessage,setErrMeassage]=useState('')
  const {errors,handleSubmit,register,isSubmitting} = useValidation({
    name: z.string().min(5,{message:"category must be more 5"}),
    slug: z.string().min(5,{message:"slug must be more 5"}),
  },'');
  const handleAddCategory =async (data)=>{
    setErrMeassage('')
    await axios.post(urlApi.categories.getOrCreateCategories,data,{
        headers:{
             Authorization: `Bearer ${store?.token}`
        }
    }).then(e=>{
        store?.setCategory((prev)=>[...prev,e.data.data])
    }).catch(e=>{
        console.log(e);
        
        setErrMeassage(e.response.data.message)
    })
  }
  console.log(errorMessage);
  
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
        className=" flex items-center justify-center p-0.5 fixed end-2 bottom-2 w-8 h-8 bg-blue-400 text-white  rounded-full"
      >
        +
      </button>
      <PopuUp
        isShow={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <form onSubmit={handleSubmit(handleAddCategory)} className="m-3">
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium "
          >
            Name Category
          </label>
          <input
          {...register('name')}
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name Category"
          />
          <label
            htmlFor="slug-category"
            className="block mb-2 text-sm font-medium "
          >
            slug Category
          </label>
          <TextError isError={errors.name} messageErr={errors.name?.message} />
          <input
          {...register('slug')}
            type="text"
            id="slug-category"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="slug Category"
          />
                    <TextError isError={errors.slug} messageErr={errors.slug?.message} />

          <div className=" text-center">
            <button
              type="submit"
              className=" py-2 px-4 bg-blue-400 text-white rounded-sm"
            >
              Create
            </button>
          </div> 
          <TextError isError={errorMessage} messageErr={errorMessage} />
        </form>
      </PopuUp>
     
      {isSubmitting &&<Loader/>}
    </>
  );
}
