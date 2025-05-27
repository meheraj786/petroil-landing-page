import React from 'react'
import Button from '../layouts/Button'
import Container from '../layouts/Container'
import OverLay from '../layouts/OverLay'

const Banner = () => {
  return (
    <div className='md:py-[257px] py-[157px] font-primary relative bg-cover bg-[url(assets/bannerBg.png)] bg-center'>
<Container>
<div className='relative z-10 text-center md:text-left text-white'>
<h1 className='md:text-[64px] text-[38px] font-bold mb-[31px] md:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
<Button >LEARN MORE</Button>
</div>
</Container>
            <OverLay/>
    </div>
  )
}

export default Banner