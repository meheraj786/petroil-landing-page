import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import OverLay from '../layouts/OverLay'
import { IoIosArrowForward } from "react-icons/io";


const Blog = () => {
  const blogs= [
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      link: "#",
      img: blog1
    },
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      link: "#",
      img: blog2
    },
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      link: "#",
      img: blog3
    }
  ]
  return (
    <div id='blog' className="blog pt-[110px] bg-light-bg md:pb-[162px] pb-[100px]">
      <div className="blogs">
        <Container>
          <Flex>
            {
              blogs.map((blog)=>(
                <div className='box text-center md:text-left mb-3 md:mb-0 px-[45px] pt-[75px] pb-[55px] relative' style={{
                  backgroundImage: `url(${blog.img})`,
                  backgroundSize: "cover"

                }}>
                  <div className="relative z-10">
                  <h3 className='md:w-[249px] text-white text-[24px] font-bold  md:text-left mb-[52px]'>{blog.title}</h3>
                  <Button className="!bg-[rgba(255,255,255,0.5)]  text-white"><a href={blog.link}>Read More</a></Button>
                  </div>
                  <OverLay/>

                </div>
              ))
            }

          </Flex>
          <div className='w-full mt-[29px] text-right'>
            <Flex className='font-bold md:justify-end justify-center gap-[5px]'>
            MORE FROM THE BLLOG <IoIosArrowForward /></Flex>
          </div>

        </Container>
      </div>

    </div>
  )
}

export default Blog