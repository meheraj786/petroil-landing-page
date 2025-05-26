import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import gal1 from '../../assets/gal1.png'
import gal2 from '../../assets/gal2.png'
import gal3 from '../../assets/gal3.png'
import gal4 from '../../assets/gal4.png'


const Welcome = () => {
  return (
    <>
    <div className="welcome font-primary pt-[78px] pb-[100px]">
      <Container>
        <Flex>
          <h2 className='text-[48px] font-bold leading-[72px] md:w-[289px]'>The biggest
supplier on
the country</h2>
<p className='font-medium text-text md:w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </Flex>
      </Container>

    </div>
    <div className="gallary">
      <Flex>
        <img src={gal1} alt="" />
        <img src={gal2} alt="" />
        <img src={gal3} alt="" />
        <img src={gal4} alt="" />
      </Flex>
    </div>
    </>
  )
}

export default Welcome