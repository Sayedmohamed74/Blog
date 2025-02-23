import  { FormEvent, useState } from 'react'
import Loader from './Loader';
import PopuUp from './PopuUp';
import axios from 'axios';
import TextError from './TextError';

import { useUser } from '../context/UserProvider';
interface ModelDeletePostProps {
    show: boolean;
    onHide: () => void;
    handleUpdate :(id:number)=>void;
    id:number
    url:string
}
export default function ModelDelete({show ,onHide,handleUpdate,url,id}:ModelDeletePostProps) {
    const store = useUser();
    const [loader,setLoader]=useState(false);
    const [errorMessage,setErrMeassage]=useState('');


    /* useEffect(()=>{
      
    },[show]) */
    const handleDelete = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setErrMeassage('');
    
        
         setLoader(true)
        await axios.delete(url, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store?.token}`
            }
        }).then(
            (e) => {
            if (e.data.statusCode === 200) {
              
                handleUpdate(id);
                onHide();
                setLoader(false);
            }
            }
        ).catch(
            (e) => {
            setLoader(false);
            setErrMeassage(e.response.data.message);
            }
        )
    }
    
    return (
      <>
      
        <PopuUp
          isShow={show}
          onHide={onHide}
        >
          <form onSubmit={handleDelete} className="m-3 my-9">

          <div className="p-4 md:p-5 text-center">
      <svg
        className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete?
      </h3>
      <button
        
        data-modal-hide="popup-modal"
        type="submit"
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
      >
        Yes, I'm sure
      </button>
      <button
        onClick={onHide}
        data-modal-hide="popup-modal"
        type="button"
        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        No, cancel
      </button>
    </div>
            <TextError isError={errorMessage} messageErr={errorMessage} />
          </form>
        </PopuUp>
       
        {loader &&<Loader/>}
      </>
    );
  }

