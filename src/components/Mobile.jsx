import React from 'react'

const Mobile = () => {
  return (
    <div className='pt-20 bg-blue-500 flex justify-center items-center px-5 xl:px-0'>
      <div className='w-[75rem] xl:flex'>
        <div className='xl:w-[42%] flex flex-col justify-center text-center xl:text-start'>
          <h1 className='text-zinc-100 sm:text-5xl text-3xl font-semibold leading-snug'>Get your best car very easily with app</h1>
          <p className='text-zinc-200 mt-7 leading-loose'>You can download app in playstore or appstore. After that you can create an account in the application</p>
          <div className='sm:flex-row flex flex-col gap-7 mt-12 justify-center xl:justify-start items-center'>
            <img src="images/google-play.png" alt="" className='w-52 cursor-pointer' />
            <img src="images/app-store.png" alt="" className='w-44 cursor-pointer' />
          </div>
        </div>
        <div className='xl:w-[58%] flex items-end xl:justify-end justify-center mt-10 xl:mt-0'>
            <img src="images/phones.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Mobile