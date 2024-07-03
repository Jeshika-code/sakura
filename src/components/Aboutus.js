// aboutus.js

import React from 'react';
import Mentor from './Mentor';

const AboutUs = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Welcome to Sakura Abroad Studies</h1>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">About Us</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Sakura Abroad Studies is a trusted educational consultancy based in Nepal, specializing in study opportunities in Japan. Established in 2006, we offer reliable career counseling to ambitious students who aspire to pursue academic excellence in a multicultural environment. Registered under the Ministry of Education Nepal, we assist students in navigating their educational journey with ease.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                        Our dedicated team recruits academically qualified students for undergraduate and postgraduate courses in Japan. Our counselors, certified by reputable bodies like British Council and IATC, provide personalized guidance on courses, institutions, and visa procedures. We prioritize understanding each student's unique strengths and interests to ensure the best educational fit.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        At Sakura Abroad Studies, our mission is to provide exceptional service based on honesty, transparency, and integrity. We aim to empower students with the education, experience, and opportunities they need to succeed globally.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed text-justify">
                        <li><span className="font-bold">Expertise:</span> Specializing in study opportunities in Japan, with extensive knowledge of Japanese institutions and culture.</li>
                        <li><span className="font-bold">Trusted Reputation:</span> A longstanding presence in Nepal's education consultancy sector, known for successful student placements and visa approvals.</li>
                        <li><span className="font-bold">Professionalism:</span> Our counselors regularly visit Japan to stay updated with the latest information and to build strong partnerships with Japanese universities.</li>
                        <li><span className="font-bold">Supportive Environment:</span> We offer flexible scheduling, free admission counseling, and visa processing services in a friendly atmosphere.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">Whether you're considering studying in Japan or need expert guidance, Sakura Abroad Studies is here to help you achieve your educational goals. Contact us today to take the first step towards your future success.</p>
                </div>
            </div>
            <Mentor/>
        </div>
    );
}

export default AboutUs;
