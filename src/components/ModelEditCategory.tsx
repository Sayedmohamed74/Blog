import React, { useEffect, useState } from "react";
import PopuUp from "./PopuUp";
import useValidation from "../hooks/useValidation";
import { z } from "zod";
import TextError from "./TextError";
import axios from "axios";
import { urlApi } from "../utils/urlApi";
import { useUser } from "../context/UserProvider";
import Loader from "./Loader";

export default function ModelEditCategory({name,slug,show ,onHide,id}) {
const store =useUser();
 
  const [errorMessage,setErrMeassage]=useState('')
  const {errors,handleSubmit,register,isSubmitting,setValue} = useValidation({
    name: z.string().min(5,{message:"category must be more 5"}),
    slug: z.string().min(5,{message:"slug must be more 5"}),
  },'');
  const handleAddCategory =async (data)=>{
    setErrMeassage('')
    await axios.patch(urlApi.categories.updateCategories(id),data,{
        headers:{
             Authorization: `Bearer ${store?.token}`
        }
    }).then(t=>{

        store?.setCategory((prev)=>prev.map(e=>e.id===id?t.data.data:e));

    }).catch(e=>{
        
        setErrMeassage(e.response.data.message)
    })
  }

  useEffect(()=>{
    setValue('name',name)
    setValue('slug',name)
  },[show])
  
  return (
    <>
    
      <PopuUp
        isShow={show}
        onHide={onHide}
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
              Update
            </button>
          </div> 
          <TextError isError={errorMessage} messageErr={errorMessage} />
        </form>
      </PopuUp>
     
      {isSubmitting &&<Loader/>}
    </>
  );
}
