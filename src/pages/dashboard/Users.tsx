import React, {  useEffect, useState } from "react";
import { useUser } from "../../context/UserProvider";
import { Navigate } from "react-router";
import axios from "axios";
import { urlApi } from "../../utils/urlApi";
import EditUserRole from "../../components/EditUserRole";

export default function Users() {
  const store = useUser();
  
  const [users, setUsers] = useState([
    {
      id: 0,
      username: "",
      email: "",
      password: "",
      role: "",
      createdAt: "",
      updatedAt: "",
    }
  ]);

const handleUpdateChangeRole =(id:number,role:string)=>{
  setUsers((prev) =>
    prev.map((user) =>
      user.id !== id
        ? user
        : {
            ...user,
            role: role,
          }
    )
  );
}

  const fetchAllUser = async () => {
    await axios.get(urlApi.user.allUsers,{
      headers: {
        Authorization: `Bearer ${store?.token}`
      }
    }).then((e)=>{
      setUsers(e.data.data)
      
    });
  };

 
  useEffect(()=>{
    fetchAllUser();
  },[])
  return store?.user?.role.toLowerCase() === "admin" ? (
    <>
      <div className="margin-content-sidebar p-3">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  role
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(e=> <tr key={e.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-36 text-ellipsis overflow-hidden"
                >
                  {e.id}
                </th>
                <td className="px-6 py-4">{e.username}</td>
                <td className="px-6 py-4">{e.email}</td>
                <td className="px-6 py-4">{e.role}</td>
                <td className="px-6 py-4">{e.updatedAt}</td>
                <td className="px-6 py-4">
                 <EditUserRole handleUpdate={handleUpdateChangeRole} id={e.id} role={e.role}/>
                </td>
              </tr>)
              }
             
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  ) : (
    <Navigate to={"/dashboard/posts"} />
  );
}
