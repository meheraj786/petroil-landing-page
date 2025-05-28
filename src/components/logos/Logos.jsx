import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import logo1 from '../../assets/Logo1.png'
import logo2 from '../../assets/Logo2.png'
import logo3 from '../../assets/Logo3.png'
import logo4 from '../../assets/Logo4.png'

const Logos = () => {
  return (
    <div className="logos py-10 md:py-[117px]">
      <Container>
        <Flex className="md:justify-between justify-center">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </Flex>
      </Container>

    </div>
  )
}

export default Logos