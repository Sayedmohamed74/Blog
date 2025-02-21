// import { useParams } from "react-router"
import { useUser } from "../context/UserProvider"
/* import axios from "axios";
import { urlApi } from "../utils/urlApi";
import { useState } from "react";
 */
export default function Comments() {
const store =useUser()
/* const {id}=useParams();
const [comments ,setComments]=useState()
const fetchComments =async()=>{
    axios.get(urlApi.comment.getOrCreateComments)
}
 */

  return (
  (store?.token) &&<div className="comment border-2 border-gray-200 rounded-md p-3 my-3 bg-stone-50">
        <h3 className="text-lg font-semibold my-3">Comments</h3>
        <div className="comment-item bg-gray-200 p-3 rounded-md my-3">
          <div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">sayed</h4>
                <button className=" hover:bg-red-600 hover:*:fill-white transition-colors p-1 rounded-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.83333 17.5C5.37499 17.5 4.98277 17.3369 4.65666 17.0108C4.33055 16.6847 4.16722 16.2922 4.16666 15.8333V5H3.33333V3.33333H7.49999V2.5H12.5V3.33333H16.6667V5H15.8333V15.8333C15.8333 16.2917 15.6703 16.6842 15.3442 17.0108C15.0181 17.3375 14.6256 17.5006 14.1667 17.5H5.83333ZM14.1667 5H5.83333V15.8333H14.1667V5ZM7.49999 14.1667H9.16666V6.66667H7.49999V14.1667ZM10.8333 14.1667H12.5V6.66667H10.8333V14.1667Z" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>

        <div className="textarea">
          <textarea
            className="w-full p-2 border-2 border-gray-200 rounded-md resize-none"
            placeholder="write a comment"
          ></textarea>
          <button className="bg-blue-400 text-white px-3 py-1 rounded-sm">
            Comment
          </button>
        </div>
      </div>
  )
}
