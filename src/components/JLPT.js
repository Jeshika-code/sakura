// import React from "react";
// import JLPTSlide from "./JLPTSlide.js";

// const JLPT = () => {
//   return (
//     <>
//       <JLPTSlide />
//       <div className="mt-10 ">
//         <h1 className="text-center text-xl">
//           <span className="text-textteal font-bold mb-4">Levels of </span> JLPT
//         </h1>
//         <div className="text-center">
//           <img
//             src="https://files.tofugu.com/articles/japanese/2022-07-19-what-is-the-jlpt/jlpt-levels.jpg"
//             alt="JLPT"
//             className="mx-auto img-fluid" 
//             style={{ maxWidth: "50%", height: "auto" }}
//           />
//         </div>
//         <div className="table-responsive"> {/* Added Bootstrap class 'table-responsive' */}
//           <table className="mx-auto table lg:w-3/4 mt-5 mb-10 border-collapse border border-black"> {/* Added Bootstrap classes 'table w-100' */}
//             <thead>
//               <tr>
//                 <th className="border border-black p-2">N1 (Advanced)</th>
//                 <th className="border border-black p-2">N2 (Upper Intermediate)</th>
//                 <th className="border border-black p-2">N3 (Intermediate)</th>
//                 <th className="border border-black p-2">N4 (Lower Intermediate)</th>
//                 <th className="border border-black p-2">N5 (Beginner)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-black p-2">
//                   <ul className="list-disc pl-4">
//                     <li>High proficiency level.</li>
//                     <li>Advanced vocabulary and grammar.</li>
//                     <li>Approximate Kanji words: 2,000-2,500.</li>
//                   </ul>
//                 </td>
//                 <td className="border border-black p-2">
//                   <ul className="list-disc pl-4">
//                     <li>Good command of Japanese.</li>
//                     <li>Comprehensive vocabulary and grammar.</li>
//                     <li>Approximate Kanji words: 1,000-1,500.</li>
//                   </ul>
//                 </td>
//                 <td className="border border-black p-2">
//                   <ul className="list-disc pl-4">
//                     <li>Solid intermediate level.</li>
//                     <li>Comprehension of main points in texts and speech.</li>
//                     <li>Approximate Kanji words: 500-800.</li>
//                   </ul>
//                 </td>
//                 <td className="border border-black p-2">
//                   <ul className="list-disc pl-4">
//                     <li>Basic understanding of grammar and vocabulary.</li>
//                     <li>Comprehension of simple information.</li>
//                     <li>Approximate Kanji words: 200-300.</li>
//                   </ul>
//                 </td>
//                 <td className="border border-black p-2">
//                   <ul className="list-disc pl-4">
//                     <li>Lowest proficiency level.</li>
//                     <li>Comprehension of simple written materials</li>
//                     <li>Approximate Kanji words: 100-200.</li>
//                   </ul>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JLPT;
import React from "react";
import JLPTSlide from "./JLPTSlide.js";

const JLPT = () => {
  return (
    <>
      <JLPTSlide />
      <div className="container mt-10"> {/* Wrap content in a Bootstrap container */}
        <h1 className="text-center text-xl">
          <span className="text-textteal font-bold mb-4">Levels of </span> JLPT
        </h1>
        <div className="text-center">
          <img
            src="https://files.tofugu.com/articles/japanese/2022-07-19-what-is-the-jlpt/jlpt-levels.jpg"
            alt="JLPT"
            className="mx-auto img-fluid" 
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </div>
        <div className="table-responsive">
          <table className="table lg:w-3/5 lg:mx-auto mt-5 mb-10 border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black ">N1 (Advanced)</th>
                <th className=" border border-black">N2 (Upper Intermediate)</th>
                <th className=" border border-black">N3 (Intermediate)</th>
                <th className="border border-black ">N4 (Lower Intermediate)</th>
                <th className="border border-black ">N5 (Beginner)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4 lg:w-44 ">
                    <li >High proficiency level.</li>
                    <li>Advanced vocabulary and grammar.</li>
                    <li>Approximate Kanji words: 2,000-2,500.</li>
                  </ul>
                </td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4 lg:w-44">
                    <li>Good command of Japanese.</li>
                    <li>Comprehensive vocabulary and grammar.</li>
                    <li>Approximate Kanji words: 1,000-1,500.</li>
                  </ul>
                </td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4 lg:w-44">
                    <li>Solid intermediate level.</li>
                    <li>Comprehension of main points in texts and speech.</li>
                    <li>Approximate Kanji words: 500-800.</li>
                  </ul>
                </td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4 lg:w-44">
                    <li>Basic understanding of grammar and vocabulary.</li>
                    <li>Comprehension of simple information.</li>
                    <li>Approximate Kanji words: 200-300.</li>
                  </ul>
                </td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4 lg:w-44">
                    <li>Lowest proficiency level.</li>
                    <li>Comprehension of simple written materials</li>
                    <li>Approximate Kanji words: 100-200.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JLPT;
