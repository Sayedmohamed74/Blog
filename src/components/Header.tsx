import { Link } from "react-router";
import { useUser } from "../context/UserProvider";
import { logOut } from "../utils/authUser";
import Spinner from "./Spinner";


export default function Header() {
  const store = useUser();
   const handleLogOut = () => {
    logOut();
    store?.setToken("");
  } 

  return (
    <header
      className=" sticky top-0 left-0 right-0 bg-white
      shadow-md z-10"
    >
      <nav className=" container ">
        <div className=" flex justify-between items-center py-2">
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo.svg" alt="logo" />
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium">
            {store?.loader ? <Spinner/> :
            (<>
             {!store?.token ? (
              <>
                <Link
                  to={"/sign-in"}
                  className=" px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-400 transition-colors rounded-sm"
                >
                  sign in
                </Link>
                <Link
                  to={"/sign-up"}
                  className="px-3 py-2 bg-white text-blue-400 hover:bg-blue-400 hover:text-white transition-colors  rounded-sm"
                >
                  sign up
                </Link>
              </>
            ) : (
             ''
            )}
              {store?.token ? (
              <>
              {
                (store.user?.role.toLowerCase()==='admin'||store.user?.role.toLowerCase()==='MANAGE_POSTS'.toLowerCase()) &&
                <Link className=" text-xl" to={'/dashboard'}>
              Dashboard
              </Link>
              }
                <p className=" text-blue-700 text-[24px]">{store.user?.username}</p>

                <button onClick={handleLogOut} className=" px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-400 transition-colors rounded-sm">
                  Log out
                </button>
              </>
            ) : (
              ''
            )}
            </>)}
           
           
          </div>
        </div>
      </nav>
    </header>
  );
}
