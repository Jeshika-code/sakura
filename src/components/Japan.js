import React from "react";

import { Card } from "flowbite-react";
import Visa from "./Visa";
import JapanLanguage from "./JapanLanguage.js"
const Japan = () => {
  const japanese = [
    {
      id: 1,
      title: "Expert Instruction:",
      description:
        "Benefit from experienced instructors who are either native Japanese speakers or possess advanced proficiency, ensuring high-quality teaching and personalized guidance.",
      image:
        "https://media.licdn.com/dms/image/C4D12AQG-Px3B8HZRzg/article-cover_image-shrink_600_2000/0/1520106513499?e=2147483647&v=beta&t=p3rUWI3HlLmWr5oxwCzuwWb_I2z7CEIhu84lBCQklBk",
    },
    {
      id: 2,
      title: "Comprehensive Curriculum",
      description:
        "Access a well-structured curriculum covering all aspects of the Japanese language, including grammar, vocabulary, reading, writing, listening, and speaking skills",
      image:
        "https://www.acteonline.org/wp-content/uploads/2022/01/IntegratedCurriculum_Blue.png",
    },
    {
      id: 3,
      title: "Tailored Learning Approach",
      description:
        " Experience personalized learning tailored to your individual needs and goals, whether you're a beginner starting from scratch or an advanced learner aiming to refine your skills.",
      image:
        "https://cdn-icons-png.freepik.com/256/3212/3212202.png?semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Preparation for Proficiency",
      description:
        "Prepare for proficiency exams such as the JLPT (Japanese Language Proficiency Test) with tailored exam preparation courses designed to maximize your chances of success.",
      image:
        "https://www.aspeninstitute.org/wp-content/uploads/2020/08/Coming-Back-to-Climate-Icons-03.png", },
   
    {
      id: 5,
      title: "Supportive Community",
      description:
        "Join a supportive community of fellow learners who share your passion for Japanese language and culture, providing opportunities for collaboration, practice, and mutual encouragement.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kU-aNUbAXFB9d_l6JqKMnELgfw-oE5ax38o9s3RIM_GaW0SRVqMKHPMXxu_PeHWOHpg&usqp=CAU",
    },
    
  ];
  return (
    <>
      <div className="mt-10 h-auto">
        <div className="lg:h-80 ">
          <img
            src="https://afar.brightspotcdn.com/dims4/default/b69afb0/2147483647/strip/true/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg"
            alt=""
            className="lg:h-full lg:w-full"
          />
        </div>
        <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
          At Sakura Consultancy, the Japanese language class offers a dynamic and comprehensive approach to mastering the intricacies of the Japanese language. Led by expert instructors who are native speakers or possess advanced proficiency, the class covers everything from basic grammar and vocabulary to advanced conversation skills. Through a combination of interactive exercises, immersive activities, and personalized feedback, students rapidly develop their reading, writing, listening, and speaking abilities. With a focus on real-life communication scenarios and cultural context, learners not only acquire language proficiency but also gain a deeper understanding of Japanese society and customs. Whether aiming for proficiency exams, business communication, or simply personal enrichment, the Japanese language class at Sakura Consultancy equips students with the skills and confidence to navigate the Japanese-speaking world with ease and fluency.
          </p>
         
      
          <div className="mt-10">
            <h1 className="text-center text-xl">
              Why <span className="text-textteal font-bold">Study Japanese</span> at
              Sakura?
            </h1>
          </div>

          <div className=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  ">
            {japanese.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8  text-center md:w-[300px] mx-auto md:h-50 rounded-lg shadow-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-textteal transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="h-20 w-20 mx-auto ">
                    <img src={service.image} alt="" className="" />
                  </div>
                  <h4 className="mb-4 font-semibold ">{service.title}</h4>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
              
          </div>
        </div>

        <Visa/>
       <JapanLanguage/>
        
      </div>
    </>
  );
};

export default Japan;
