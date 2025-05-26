import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import logo from '../../assets/logo.png'
import Button from '../layouts/Button'

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
            <div>mail@yourcompany.com</div>
            <span className='absolute'></span>
            <div>+896 120 5889 (Toll free)</div>
          </Flex>
          <Flex className="icons gap-[19px]">
            <span>fa</span>
            <span>fa</span>
            <span>fa</span>
            <span>fa</span>
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