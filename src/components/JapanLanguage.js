import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Card } from "flowbite-react";
import Visa from "./Visa";

const Pte = () => {
  const japanese = [
    {
      id: 1,
      title: "Japan Foundation Test(JFT)",
      description:
        "The Japanese Foundation Test (JFT) is an examination administered by the Japan Foundation to assess the Japanese language proficiency of non-native speakers.",
      image:
        "https://www.jpf.go.jp/jft-basic/common/img/index/bnr_icon04.gif",
      route: "/classes/japan/jft", // Add route for JFT
    },
    {
      id: 2,
      title: "Japanese Language Proficiency Test(JLPT)",
      description:
        "The JLPT assesses proficiency levels from N5 (beginner) to N1 (advanced), covering reading, listening, and grammar comprehension.",
      image:
        "https://files.tofugu.com/articles/japanese/2022-07-19-what-is-the-jlpt/header-5120x.jpg",
      route: "/classes/japan/jlpt", // Add route for JLPT
    },
    {
      id: 3,
      title: "JCERT",
      description:
        "The J-Cert (Certificate of Japanese as Foreign language) is a Japanese language proficiency test conducted by the Japan International Human Capital Development Organization.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlilS8OhX4pJXqHS55N1f_RSBxRbY5vfCtz-llymI73k_E_Ycb7iVp2Afaqc0HvlEPX8s&usqp=CAU",
      route: "/classes/japan/jcert", // Add route for JCERT
    },
  ];

  return (
    <>
      <div className="mt-10 h-auto">
        <div className="max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <div className="mt-10">
            <h1 className="text-center text-xl">
              <span className="text-textteal font-bold">Test Preparation</span>{" "}
              at Sakura
            </h1>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
            {japanese.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-50 rounded-lg shadow-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-textteal transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-20 w-20 mx-auto">
                    <img src={service.image} alt="" className="" />
                  </div>
                  <h4 className="mb-4 font-semibold">{service.title}</h4>
                  <p className="text-sm">{service.description}</p>
                </div>
                <Link to={service.route}> 
                  <button className="bg-textteal text-white px-4 py-2 rounded-lg mt-4">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pte;
