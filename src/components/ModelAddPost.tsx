import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PopuUp from "./PopuUp";
import { useUser } from "../context/UserProvider";

export default function ModelAddPost() {
  const store = useUser();
  const [show, setShow] = useState(false);
  const optionCategory = store?.Category.map((E) => {
    return { value: E.id, label: E.name };
  });

  const signSchema = z.object({
    categories: z.array(z.number()).min(1, {message:"Please select at least one fruit"}), // Array validation
  });
  type SignInput = z.infer<typeof signSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SignInput>({
    mode: "onChange",
    resolver: zodResolver(signSchema),
  });
  const onSubmit: SubmitHandler<SignInput> = async (data) => {
    await axios
      .post("", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <form
          onSubmit={handleSubmit((E) => {
            console.log(E);
          })}
        >
          <Select
            {...register("categories")}
            onChange={(e) => {
              console.log(e.map((e) => e.value));
              setValue(
                "categories",
                e.map((e) => {
                  return Number(e.value);
                })
              );
            }}
            closeMenuOnSelect={false}
            components={makeAnimated()}
            defaultValue={[]}
            isMulti
            options={optionCategory}
          />
            
          <button type="submit">dsf</button>
        </form>
      </PopuUp>
    </>
  );
}
