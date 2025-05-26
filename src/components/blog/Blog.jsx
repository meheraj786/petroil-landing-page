import React from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import Button from '../layouts/Button'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import OverLay from '../layouts/OverLay'

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
    <div className="blog pt-[110px] bg-light-bg pb-[162px]">
      <div className="blogs">
        <Container>
          <Flex>
            {
              blogs.map((blog)=>(
                <div className='box px-[45px] pt-[75px] pb-[55px] relative' style={{
                  backgroundImage: `url(${blog.img})`,
                  backgroundSize: "cover"

                }}>
                  <div className="relative z-10">
                  <h3 className='w-[249px] text-white text-[24px] font-bold mb-[52px]'>{blog.title}</h3>
                  <Button className="!bg-[rgba(255,255,255,0.5)]"><a href={blog.link}>Read More</a></Button>
                  </div>
                  <OverLay/>

                </div>
              ))
            }

          </Flex>
          <div className='w-full mt-[29px] text-right'>
            <p className='font-bold'>MORE FROM THE BLLOG</p>
          </div>

        </Container>
      </div>

    </div>
  )
}

export default Blog