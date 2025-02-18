import React from 'react'
import CardPost from '../../components/CardPost'
import ContainerCardPost from '../../components/ContainerCardPost'

export default function PagePostsByCategory() {
  return (
   <div className=' container'>
   <h1 className='font-semibold text-3xl my-4'>Animals</h1>
 <ContainerCardPost>

        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
        <CardPost/>
 </ContainerCardPost>
    
   </div>
  )
}
