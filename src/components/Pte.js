import React from "react";

const Pte = () => {
  const services = [
    {
      id: 1,
      title: "Expert Guidance:",
      description:
        "Sakura Consultancy offers expert guidance specifically tailored to the PTE exam. Their experienced instructors are well-versed in the exam format, scoring criteria, and effective strategies for success. They can provide personalized support to help students improve their English language skills and achieve their desired PTE scores.",
      image:
        "https://media.licdn.com/dms/image/C4D12AQG-Px3B8HZRzg/article-cover_image-shrink_600_2000/0/1520106513499?e=2147483647&v=beta&t=p3rUWI3HlLmWr5oxwCzuwWb_I2z7CEIhu84lBCQklBk",
    },
    {
      id: 2,
      title: "Comprehensive Preparation Materials:",
      description:
        "Sakura Consultancy typically provides comprehensive preparation materials, including practice tests, study guides, and supplementary resources. These materials are designed to familiarize students with the exam structure, enhance their language proficiency, and strengthen their test-taking skills.",
      image:
        "https://www.acteonline.org/wp-content/uploads/2022/01/IntegratedCurriculum_Blue.png",
    },
    {
      id: 3,
      title: "Customized Study Plans:",
      description:
        "Recognizing that each student has unique strengths and areas for improvement, Sakura Consultancy often develops customized study plans tailored to individual learning needs. This personalized approach maximizes the effectiveness of preparation efforts and ensures that students focus on areas where they need the most improvement.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2618/2618575.png",
    },
    {
      id: 4,
      title: "Interactive Learning Environment:",
      description:
        "The consultancy may offer interactive learning environments, such as small group classes or one-on-one sessions, where students can engage with instructors and peers, ask questions, and receive feedback on their progress. This interactive approach fosters active learning and facilitates greater understanding of the material.",
      image:
        "https://www.aspeninstitute.org/wp-content/uploads/2020/08/Coming-Back-to-Climate-Icons-03.png", },
    {
      id: 5,
      title: "Updated Course Content",
      description:
        "The consultancy stays abreast of any updates or changes to the PTE exam format or content. This ensures that their study materials and teaching methodologies remain relevant and up-to-date, maximizing students' chances of success on the exam.",
      image:
        "https://media.istockphoto.com/id/1257231105/vector/content-writing-icon-blue-color.jpg?s=612x612&w=0&k=20&c=t0COpY5_wwGQ1NTSrSshmkMGDSqZLE2VEyeqGE1OKeU=",
    },
    {
      id: 5,
      title: "Timed Practise Session",
      description:
        "To simulate the test environment and build students' confidence, Sakura Consultancy often conducts timed practice sessions. These sessions help students become familiar with the time constraints of the exam and develop effective time management strategies to complete each section within the allotted time.",
      image:
        "https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg",
    },
  ];
  return (
    <>
      <div className="mt-10 h-auto ">
        <div className="lg:h-80 ">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*sjZ2agdDTGWMXmg-.jpg"
            alt=""
            className="lg:h-full lg:w-full  opacity-75"
          />
        </div>
        <div className=" max-w-screen-lg mx-auto lg:p-4 p-8  mb-4">
          <p className="lg:text-lg font-medium italic text-sm mb-4 text-gray-600 leading-relaxed">
            Welcome to Sakura Consultancy, your dedicated partner in mastering
            the PTE exam! As a new establishment, we pride ourselves on offering
            personalized and comprehensive study programs tailored to help you
            achieve your best score. Our expert instructors provide targeted
            strategies, practical tips, and thorough practice sessions, ensuring
            you're fully prepared for every aspect of the test. Join us at
            Sakura Consultancy and take the first step towards your academic and
            professional success with confidence.
          </p>
          <h1 className="text-gray-800 font-bold leading-relaxed text-xl">
            PTE Overview
          </h1>
          <p className="text-gray-600 leading-relaxed w-3/5">
            The Pearson Test of English (PTE) is an internationally recognized
            English language proficiency test designed for non-native English
            speakers. It assesses the English language skills of individuals in
            four key areas: speaking, writing, reading, and listening. PTE
            scores are used for studying abroad, immigration, and professional
            purposes, with many universities, colleges, and governments
            worldwide accepting them as proof of English proficiency.
          </p>

          <div className="flex mt-10">
            <div className="w-1/2   p-4 mr-4  bg-gray-100 rounded-md shadow-md  hover:shadow-lg">
              <h2 className="text-gray-800 font-bold leading-relaxed text-xl">
                Test Format
              </h2>
              <div>
                <h1 className="mt-2 text-lg text-gray-500">
                  <i>Speaking and Writing (77-93 minutes)</i>
                </h1>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed w-3/9 mt-2">
                  <li>
                    <strong>Personal Introduction</strong>: An unscored
                    introduction about yourself.
                  </li>
                  <li>
                    <strong>Read Aloud:</strong> Reading a text aloud.
                  </li>
                  <li>
                    <strong>Repeat Sentence:</strong> Repeating a sentence after
                    hearing it.
                  </li>
                  <li>
                    <strong>Describe Image:</strong> Describing an image shown
                    on the screen.
                  </li>
                  <li>
                    <strong>Re-tell Lecture:</strong> Listening to a lecture and
                    then summarizing it.
                  </li>
                  <li>
                    <strong>Answer Short Question:</strong> Responding to a
                    question with a short answer.
                  </li>
                  <li>
                    <strong>Summarize Written Text:</strong> Writing a
                    one-sentence summary of a given text.
                  </li>
                  <li>
                    <strong>Essay:</strong> Writing a 200-300 word essay on a
                    given topic.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/2">
              <img
                src="https://lexingtonielts.com/wp-content/uploads/2022/03/PTE.jpg"
                alt="Your image"
                className="h-80 w-50 ml-10 object-cover rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="flex mt-10">
            <div className="w-1/2  p-4 mr-4">
              <h1 className="mt-2 text-lg text-gray-500">
                <i>Reading (32-41 minutes)</i>
              </h1>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed w-3/9 mt-2">
                <li>
                  <strong>Reading & Writing</strong>: Fill in the Blanks:
                  Filling in the blanks in a text.
                </li>
                <li>
                  <strong>Multiple Choice, Multiple Answers</strong> Choosing
                  more than one answer from a list..
                </li>
                <li>
                  <strong>Re-order Paragraphs:</strong> Repeating a sentence
                  after hearing it.
                </li>
                <li>
                  <strong>Fill in the blanks:</strong>Completing a text by
                  filling in the blanks.
                </li>
                <li>
                  <strong>Multiple Choice, Single Answer:</strong> Choosing a
                  single correct answer from a list.
                </li>
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
          </div>

          <div className="mt-10">
            <h1 className="text-center text-xl">
              Why <span className="text-textteal font-bold">Study PTE</span> at
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
