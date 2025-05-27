import React from 'react'
import Container from '../layouts/Container'
import logo from "../../assets/footerLogo.png"
import Flex from '../layouts/Flex'
import cer1 from '../../assets/certificate1.png'
import cer2 from '../../assets/certificate2.png'
import { IoMailUnreadSharp } from 'react-icons/io5'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { GrMap } from "react-icons/gr";


const Footer = () => {
  const company=["Company", "Home", "About", "Services", "Galary"]
  const others=["Others", "Blog", "Contact", "Terms & Conditions", "Privacy Policy"]
  return (
    <div className="bg-[#1F1F1F] text-center md:text-left text-white">
      <div className='pt-[150px] pb-[170px]'>
        <Container>
          <Flex className="md:items-start flex-col md:flex-row justify-center md:justify-between">
          <div>
            <img className='mx-auto md:mx-0' src={logo} alt="" />
            <ul className='mt-[33px]'>
              <li className='mb-[15px] md:w-[65%]'><Flex className="gap-[5px] justify-center md:justify-start"><IoMailUnreadSharp className='w-[20px] mt-[4px]' />mail@yourcompany.com</Flex></li>
              <li className='mb-[15px]  md:w-[65%]'><Flex className="gap-[5px] justify-center md:justify-start"> <LuPhoneCall />
              +896 120 5889 (Toll free)</Flex></li>
              <li className='mb-[34px] '><Flex className="gap-[5px] justify-center md:justify-start">
              <GrMap />
              101 Baker Street, New York, USA, 12345</Flex></li>
            </ul>
            <div className="icons mx-auto md:mx-0 mb-5 md:mb-0 w-[152px]">
            <Flex className="icons gap-[1px] ">
            <span className='p-[7px] rounded-full bg-primary hover:bg-bg cursor-pointer text-white'><FaFacebookF />
            </span>
            <span className='p-[7px] rounded-full bg-primary hover:bg-bg cursor-pointer text-white'><FaTwitter/></span>
            <span className='p-[7px] rounded-full bg-primary hover:bg-bg cursor-pointer text-white'><FaLinkedinIn/></span>
            <span className='p-[7px] rounded-full bg-primary hover:bg-bg cursor-pointer text-white'><IoLogoInstagram/></span>
          </Flex>
            </div>
          </div>
          <ul className='mb-7 md:mb-0'>
            {
              company.map((item,index)=>(
                <li className={`${index==0 ? "font-bold mb-[21px] ": "text-[14px] mb-[6px] md:mb-[15px] font-regular cursor-pointer hover:opacity-80"}`}>{item}</li>
              ))
            }
          </ul>
          <ul className='mb-7 md:mb-0'>
          {
              others.map((item,index)=>(
                <li className={`${index==0 ? "font-bold mb-[21px]": "text-[14px] mb-[6px] md:mb-[15px] font-regular cursor-pointer hover:opacity-80"}`}>{item}</li>
              ))
            }
          </ul>
          <div>
            <p className='font-bold mb-[21px]'> Certificate</p>
            <Flex className="gap-[5px]">
              <img src={cer1} alt="" />
              <img src={cer2} alt="" />
            </Flex>
          </div>


          </Flex>
        </Container>

      </div>
      <div className="footer-bottom text-[#6C6C6C] py-[42px] bg-bg">
        <Container>
          <p className='font-medium'>© Copyright 2024 by AltDesain Studio – All right reserved.</p>
        </Container>

      </div>

    </div>
  )
}

export default Footer