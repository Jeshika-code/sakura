import React from 'react';
import Mentor from './Mentor';
import gallery2 from '../images/gallery2.jpg'; // Make sure this path is correct

const AboutUs = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8 px-4">

                {/* Welcome Section */}
                <div className="welcome-section mb-8">
                    <h1 className="lg:text-4xl text-xl font-bold mb-4 leading-snug text-center">Sakura <span className='text-teal'>Abroad Study </span> and Training Center</h1>
                </div>

                {/* About Us Section */}
                <div className="about-us-section mb-8 lg:flex lg:flex-wrap lg:items-center">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 ml-10 ">About Us</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify ml-10">
                            Sakura Abroad Studies is a trusted educational consultancy based in Nepal, specializing in study opportunities in Japan. Established in 2018, we offer reliable career counseling to ambitious students who aspire to pursue academic excellence in a multicultural environment. Registered under the Ministry of Education Nepal, we assist students in navigating their educational journey with ease.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify ml-10">
                            Our dedicated team recruits academically qualified students for undergraduate and postgraduate courses in Japan. Our counselors, certified by reputable bodies like British Council and IATC, provide personalized guidance on courses, institutions, and visa procedures. We prioritize understanding each student's unique strengths and interests to ensure the best educational fit.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="max-w-full h-auto m-2 lg:m-0">
                            <img src={gallery2} alt="Sakura Image" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="mission-section mb-8 lg:flex lg:flex-wrap lg:items-center">
                    <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 ml-10">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify ml-10">
                            At Sakura Abroad Studies, our mission is to provide exceptional service based on honesty, transparency, and integrity. We aim to empower students with the education, experience, and opportunities they need to succeed globally.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="why-choose-us-section mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 ml-10">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed text-justify ml-10">
                        <li><span className="font-bold">Expertise:</span> Specializing in study opportunities in Japan, with extensive knowledge of Japanese institutions and culture.</li>
                        <li><span className="font-bold">Trusted Reputation:</span> A longstanding presence in Nepal's education consultancy sector, known for successful student placements and visa approvals.</li>
                        <li><span className="font-bold">Professionalism:</span> Our counselors regularly visit Japan to stay updated with the latest information and to build strong partnerships with Japanese universities.</li>
                        <li><span className="font-bold">Supportive Environment:</span> We offer flexible scheduling, free admission counseling, and visa processing services in a friendly atmosphere.</li>
                    </ul>
                </div>

                {/* Contact Section (Optional) */}
                <div className="contact-section mb-8">
                    <div className="text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mt-2 text-justify ml-10">Whether you're considering studying in Japan or need expert guidance, Sakura Abroad Studies is here to help you achieve your educational goals. Contact us today to take the first step towards your future success.</p>
                    </div>
                </div>

                {/* Mentor Component */}
                <Mentor />
                
            </div>
        </div>
    );
}

export default AboutUs;
