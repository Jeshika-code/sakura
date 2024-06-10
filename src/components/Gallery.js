import React from "react";
import gallery1 from "../images/gallery1.jpg"
import gallery2 from "../images/gallery2.jpg"
import gallery3 from "../images/gallery3.jpg"
import gallery4 from "../images/gallery4.jpg"
import gallery5 from "../images/gallery5.jpg"
import Footer from "./Footer";

const imagePaths = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery = () => {
  return (
   <>
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-textteal">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dynamic Rendering of Images */}
        {imagePaths.map((image, index) => (
          <div key={index} className="group m-4 relative">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-6
              transition duration-300"
            />
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
   </>
    
  
  );
};

export default Gallery;
