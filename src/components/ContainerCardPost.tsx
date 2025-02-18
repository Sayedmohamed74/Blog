import React from 'react'
interface ContainerCardPostProps {
    children: React.ReactNode}
export default function ContainerCardPost({children}:ContainerCardPostProps) {
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-2.5 mb-6  ">
        {children}
    </div>
  )
}
