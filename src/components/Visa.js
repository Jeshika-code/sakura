import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAutocompleteUtilityClass } from '@mui/material';
const Visa = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    const visa=[
        {name:"Student Visa",
            image:'https://static.vecteezy.com/system/resources/previews/019/100/995/non_2x/graduation-avatar-graduate-scholar-abstract-flat-color-icon-template-free-vector.jpg',
            
        },
        {name:"Engineering Visa",
        image:'https://i.pinimg.com/1200x/8c/1d/a8/8c1da8d077761baf8edc49d30098ca12.jpg',
        
    },
        {name:"SSW Visa",
        image:'https://seasonalworkvisa.com/wp-content/uploads/2024/01/Japan-Specified-Skilled-Worker-Program-780x470.webp',
          },
   
{name:"Cook Visa",
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHudy4Sqo7iYaRV6XbcjBm6yumidktr2CeyCznQ22e3J9OzdFdWjF3iDUeaxGN0VF8VGo&usqp=CAU',

},
{name:"Training Visa",
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnVt6tDwf3pqxvoBulL-vft_z7IngiF-v_tGmVIaLUREOUmtOrsa7aUIectCcTBwNQoI&usqp=CAU',

},
{name:"IKUSEIS Visa",
image:'https://cdn-icons-png.flaticon.com/256/6857/6857561.png',

},

    ]
  return (
    <div className="lg:w-1/2 w-3/4 m-auto h-full mb-10">
          <div className="mt-20">
            <h1  className="text-center text-2xl mb-10"> What We <span className='text-textteal font-bold'>Offer </span> at Sakura</h1>
            <Slider {...settings}>
            {visa.map((d)=>(
                <div className='bg-white h-[400px] text-black rounded-xl'>
                    <div className='h-56 rounded-t-xl bg-gray-100 flex justify-center items-center'>
                        <img src={d.image} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className='text-xl font-semibold '>{d.name}</p>
                       
                    </div>
                </div>
            ))}
             </Slider>
          </div>
        </div>
  )
}

export default Visa