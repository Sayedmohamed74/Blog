import React, { useEffect, useState } from "react";

interface PopuUpProps {
  children: React.ReactNode;
  isShow: boolean;
    onHide: () => void;
}
export default function PopuUp({ children, isShow ,onHide}: PopuUpProps) {
  const classAnimation = {
    enter: {
      enter: "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100",
    },
    leave: {
      leave:
        "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    },
  };
  
  const [remove, setRemove] = useState(true);

  const close: () => void = () => {
    onHide();   
  };


  useEffect(() => {
    
    if (!isShow) {
      setTimeout(() => {
        setRemove(isShow);
      }, 200); 
    }else{
        setRemove(isShow); 
    }
  }, [isShow]);

  return (
    remove && (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-gray-500/75  transition-opacity ${
            +isShow ? "opacity-100" : "opacity-0"
          } `}
          aria-hidden="true"
        ></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`relative ${
                isShow ? classAnimation.enter.enter : classAnimation.leave.leave
              }  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg `}
            >
              <button
                onClick={close}
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
