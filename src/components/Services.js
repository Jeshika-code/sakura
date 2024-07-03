

import React from 'react';

const Services = () => {
    const services = [
        {id: 1, title: "College & University Admission", description: "College and university admission process can be simplified with guidance.", image: "https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id: 2, title: "Career Counseling", description: "One-on-one counselling to students seeking clarity, directions and guidance in their life who are applying to study abroad", image: "https://www.superprof.co.in/blog/wp-content/uploads/2019/09/counselor-1294858_960_720-1.png"},
        {id: 3, title: "Language Learning Classes", description: "Embrace the World's Diversity: Master Language, Cultivate Connections, and Explore Boundless Opportunities with Our Language Teaching Classes.", image: "https://media.istockphoto.com/id/1459299651/vector/english-to-japanese-translate-icon.jpg?s=612x612&w=0&k=20&c=jjgEwo0Kunas-PxdJdgm7mUsvrteMfJQPlXwQkVYtkE="},
        {id: 4, title: "Providing Visa", description: "We provide student visa, engineering visa, cook visa, training visa, SSW Visa and IKUSEI visa.", image: "https://www.skybluehr.com/wp-content/uploads/2024/01/visa-services.png"},
        {id: 5, title: "Pre-Departure/On Arrival Support", description: "Assistance before and after arrival to ensure a smooth transition.", image: "https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id: 6, title: "Students Accommodation", description: "College and university admission process can be simplified with guidance.", image: "https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"}
    ];

    return (
        <>
            <div className='md:w-1/2 lg:mx-auto text-center'>
                <h2 className='lg:text-3xl text-2xl text-center font-semibold mb-3'>Our <span className='text-textteal'>Services</span></h2>
                <p className=''>What does Sakura Provides?</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {services.map(service => (
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-50 rounded-lg shadow-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-textteal transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='h-20 w-20 mx-auto'>
                                <img src={service.image} alt="" className='' />
                            </div>
                            <h4 className='mb-4 font-semibold'>{service.title}</h4>
                            <p className='text-sm'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Services;
