import React from 'react'
// import "../CSS/Particale.css"
// import "../JS/Particale.js"

function About() {
  return ( 

      <div className='w-[100%] xl:h-[auto] pb-[3%] bg-[#0C0C0C] flex justify-center items-center'>
        
      <div className='section w-[95%] pt-[2%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full flex flex-wrap justify-center items-center'>
      
            <div className='w-[90%] h-[40vw] rounded-[10px] bg-[#1D1D1D] flex justify-center items-center' id='titlebg'>
    
              <h1 className='text-[8vw] lg:text-[6vw] xl:text-[6vw] text-[#4BFFA5] underline decoration-2 underline-offset-[20px] decoration-[#4BFFA5]' id='title'>About</h1>

            </div> 

            

      {/* ------------------------- */}

      <hr className='w-[90%] text-[dimgray] mt-[2%]'  />


        {/* about-section------ */}

         <div id='about' className='w-[90%] xl:h-[auto] pt-[1%] pb-[3%] flex flex-col justify-center items-center lg:grid lg:grid-cols-3  xl:grid xl:grid-cols-3 xl:gap-2 mt-[3%] lg:mt-[2%] xl:mt-[2%]'>

        {/* ------------------------- */}

        <div className='w-[60%] sm:w-[55%] md:w-[45%] lg:w-[90%] xl:w-[90%]  flex justify-center items-center'>
            <img src="https://media-hosting.imagekit.io//72654972d4a64d62/Myphoto2.jpg?Expires=1835450201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cWYrq3xg8cOwqHBebfVBntURLxXWIEIqZE823O~dMlVBFqKE0UwCamN2JY-h-Cq1pViZrY2rJSN1P5q1J~iUuKbXyvaGMryS1wm3SbD-3bHh3kzbTVc7I4MFV5rvjn0hb5-ZtGNQNaKriUAOVSbEU2vO0p~~oL64aqrXM5m6XoQrKcCdPbqHJ7E~sj3ZnDEpS5yK5fGpWuI4l~wLqvQ5XUl5lUR515oM7iXM0~nia9qtvDyxBDYdDqtI71gfWU5-26k6tSBUTR8qzbXTndymMHOJthhTpkugR9o0sxE8EUIC-s~jABIzo50FG4iaXH-aBP3ZxzdxoEYh4fVfOhhsBg__"  alt="" className='myphoto rounded-[10px] drop-shadow-xl-[white]' />
        </div>
          
          {/* ------------------------- */}

        <div className='col-span-2 mt-[4%] lg:mt-[0%] xl:mt-[0%] 2xl:mt-[0%]'>
        <p className='text-[#BBBBBB] text-[14px] md:text-[17px] lg:text-[17px] xl:text-[17px] '>
          Hello! My name is <span className='text-[#40FFA5]'>Chintan Rathod</span>  and I'm a skilled Frontend Web Developer  with expertise in building
                            responsive and user-friendly web interfaces. 
                            Passionate about creating seamless user experiences and
                            staying updated with the latest web development trends
        </p>
        <br />
        <div className='w-[100%] h-[auto] grid grid-cols-2'>
            <div>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> HTML 5</p>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> Jquery</p>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> Bootstrap</p>
            </div>
            <div>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> CSS3</p>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> Tailwind CSS</p>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> Java-Script</p>
              <p className='text-[#4BFFA5]'><i class="ri-arrow-right-s-fill"></i> React-JS</p>
            </div>
        </div>
        <br />
        <button className='resume text-[white] xl:text-[19px] rounded-lg bg-[#4BFFA5] w-[130px] h-[35px] xl:w-[170px] xl:h-[41px] '>
           <a href="https://drive.google.com/file/d/1azhLwpyfzKGprOQC1hl7QrLsCVxRApon/view?usp=drive_link" download={"https://drive.google.com/file/d/1azhLwpyfzKGprOQC1hl7QrLsCVxRApon/view?usp=drive_link"}  target='_blank' > Download CV</a> 
        </button>
        </div>

        
       
      </div>
    

    
    </div>
       
    <a href="#about"><i className="ri-arrow-down-s-line  fixed bottom-[25%] right-[2.2%] text-[30px] sm:right-[2.8%] md:right-[0.6%] lg:right-[5%] xl:right-[7%]  md:text-[35px] lg:text-[37px] xl:text-[3.3vw] text-[#4BFFA5]" id="downarr"></i></a>
       
  </div>
           
   
  )
}

export default About
