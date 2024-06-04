import React from "react";
import { Carousel } from "flowbite-react";

const JCERTSlide = () => {
  return (
    <div className="bg-ewhite   p-4 h-auto ">
      <div className="grid grid-cols-1  gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="lg:h-auto h-64 ">
          <Carousel>
            <img
              className="object-cover w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspVZQV3oWkuMpW1_adICyteXhji_EGVBR3w&s"
              alt="Study in Japan"
            />
            <img
              className="object-cover w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGACScNPBXhFNi37qniFaDIznVdnnHMmwhqQ&s"
              alt="Study in UK"
            />
           
          </Carousel>
        </div>
        <div className="p-4">
          <h2 className="mt-4 text-xl lg:text-3xl font-semibold mb-8">
           Japanese <span className="text-textteal">CERT</span> Test
          </h2>
          <p className="mb-4 text-sm">
          The Japanese Language Proficiency Test (JLPT) is a standardized test that evaluates and certifies the Japanese language proficiency of non-native speakers. It's one of the most widely recognized assessments for Japanese language learners worldwide. The test is administered by the Japan Foundation and Japan Educational Exchanges and Services.

          </p>
          <p className="mb-4 text-sm">
           
The JLPT assesses proficiency levels from N5 (the most basic) to N1 (the most advanced). Each level tests reading, listening, and grammar comprehension skills. Passing the JLPT can be advantageous for individuals seeking employment, educational opportunities, or cultural exchange programs in Japan. It's a valuable credential that is often required or preferred by employers and educational institutions.
          </p>
          <p className="mb-4 text-sm">
          The JLPT is administered twice a year, usually in July and December, at test centers worldwide.Test takers register for the exam and take it at designated test centers on the specified test date.
          </p>
          <p className="mb-4 text-sm">Test takers receive a score report indicating their performance in each section and their overall score.Those who achieve a passing score receive a certificate of proficiency from the Japan Foundation and the Japan Educational Exchanges and Services.
</p>
       
        </div>
      </div>
    </div>
  );
};

export default JCERTSlide;
