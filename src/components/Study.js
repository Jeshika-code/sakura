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
            

Choosing the right study destination for abroad studies involves careful consideration of several key factors. Each country offers unique advantages, making it crucial to tailor your choice to your academic goals, career aspirations, and personal preferences.
          </p>
          <p className="mb-4">
          For those seeking a tuition-free or low-cost option, Germany provides an excellent choice with many programs taught in English, alongside opportunities for practical internships and job placements. Finally, Japan combines advanced technology with cultural richness, offering scholarships and programs in English while providing a unique cultural experience.
          </p>
          <p>
          The United States is renowned for its diverse range of universities and programs across various fields, providing extensive research opportunities and a vibrant campus life. Meanwhile, the United Kingdom stands out for its prestigious institutions steeped in academic tradition, offering shorter duration courses and a multicultural environment conducive to global networking.
          </p>
          <p className="mt-4">
          Canada is known for its welcoming atmosphere and high-quality education system, with affordable tuition fees and opportunities for post-graduation work permits. Australia attracts students with its laid-back lifestyle, excellent quality of life, and strong emphasis on research and innovation in a flexible academic environment.
          </p>
          <p className="mt-4">
          Each of these destinations presents distinct opportunities and challenges. Understanding these factors will help you make an informed decision that aligns with your educational ambitions and personal growth aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Study;
