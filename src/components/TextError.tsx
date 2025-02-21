import React from 'react'

export default function TextError({isError,messageErr}:{
    isError:any,
    messageErr:any
}) {
  return  isError && (
            <p className="text-red-500 text-xs">
              {messageErr?.toString()}
            </p>
          )
  
}
