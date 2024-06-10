import React from 'react'
import OwnerJpeg from "../assets/Owner.jpg"
const Owner = () => {
  return (
    <div className='bg-gray-500 flex flex-col text-center text-white gap-4'>
        <h1 className='font-bold text-5xl p-4'>BAS-GenmateG-23</h1>
        <img src={OwnerJpeg} alt="OwnerPicture" className='w-[350px] h-[350px] object-cover rounded-md mx-auto' />
        <p className='font-semibold text-4xl '> Hello mate !</p>
        <p className='text-3xl'>My name is Patchanapong Meetam</p>
        <p className='text-3xl'>I'm a newbie software developer</p>
        <p className='text-3xl'>Good to know you're on this page 😍😍😍😍</p>

    </div>
  )
}

export default Owner;