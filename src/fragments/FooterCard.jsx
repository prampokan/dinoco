import React from 'react'

const FooterCard = (props) => {
    const {title, text1, text2, text3, text4, text5} = props
  return (
    <div className='text-zinc-100 flex flex-col gap-4 xl:ml-16 text-sm w-[200px] mb-10 xl:mb-0'>
        <h1 className='text-zinc-400 uppercase mb-2'>{title}</h1>
        <p className='cursor-pointer'>{text1}</p>
        <p className='cursor-pointer'>{text2}</p>
        <p className='cursor-pointer'>{text3}</p>
        <p className='cursor-pointer'>{text4}</p>
        <p className='cursor-pointer'>{text5}</p>
    </div>
  )
}

export default FooterCard