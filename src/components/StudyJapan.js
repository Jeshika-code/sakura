import React from 'react';
import { Carousel } from "flowbite-react";
import JapanPage from "./JapanPage.js"
import Footer from './Footer.js';
import studyjapan1 from '../images/studyjapan1.jpg'
import studyjapan3 from "../images/studyjapan3.png"
import studyjapan4 from "../images/studyjapan4.jpg"
const Home = () => {
  return (
   <>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true} interval={3000}>
      
      <img src={studyjapan1} alt="..." />
      <img src="https://www.icla.ygu.ac.jp/wp-content/uploads/2021/07/AdobeStock_262128427-1024x469.jpeg.webp" alt="..." />
      <img src={studyjapan3} alt="..." />
      <img src={studyjapan4}alt="..." />
    </Carousel>
    <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
          Renowned for its world-class universities and pioneering research opportunities, Japan beckons students with a diverse array of academic disciplines, from technology and engineering to arts and humanities.
         
          </p>
          <h1 className=' text-center text-2xl'>Discover <span className='text-textteal font-bold'>Japan</span></h1>
          </div>
          <JapanPage/>
          <Footer/>
  </div>
 
  </>
  
    
  );
}

export default Home;
