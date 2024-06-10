import React from 'react';
import { Carousel } from "flowbite-react";
import UKPage from "./UKPage.js"
import Footer from './Footer.js';
const Home = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true} interval={3000}>
      
     
      <img src="https://www.jeduka.com/storage/newsletter/1599289297_STUDY_IN_UK.jpg" alt="..." />
      
      <img src="https://www.idp.com/medias/UK-Banner.jpg?context=bWFzdGVyfHJvb3R8NjI2NTN8aW1hZ2UvanBlZ3xhRGhpTDJobE1DOHhNVFkyTlRNME1EazFOamN3TWk5VlN5MUNZVzV1WlhJdWFuQm58NTc2ODQ1MGFkNjY4OThhNDBkOTRkZDJkOWFkOGNmZDk0MDQ0ODg4ZjI4NTc2N2ZhZDAyMmM3Nzk2ODQzNmIzNQ" alt="..." />
      <img src="https://production-azent-website-cms-uploads.s3.ap-south-1.amazonaws.com/large_Study_Abroad_in_UK_Top_Universities_to_Study_Abroad_1293ec4f0e.jpg" alt="..." />
      
    </Carousel>
    <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
          Studying in the UK offers a blend of academic prestige, cultural diversity, and historical richness. Renowned for its world-class universities and innovative research opportunities, the UK provides students with a stimulating academic environment and access to esteemed faculty members.

          <p>With a reputation for excellence in various fields, including arts, sciences, and business, studying in the UK opens doors to diverse career opportunities and global connections. Whether exploring historic cities, participating in lively debates, or forging lifelong friendships, studying in the UK promises an enriching and memorable experience of personal and academic growth.</p>
          </p>
          <h1 className=' text-center text-2xl'>Discover <span className='text-textteal font-bold'>UK</span></h1>
          </div>
          <UKPage/>
          <Footer/>
  </div>
    
  );
}

export default Home;
