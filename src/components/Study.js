import React from "react";
import { Carousel } from "flowbite-react";
const Study=()=>{
    return(
        <>
  
    <div className="bg-ewhite">
     <div className="grid h-50  mb-10 ml-20 grid-cols-1 lg:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="">
      <img className="object-cover w-full h-full"src="https://www.sopanglobal.edu.np/dist/images/study-in-japan.png" alt="..." />
        <img src="https://www.go.study/assets/uk/study-in-uk.jpg" alt="..." />
        <img className="h-full w-full object-cover"src="https://www.joinincampus.com/storage/newsletter/1606541420_Study_in_USA.jpg" alt="..." />
        <img src="https://www.sangenbd.com/images/study-in-canada-from-bangladesh.jpg" alt="..." />
       </Carousel>
      <div >
        <h2 className='mt-4 lg:text-3xl text-2xl mr-20 font-semibold mb-8'>Study <span className="text-textteal ">Destinations</span> for You </h2>
        <p className='mb-4'>Discover which Top Destinations are PERFECT for You to Actually Make Your Dreams a Reality. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolore, minima perspiciatis illo labore vero suscipit quos voluptatem debitis, eligendi id, explicabo quod. Sint, nisi officia id praesentium fuga incidunt.</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est vero beatae accusantium hic quod accusamus iste maxime provident porro quidem, dolore, fuga rerum omnis eum odit assumenda quae excepturi. Nesciunt.</p>
        <p>Discover which Top Destinations are PERFECT for You to Actually Make Your Dreams a Reality. Lorem ipsum dolor sit amet </p>
    </div>
      </div>
    </div>
        </>
    )
}
export default Study