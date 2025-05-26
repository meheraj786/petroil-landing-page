import React from 'react'
import Flex from '../layouts/Flex'
import OverLay from '../../components/layouts/OverLay'
import Button from '../../components/layouts/Button'

const Services = () => {
  return (
    <div className='font-primary'>
      <Flex>
        <div className="w-1/2 relative pt-[13px] pl-[390px] pb-[19px]  h-[200px]">
        <h2 className='text-[64px] font-bold '>Our Services</h2>
        <p className='text-text  font-medium w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="w-1/2 relative pt-[147px] bg-[url(assets/serviceImg1.png)] pb-[139px] bg-no-repeat bg-cover pl-[116px] bg-red-600 ">
        <div className='relative z-2 text-white'>
        <h2 className='text-[36px] mb-[19px] font-bold'>Modern natural oil and gas refineries.</h2>
        <Button>Learn More</Button>
        </div>
        
        
        <OverLay/>
        </div>
        <div className="w-1/2 relative pt-[147px] bg-[url(assets/serviceImg2.png)] pb-[139px] bg-no-repeat bg-cover pl-[116px] bg-green-300 ">
        <div className='relative z-2 text-white'>
        <h2 className='text-[36px] mb-[19px] font-bold'>Supply of national industries.</h2>
        <Button>Learn More</Button>
        </div>
        
        <OverLay/>
        </div>
        <div className="w-1/2 relative pt-[147px] bg-[url(assets/serviceImg3.png)] pb-[139px] bg-no-repeat bg-cover pl-[116px] bg-amber-600 ">
        <div className='relative z-2 text-white'>
        <h2 className='text-[36px] mb-[19px] font-bold'>National fuel distribution and supply.</h2>
        <Button>Learn More</Button>
        </div>

        
        <OverLay/>
        </div>
      </Flex>
    </div>
  )
}

export default Services