import React from 'react'
import CardCover from '../../components/CardCover'
import ContainerCardPost from '../../components/ContainerCardPost'
import CardPost from '../../components/CardPost'

export default function PageHome() {
  return (
    <div className='container'>
        <CardCover>
            <h1 className='font-semibold text-3xl my-1'>Post Title</h1>
        </CardCover>
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
        </ContainerCardPost>

    </div>
  )
}
