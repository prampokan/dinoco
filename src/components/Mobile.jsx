import React from 'react'

const Mobile = () => {
  return (
    <div className='pt-20 bg-blue-500 flex justify-center items-center'>
      <div className='w-[75rem] flex'>
        <div className='w-[42%] flex flex-col justify-center'>
          <h1 className='text-zinc-100 text-5xl font-semibold leading-snug'>Get your best car very easily with app</h1>
          <p className='text-zinc-200 mt-7 leading-loose'>You can download app in playstore or appstore. After that you can create an account in the application</p>
          <div className='flex gap-7 mt-12'>
            <img src="images/google-play.png" alt="" className='w-52 cursor-pointer' />
            <img src="images/app-store.png" alt="" className='w-44 cursor-pointer' />
          </div>
        </div>
        <div className='w-[58%] flex items-end justify-end'>
            <img src="images/phones.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Mobile