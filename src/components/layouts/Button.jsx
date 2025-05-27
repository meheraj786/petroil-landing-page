import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-10 py-[14px] hover:bg-red-700 hover:text-white cursor-pointer bg-primary text-inherit text-4 font-semibold ${className}`}>{children}</button>
  )
}

export default Button