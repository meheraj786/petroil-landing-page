import React from 'react'
import Button from '../layouts/Button'
import Container from '../layouts/Container'

const Banner = () => {
  return (
    <div className='py-[257px] font-primary relative bg-cover bg-[url(assets/bannerBg.png)]'>
<Container>
<div className='relative z-10 text-white'>
<h1 className='text-[64px] font-bold mb-[31px] md:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
<Button>LEARN MORE</Button>
</div>
</Container>
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 z-[0]'></div>
    </div>
  )
}

export default Banner