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
    <div className="welcome font-primary pt-[78px] text-center md:text-left pb-[100px]">
      <Container>
        <Flex>
          <h2 className='md:text-[48px] text-[38px] font-bold md:leading-[72px] md:w-[289px]'>The biggest
supplier on
the country</h2>
<p className='font-medium text-text md:text-[16px] text-[14px] px-3 md:p-0 mt-4 md:mt-0 md:w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </Flex>
      </Container>

    </div>
    <div className="gallary mb-[28px]">
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