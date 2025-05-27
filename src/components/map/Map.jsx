import React from 'react'
import map from '../../assets/map.png'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'

const Map = () => {
  return (
    <div>
      <img src={map} alt="" />
      <div className='py-[45px] border-b-3 border-border text-white bg-primary'>
        <Container>
          <Flex>
            <h2 className='text-[36px] font-bold'>Want to join as member branch in your area?</h2>
            <Button className="border hover:bg-red-700 border-white text-white">Contact</Button>
          </Flex>
        </Container>

      </div>
    </div>
  )
}

export default Map