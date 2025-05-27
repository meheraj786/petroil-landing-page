import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`md:px-10 px-5 md:py-[14px] py-[7px] hover:bg-red-700 hover:text-white cursor-pointer bg-primary text-inherit md:text-[16px] text-[14px] font-semibold ${className}`}>{children}</button>
  )
}

export default Button