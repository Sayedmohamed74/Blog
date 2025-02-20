import { useEffect, useState } from "react";
import ModelDelete from "../../components/ModelDelete";
import PopuUp from "../../components/PopuUp";


export default function Categories() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        console.log(show);
    }, [show]);
  return (
   <>
   <button className="margin-content-sidebar" onClick={()=>{
    setShow(!show);
    console.log("clicked");
    console.log(show);
    
   }}>
    sdf
   </button>
  <div>
  <PopuUp isShow={show} onHide={()=>{setShow(false)}}>
    <ModelDelete />
    </PopuUp>
  </div>
   </>
  );
}
