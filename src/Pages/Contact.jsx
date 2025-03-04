import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7vtggsj', 'template_bqqcsd9', form.current, {
        publicKey: '2_GKYCQRU82MskyFy',
      })
      .then(
        () => {
          alert("Successfull...✅")
        },
        (error) => {
          alert('FAILED...❌', error.text);
        },
      );
 }

  return (
    <section className='w-[100%] xl:h-[auto] pb-[3%] bg-[#0C0C0C] flex justify-center items-center'>

    <div className='section w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full flex flex-wrap justify-center items-center'>

      <div className='w-full h-[40vw]  flex justify-center items-center'>
        <h1 className='text-[8vw] lg:text-[6vw] xl:text-[6vw] text-[#4BFFA5] underline decoration-2 underline-offset-[20px] decoration-[#4BFFA5]'>Contact</h1>
      </div>

      {/* ------------------------- */}

      <hr className='w-[90%] text-[dimgray]' />

      {/* ------------------------- */}

      {/* Contact-section------ */}

      <section id='Contact' className='w-[90%] h-[auto] pt-[3%] pb-[3%] lg:flex lg:grid lg:grid-cols-2 lg:gap-4  xl:flex xl:grid xl:grid-cols-2 xl:gap-5 mt-[3%]'>

      <div className="p-6 md:p-8 rounded-lg shadow-md max-w-md w-full">
          
          <form id="contactForm" ref={form} onSubmit={sendEmail} >
           
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                    <label for="name" className="block text-[#4BFFA5]">Name :</label>
                    <input type="text" id='name' name='name' required className="mt-1 block w-full p-2 border border-[#575757] rounded-md focus:outline-none focus:ring focus:ring-[#4BFFA5]" placeholder='Your Name'/>
                </div>
                <div className="flex-1">
                    <label for="email" className="block text-[#4BFFA5]">Email :</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-[#575757] rounded-md focus:outline-none focus:ring focus:ring-[#4BFFA5]" placeholder="Your Email"/>
                </div>
            </div>

            <div className="mb-4">
                <label for="subject" className="block text-[#4BFFA5]">Subject :</label>
                <input type="text" id="subject" name="subject" required className="mt-1 block w-full p-2 border border-[#575757] rounded-md focus:outline-none focus:ring focus:ring-[#4BFFA5]" placeholder="Subject of Your Message"/>
            </div>
           
            <div className="mb-4">
                <label for="phone" className="block text-[#4BFFA5]">Contact Number :</label>
                <input type="tel" id="phone" name="phonenumber" required className="mt-1 block w-full p-2 border border-[#575757] rounded-md focus:outline-none focus:ring focus:ring-[#4BFFA5]" placeholder="Your Contact Number"/>
            </div>
           
           
           
            <div className="mb-4">
                <label for="message" className="block text-[#4BFFA5]">Message :</label>
                <textarea id="message" name="message" required className="mt-1 block w-full p-2 border border-[#575757] rounded-md focus:outline-none focus:ring focus:ring-[#4BFFA5]" rows="4" placeholder="Your Message"></textarea>
            </div>
            
            <button type="submit"  className="w-full bg-none border border-[#4BFFA5]  text-[#4BFFA5] font-semibold py-2 rounded-md hover:bg-[#4BFFA5] hover:text-[white] cursor-pointer transition duration-200">Send Message</button>
        
        </form>
    </div>

        {/* --------------------------- */}

        <div className='pt-[10%]'>
          <h1 className='text-[white] text-[7vw] sm:text-[5vw] lg:text-[3vw] xl:text-[2vw]'>Get in Touch :</h1>
          <br />
          <p className='text-[dimgray] text-[17px]'>I'm always excited to connect! Whether you have a project idea, need a consultation, or just want to chat, we’re here for you. Feel free to reach out through any of the channels below.</p>

          <br />
          <h1 className='text-[19px] text-[white]'> 📍 Location :</h1> 
          <p className='text-[#4bffa5] ms-[35px]'>Rajkot, Gujarat</p>
          
          <br />
          <h1 className='text-[19px] text-[white]'> 📧 Email Us :</h1> 
          <p className='text-[#4bffa5] ms-[35px]'>rchintan038@gmail.com</p>

          <br />
          <h1 className='text-[19px] text-[white]'> 📞 Contact No. :</h1> 
          <p className='text-[#4bffa5] ms-[35px]'>9033159452</p>


        </div>

    </section>

    </div>

    <a href="#Contact"><i className="ri-arrow-down-s-line  fixed bottom-[25%] right-[6%] text-[3.3vw] text-[#4BFFA5]" id="downarr"></i></a>
  </section>
  )
}

export default Contact


// Name : {{name}}

// email : {{email}}

// phone no. : {{phonenumber}}

// subject : {{subject}}

// message : {{message}}