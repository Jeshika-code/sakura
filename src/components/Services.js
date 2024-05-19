import React from 'react'

const Services = () => {
    const services=[
        {id:1,title:"College & University Admission",description:"College and university admission process can be simplified with guidance.",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id:2,title:"Career Counseling",description:"One-on-one counselling to students seeking clarity, directions and guidance in their life who are applying to study abroad",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id:3,title:"College & University Admission",description:"College and university admission process can be simplified with guidance.",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id:1,title:"College & University Admission",description:"College and university admission process can be simplified with guidance.",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id:1,title:"College & University Admission",description:"College and university admission process can be simplified with guidance.",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"},
        {id:1,title:"College & University Admission",description:"College and university admission process can be simplified with guidance.",image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Child-education-school-building-icon-Graphics-60363283-2-580x386.jpg"}

    ]
  return (
    <>
    <div className=' md:w-1/2 lg:mx-auto text-center '>
        <h2 className='lg:text-3xl text-2xl text-center  font-semibold mb-3 mt-20'>Our <span className='text-textteal'>Services</span></h2>
        <p className=''>What does Sakura Provides ?</p>
    </div>
    <div>
        
    </div>
    <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
        {
            services.map(service=> <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-50 rounded-lg shadow-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-textteal transition-all duration-300 flex items-center justify-center h-full'>
                <div>
                    <div className='h-20 w-20 mx-auto '>
                        <img src={service.image} alt="" className=''/>
                        </div>
                    <h4 className='mb-4 font-semibold '>{service.title}</h4>
                    <p className='text-sm'>{service.description}</p>
                </div>

            </div>)
        }
    </div>
    </>
  )
}

export default Services