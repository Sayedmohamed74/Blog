import { MouseEvent, useEffect, useRef, useState } from "react";
import { PostAll } from "../../utils/typesData";
import axios from "axios";
import { urlApi } from "../../utils/urlApi";
import Loader from "../../components/Loader";
import ModelAddPost  from "../../components/ModelAddPost";


export default function Posts() {
  const pageIndex = useRef(0);
  const [posts, setPosts] = useState<PostAll>({
    posts: [],
    total: 0,
    pages: 0,
    hasNext: false,
    hasPrev: false,
    nextPage: 0,
  });
  const [loader,setLoader]=useState(false)
  const fetchPosts = async () => {
    setLoader(true)
    await axios
      .get(urlApi.post.getOrCreatPosts+`?limit=9&page=${pageIndex.current}`)
      .then((res) => {
       
        setPosts(res.data.data);
        setLoader(false)
      })
      .catch((err) => {
        setLoader(false)
        console.log(err);
      });
  };
  const handlePagniation =(e:MouseEvent<HTMLButtonElement>)=>{
    if(e.currentTarget.name==='next'){
      pageIndex.current = pageIndex.current+1
    }else{
      pageIndex.current = pageIndex.current-1
    }
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  
  return (
    <div className='margin-content-sidebar p-3'>
    <div  className=" overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Author
          </th>
          <th scope="col" className="px-6 py-3">
            Category
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
        {posts.posts.map((e)=>(
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-36 text-ellipsis overflow-hidden"
          >
            {e.title}
          </th>
          <td className="px-6 py-4">{e.author.username}</td>
          <td className="px-6 py-4">{e.categories[0].category.name}</td>
          <td className="px-6 py-4">{new Date(e.updatedAt).toISOString()||''}</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        ))}
        
      
        
      </tbody>
    </table>
    </div>
    <div className="text-center">
        <button
          onClick={handlePagniation}
          disabled={!posts.hasPrev}
          name="prev"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          
           prev
       
        </button>
        <button
        disabled={!posts.hasNext}
          onClick={handlePagniation}
          name="next"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          
          Next
         
        </button>
      </div>
      {loader&&<Loader/>}
      <ModelAddPost/>
    </div>
  
  )
}
