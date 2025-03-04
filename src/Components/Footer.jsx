import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='w-[100%] h-[auto] bg-[#1D1D1D] pt-[5%] pb-[5%] xl:pt-[2%] xl:pb-[2%] flex justify-center items-center'>
          
          <div className='lg:w-[70%] xl:w-[70%] xl:h-[100px] h-[auto] sm:flex sm:justify-between sm:items-center  xl:flex xl:justify-between xl:items-center xl:grid xl:grid-cols-2 xl:gap-4'>
              
              <div className="h-[100%] flex flex-wrap justify-center items-center">
                <Link to="/"> <img src="https://media-hosting.imagekit.io//7010881624944de1/chintan-rathod-(1).png?Expires=1835458677&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gaQSmuZFUbJmhT8S7l5mmG0h4RHMd1NjF7tkfL1T7~aiCuk9JmPrKGg2Uf1RZFj3o8cdCfMYP92y6mci9-WubKEwUXBDAa5vzyapyR63BNF2VakGRQNooESl4dTU5idhwqQK~eESrriv7HJ5JzM9Dd-qeoh7EeaOpM-BBqzrxuZ82AGvHNE3O5g4eYjABwb5DWDsTy3gtZWVapKxwcoQ5u1F4bK4BvCsdPBMpl~N1NqPX3EjufAc2UtvzPFeuq~1P7gJ6ykkPFZ2XlPdln~cVj99IOvIw6pTWz9MpEydAQZj7JeyqlsNDwDJ1jNlEJA7p8jLzZej6sf596sFO7IcEA__" alt="" className='w-[50px] sm:w-[60px] xl:w-[65px] ' /> </Link>
                <h1 className='mt-[2%] xl:mt-[0%] w-[100%] text-center text-[15px] xl:text-[18px] text-[gray]'><i class="ri-copyright-line"></i> Designed & Built by <span className='text-[#4bffa5]'>Chintan Rathod</span></h1>
              </div>
              
              <div className='h-[100%] flex flex-wrap justify-center items-center mt-[7%] sm:mt-[0%] md:mt-[0%] md:lg-[0%]  xl:mt-[0%] xl:mt-[0%]'>
              <Link to="/"> <img src="https://media-hosting.imagekit.io//f2fb5f596ec842f1/React.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ygyOIyb2sjVEosqAlXH1d50Kjo14vcVLSoEgGRl62WrQ3RgfHhZhy7WkBWrrDZAUeW~g8nDZvX8zmY8Ya1VRfCg92FwfjWZ1IsMD0UQ6XYt0qgmoGrw-M0WQcqaxE~3x7Q15beViF6fqbUr9ZRbDxhqBKQMOSmUWEHj0qc2UmQj34m5mvu8MIgKy5bWMil-rfFMo356Fqy6STvJGYDG2hKF5i28dyLz45ilSQ622cvDfpJ9766ugDGBnXf1aoqsgkhY5V~wEx40rAhjnFfBRBuUiqT2iqHi9v5f3gc11tgYlA13UqgIkw50fT0i8E8g2b1GaojDtG9X7LrgsGZ~SPQ__" alt="" className='w-[45px] hover:drop-shadow-2xl: 1 35px 35px rgba(0, 0, 0, 0.25)' id='built' /> </Link>
              <h1 className='w-[100%] text-center text-[18px] text-[gray]'>Built Using <span className='text-[#4bffa5]'>React-JS</span></h1>
              </div>
          </div>
    
    </section>
  )
}

export default Footer
