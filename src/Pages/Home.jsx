import React from 'react'
import "../CSS/Headline.css"
import "../JS/Headline.js"
// import "../CSS/Particale.css"
// import "../JS/Particale.js"

function Home() {
  return (
    <div className='w-[100%] h-screen bg-[#0C0C0C]  flex justify-center items-center'>
       
           <div className='w-[100%] h-[90%]  lg:w-[90%]  xl:w-[80%] flex flex-col justify-between items-center lg:flex-row lg:flex lg:justify-between lg:items-center xl:flex-row xl:flex xl:justify-between xl:items-center' >
                
                <div className='w-[100%] xl:w-[50%] h-full flex flex-col justify-center items-center'>
                  <h1 className='text-[dimgray] text-[4vw] sm:text-[3.3vw] md:text-[2.5vw]  xl:text-[1.8vw]'>Hi, I'm <span className='text-[#4BFFA5]'> Chintan Rathod</span></h1>

                  <h1 className='text-[white] text-[5.5vw] sm:text-[4vw] md:text-[3vw] me-3 mt-[3%] lg:text-[2.7vw] xl:text-[2.2vw]'>A <span id="changingText" className='decoration underline underline-offset-8'></span></h1>

                </div>

                {/* ----------------------- */}

                <div className='w-[100%]   xl:w-[50%] h-[100%] flex justify-center items-center mt-[10%] md:mt-[6%] lg:mt-[0%] xl:mt-[0%]'>
                  <img src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt="" className='rounded-[10px] w-[65%] sm:w-[60%] md:w-[45%] lg:w-[70%] xl:w-[80%]' />
                </div> 
               
               
        </div>
        
    
       </div>
  )
}

export default Home


