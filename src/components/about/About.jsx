import React from 'react' 
import Container from '../../components/layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div id="about" className=" py-[136px] text-white bg-light-bg">
      <Container>
        <Flex className="bg-primary">
          <div className='md:w-[30%] px-3 md:px-0 md:py-0  py-10 text-center md:text-left md:pl-[74px]'>
            <h2 className='md:text-[36px] text-[26px] font-bold'>
            Learn more about our company
            </h2>
          </div>
          <div className=' w-full md:w-[70%] text-center bg-[url(assets/aboutBg.png)] bg-center bg-cover pt-[168px] pb-[142px]'>
            <Button className="bg-white !hover:bg-primary  text-primary">Learn More</Button>
          </div>
        </Flex>

      </Container>

    </div>
  )
}

export default About