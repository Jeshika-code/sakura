// import React from "react";
// import JFTSlide from "./JFTSlide.js";

// const JLPT = () => {
//   return (
//     <>
//       <JFTSlide />
//       <div className="mt-10">
//         <h1 className="text-center text-xl">
//           <span className="text-textteal lg:text-2xl font-bold mb-4">Question related to </span> JFT
//         </h1>
       
//         <table className="mx-auto mt-10 w-3/4 mb-10 border-collapse border border-black">
       
//         <tbody>
//           <tr>
//             <td className="border border-black p-2 text-textteal font-bold italic">Eligibility</td>
//             <td className="border border-black p-2">
//             <ul className="list-disc pl-4">
//                   <li>Japanese Nationality are not eligible for this test.</li>
//                   <li>Only those whose native language is not jaapanese can take this test.</li>
                 
//                 </ul>
//             </td>
//           </tr>
//           <tr>
//             <td className="border border-black p-2 text-textteal font-bold italic">Total Questions</td>
//             <td className="border border-black p-2">Approximately 50 questions
// </td>
//           </tr>
//           <tr>
//             <td className="border border-black p-2 text-textteal font-bold italic">Implementation Format</td>
//             <td className="border border-black p-2">
//                 <ul className="list-disc pl-4">
//                     <li>letters and vocabulary</li>
// <li>conversation and expression</li>
// <li>listening comprehension</li>
// <li>reading comprehension</li>
//                 </ul>
//             </td>
//           </tr>
         
//           <tr>
//             <td className="border border-black p-2 text-textteal font-bold italic">Test Time</td>
//             <td className="border border-black p-2">60 min</td>
//           </tr>
        
//         </tbody>
//       </table>
//       </div>
//     </>
//   );
// };

// export default JLPT;
import React from "react";
import JFTSlide from "./JFTSlide.js";

const JFT = () => {
  return (
    <>
      <JFTSlide />
      <div className="container mt-10 mx-auto">
        <h1 className="text-center text-xl lg:text-2xl">
          <span className="text-textteal font-bold mb-4">Question related to </span> JFT
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full lg:w-4/5 mt-10 mx-auto mb-10 border-collapse border border-black">
            <tbody>
              <tr>
                <td className="border border-black p-2 text-textteal font-bold italic">Eligibility</td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4">
                    <li>Japanese nationality are not eligible for this test.</li>
                    <li>Only those whose native language is not Japanese can take this test.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-textteal font-bold italic">Total Questions</td>
                <td className="border border-black p-2">Approximately 50 questions</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-textteal font-bold italic">Implementation Format</td>
                <td className="border border-black p-2">
                  <ul className="list-disc pl-4">
                    <li>Letters and vocabulary</li>
                    <li>Conversation and expression</li>
                    <li>Listening comprehension</li>
                    <li>Reading comprehension</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-textteal font-bold italic">Test Time</td>
                <td className="border border-black p-2">60 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JFT;
