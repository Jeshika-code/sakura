import React from 'react';
import { Carousel } from "flowbite-react";
import CanadaPage from "./CanadaPage.js"
import Footer from './Footer.js';
const Home = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true} interval={3000}>
      
      <img src="https://canapprove.ae/wp-content/uploads/2023/09/Why-Choose-Canada-1.webp" alt="..." />
      <img src="https://www.edgeip.com/images/FCK/Image/202206/SFG-AboutCanada-HowToStudyinCanada.jpg" alt="..." />
      <img src="https://canapprove.ae/wp-content/uploads/2023/09/Why-Choose-Canada-1.webp" alt="..." />
      <img src="https://www.edgeip.com/images/FCK/Image/202206/SFG-AboutCanada-HowToStudyinCanada.jpg" alt="..." />
      
    </Carousel>
    <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
          Studying in Canada offers a rich tapestry of academic excellence, cultural diversity, and breathtaking natural beauty. Renowned for its world-class universities and colleges, Canada provides students with a supportive and inclusive learning environment that fosters innovation and critical thinking. From the vibrant cityscapes of Toronto and Vancouver to the serene landscapes of the Canadian Rockies, students have the opportunity to explore a vast array of academic programs and research opportunities.
         
          </p>
          <h1 className=' text-center text-2xl'>Discover <span className='text-textteal font-bold'>Canada</span></h1>
          </div>
          <CanadaPage/>
         <Footer/>
  </div>
    
  );
}

export default Home;
