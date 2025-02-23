import React, {  MouseEvent, useEffect, useRef, useState } from "react";
import type {  PostAll } from "../../utils/typesData";
import CardCover from "../../components/CardCover";
import ContainerCardPost from "../../components/ContainerCardPost";
import CardPost from "../../components/CardPost";
import axios from "axios";
import { urlApi } from "../../utils/urlApi";
import Loader from "../../components/Loader";


export default function PageHome() {
  const firstPost = useRef<{
    cover: string;
    author: {
      username: string;
    };
    id: number;
  }>({
    cover: "",
    author: {
      username: "",
    },
    id: 0,
  });
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
        if(firstPost.current.id===0){
          firstPost.current = res.data.data.posts[0];
        }
  
        setPosts(res.data.data);
        setLoader(false)
      })
      .catch(() => {
        setLoader(false)
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
    <div className="container">
      <CardCover
        id={firstPost?.current?.id}
        cover={firstPost.current?.cover}
        author={firstPost.current?.author?.username}
      >
        <h1 className="font-semibold text-3xl my-1">Post Title</h1>
      </CardCover>
      <ContainerCardPost>
        {posts.posts?.map((e) => (
          <CardPost data={e} />
        ))}
      </ContainerCardPost>
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
    </div>
  );
}
