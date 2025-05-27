import React from 'react'
import map from '../../assets/map.png'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const Map = () => {
  return (
    <div>
      <img src={map} alt="" />
      <div className='py-[45px] border-b-3 border-border text-white text-center md:text-left bg-primary'>
        <Container>
          <Flex>
            <h2 className='md:text-[36px] text-[26px] px-3 md:px-0 mb-4 md:mb-0 font-bold'>Want to join as member branch in your area?</h2>
            <Button className="border hover:bg-red-700 mx-auto md:mx-0 border-white text-white">Contact</Button>
          </Flex>
        </Container>

      </div>
    </div>
  )
}

export default Map