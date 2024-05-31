import React from "react";
import { Carousel } from "flowbite-react";

const JLPTSlide = () => {
  return (
    <div className="bg-ewhite   p-4 h-auto ">
      <div className="grid grid-cols-1  gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="lg:h-auto h-64 ">
          <Carousel>
            <img
              className="object-cover w-full h-full"
              src="https://www.jpf.go.jp/jft-basic/common/img/index/bnr_icon04.gif"
              alt="Study in Japan"
            />
            <img
              className="object-cover w-full h-full"
              src="https://i0.wp.com/english.khabarhub.com/wp-content/uploads/2019/08/nepal-japan.jpg?fit=720%2C424&ssl=1"
              alt="jft"
            />
           
          </Carousel>
        </div>
        <div className="p-4">
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold mb-8">
           Japanese <span className="text-textteal">Foundation</span> Test
          </h2>
          <p className="mb-4">
          The Japanese Foundation Test assesses the Japanese language proficiency of non-native speakers.
          It's often used by Japanese language schools and educational institutions to evaluate students' proficiency levels and place them in appropriate classes.
          </p>
         
          <p className="mb-4">
          The Japanese Foundation Test is administered by the Japan Foundation and is held multiple times throughout the year at designated test centers in various countries.Test takers register for the exam and take it at designated test centers on the specified test date.
          </p>
          <p className="mb-4">Test takers receive a score report indicating their performance in each section and their overall score.
</p>
       
        </div>
      </div>
    </div>
  );
};

export default JLPTSlide;
