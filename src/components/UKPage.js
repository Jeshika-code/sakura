
import React from "react";
import { Accordion } from "flowbite-react";

const UKPage = () => {
  return (
    <>
      <div className="mx-auto w-11/12 max-h-96 overflow-y-auto mb-20">
        <Accordion collapseAll>
          <Accordion.Panel>
          <Accordion.Title className="text-sm lg:text-base">
              {" "}
              What are the requirements to study in UK?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Some of the basic requirements to study in UK are:
              </p>
              <p className="mb-4 ml-4 lg:text-base text-sm text-gray-500 dark:text-gray-400">
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
              <p className="mb-4 ml-4 lg:text-base text-sm text-gray-500 dark:text-gray-400">
                <span className="text-textteal font-bold">
                  <ul>
                    <li className="list-disc	">Admission Tests: </li>
                  </ul>
                </span>{" "}
                Some courses or universities may require you to take additional admissions tests, particularly for highly competitive programs. These tests could be subject-specific tests or general aptitude tests like the UKCAT, BMAT, or LNAT.
              </p>
              <p className="mb-4 ml-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
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
              <p className="mb-4 ml-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
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
          <Accordion.Title className="text-sm lg:text-base">
              What is the cost of studying in UK?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                The cost of studying in the UK can vary significantly depending
                on several factors, including the type of institution (public or
                private), location, program of study, and personal lifestyle
                choices.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
          <Accordion.Title className="text-sm lg:text-base">
              What is the best course to study in  UK?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                <span className="text-textteal font-bold">
                  The best courses to study in UK are:
                </span>
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm lg:text-base">
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
            <Accordion.Title className="text-sm lg:text-base">
            How much GPA is required to study in the UK?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-4 text-gray-500 dark:text-gray-400 text-sm lg:text-base">
               
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

export default UKPage;
