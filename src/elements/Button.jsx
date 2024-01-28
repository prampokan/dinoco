import React from 'react'

const Button = (props) => {

  const {textColor, bgColor, hover, profile, children} = props  
  return (
    <button className={`${profile} ${textColor} ${bgColor} w-full rounded-lg h-12 mt-6 text-md font-semibold text-sm ease-linear duration-100 ${hover}`}>
       {children}
    </button>
  )
}

export default Button