

import React from 'react';

const branches = [
  {
    id: 1,
    name: "Butwal Office",
    location: "Chauraha Butwal, Rupandehi",
    phone: "071-591138"
  },
  {
    id: 2,
    name: "Galyang Office",
    location: "Galyang, Syangja",
    phone: "9862413738"
  },
  {
    id: 3,
    name: "Bhairahawa Office",
    location: "Bhairahawa, Rupandehi",
    phone: "9857042416"
  }
];

const OfficeBranches = () => {
  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-14">
        <h2 className='lg:text-3xl text-2xl text-center font-semibold mb-3'>
          Visit <span className='text-textteal'>Our Office</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:text-xl text-center">
          {branches.map(branch => (
            <div key={branch.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{branch.name}</h3>
              <p className="text-gray-700 mb-2">{branch.location}</p>
              <p className="text-gray-700 cursor-pointer" onClick={() => handlePhoneClick(branch.phone)}>
                {branch.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeBranches;

// import React from 'react';

// const branches = [
//   {
//     id: 1,
//     name: "Butwal Office",
//     location: "Chauraha Butwal, Rupandehi",
//     phone: "071-591138"
//   },
//   {
//     id: 2,
//     name: "Galyang Office",
//     location: "Galyang, Syangja",
//     phone: "9862413738"
//   },
//   {
//     id: 3,
//     name: "Bhairahawa Office",
//     location: "Bhairahawa, Rupandehi",
//     phone: "9857042416"
//   }
// ];

// const OfficeBranches = () => {
//   const handlePhoneClick = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <div className="bg-pink-600 py-10">
//       <div className="max-w-screen-2xl mx-auto px-4 lg:px-14">
//         <h2 className='lg:text-3xl text-2xl text-center font-semibold mb-3 text-white'>
//           Visit <span className='text-textteal'>Our Office</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:text-xl text-center">
//           {branches.map(branch => (
//             <div key={branch.id} className="bg-white shadow-md rounded-lg p-4">
//               <h3 className="text-lg font-semibold mb-2">{branch.name}</h3>
//               <p className="text-gray-700 mb-2">{branch.location}</p>
//               <p className="text-gray-700 cursor-pointer" onClick={() => handlePhoneClick(branch.phone)}>
//                 {branch.phone}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfficeBranches;




