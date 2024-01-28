import React from 'react'

const Users = (props) => {
    const { position, image } = props
  return (
    <div className={`w-16 h-16 rounded-full bg-zinc-200 border-[3px] border-white absolute ${position} overflow-hidden`}>
        <img src={image} alt="" /> 
    </div>
  )
}

export default Users