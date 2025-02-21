import React from 'react'
import { useUser } from '../context/UserProvider'
import { Navigate, Outlet } from 'react-router';

export default function ProtectPageAuth() {
    const store = useUser();
  return (
    !store?.loader && 
    (<>
    {
        store?.token ? <Navigate replace={true} to={'/'}/> : <Outlet/>
    }
    </>)
     
  )
}
