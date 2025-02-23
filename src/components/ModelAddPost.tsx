import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PopuUp from "./PopuUp";
import { useUser } from "../context/UserProvider";
import TextError from "./TextError";
import { urlApi } from "../utils/urlApi";
import Loader from "./Loader";

export default function ModelAddPost() {
  const store = useUser();
  const [show, setShow] = useState(false);
  const optionCategory = store?.Category.map((E) => {
    return { value: E.id, label: E.name };
  });

  const payloadSchema = z.object({
    categories: z
      .array(z.number())
      .min(1, { message: "Please select at least one fruit" })
      .refine((e) => {
        if (e.length <= 3) {
          return true;
        } else {
          return false;
        }
      }),
    cover: z.instanceof(FileList, { message: "image" }).refine(
      (data) => {
        if (data[0]) {
          return true;
        } else {
          return false;
        }
      },
      { message: "image is required" }
    ),
    title: z.string().min(5, { message: "bigger than 5 char" }),
    content: z.string().min(10, { message: "bigger than 10 char" }),

    published: z.boolean(),
  });
  type payload = z.infer<typeof payloadSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<payload>({
    mode: "onChange",
    resolver: zodResolver(payloadSchema),
  });
  const handleSubmitAdd: SubmitHandler<payload> = async (E) => {
    const tokenAuth = {
      Authorization: `Bearer ${store?.token}`,
    };
    const bodyCover = new FormData();
    bodyCover.append("cover", E.cover[0]);
    await axios
      .post(urlApi.cover, bodyCover, {
        headers: {
          ...tokenAuth,
          "Content-Type": " multipart/form-data",
        },
      })
      .then(async (T) => {
        const texCover: string = T.data.data;
        const o = { ...E, cover: texCover, tags: ["hello"] };

        await axios.post(
          urlApi.post.getOrCreatPosts,
          {
            ...o,
          },
          {
            headers: {
              ...tokenAuth,
              "Content-Type": "application/json",
            },
          }
        );
      });
  };
  useEffect(() => {
    setValue("published", true);
  }, []);
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
        <div className=" m-3 mt-9 ">
          <form onSubmit={handleSubmit(handleSubmitAdd)}>
            <Select
              {...register("categories")}
              onChange={(newValue) => {
                const selectedValues = (
                  newValue as { value: string; label: string }[]
                ).map((e) => e.value);
                setValue(
                  "categories",
                  selectedValues.map((value) => Number(value))
                );
              }}
              closeMenuOnSelect={false}
              components={makeAnimated()}
              defaultValue={[]}
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
      {isSubmitting && <Loader />}
    </>
  );
}
