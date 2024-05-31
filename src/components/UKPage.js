import React from "react";
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";

const UsaPage = () => {
  return (
    <>
    <div className="mx-auto w-11/12 h-80 ">
    <Accordion collapseAll >
      <Accordion.Panel>
        <Accordion.Title> What are the requirements to study in UK?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
          Some of the basic requirements to study in UK are:
          </p>
          <p className="mb-4 ml-4"><span className="text-textteal font-bold"><ul>
            <li className="list-disc	">English Proficieny:</li></ul></span> Since English is the primary language of instruction, you may need to demonstrate proficiency through English language tests such as the IELTS, TOEFL, or Cambridge English exams. The required score may vary depending on the institution and course.</p>
            <p  className="mb-4 ml-4"><span className="text-textteal font-bold"><ul>
            <li className="list-disc	">Admission Tests: </li></ul></span> Some courses or universities may require you to take additional admissions tests, particularly for highly competitive programs. These tests could be subject-specific tests or general aptitude tests like the UKCAT, BMAT, or LNAT.</p>
            <p  className="mb-4 ml-4"><span className="text-textteal font-bold"><ul>
            <li className="list-disc	">Statement of Purpose (SOP): </li></ul></span> Many universities require applicants to submit a personal statement or statement of purpose. This is your opportunity to explain why you're interested in the course, showcase your academic achievements, extracurricular activities, and relevant experiences, and demonstrate your suitability for the program.</p>
            <p  className="mb-4 ml-4"><span className="text-textteal font-bold"><ul>
            <li className="list-disc	">Letters of Recommendation: </li></ul></span>Some universities may ask for letters of recommendation from teachers or other referees who can speak to your academic abilities and character.</p>
            <p  className="mb-4 ml-4"><span className="text-textteal font-bold"><ul>
            <li className="list-disc	">Visa Requirements: </li></ul></span> If you're a non-EEA (European Economic Area) or Swiss national, you'll need to apply for a Tier 4 student visa to study in the UK. This involves providing proof of acceptance onto a course, evidence of funds to cover tuition fees and living expenses, and meeting other visa requirements.</p>
        
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What is the cost of studying in the UK? 
</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The cost of studying in the UK can vary significantly depending on several factors, including the type of institution (public or private), location, program of study, and personal lifestyle choices.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What is the best course to study in the UK?

</Accordion.Title>
        <Accordion.Content>
         
        <p className="mb-4 text-gray-500 dark:text-gray-400">
         <span className="text-textteal font-bold">The best courses to study in UK are:</span> 
          </p>
          <p className="mb-4 ml-4">
           <ul>
            <li className="list-disc	">Computer Science and Information Technology</li></ul>
            <ul>
            <li className="list-disc	">Business and Management</li></ul>
           <ul>
            <li className="list-disc	">Engineering</li></ul>
           <ul>
            <li className="list-disc	">Law and Legal Studies</li></ul>
             </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>How much GPA is required to study in the UK?
</Accordion.Title>
        <Accordion.Content>
         
        <p className="mb-4 text-gray-500 dark:text-gray-400">
        The student requires minimum of 2.6 gpa in Grade 12 for bachelor and 2.4 gpa in bachelor for masters to study in Universities of UK.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    
    </>
  );
};

export default UsaPage;
