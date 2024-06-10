import React from "react";
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";

const UsaPage = () => {
  return (
    <>
      <div className="mx-auto w-11/12 h-80 ">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              What are the requirements to study in Japan?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Some of the basic requirements to study in Japan are:
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Language Proficiency:</li>
                  </ul>
                </span>{" "}
                Depending on the program and institution, you may need to demonstrate proficiency in Japanese or English, often through standardized tests like the Japanese Language Proficiency Test (JLPT).
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Admission to a University or Institution: </li>
                  </ul>
                </span>{" "}
                You need to apply and be accepted by a Japanese university or educational institution.
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Statement of Purpose (SOP): </li>
                  </ul>
                </span>{" "}
                A Statement of Purpose is a personal essay where you articulate
                your academic and career goals, why you're interested in
                studying at a particular institution, and how you envision your
                studies contributing to your future plans. This document helps
                admissions committees understand your motivations and
                aspirations.
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Proof of Funds: </li>
                  </ul>
                </span>
                International students often need to demonstrate that they have
                sufficient funds to cover tuition fees, living expenses, and
                other costs associated with studying in the Japan. This can be
                done through bank statements, scholarship letters, or
                sponsorship letters.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is the cost of studying in the Japan?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The cost of studying in the Japan can vary significantly depending
                on several factors, including the type of institution (public or
                private), location, program of study, and personal lifestyle
                choices.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              What is the best course to study in the Japan?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                <span className="text-textteal font-bold">
                  The best courses to study in Japan are:
                </span>
              </p>
              <p className="mb-4 ml-4">
                <ul>
                  <li className="list-disc	">
                    Cook 
                  </li>
                </ul>
                <ul>
                  <li className="list-disc	">Engineering</li>
                </ul>
                <ul>
                  <li className="list-disc	">Nursing and care</li>
                </ul>
                <ul>
                  <li className="list-disc	">Agriculture</li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
            How much GPA is required to study in the Japan?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
               
                The preferable GPA for international students planning to apply for graduate programs is 3.0 and above in a bachelor’s degree.

For undergraduate students the preferable GPA is above 2.8.
                
              </p>
           
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default UsaPage;
