import React, { useState } from "react";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";


import Footer from "./Footer";

const imagePaths = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(imagePaths[index]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-textteal">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamic Rendering of Images */}
          {imagePaths.map((image, index) => (
            <div
              key={index}
              className="group m-4 relative cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-6 transition duration-300"
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-4xl w-full p-8 bg-white rounded-lg">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-full rounded-lg shadow-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
