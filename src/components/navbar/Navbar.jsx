import React from 'react'
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





const Navbar = () => {
  const navItems= [
    {
      item: "Home",
      link: "#"
    },
    {
      item: "About",
      link: "#"
    },
    {
      item: "Services",
      link: "#"
    },
    {
      item: "Gallary",
      link: "#"
    },
    {
      item: "Blog",
      link: "#"
    },
  ]
  return (
    <>
    <div className="header font-primary border-b-3 border-border py-[16px] text-white bg-bg">
      <Container>
        <Flex>
          <Flex className="gap-[49px]">
            <Flex className="gap-[5px]"><IoMailUnreadSharp className='w-[20px] mt-[4px]' />mail@yourcompany.com</Flex>
            <span className='absolute'></span>
            <Flex className="gap-[5px]"> <LuPhoneCall />
            +896 120 5889 (Toll free)</Flex>
          </Flex>
          <Flex className="icons gap-[19px]">
            <span><FaFacebookF />
            </span>
            <span><FaTwitter/></span>
            <span><FaLinkedinIn/></span>
            <span><IoLogoInstagram/></span>
          </Flex>
        </Flex>
      </Container>

    </div>
    <div className="navbar font-primary py-[27px] bg-primary text-white">
      <Container>
        <Flex>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <Flex className="gap-x-[47px]">
              {
                navItems.map((item)=>(
                  <li className='font-semibold text-[16px]'><a href={item.link}>{item.item}</a></li>

                ))
              }
              <Button className="border border-white text-white">Contact</Button>
            </Flex>
          </ul>
        </Flex>

      </Container>
    </div>
    </>
  )
}

export default Navbar