
import { Navigate } from "react-router";
import { useUser } from "../../context/UserProvider";
import ModelAddCategory from "../../components/ModelAddCategory";
import ModelEditCategory from "../../components/ModelEditCategory";
import { useState } from "react";


export default function Categories() {
  const store = useUser();
  const [modelEdit ,setModelEdit]=useState({
    show:false,
    data:{name:'',slug:'',id:0}
  })
  const handleOpenModel = (data) => {
    setModelEdit({
      show: true,
      data: data
    });
  };
  console.log(modelEdit);
  
  return (
    store?.user?.role.toLowerCase()==='admin'?
    <>
    <div className='margin-content-sidebar p-3'>
    <div  className=" overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
          Category
          </th>
          <th scope="col" className="px-6 py-3">
            slug
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
          store.Category.map(e=>(
             <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-36 text-ellipsis overflow-hidden"
          >
           {e.name}
          </th>
          <td className="px-6 py-4">{e.slug}</td>
          <td className="px-6 py-4">{new Date(e.updatedAt).toISOString()||""}</td>
       
          <td className="px-6 py-4">
            <button
             onClick={()=>{
              handleOpenModel({name:e.name,slug:e.slug,id:e.id})
             }}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
          </td>
        </tr>
          ))
        }
       
      
    
        
      </tbody>
    </table>
    </div>
  </div>
  <ModelAddCategory/>
  <ModelEditCategory id={modelEdit.data.id} show={modelEdit.show} name={modelEdit.data.name} slug={modelEdit.data.slug} onHide={()=>{
    setModelEdit({
      data:{name:'',slug:""},
      show:false,
    })
  }}   />
    </>:
    <Navigate to={'/dashboard/posts'} />
  )
}
