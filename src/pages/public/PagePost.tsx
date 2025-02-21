import { useParams } from "react-router";
import CardCover from "../../components/CardCover";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlApi } from "../../utils/urlApi";
import { Post } from "../../utils/typesData";
import Comments from "../../components/Comments";

export default function PagePost() {
  const{id} =useParams();
  const [post,setPost]=useState<Post>()
  console.log(id);
  const fetchPost =async()=>{
    await axios
    .get(urlApi.post.onePost(Number(id)))
    .then((res) => {
      setPost(res.data.data);
     
    })
    .catch((err) => {
      
      console.log(err);
    });

  }

  useEffect(()=>{
fetchPost();
  },[])
  return (
    <div className=" container">
      <h2 className=" text-center font-semibold text-3xl my-3.5 ">
      {post?.title}
      </h2>
      <CardCover cover={post?.cover} author={post?.author.username} id={Number(id)} >
        <div className="text-neutral-400">
          <span>{post?.updatedAt}</span>
        </div>
      </CardCover>
      <div className="post mt-3">
        <p>
         {post?.content}
        </p>
      </div>
     <Comments/>
    </div>
  );
}
