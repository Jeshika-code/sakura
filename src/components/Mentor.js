

import React from 'react';
import gallery from '../images/gallery.jpg';

const Mentor = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mx-4 my-8">
            {/* Left Section (Image) */}
            <div className="md:w-1/3 mr-0 md:mr-4 mb-4 md:mb-0">
                <img src={gallery} alt="Placeholder" className="w-full h-auto" />
            </div>
            
            {/* Right Section (Content) */}
            <div className="md:w-2/3 md:mb-60"> {/* Adjusted margin-top here */}
                <div className="text-lg font-bold mb-4">Mr. Laxman Adhikari</div>
                <p className="text-gray-700 text-justify mb-4">
                    After living in Japan for more than 10 years, Laxman Adhikari became fluent in Japanese, reaching the highest level of proficiency on the Japanese Language Proficiency Test (JLPT), known as N1. When he returned to Nepal, he noticed many Nepalese students facing challenges in studying abroad. To help them, he started a consultancy that guides students through the process of applying and settling into foreign universities. Laxman's consultancy is known for its personalized support, drawing on his own experiences to help students achieve their educational goals abroad.
                    <br/><br/>
                    Besides consultancy work, Laxman teaches Japanese language courses in Nepal. His classes are popular for their thoroughness and practical focus, giving students not just language skills but also a deeper understanding of Japanese culture. Through his teaching, Laxman promotes cultural appreciation and prepares students for global opportunities.
                    <br/><br/>
                    Laxman also organizes events that celebrate Japanese culture in Nepal, fostering understanding and connections between Nepalese and Japanese communities. His efforts have earned him respect and recognition for promoting cultural exchange and international understanding.
                    <br/><br/>
                    Laxman Adhikari's journey from Japan to Nepal highlights the importance of language learning and cultural exchange in creating bridges between countries and preparing individuals for global citizenship.
                </p>
            </div>
        </div>
    );
};

export default Mentor;

