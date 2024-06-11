import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
         
                <div className="mt-8  text-center text-gray-400">
                    <p className='text-sm lg:text-base'>&copy; {new Date().getFullYear()} Sakura Abroad Consultancy. All rights reserved.</p>
                </div>
            
        </footer>
    );
}

export default Footer;


