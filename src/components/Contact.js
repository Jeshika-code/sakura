import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { urls } from '../constants';

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
      await axios.post(`${urls.SERVER_URL}contact`, formData);
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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-start">
        {/* Left Column: Contact Form */}
        <div className="max-w-md px-4 mb-10 lg:mb-0 lg:mr-10">
          <div>
            <img
              src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg"
              alt="Freelance girl using laptop"
              className="w-full"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4 mt-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">
                Name:
              </label>
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
              <label htmlFor="email" className="block">
                Email:
              </label>
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
              <label htmlFor="phone" className="block">
                Phone:
              </label>
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
              <label htmlFor="destination" className="block">
                Preferred Destination:
              </label>
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
              <label htmlFor="message" className="block">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Google Maps */}
        <div className="max-w-md lg:ml-10 mb-10 lg:mb-0">
          <iframe
            width="120%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.81422363896434!2d83.4656671!3d27.6855425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687003088d67f%3A0x86a956dcb64b8870!2sSakura%20japanese%20language%20school!5e0!3m2!1sen!2snp!4v1718729172353!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
            title="Sakura Japanese Language School Location"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;




