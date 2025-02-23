import React, { ChangeEvent, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { urlApi } from "../utils/urlApi";
import { useUser } from "../context/UserProvider";
interface EditUserRoleProps {
    id: number;
    role:string;
    handleUpdate: (id: number,role:string) => void;
}
export default function EditUserRole({id,role,handleUpdate}:EditUserRoleProps) {
    const store =useUser();
  const [loader, setLoader] = useState(false);
  const [payload, setPayload] = useState({
    name: role,
  });
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPayload({ name: e.target.value });
  };

  const handleUpdateRole = async () => {
    setLoader(true);
    
    await axios
      .put(urlApi.user.editRoleUser(id),payload, {
        headers: {
          Authorization: `Bearer ${store?.token}`,
        },
      })
      .then((role) => {
        setLoader(false);
        
      handleUpdate(id,role.data.data)
      });
  };
  
  return (
    <>
      <select value={payload.name} onChange={handleChange}>
        <option value="ADMIN">Admin</option>
        <option value="MANAGE_POSTS">manage post</option>
        <option value="USER">User</option>
      </select>
      <button
        onClick={handleUpdateRole}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit
      </button>
      {loader && <Spinner/>}
    </>
  );
}
