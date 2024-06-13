import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'US',
    destination: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Form submitted successfully');
      // Reset form fields after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: 'US',
        destination: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
   
      <div className="max-w-md mx-auto px-4 mb-10">
      <div>
        <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg" alt="" />
    </div>
        <h2 className="text-3xl font-semibold mb-4 mt-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block">Phone:</label>
            <div className="flex items-center">
              <select 
                name="country" 
                value={formData.country} 
                onChange={handleChange} 
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 mr-2"
              >
                <option value="US">+1 (US)</option>
                <option value="UK">+44 (UK)</option>
                <option value="CA">+1 (CA)</option>
                <option value="NP">+977(NP)</option>
                {/* Add more options for other countries */}
              </select>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="destination" className="block">Preferred Destination:</label>
            <select 
              name="destination" 
              value={formData.destination} 
              onChange={handleChange} 
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="General Inquiry">Select</option>
              <option value="Sales">Japan</option>
              <option value="Support">UK</option>
              <option value="Feedback">USA</option>
              <option value="Feedback">Canada</option>
              {/* Add more options for other destinations */}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-textteal text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
     
      <Footer/>
    </>
  );
};

export default App;
