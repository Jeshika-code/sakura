import React from 'react';
import { Carousel } from "flowbite-react";
import UsaPage from "./UsaPage"
import Footer from './Footer';
import studyusa1 from "../images/studyusa1.jpg"
import studyusa2 from "../images/studyusa2.jpg"
import studyusa3 from "../images/studyusa3.jpg"
const StudyUsa = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true} interval={3000}>
      
      <img src={studyusa1} alt="..." />
      <img src={studyusa2} alt="..." />
      <img src={studyusa3} alt="..." />
      <img src="https://edwisefoundation.com/wp-content/uploads/2021/02/USA-study-guide-for-Nepalese-students.jpg.webp" alt="..." />
    </Carousel>
    <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
          Studying in the USA for higher education offers a plethora of compelling reasons. Firstly, American universities are renowned for their academic excellence and world-class faculty, providing students with top-notch education and research opportunities across various fields. The diverse range of programs and majors allows students to tailor their education to their interests and career aspirations.

          <p>The USA is also a hub for innovation and entrepreneurship, providing students with access to cutting-edge technology, industry partnerships, and startup ecosystems. This environment encourages creativity, critical thinking, and problem-solving skills, preparing students to thrive in dynamic and competitive professional landscapes.</p>
          </p>
          <h1 className=' text-center text-2xl'>Discover <span className='text-textteal font-bold'>USA</span></h1>
          </div>
          <UsaPage/>
          <Footer/>
  </div>
    
  );
}

export default StudyUsa;
