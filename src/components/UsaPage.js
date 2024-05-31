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
              What are the requirements to study in USA?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Some of the basic requirements to study in USA are:
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">English Proficieny:</li>
                  </ul>
                </span>{" "}
                Demonstrating proficiency in English is crucial as it's the
                primary language of instruction. This requirement is often met
                through standardized tests like TOEFL or IELTS, or sometimes
                through the university's own English proficiency exams.
              </p>
              <p className="mb-4 ml-4">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Admission Tests: </li>
                  </ul>
                </span>{" "}
                Many universities require standardized test scores such as the
                SAT for undergraduate studies or the GRE/GMAT for graduate
                studies. These tests assess your academic readiness and are used
                by admissions committees to evaluate applicants.
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
                other costs associated with studying in the USA. This can be
                done through bank statements, scholarship letters, or
                sponsorship letters.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is the cost of studying in the USA?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The cost of studying in the USA can vary significantly depending
                on several factors, including the type of institution (public or
                private), location, program of study, and personal lifestyle
                choices.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              What is the best course to study in the USA?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                <span className="text-textteal font-bold">
                  The best courses to study in USA are:
                </span>
              </p>
              <p className="mb-4 ml-4">
                <ul>
                  <li className="list-disc	">
                    Computer Science and Information Technology
                  </li>
                </ul>
                <ul>
                  <li className="list-disc	">Business and Management</li>
                </ul>
                <ul>
                  <li className="list-disc	">Engineering</li>
                </ul>
                <ul>
                  <li className="list-disc	">Law and Legal Studies</li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
            How much GPA is required to study in the USA?
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
