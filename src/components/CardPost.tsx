import { Link } from "react-router";
import { urlImg } from "../utils/urlApi";

interface CardPostProp {
 data:{
  id: number;
  title:string ;
  content:string ;
  authorId:number;
  published: true;
  cover:string;
  createdAt: string;
  updatedAt:string;
  tags: string;
  author: {
    id: number;
    username: string;
    createdAt: string;
    updatedAt: string;
  };
 }
}
export default function CardPost({ data }:CardPostProp) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div>
       <Link className="block" to={'/post/'+data.id}>
       <img
          className=" w-full aspect-3/2"
          src={urlImg(data.cover)}
        />
       </Link>
      </div>
      <div className="info-post">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-600">{data.author.username}</span>
          <span className="text-neutral-400 ">{new Date(data.updatedAt).toDateString()}</span>
        </div>
        <Link className="block" to={'/post/'+data.id}>
        <h3 className="text-lg font-semibold">{data.title}</h3>
        </Link>
        <p className="text-sm text-gray-500">
         {
          data.content
         }
        </p>
      </div>
    </div>
  );
}
