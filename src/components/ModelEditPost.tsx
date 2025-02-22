import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PopuUp from "./PopuUp";
import { useUser } from "../context/UserProvider";
import InputFiled from "../pages/public/InputFiled";
import TextError from "./TextError";
import { urlApi } from "../utils/urlApi";
import Loader from "./Loader";

export default function ModelEditPost({ data, show, onHide }) {
  const store = useUser();
const inputFiled =useRef<HTMLFieldSetElement|null>(null);
  const optionCategory = store?.Category.map((E) => {
    return { value: E.id, label: E.name };
  });
  const choosedCategory = data.categories?.map((e) => {
    return { value: e.category.id, label: e.category.name };
  });

  const signSchema = z.object({
    categories: z
      .array(z.number())
      .max(3, { message: "Please select at least one fruit" }).refine((e)=>{
        if(e.length <=3){
            return true
        }
        else{
            return false
        }
      }),
    cover: z.instanceof(FileList, { message: "image" }).refine(
      (data) => {
        if (data[0]) {
          return true;
        } else {
          return true;
        }
      },
      { message: "image is required" }
    ),
    title: z.string().min(5, { message: "bigger than 5 char" }),
    content: z.string().min(10, { message: "bigger than 10 char" }),

    published: z.boolean(),
  });
  type SignInput = z.infer<typeof signSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SignInput>({
    mode: "onChange",
    resolver: zodResolver(signSchema),
  });

  useEffect(() => {
    console.log(data.categories);
    const s = store?.Category.map((e) => {
      data?.categories?.forEach((element: any) => {
        console.log(element);

        if (element.category.id == e.id) {
          console.log(e);
        }
      });
    });


    setValue("published", data.published);
    setValue(
      "categories",
      data.categories?.map((e) => {
        return e.category.id;
      })
    );
    setValue("content", data.content);
    

    setValue("title", data.title);
  }, [show]);

  return (
    <>
      <PopuUp isShow={show} onHide={onHide}>
        <div className=" m-5 mt-9 ">
          <form
            onSubmit={handleSubmit(async (E) => {
                
               
                
               
               const tokenAuth ={
              
                  Authorization: `Bearer ${store?.token}`,
                  
                
              }
        if(E.cover.length){
            const bodyCover = new FormData();
            bodyCover.append("cover", E.cover[0]);
            await axios
              .post(urlApi.cover, bodyCover, {
                headers:{
                  ...tokenAuth,
"Content-Type": " multipart/form-data",
                }
                
              })
              .then(async (T) => {
                const texCover: string = T.data.data;
                const o ={...E,
                  cover: texCover,
                  tags: ['hello'],}
                  console.log(o);
                  
                await axios.patch(urlApi.post.updatePost(data?.id), {
                  ...o
                },
              {
                headers:{
                  ...tokenAuth,
                  'Content-Type': 'application/json'
                }
              }).then(e=>{
                  console.log(e);
                  
              });
              }); 
      
        }
        else{
            
            const o ={...E,
              cover: data?.cover,
              tags: ['hello'],}
              delete o.cover;
              console.log(o);
              
              
            await axios.patch(urlApi.post.updatePost(data?.id), {
              ...o
            },
          {
            headers:{
              ...tokenAuth,
              'Content-Type': 'application/json'
            }
          }).then(e=>{
              console.log(e);
              
          });
        }

            })}
          >
            <Select
              {...register("categories")}
              onChange={(newValue) => {
                const selectedValues = (
                  newValue as { value: string; label: string }[]
                ).map((e) => e.value);
                console.log(selectedValues);
                setValue(
                  "categories",
                  selectedValues.map((value) => Number(value))
                );
              }}
              closeMenuOnSelect={false}
              components={makeAnimated()}
              defaultValue={choosedCategory}
              isMulti
              options={optionCategory}
            />
            <label htmlFor="">
              <input type="checkbox" {...register("published")} />
            </label>
            <input
              {...register("title")}
              placeholder="title "
              className="w-full border-2 my-2"
            />
            <textarea
              {...register("content")}
              placeholder="contnt "
              className=" w-full border-2 my-2"
            ></textarea>
            <input type="file" {...register("cover")} />
            <TextError
              isError={errors?.cover}
              messageErr={errors.cover?.message}
            />
            <button
              type="submit"
              className=" px-3 py-2 bg-blue-500 rounded-sm text-white mt-3"
            >
              Create
            </button>
          </form>
        </div>
      </PopuUp>
      {isSubmitting && <Loader/>}
    </>
  );
}
