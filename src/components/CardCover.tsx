
import { Link } from 'react-router'
import { urlImg } from '../utils/urlApi'
interface CardCoverProps {
    children: React.ReactNode,
    cover?:string,
   id?:number,
    author?:string
}
export default function CardCover({children,author,cover="",id}:CardCoverProps) {
  return (
    <div className="w-full sm:w-1/2 rounded-md shadow-md  mx-auto p-4 mb-3">
      <div>
      <Link className="block" to={'/post/'+id}>
       <img
          className="w-full aspect-16/9"
          src={urlImg(cover)}
          alt=""
          />
          </Link>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-gray-600">
              <span>{author}</span>
            </div>
           {children}
          </div>
          <Link
            to={"/post/"+id}
            className="text-blue-400 border-2 rounded-sm py-2 px-1 hover:bg-blue-400 hover:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}
