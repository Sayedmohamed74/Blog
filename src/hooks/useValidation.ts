import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodRawShape } from "zod";
import { useUser } from "../context/UserProvider";
import { logIn } from "../utils/authUser";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function useValidation(object: ZodRawShape, url: string) {
  const store= useUser();
  const navigate = useNavigate();
  const [errorMessage,setError]=useState('')
  
  
  const signSchema = z.object(object || {});
  type SignInput = z.infer<typeof signSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SignInput>({
    mode: "onChange",
    resolver: zodResolver(signSchema),
  });
  const onSubmit: SubmitHandler<SignInput> = async (data) => {
    await axios
      .post(url, data)
      .then((res) =>{
        const date=new Date();
        date.setTime(date.getTime() + (1000 * 60 * 60 * 24*10));
       store?.setToken(res.data.data);
      logIn(res.data.data,date.toUTCString());
      navigate('/')
      })
      .catch((err) =>{
        setError(err.response.data.message)
      }
      );
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitted,
    onSubmit,
    errorMessage
  };
}
