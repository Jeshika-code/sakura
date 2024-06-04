import React from 'react';
import { Carousel } from "flowbite-react";
import Services from './Services';
import Study from './Study';

const carouselItems = [
  {
    imageUrl: "https://www.theedutrust.com/images/student-visa.png",
    title: "Sakura Abroad Consultancy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo sint nemo praesentium quidem. Eligendi dolore maxime quidem cupiditate ad porro fuga quisquam eaque quibusdam commodi animi, vel aliquam error."
  },
  {
    imageUrl: "https://www.admissify.com/blog/wp-content/uploads/2023/03/How-to-Spot-a-Bad-Study-abroad-Consultant-and-Avoid-Them.png",
    title: "Sakura Abroad Consultancy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo sint nemo praesentium quidem. Eligendi dolore maxime quidem cupiditate ad porro fuga quisquam eaque quibusdam commodi animi, vel aliquam error."
  },
  {
    imageUrl: "https://www.theedutrust.com/images/student-visa.png",
    title: "Sakura Abroad Consultancy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo sint nemo praesentium quidem. Eligendi dolore maxime quidem cupiditate ad porro fuga quisquam eaque quibusdam commodi animi, vel aliquam error."
  }
];

const Home = () => {
  return (
    <div className='mt-4 lg:mt-0'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-96 '>
        <Carousel className='w-full mx-auto h-full '>
          {carouselItems.map((item, index) => (
            <div key={index} className="my-20 lg:my-0 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-5 lg:gap-12">
              <div className=''>
                <img src={item.imageUrl} alt="" className="  h-full w-full object-cover top-10" />
              </div>
              <div className='md:w-3/4 lg:h-80 h-96'>
                <h1 className='lg:text-4xl text-xl font-semibold mb-4 md:w-3/4 leading-snug'><span className='text-textteal'>Sakura </span>Abroad Consultancy</h1>
                <p className='lg:text-base text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Services/>
      <Study/>
      
      
    </div>
    
  );
}

export default Home;