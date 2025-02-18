
import { Link } from 'react-router'
interface CardCoverProps {
    children: React.ReactNode
}
export default function CardCover({children}:CardCoverProps) {
  return (
    <div className="w-full sm:w-1/2 rounded-md shadow-md  mx-auto p-4 mb-3">
      <div>
      
       <img
          className="w-full aspect-16/9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
          alt=""
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-gray-600">
              <span>sayed</span>
            </div>
           {children}
          </div>
          <Link
            to={"/post/1"}
            className="text-blue-400 border-2 rounded-sm py-2 px-1 hover:bg-blue-400 hover:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}
