import React from "react";
import { Carousel } from "flowbite-react";

const Study = () => {
  return (
    <div className="bg-ewhite  lg:mx-auto  mt-20  p-4 h-auto ">
      <div className="grid grid-cols-1  gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="lg:h-auto h-64 ">
          <Carousel >
            <img
              className="object-cover w-full h-full"
              src="https://www.sopanglobal.edu.np/dist/images/study-in-japan.png"
              alt="Study in Japan"
            />
            <img
              className="object-cover w-full h-full"
              src="https://www.go.study/assets/uk/study-in-uk.jpg"
              alt="Study in UK"
            />
            <img
              className="object-cover w-full h-full"
              src="https://www.joinincampus.com/storage/newsletter/1606541420_Study_in_USA.jpg"
              alt="Study in USA"
            />
            <img
              className="object-cover w-full h-full"
              src="https://www.sangenbd.com/images/study-in-canada-from-bangladesh.jpg"
              alt="Study in Canada"
            />
          </Carousel>
        </div>
        <div className="p-4">
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold mb-8">
            Study <span className="text-textteal">Destinations</span> for You
          </h2>
          <p className="mb-4">
            Discover which Top Destinations are PERFECT for You to Actually Make
            Your Dreams a Reality. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rem dolore, minima perspiciatis illo labore vero
            suscipit quos voluptatem debitis, eligendi id, explicabo quod. Sint,
            nisi officia id praesentium fuga incidunt.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est vero
            beatae accusantium hic quod accusamus iste maxime provident porro
            quidem, dolore, fuga rerum omnis eum odit assumenda quae excepturi.
            Nesciunt.
          </p>
          <p>
            Discover which Top Destinations are PERFECT for You to Actually Make
            Your Dreams a Reality. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Study;
