import { BrowserRouter, Link, } from "react-router";
import "./App.css";

function App() {
 
  
  return (
    <>
     
     <BrowserRouter>
     <header className=" sticky top-0 left-0 right-0 bg-white
      shadow-md z-10">
 
        <nav className=" container ">
         <div className=" flex justify-between items-center py-2" >
         <div className="logo">
            <Link to={'/'}>
            <img
              src="./logo.svg"
              alt="logo"
         
            /></Link>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium">
            {/* <Link to={'/sign-in'} className=" px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-400 transition-colors rounded-sm">sign in</Link>
            <Link  to={'/sign-up'} className="px-3 py-2 bg-white text-blue-400 hover:bg-blue-400 hover:text-white transition-colors  rounded-sm">sign in</Link> */}
            <p className=" text-blue-700 text-[24px]">
              
              sayed</p>
        
            <button className=" px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-400 transition-colors rounded-sm">Log out</button>
          </div>
         </div>
        </nav>
      </header>
             {/*  <div className=" grid grid-cols-3 gap-2.5  ">
                
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                </div>  */}

                <div className=" container">
                  <h2 className=" text-center font-semibold text-3xl my-3.5 ">Post Title</h2>
                  <div className="w-full sm:w-1/2 rounded-md shadow-md  mx-auto p-4">
                  <div className="">
                    <img className="w-full aspect-16/9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <div>
                      <div className="font-semibold text-gray-600"><span>sayed</span></div>
                      <div className="text-neutral-400"><span>12/12/2021</span></div>
                      </div>
                      <Link to={'/post/1'} className="text-blue-400 border-2 rounded-sm py-2 px-1 hover:bg-blue-400 hover:text-white">Read more</Link>
                    </div>
                  </div>
                  </div>
                  <div className="post mt-3">
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p> 
                  </div>
                  <div className="comment">
                    <h3 className="text-lg font-semibold my-3">Comments</h3>
                    <div className="comment-item">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
                        <div>
                          <h4 className="font-semibold">sayed</h4>
                          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
                        <div>
                          <h4 className="font-semibold">sayed</h4>
                          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                      </div>
                    </div>
                    <div className="comment-item ">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
                        <div>
                          <h4 className="font-semibold">sayed</h4>
                          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
     </BrowserRouter>
    </>
  );
}

export default App;
