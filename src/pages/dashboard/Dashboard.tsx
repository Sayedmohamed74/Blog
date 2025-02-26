import { useRef } from "react";
import { Link, Navigate, Outlet } from "react-router";
import { useUser } from "../../context/UserProvider";

export default function Dashboard() {
  const sideBar = useRef<HTMLDivElement>(null);
  const store = useUser();
  const checkUser={
    isToken:store?.token,
    isAdmin:store?.user?.role.toLowerCase()==='admin',
    isManagePost:store?.user?.role.toLowerCase()==='MANAGE_POSTS'.toLowerCase()
  }
  return (
    !store?.loader&&
    (
    <>
      {
       ( checkUser.isToken &&( checkUser.isAdmin|| checkUser.isManagePost))
       ?
       <>
      <div
        ref={sideBar}
        className="sidebar p-3.5 border-r-2 basis-3xs shrink-0 border-gray-300"
      >
        <div className="nav ">
          <div className="w-full  flex items-center justify-end gap-2.5">
            <button
              className="btn-active shrink-0 rounded-sm bg-blue-500 hover:bg-blue-400"
              onClick={() => {
                sideBar.current?.classList.toggle("active");
              }}
            >
              <svg
               className="shrink-0 w-full h-full fill-white" 
                viewBox="0 0 32 32"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 14.6666H10.44L17.8933 7.21331L16 5.33331L5.33334 16L16 26.6666L17.88 24.7866L10.44 17.3333H26.6667V14.6666Z"
                  
                />
              </svg>
            </button>
          </div>
          <Link to="/dashboard/posts">
            <div className="nav-item flex items-center gap-2.5">
              <svg
                className="shrink-0"
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 9.16667V7.5H13.3333V9.16667H6.66667ZM6.66667 11.6667V10H13.3333V11.6667H6.66667ZM6.66667 14.1667V12.5H13.3333V14.1667H6.66667ZM14.1667 7.5V5.83333H12.5V4.16667H14.1667V2.5H15.8333V4.16667H17.5V5.83333H15.8333V7.5H14.1667ZM2.5 17.5V2.5H11.6667V4.16667H4.16667V15.8333H15.8333V8.33333H17.5V17.5H2.5Z"
                  fill="black"
                />
              </svg>
              <span className=" text-xl font-medium">Posts</span>
            </div>
          </Link>
        {
          checkUser.isAdmin &&
          <>
            <Link to="/dashboard/categories">
            <div className="nav-item flex items-center gap-2.5">
              <svg
                className="shrink-0"
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667ZM11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667ZM3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5ZM14.1667 17.5C16.005 17.5 17.5 16.005 17.5 14.1667C17.5 12.3283 16.005 10.8333 14.1667 10.8333C12.3283 10.8333 10.8333 12.3283 10.8333 14.1667C10.8333 16.005 12.3283 17.5 14.1667 17.5Z"
                  fill="black"
                />
              </svg>
              <span className=" text-xl font-medium">Categories</span>
            </div>
          </Link>
          <Link to="/dashboard/users">
            <div className="nav-item flex items-center gap-2.5">
              <svg
                className="shrink-0"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.37 21.25C20.37 21.4489 20.291 21.6397 20.1503 21.7803C20.0097 21.921 19.8189 22 19.62 22H4.38C4.18109 22 3.99033 21.921 3.84967 21.7803C3.70902 21.6397 3.63 21.4489 3.63 21.25C3.63 17.15 8.13 13.97 12 13.97C15.87 13.97 20.37 17.15 20.37 21.25ZM17.1 7.11C17.098 8.11826 16.7972 9.1033 16.2356 9.94068C15.674 10.7781 14.8768 11.4302 13.9448 11.8146C13.0127 12.1991 11.9876 12.2987 10.9989 12.1008C10.0103 11.9029 9.10249 11.4164 8.39024 10.7027C7.67799 9.98907 7.19326 9.08032 6.99728 8.09129C6.80131 7.10226 6.90288 6.07733 7.28918 5.14601C7.67548 4.21469 8.32917 3.41877 9.16764 2.85882C10.0061 2.29886 10.9917 2 12 2C13.3535 2.00265 14.6507 2.54219 15.6069 3.50022C16.563 4.45824 17.1 5.75647 17.1 7.11Z"
                  fill="black"
                />
              </svg>
              <span className=" text-xl font-medium">Users</span>
            </div>
          </Link>
          </>
        }
        </div>
      </div>
      <Outlet />
    </> : <Navigate to={'/'} replace={true} />
      }
    
    </>
    )
  );
}

