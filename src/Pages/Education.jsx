import React from 'react'

function Education() {
  return (
    <section className='w-[100%] xl:h-[auto] pb-[3%] bg-[#0C0C0C] flex justify-center items-center'>
        
      <div className='section w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full flex flex-wrap justify-center items-center'>
      
        <div className='w-full h-[40vw]  flex justify-center items-center'>
            <h1 className='text-[8vw] lg:text-[6vw] xl:text-[6vw] text-[#4BFFA5] underline decoration-2 underline-offset-[20px] decoration-[#4BFFA5]'>Education</h1>
          </div>

      {/* ------------------------- */}

         <hr className='w-[90%] text-[dimgray]'  />

      {/* Education-section------ */}

    <div id='Education' className='w-[90%] xl:h-[auto] pt-[3%] pb-[3%] flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  xl:flex xl:grid xl:grid-cols-3 gap-5 mt-[3%]'>

        <div id='edu' className='h-[auto] border border-[#4BFFA5] rounded-[10px] ps-[20px] p-[15px] pt-[7%] pb-[7%] text-[white]'>
            <p className='text-[#A9A6A9]'>( 2023 - 2025 )</p>
            <h1 className='mt-[3%] text-[15px]  lg:text-[17px] font-semibold text-[#4BFFA5] underline  underline-offset-[5.8px] decoration-[white]' >Front-End Web Development</h1>
            <h1 className='mt-[5%]'>Red &  White Multimedia Education</h1>
            <h1 className='mt-[5%] text-[#A9A6A9]' ><i class="ri-map-pin-line"></i> Rajkot, Gujarat</h1>
        </div>



        <div id='edu' className='h-[auto] border border-[#4BFFA5] rounded-[10px] ps-[20px] p-[15px] pt-[7%] pb-[7%] text-[white]'>
            <p className='text-[#A9A6A9]'>( 2020 - 2023 )</p>
            <h1 className='mt-[3%] text-[15px] lg:text-[18px] font-semibold text-[#4BFFA5] underline  underline-offset-[5.8px] decoration-[white]' >Bachelor Of Vocational </h1>
            <h1 className='mt-[5%]' >RK University</h1>
            <h1 className='mt-[5%]  text-[#A9A6A9]' ><i class="ri-map-pin-line"></i> Rajkot, Gujarat</h1>
        </div>



        <div id='edu' className='h-[auto] border border-[#4BFFA5] rounded-[10px] ps-[20px] p-[15px] pt-[9%] pb-[9%] text-[white]'>
          <span className='text-[15px] font-semibold text-[#4BFFA5] underline  underline-offset-[5.8px] decoration-[white]'>HSC</span>
          <span className='ms-[5%] text-[#A9A6A9]'>( 2018 )</span><br /> 
          <span className='text-[15px] font-semibold text-[#4BFFA5] underline  underline-offset-[5.8px] decoration-[white]'>SCC</span>
          <span className='ms-[5%] text-[#A9A6A9]'>( 2020 )</span>
          <h1 className='mt-[5%]'>Shree Saraswati Group Of Education</h1>
          <h1 className='mt-[5%]   text-[#A9A6A9]' ><i class="ri-map-pin-line"></i> Rajkot, Gujarat</h1>
        </div>




      
         
       

        
       
      </div>
    

    
    </div>
       
       <a href="#Education"><i className="ri-arrow-down-s-line  fixed bottom-[25%] right-[6%] text-[3.3vw] text-[#4BFFA5]" id="downarr"></i></a>
    </section>
  )
}

export default Education
