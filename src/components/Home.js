
import React from 'react';
import { Carousel } from "flowbite-react";
import Services from './Services';
import Study from './Study';
import Footer from './Footer';
import OfficeBranches from './Officebranches';

import home1 from "../images/home1.png";
// import home2 from "../images/home2.jpg";

import japan1 from "../images/japan1.jpg"
// import japan5 from "../images/japan5.jpg"


// import japan2 from "../images/japan2.jpg"
// import japan3 from "../images/japan3.jpg"
// import japan4 from "../images/japan4.jpg"
import flag from "../images/flag.jpg"

const carouselItems = [
  {
    imageUrl:flag,
    title: "Sakura Abroad Consultancy",
    description: "Welcome to Sakura Abroad, where we make your study abroad DREAM a REALITY with our Trusted Study Abroad Consultants. We understand that studying abroad can be overwhelming. That's why we offer personalized support to guide students through every step of the process, from choosing a destination to obtaining a visa."
  },
  { 
    imageUrl:home1,
    title: "Sakura Abroad Consultancy",
    description: "From cherry blossoms to global classrooms -- Sakura Abroad Study makes it possible."
  },
  {
    imageUrl: japan1,
    title: "Sakura Abroad Consultancy",
    description: "Your passport to global education. Empowering students to pursue academic excellence across borders with personalized guidance and unwavering support."
  }
];

const Home = () => {
  return (
    
    <div>
      
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-96 mb-150'>
       
        <Carousel className='w-full mx-auto h-full mb-4'>
          {carouselItems.map((item, index) => (
            <div key={index} className="my-20 lg:my-0 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between lg:gap-12">
              <div className=''>
                <img src={item.imageUrl} alt="" className="h-full w-full object-cover top-10" />
              </div>
              <div className='md:w-3/4 lg:h-80 h-96'>
                <h1 className='lg:text-4xl text-xl font-semibold mb-4 md:w-3/4 leading-snug ml-10'><span className='text-textteal'>Sakura </span>Abroad Study and Training Center</h1>
                <p className='lg:text-base text-sm ml-10'>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Services />
      <OfficeBranches />
      <Study />
      <Footer />
    </div>
  );
}

export default Home;






