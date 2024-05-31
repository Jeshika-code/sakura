import React from "react";

const Pte = () => {
  const services = [
    {
      id: 1,
      title: "Experienced Instructors",
      description:
        "Sakura Consultancy employs teachers who are well-versed in IELTS preparation. They have experience working with students from diverse backgrounds and understand the nuances of the test.",
      image:
        "https://media.licdn.com/dms/image/C4D12AQG-Px3B8HZRzg/article-cover_image-shrink_600_2000/0/1520106513499?e=2147483647&v=beta&t=p3rUWI3HlLmWr5oxwCzuwWb_I2z7CEIhu84lBCQklBk",
    },
    {
      id: 2,
      title: "Personalized Guidance",
      description:
        "Recognizing that each student has unique strengths and weaknesses, Sakura Consultancy creates customized study plans to address individual needs. This ensures that students receive targeted support where they need it most.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2618/2618575.png",
    },
    {
      id: 3,
      title: "Comprehensive Curriculum",
      description:
        "The consultancy offers a thorough curriculum that covers all aspects of the IELTS test: listening, reading, writing, and speaking. This ensures that students are well-prepared for every section of the exam.",
      image:
        "https://www.acteonline.org/wp-content/uploads/2022/01/IntegratedCurriculum_Blue.png",
    },
    {
      id: 4,
      title: "Abundant Resources",
      description:
        " Sakura Consultancy provides students with access to a wide range of practice materials, including sample questions, practice tests, and study guides. These resources help students familiarize themselves with the test format and improve their skills.",
      image:
        "https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg",
    },
    {
      id: 5,
      title: "Regular Mock Tests",
      description:
        "Mock tests are an essential part of IELTS preparation, and Sakura Consultancy conducts them regularly. These simulated exams allow students to assess their progress, identify areas for improvement, and build confidence in their abilities.",
      image:
        "https://thumbs.dreamstime.com/b/online-test-icon-200277141.jpg",
    },
    {
      id: 5,
      title: "Goal-Oriented Training",
      description:
        "Sakura Consultancy's training is focused on helping students achieve their specific objectives, whether it's gaining admission to a university, obtaining a professional certification, or immigrating to an English-speaking country. The consultancy's instructors work closely with students to ensure that their preparation aligns with their goals.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvO290WTFvRZQXrhOXeJpKi2d0eekcvByYdoY93BGv7FwFdLW8m-osokDIDRf53uK9K4&usqp=CAU",
    },
  ];
  return (
    <>
      <div className="mt-10 h-auto ">
        <div className="lg:h-80 ">
          <img
            src="https://leapscholar.com/blog/wp-content/uploads/2021/10/shutterstock_1824041432-min-1024x576.png"
            alt=""
            className="lg:h-full lg:w-full  opacity-75"
          />
        </div>
        <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
            Welcome to Sakura Consultancy, your dedicated partner in mastering
            the IELTS exam!Studying IELTS at Sakura Consultancy offers a comprehensive and personalized approach to mastering the English language. With experienced instructors, tailored study plans, and a wealth of resources, students can focus on their specific needs, whether it’s enhancing their speaking skills, improving their writing, or boosting their listening and reading comprehension. The supportive learning environment and regular practice tests ensure that each student is well-prepared and confident to achieve their desired IELTS score. Sakura Consultancy is committed to helping students succeed in their IELTS exam and reach their academic and professional goals.
          </p>
          <h1 className="text-gray-800 font-bold leading-relaxed text-xl">
            IELTS Overview
          </h1>
          <p className="text-gray-600 leading-relaxed w-full">
          The International English Language Testing System (IELTS) is a globally recognized English language proficiency test designed for non-native speakers. It assesses four key language skills: listening, reading, writing, and speaking. IELTS is widely accepted by universities, employers, immigration authorities, and professional bodies across English-speaking countries. The test is available in two formats: Academic, for those pursuing higher education or professional registration, and General Training, for those seeking work experience or immigration purposes. With a scoring system ranging from 0 to 9, IELTS provides a reliable and valid measure of English language ability, helping individuals achieve their academic, career, and migration aspirations.
          </p>

          {/* <div className="flex mt-10">
            <div className="w-1/2   p-4 mr-4  bg-gray-100 rounded-md shadow-md  hover:shadow-lg">
              <h2 className="text-gray-800 font-bold leading-relaxed text-xl">
                Test Format
              </h2>
              <div>
                <h1 className="mt-2 text-lg text-gray-500">
                  <i>Listening (30 Minutes)</i>
                </h1>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed w-3/9 mt-2">
                  <li>
                  Multiple Choice 
                  </li>
                  <li>
                  Matching
                  </li>
                  <li>
                  Plan/Map/Diagram Labeling
                  </li>
                  <li>
                  Form/Narrative/Note/Flowchart/Summary Completion
                  </li>
                  <li>
                  Sentence Completion
                  </li>
                  <li>
                  Short-answer questions
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-3/9">
              <img
                src="https://www.iquanta.in/blog/wp-content/uploads/2023/01/ielts-exam-section-1024x1024.jpeg"
                alt="Your image"
                className="h-full w-50 ml-10 object-cover rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="flex mt-10">
            <div className="w-1/2  p-4 mr-4">
              <h1 className="mt-2 text-lg text-gray-500">
                <i>Reading (60 minutes)</i>
              </h1>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed w-3/9 mt-2">
                <li>
                Identifying information 
                </li>
                <li>
                  Multiple Choice
                </li>
                <li>
                Identifying writer’s views/claims 
                </li>
                <li>
                Matching information,headings,features and sentence endings
                </li>
                <li>Short-answer questions</li>
                <li>
                Sentence completion
                </li>
                <li>Diagram label completion</li>
                <li>Summary/note/table/flow-chart completion</li>
              </ul>
            </div>

            <div className="w-1/2 ml-5  p-4 mr-4  bg-gray-100 rounded-md shadow-md hover:shadow-lg">
              <h1 className="mt-2 text-lg text-gray-500">
                <i>Listening (45-57 minutes)</i>
              </h1>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed w-3/9 mt-2">
                <li>
                  <strong>Summarize Spoken Text:</strong>Writing a summary after
                  listening to a recording.
                </li>
                <li>
                  <strong>Multiple Choice, Multiple Answers:</strong> Selecting
                  multiple correct answers based on a recording.
                </li>
                <li>
                  <strong>Highlight Correct Summary</strong>Selecting the
                  summary that matches a recording.{" "}
                </li>
                <li>
                  <strong>Multiple Choice, Single Answer:</strong> Choosing a
                  single correct answer based on a recording
                </li>
                <li>
                  <strong>Select Missing Word:</strong> Identifying the missing
                  word in a recording
                </li>
                <li>
                  <strong>Highlight Incorrect Words:</strong>Finding the
                  incorrect words in a transcript.
                </li>
                <li>
                  <strong>Write from Dictation:</strong> Writing down a sentence
                  after hearing it.
                </li>
              </ul>
            </div>
          </div> */}

          <div className="mt-10">
            <h1 className="text-center text-xl">
              Why <span className="text-textteal font-bold">Study IELTS</span> at
              Sakura?
            </h1>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  ">
            {services.map((service) => (
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
      </div>
    </>
  );
};

export default Pte;
