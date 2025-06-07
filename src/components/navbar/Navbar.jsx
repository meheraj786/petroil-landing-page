import React, { useState } from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import logo from '../../assets/logo.png'
import Button from '../layouts/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoMailUnreadSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import ScrollSpy from "react-ui-scrollspy";


const Navbar = () => {
  const [show, setShow]= useState(false)
  const navItems= [
    {
      item: "Home",
      link: "#"
    },
    {
      item: "About",
      link: "#about"
    },
    {
      item: "Services",
      link: "#services"
    },
    {
      item: "Gallary",
      link: "#gallary"
    },
    {
      item: "Blog",
      link: "#blog"
    },
  ]
  return (
    <>
    <div className="header font-primary border-b-3 border-border py-[16px] text-white bg-bg">
      <Container>
        <Flex className="flex-col md:flex-row">
          <Flex className="md:gap-[49px] mb-3 md:mb-0 gap-2 mb flex-col md:flex-row">
            <Flex className="gap-[5px] text-[14px] md:text-[16px]"><IoMailUnreadSharp className='w-[20px] mt-[4px]' />mail@yourcompany.com</Flex>
            <span className='absolute'></span>
            <Flex className="gap-[5px] text-[14px] md:text-[16px]"> <LuPhoneCall />
            +896 120 5889 (Toll free)</Flex>
          </Flex>
          <Flex className="icons gap-[19px]">
            <span className='hover:text-gray-300 cursor-pointer'><FaFacebookF />
            </span>
            <span className='hover:text-gray-300 cursor-pointer'><FaTwitter/></span>
            <span className='hover:text-gray-300 cursor-pointer'><FaLinkedinIn/></span>
            <span className='hover:text-gray-300 cursor-pointer'><IoLogoInstagram/></span>
          </Flex>
        </Flex>
      </Container>

    </div>
    <div className="navbar sticky top-0 left-0 z-[99999] px-3 md:px-0 font-primary py-[27px] bg-primary text-white">
      <Container>
        <Flex>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
              <ScrollSpy
        activeClass="text-blue-500 font-bold"
        offsetTop={100}
        scrollThrottle={100}
      >
            <Flex className="gap-x-[47px] hidden md:flex">
              {
                navItems.map((item)=>(
                  <li className='font-semibold text-[16px] hover:text-gray-300'><a href={item.link}>{item.item}</a></li>

                ))
              }
              <Button className="border  border-white text-white">Contact</Button>
            </Flex>
              </ScrollSpy>
          </ul>
          
          {
            show ? <RxCross2 className='text-[24px] md:hidden' onClick={()=>setShow(!show)} /> : <HiMenu className='text-[24px] md:hidden' onClick={()=>setShow(!show)} />
          }


        </Flex>
        {
          show && (
            <Flex className="gap-y-[10px] flex-col mt-[20px] list-none md:hidden">
            {
              navItems.map((item)=>(
                <li className='font-semibold text-[16px] hover:text-gray-300'><a href={item.link}>{item.item}</a></li>

              ))
            }
            <Button className="border  border-white text-white">Contact</Button>
          </Flex>
          )
        }

      </Container>
    </div>
    </>
  )
}

export default Navbar