import React from 'react' 
import Container from '../../components/layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className="about py-[136px] text-white bg-light-bg">
      <Container>
        <Flex className="bg-primary">
          <div className='md:w-[30%] pl-[74px]'>
            <h2 className='text-[36px] font-bold'>
            Learn more about our company
            </h2>
          </div>
          <div className='px-[282px] md:w-[70%] bg-[url(assets/aboutBg.png)] bg-cover pt-[168px] pb-[142px]'>
            <Button className="bg-white !text-primary">Learn More</Button>
          </div>
        </Flex>

      </Container>

    </div>
  )
}

export default About