import React from 'react'

const FooterCard = (props) => {
    const {title, text1, text2, text3, text4, text5} = props
  return (
    <div className='text-zinc-100 flex flex-col gap-4 ml-16 text-sm w-[200px]'>
        <h1 className='text-zinc-400 uppercase mb-2'>{title}</h1>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p>
    </div>
  )
}

export default FooterCard