import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-10 py-[14px] bg-primary text-white text-4 font-semibold ${className}`}>{children}</button>
  )
}

export default Button