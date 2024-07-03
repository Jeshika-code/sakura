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
          <div className="max-w-screen-lg mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Why Japan: A Premier Study Destination</h2>
        <ul className="list-disc list-inside text-lg mb-8">
          <li><span className="font-bold">Academic Excellence:</span> Japan offers a diverse range of educational opportunities with over 22,000 courses across various disciplines, ensuring students are well-prepared for the competitive global job market.</li>
          <li><span className="font-bold">Global Influence:</span> With a rich cultural heritage and a strong emphasis on innovation, Japan has produced influential alumni contributing to global advancements.</li>
          <li><span className="font-bold">Supportive Environment:</span> The Japanese government is committed to education, investing significantly in scholarships and support services to facilitate international students' success.</li>
          <li><span className="font-bold">Quality of Life:</span> Boasting vibrant cities and a safe, welcoming environment, Japan consistently receives high satisfaction ratings from international students for their living and study experiences.</li>
          <li><span className="font-bold">Expert Guidance:</span> At Sakura Abroad Studies, our certified and experienced counselors meticulously guide students through every step of their journey, ensuring successful university admissions and visa applications for studying in Japan.</li>
        </ul>
        <p className="text-lg">This version highlights Japan's strengths as a study destination, emphasizing academic opportunities, cultural richness, government support, and the expertise of Sakura Abroad Studies' counselors in facilitating students' educational aspirations in Japan.</p>
      </div>
          <h1 className=' text-center text-2xl'>Discover <span className='text-textteal font-bold'>Japan</span></h1>
          </div>
         
          <JapanPage/>
          <Footer/>
  </div>
 
  </>
  
    
  );
}

export default Home;
