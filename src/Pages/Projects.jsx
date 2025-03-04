import React, { useRef, useState } from 'react'
import Video1 from "../assets/Game.mp4"
import Video2 from "../assets/Time.mp4"
import Video3 from "../assets/Weather.mp4"
import "../JS/Follow.js"

function Projects() {


    const WebsiteSec = useRef(null)
    const WebpageSec = useRef(null)
    const ProjectSec = useRef(null)

    const hlClick1 =()=>{
      WebsiteSec.current.style.display = "block"
      WebpageSec.current.style.display = "none"
      ProjectSec.current.style.display = "none"
    }

    const hlClick2 =()=>{
      WebsiteSec.current.style.display = "none"
      WebpageSec.current.style.display = "block"
      ProjectSec.current.style.display = "none"
    }

    const hlClick3 =()=>{
      WebsiteSec.current.style.display = "none"
      WebpageSec.current.style.display = "none"
      ProjectSec.current.style.display = "block"
    }

    const [Project, setProject] = useState([
      {
         imgUrl : "https://media-hosting.imagekit.io//5650a6657f4c4361/Webpage-1.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gcjKD7ku3WOzzK~rOl7dYjvVw0vnnMD7j~VbXjTFnhq2EZYjIwxLyg2PDaDq87Yy3LkO9f8K5~GDtq6KZNe0rfgTd~vxr9BLvZXKOOw-BjaFtCsaFJLc8gfO8NwSaIXA9E57ryGQNBanBl1D2q6EFgGkAAbnWGsjq69ikAUJhtFjstxmiijA7nmUHmB2ZSSbBIYXwQe3kK8NvE2ct5K5reX2eNc0efmrR8-FbpMUPHL~AkIf-TVmpNnhidDxONvYTlAJBMJ5udBNhOAGn~4gkLbyEjHehL9hUR~owvBibNXO-K2MTFl3hPVXxRnEMf2ouMNrKc~COTixuJ~XusHn1g__",
         git :    "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/Tailwind-Project-1",
         live :   "https://funny-panda-487732.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//c7863df688094cca/Webpage-2.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=e2V0h-~NaUy5EVqpDHDMPAEwniPvYYvAd~mGSR6RuXQXsT5mYZ7Mx9vYY86-M~CU-EFVmJ0ZB55ZPRHMIcVCR0cbbPUXDaxSZcyNmRK8ORRHbHvCx4krZSXk~OsSHevAxQ-a3z1ls1Adn24qFmGm267CPJiUK1vKcFyTXR7WrB1OpcjuT9lJOXrEEfBIPICYu3Xu9LhvlBMfTsAjc8aqFxpR1bmNvHhTRTS2MnQwrH1Y85N3gHVCp-quVUl4iZpMMtcaCg3gTqWujMIezcUukDdZZonvymFk-wW7g45fpUYXhm~08Pbfcu4Jx-U09br~5c4tSShLWB8NJOkKbIl54Q__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/Live-Tailwind-Project-2",
         live : "https://clever-douhua-6a3a85.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//225233385b7d4a9f/Webpage-3.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dOvBAGEvTo2SnHnHhuaqz3whU23rYFzC0fWx~p9FpmfGePHwsAr99oE67FCfCi74VttTgxjfvex~jTj6gI4W0xWMyuNE-dlM7MtBCwgM3uKGgzsxpfE5FyWsL5w-01cxFBpTxOf4qEcvipbIL8cmvMPOoS0BbrSdxP4Yso6G6dWBx7YZmrvXQGznnOD42KlP2ujApijik0EjAw4io2EDDUlBi4lA1~oOuT0nVRbBVYAUi2Zf28bAaR5bB4Q8oYgdS9BQGyZ8Xi-aFJ7mYCnM~DRGKof6mgrhZSi5lRkEobBmML5dGXQzOidYb06Y~ZjxPthP3f7XQX0F2eJtwNQ2xQ__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/WEBPAGE-23_With_Animation",
         live : "https://jolly-semolina-71b826.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//38442f0aadf642ee/Webpage-4.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pU9-TzwaAZDc9WT8YR5FlntyEFuZ5Vr4jw6b98BD2cc1d7bKMxvBAeAL6jy3SIj0w2EEHsnrplTnDgirGIo0FEctkwHVLJsoM2u1d3GXnNJXRo8jxTafKGcuQhFCKYfzlS92Z8~uaydzwRZl~FWJ~i1ZcZ5J~oFkFoaO4rSk-tDjmrcMuQ85O5b0Qx5IHdy~YbSzwHtlMUsM-YK5La-f-zHTBe54-xSnPVPFOiVfCtstdsVMRrSf1i7MKIRduSsAV~KpjoLaQlbOpeXrTJZ~r2X9RCf9oZvoWhiZjFbpHJkLFq4-4M-2G5GaUQaoWn2BcAZHliSozb7L4lVv0HEdUA__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/BOOTSTRAP-WEBPAGE-5",
         live : "https://soft-croissant-231f03.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//bb5a66f6d7264944/Webpage-5.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WRJ~3qwR4cGH7xX7l--AddxH2fj5usMx06v4DYKtUCwd22obhctoSXkjEtUKYBkJ1aZp3luu9jPu13nZ7lVuaEbSsHkw0AWma0Q1LTVQuh9jTHzxnKYBdmkPTfDRlXMtQX5KEX4H2~JlTwf8Sf55s-syl4RBNMYW12djvG-6V5PqW~wWYTpCIUujFqNJ~-wy2pRST7WstgQYJ8iS7Gqdbua3UzIa8ZPBjOWlC1c4qKs7PD3qC99xkd7jeg65CpH7xmATmB2JWMVctmBnaNYn-kPScZExtNYMkt~pvQIoUVku6MxgPxk1b0MADGZk10Ri8pEYKBNygUMc5z64a-mFOw__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/BOOTSTRAP-WEBPAGE-2",
         live : "https://comfy-ganache-1a9ac3.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//9f1f262d5bfe4329/Webpage-6.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FXMvOrCUV0J3IBlFewxMx6Z8ZJ1gWejDf~P1cRZB5B9N5oRRNLgBs9h9IKWlm5Bq1H8H4LR-tigF3Do123qzwbMX739lCHCfhDvcVkFR~HICm3YlPUCuRWragDNDJLNhyEwexDeqmpuXGviFNpEx7ILMAIHkWJOT4MGvuS8TiG6Tngp6mHeZjYPPqGXa-3CW9ybX85ycKGOhXIy4OgbUbNTPYHDf6hJaJfSoEp6vRb9Gg6ElJzyGObqTaCDRn0qDlnQPNvrQq-kygDcUsR12OmJrsmbPUE2PLqtcd2vVPU3-waS8r21mKnCb9~ItcECbjvtdI3wJ8~LCaMXnfnlIiw__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/Resposive-webpage_1",
         live : "https://bucolic-basbousa-6eda36.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//77f8135f20984dbd/Webpage-7.png?Expires=1835602544&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cuGKm4pyKJrxujTbSHil5pjdze4tuACbSOsLLvG4EgA7lEiu20Vu4p~9plazUsDoc8S9G~lK09GNPvHCmKSS37KnbOT~2KNHjSyrzfRHWjvs00VDJWvJnOQuXs6rTY-cZDrFTTxkS1EEQ7V2DLqiGNKvV6fNPu1z7s-NUo04Y7ZESsgKZuEcKDIUOyppUUQx38G8tp3K~1Uoa8ismYSNxC082Mjdbx6D7IzXhblX3nCgg5JwmZ-UV7oXOgd-p9FqCiide-EVc4xQ4BqyLLbTuYEbvNZqbYe0pEy6hX50tSien0Bw8LMeSUyq7UpGzz0Q2iqnQ8sjw22qFDh-i4xQzQ__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/JQUERY-PROJECT-WEBPAGE-6",
         live : "https://darling-croissant-82e397.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//9ba209d8de6f45a7/Webpage-8.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P8EM51TeKNLr5GjLebECcmp23ZM35fN1ifx89Khqm8iKC3E5sGkAeHoavAb7CfSvfvAkS1h4yDnn5MooFlgUgJ9I6R7Dd95Dw-1XlGEcBsirJqSoYJzOOVb3OE2Re9SY2G7psfSAouOs6fbkmhAamYwi0PASgw1nr5w-ZUKt5Uni7OPKmXG1iq2VDDcY9zICI~KXmXnDA3Q1V1TBwf06LEWYugWdo4F6jCYXHarG17m57d85tlddonwhLSskXPOqQV3XQ7pwzWX-T0Nxsc3qBlmglw3267kUTWfbeuElKv6nBybn7wHiuvQDU~lAI8AIT~tUyLSAHbzuBd-xXGUx4Q__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/JQUERY-PROJECT-WEBPAGE-1%20WITH%20OWL%20CAROUSEL",
         live : "https://glistening-dodol-f20d1b.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//7c3c7c90425a49c7/Webpage-9.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c0iLy8HWZbhWH8WXU5oXIRQ1-n8-4iN3gvoEJxH4431BeyKa4L5jkpk3wInpURbFfGObNCnBlRqkdVtE0FUo17kXkrQ5RBcK4vSwFrItgyDmXjlSNUcZtf8wm9Dd4KnpQtGAYUTg7hJlaGI4fzN2m0~oANIfL1BSk16Zll6mExf66NTeCG59Yqhw2--M0KZ7EkGLmkO9wEYtltnT9wz3M6sJ-HWxgIDgT9scUwlBTcKgGKHfFfUhi7KVnbx7GRDmIwWTGn490hw4zEt8DXnONlG~zJnsa-ilJY9o-ZxC~fT39Du6W2b9WF1Ot2n0byMZjYwfNUcwAZjLql5Pa6gELg__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-39-WEBPAGE-22_With_animation",
         live : "https://fastidious-horse-f6d179.netlify.app/"
      },
      {
         imgUrl : "https://media-hosting.imagekit.io//80bd3cef52d64aaf/Webpage-10.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qe4S3GCIRqi05SgvgTol5E3scRw3JXA3Ul9o2bpV9aH~tigQJYtUNODvtbQq3U3lCUJnkAj7-QcY1twU7P-POIlBU0eKvrMYflI5RAll0srl7a7-3T0WKXhNvqSbIrVSLJBhWR3YCuV2xnNKy8AIqwm1ZiWNL3P1XfWG8MeoA6hO7kZKeH9A-ILkEipYlUBJQECbxPCqcWOetxhxh0bH4d~t3zm5TJwnwVv3J0kKxt1Y1wYEnK3b6WXuvfV3cv9oIIP~3B2rVGmUzbao49zlSSvO9okRw-9ZQbJOOMp07voAu2kY5Q~EvFi2fqnsm3Cas6ztDKcyO2IiWF9h57CawA__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-31-WEBPAGE-15",
         live : "https://fastidious-cassata-b287cc.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//17b507332e5c42d7/Webpage-11.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tn9bcAUhLVfljd3dQLT-f7EXk16NkhODmUywJ34XhOETJTtcHkmXuTMzv07oki6BJrdX5h6hxWYK3EicH7m4e2CMkbNtV3jnJI0fqR17v~ti8FZYMt7d08WpZMJUjgyVCOtVxNxm9hKS~QtG6N9Ofaxvqk~uaTpJLHKCLDUUF9vHU8hvRxWowlHtal3qE4Zx05spn-SvJDSQpuBwz~HRQA~xxBQDC1nzq4MxrRY08CP-M5vF4F4m3AsOXxecN2vPwWmI-Wmtrtjho6k8pT84hKddPffIiLMDtzQl5rSD5OD5GmrhiBPpP~FIvpWY4QEptW-2bE0oF4dnN9sxk4SnvA__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-30-WEBPAGE-14",
         live : "https://timely-marigold-9836ee.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//822d220b2e994b94/Webpage-12.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s2TX9KnCqBN3~dr7AsCx3yU9qqdb4uh~i3xpQVqNXTX-bzTQ8XcwscHmIgH4urvMCPmQ-xZtKyWmAzSyTCrHTmnHtPT9p42fAlZg5S4Dj4gyCSEg55IiBilnluqPVdeHltJfn9VxzmjEF-42LgNCHn1ceGLbwc9N20qGWedQjPMVCDajmDfnL80l-Zh6yqCWSvSj-lCbeUHFoStTz-YeRnvSuCl6A~BNQRQhYlLyl8QvgXTu2Of8arl~qGAJ4Yovq-o6DjSbJQTWFQIqWammBr58~eai8sCJgVT2t6s7Mt8MQS21l~fW~UNDV2VHmEDM8QmTRfoc1AO9deoKYl-02w__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-34-WEBPAGE-18",
         live : "https://peaceful-hotteok-4f525e.netlify.app/"
      },
      {
        imgUrl : "https://media-hosting.imagekit.io//5df9365c11364446/Webpage-13.png?Expires=1835465568&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1DX2glZE0qpiDIpRBTQQDur4XusR4PH9T7FRhfju8ZTw5H8KSn5gXT7CzvjT~Osz4iTNgbFywe-RTlcsnIZ43piQ0sQkmXeidFkYNhOF7lGeNh8BZLvbF5CH9F4i24uiDcR3IaGMI3BPl~~7dQ5-vmhuz~doVc6t7AovQpUk--hHMBoAEJOdAq06B50GdjppTQx0EdyN2fXHJq068YEsHRFwG1QfYGyh1rw8rcXJRdDsZtVtzIOK4TLXgxYGapGS7eWKDCt9igXFWKm8KTHhgGZ0w2mi3xJyaMBPJuY0mrMy5pucJ66gwqJHxzokf6g8wwQ8QmuHsRFQKHLp1ClGPw__",
         git : "https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/WEBPAGE-10",
         live : "https://jocular-elf-fd9cd4.netlify.app/"
      }
      
])


  return (
    <section className='w-[100%] h-[auto] pb-[3%] bg-[#0C0C0C] flex justify-center items-center'>

    <div className='section w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-full flex flex-wrap justify-center items-center'>

      <div className='w-full h-[40vw]  flex justify-center items-center'>
        <h1 className='text-[8vw] lg:text-[6vw] xl:text-[6vw] text-[#4BFFA5] underline decoration-2 underline-offset-[20px] decoration-[#4BFFA5]'>Projects</h1>
      </div>

      {/* ------------------------- */}

      <hr className='w-[90%] text-[dimgray]' />

      {/* ------------------------- */}

      <div className='w-[90%] h-[auto] mt-[3%] flex justify-between items-center sm:flex sm:justify-around sm:items-center xl:flex xl:justify-around xl:items-center'>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick1} >Websites</button>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick2} >Webpages</button>
          <button className='w-[100px] h-[35px] sm:w-[120px] h-[35px] xl:w-[180px] xl:h-[40px] rounded-[7px] border border-[#4bffa5] text-[#4bffa5] font-semibold hover:bg-[#4bffa5] hover:text-[black] hover:shadow-2xl-[#4bffa5]' onClick={hlClick3} >Projects</button>
      </div>
      
      {/* Website-Section------ */}

      <div id='project' className='w-[90%] h-[auto] mt-[3%] pt-[3%] pb-[3%]' ref={WebsiteSec}  >

        <div className='w-[100%] flex justify-center items-center'>
        <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]' >Websites</h1> 
        </div>

           <br />
          {/* ---------1------------ */}
          <div className='h-[auto] flex flex-col  xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center  p-[3%] gap-4  rounded-[10px]   border border-[dimgray]'>
            
              <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start yoverflow-hidden'>
                <img  src="https://media-hosting.imagekit.io//dffeab900bec4730/Website-1.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=25VEiXjqYjfedwn2KQGc7miFwd~ymE6oBFDrKDcb~ogH3cT11GmWD7rDwGU0Y6wAmKHvHMtX-bIpcB5b2~iIxUBj5hma-P97jw5LfnZepfV06PYN8HZrlrfo66HeDDyBDfK8RPj1DBbpwFk9zz9CXYatMJt2PlhspGVWCXjRv3KIoMUtC36I7C0fphxUSvg3lr07sfdjJOw3wkP27lrXRl3wCRZfXsBmx1yJQbxU0WJ5fYBAOK2mlArok~McThheSsjrAHEfCPNACNTZ16YT9bwuarhfjM-olAvrsxnMpGjgRlcO5iz2WFVNJQmShOhHEfj4Dm6yKEzdeLsUM~24DQ__" id='websiteimg' alt="" className='rounded-[10px]  w-full  hover:transform xl:hover:translate-y-[-72.5%] hover:transition duration-[5s]' />
              </div>
              

              <div className='h-full xl:ps-5 mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
               
                  <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>1. The Souled Store :</h1> <a href="https://github.com/chintanrathod08/The-Souled-Store" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://earnest-salmiakki-cb0d0e.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>

                  <div className='w-full h-[auto] text-[gray] text-[16px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Project is a clone of The Souled Store built using <span className='text-[#4bffa5]'> HTML5, CSS3, Tailwind CSS, and JavaScript.</span> fully responsive I implemented several features, including:</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Category Selection: Men, Women, and Kids clothing </p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Filtering: Top wear, bottom wear, etc.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Sorting Feature: Low to high price selection</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i><span className='text-[#4bffa5]'>CRUD</span> Operations: Create, Read, Update, and Delete functionalities</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Payment Method Integration</p>

                   <p className='mt-[3%]'>    This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options. </p>
                   </div>
              </div>      
          </div>
         
         {/* ---------2------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>
          
          <div className='h-full order-last xl:order-first mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
                   
          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>2. Flipkart :</h1> <a href="https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/JS%20-%20Website%20-%20Flipkart%20-%20Project" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://stellar-semifreddo-0f349c.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>
                  
                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Your project is an e-commerce website similar to Flipkart, built using <span className='text-[#4bffa5]'> HTML5, CSS3, Tailwind CSS, and JavaScript.</span> The key features include:</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Selection: Users can browse and select products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Product Details: Each product has a dedicated details page.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Add to Cart: Users can add items to their cart and manage them.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Purchase Functionality: Users can proceed with purchasing products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i><span className='text-[#4bffa5]'>CRUD</span> Operations: The website allows Create, Read, Update, and Delete operations for products in the cart.</p>

                   <p className='mt-[3%]'>This project successfully replicates the UI and functionality of The Souled Store, providing a smooth shopping experience with various product categories and filtering options. </p>
                   </div>
            </div>      
          
          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
            <img  src="https://media-hosting.imagekit.io//17c96cd6acde4644/Website-2.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DQA2ynQpKu1LZYsPaQc8~Y1LsHgowuXPk6nSnjbl9xA7uQC9lpl2S-A7YwWO7Eboz73sclYQ1k~Lf8ZiNCn1qQb0uCy11ymltp~hLHGrkuo6ZUIL~OekqiscV762DSd1BNHU~-zfdQX1bRLDzoZLgN~Z2IZ1wUrN7ggjJlaS02gsSlXsLmKKjg5py42bbZK4~TUjpnAFS2-6iMp5XY9EkgO0QwDgLTC3AXxK1wIfsL7l7qt18s1KFnQmlcjeWywsQKswfvMUsiGqeevgEElLe9k5zhtAjNpsAOHYQ4nFdgqc3czA1Kk78iPQYTeejoQdN1kCHG2hiiJhNEl57Exnkw__" alt="" id='websiteimg' className='rounded-[10px] w-full hover:transform xl:hover:translate-y-[-64%] hover:transition duration-[3s]' />
          </div>
          </div>
         
         {/* ---------3------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center  p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>
         
          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
          <img  src="https://media-hosting.imagekit.io//27b1802221fc439a/Admian%20Panel.png?Expires=1835458677&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UnN7At5AZzl56xMGsn3xXZJsFkF-4RzL90XPo2R2HlDLLXGF4EqsV0rorvIb-6uOG72MV27WIean7NpjLK9QD0coKcfHm245gxMybOxv4lJh4LR1sNAys8w6oxGNgk9FKAePHnfQbLfDkv2YSFZGbi9Tsvr7H1xs8jcDm2ICOof5Jm-upl4MA0rjErMJRF~oCBwCzF3bPuXhF3einCL3WQuBjpdsi47NcMbsRWScmWOQ4Ta23K7JI0gJys-734gCHdI0zZT4X8pgYZThVxBggf7XrWLhGcVVLpXO~gkuxah6emJpmPIMLZZGIH7L0lcwKb7D7zDTlLz3f-1m1PJ-JQ__" alt="" id='websiteimg' className='rounded-[10px] w-full hover:transform hover:translate-y-[-37%] hover:transition duration-[3s]' />
          </div>
          
          <div className='h-full xl:ps-3 mt-[5%] lg:mt-[0%] xl:mt-[0%]'>
                    
          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>3. Admin Panel :</h1> <a href="https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/ADMIN-PANEL" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://wonderful-douhua-d03947.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>
                  

                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[4%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Admin Panel project is built using <span className='text-[#4bffa5]'>HTML5, CSS3, Media Queries, and jQuery,</span> making it fully responsive for different screen sizes.</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5] font-bold"></i>Key Features:</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Counters (Counter.js) – Animated number counters for key metrics.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Interactive Charts (Graph.js) – Visual representation of revenue, sales, and trends.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Maps (Map.js) – Shows user activity/location data.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Calendar (Calendar.js) – Integrated date picker for scheduling.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>Scroll to Top Button – Smooth scrolling feature for better navigation.</p>

                   <p className='mt-[3%]'>This admin panel provides analytics and insights in an interactive and user-friendly way.</p>
                   </div>
              </div>    

          
          </div>

          {/* ---------4------------ */}
          <div className='h-[auto] flex flex-col xl:grid xl:grid-cols-2 xl:flex xl:justify-center xl:items-center p-[3%] gap-4 h-[500px] mt-[5%]  rounded-[10px] border border-[dimgray]'>

          <div className='h-full xl:pe-2 order-last xl:order-first  mt-[5%] lg:mt-[0%] xl:mt-[0%]'>

          <span className='flex items-center'><h1 className='text-[18px] md:text-[20px] xl:text-[23px] text-[23px] text-[white] underline decoration-2  underline-offset-[10px] decoration-[#4BFFA5]'>4. Addina :</h1> <a href="https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/BOOTSTRAP-PROJECT-COMMERCE-WEBSITE" target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[26px] ms-5"></i></a>  <a href="https://lighthearted-brigadeiros-3a7979.netlify.app/" target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[26px] ms-2"></i></a></span>


                  <div className='w-full h-[auto] text-[gray] text-[14px] mt-[3%]'>              
                  
                  <p><i class="ri-circle-fill text-[14px] text-[#4bffa5]"></i> Addina, static website,  is a furniture store built using <span className='text-[#4bffa5]'>HTML5, CSS3, and Bootstrap,</span> ensuring a fully responsive design across devices.</p>

                   <p className='mt-[2%]'> <i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5] font-bold"></i>Key Features:</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>  Modern UI Design – Showcases sofas and wooden chairs elegantly.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Bootstrap Framework – Ensures a responsive and mobile-friendly layout.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Image Slider – Engaging banner showcasing new arrivals and deals.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Scroll to Top Button – Smooth scrolling for better navigation.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i> Product Selection Option – Allows users to filter or choose products.</p>
                   <p><i class="ri-arrow-right-s-fill text-[22px] text-[#4bffa5]"></i>  FAQs Section – Provides answers to common customer queries.</p>

                   </div>
              </div>    


          <div id='website' className='h-[500px] lg:h-[700px] xl:h-[450px] w-full flex justify-center items-start'>
             <img  src="https://media-hosting.imagekit.io//20c1c3a1851f490c/Website-3.png?Expires=1835458770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nba-uof7gN6Etuh3gLr-XUpGGYVwgFjMLFgtVpRogrTjt8GivCKCVxGTvF2WD5gBOSQRBk9Jis1wXqFmGaX-sR8-oGSgPO3PTSpvvB8cbvspHVqTLWQB-pHWzWPRdcahON9McNM-U5nHOpFn-G28OXkUiBhMDY31zbtWKeLNAMathj663FOfhRZvM8pEaV0v8dZjI0Agp0IixPFgXCYc3dyQSqyMjK1vQ2OXt9TWxwm61c57RKJgxS15I-r~vy3mtKiEbvqIJz0B9VR8khde4TD2LpttSZlAHhp9L-~rasJ0W4gHzyr4KVh5AuEq5qR8J4tfUyjOlM-ETm7F3GJisA__" alt="" id='websiteimg' className='rounded-[10px] w-full hover:transform hover:translate-y-[-79%] hover:transition duration-[5s]' />
          </div>
          </div>
      
      </div>


        <br />




      {/* --------------Webpages-section-------------------- */}

      

      <div className='w-[90%] h-[auto] pt-[3%] pb-[3%] flex flex-wrap justify-center items-center hidden' ref={WebpageSec} > 


      <div className='w-[100%] mt-[3%] flex justify-center items-center'>
      <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]' >Webpages</h1> 
      </div>

      {/* ---------------div-section------------------- */}
      
       <div  className='w-[100%] xl:h-[auto] pt-[3%] pb-[3%] flex flex-col sm:grid sm:grid-cols-2  xl:flex xl:grid xl:grid-cols-3 gap-5'>
        
        

        {
           Project.map((el)=>{
             return(
             <div key={el.id}   className="border border-[dimgray] rounded-[15px] h-[450px] mt-3 text-center p-4 flex flex-wrap justify-center items-center">
              
              <div id='webimg' className='w-[100%] h-[85%] flex justify-center items-start'>
              <img id='img'  src={el.imgUrl} className='w-full' alt="" />
              </div>  

              <div className='w-[100%] h-[5%]  flex justify-center items-center'>
              <a href={el.git} target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[30px]"></i></a>
              <a href={el.live} target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[30px] ms-2"></i></a>
              </div>
              </div>
             );
           }) 
     }
      
      </div>

      </div>

     {/* -----------------Projects-Section----------------- */}

     <div className='w-[80%] h-[auto] mt-[3%] pt-[3%] hidden' ref={ProjectSec}>
        
     <div className='w-[100%] flex justify-center items-center'>
      <h1 className='xl:text-[2.5vw] font-semibold text-[#4BFFA5] [text-shadow:_0_0_2px_#4bffa5] underline decoration-2 underline-offset-[10px] decoration-[white]'>Other Projects</h1> 
      </div>

     {/* -----------div-srction----------------------- */}

        <div className='w-[100%] h-[auto] flex flex-col justify-center items-center mt-[2%] pb-[4%] pt-[3%]'>
            
            <div className='h-[auto] flex flex-col justify-center items-center border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video1} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/JQUERY-PROJECT-SWITCH-THEME-COLOR' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px]"></i></a>
              <a href='https://luxury-gumption-36fa46.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
                  
            </div>
            
            <div className='h-[auto] flex flex-col justify-center items-center mt-[3%] border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video2} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-32%20Project%20-%208' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] lg:text-[25px] md:text-[28px] xl:text-[30px]"></i></a>
              <a href='https://cool-tarsier-049cc3.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
             </div>
            
            <div className='h-[auto] flex flex-col justify-center items-center mt-[3%] border border-[dimgray] p-[2%] pt-[3.5%] ps-[4%] pe-[4%] rounded-[10px]'>
                  <video src={Video3} autoPlay loop muted></video>
                  <div className='w-[100%] flex justify-center items-center pt-2 xl:pt-4'>
                   <a href='https://github.com/chintanrathod08/All-Projects-Webpages/tree/main/DAY-39%20Open%20Weather%20API' target='_blank'><i class="ri-github-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px]"></i></a>
                  <a href='https://verdant-fenglisu-5bd920.netlify.app/' target='_blank'><i class="ri-global-fill text-[#4bffa5] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[30px] ms-2"></i></a>
              </div>
            </div>
        </div>

     </div>

    </div>

    <a href="#project"><i className="ri-arrow-down-s-line  fixed bottom-[25%] right-[6%] text-[3.3vw] text-[#4BFFA5] hidden" id="downarr"></i></a>
     
     

  </section>

  )
}

export default Projects
