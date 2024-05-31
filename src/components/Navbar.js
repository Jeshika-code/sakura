// Navbar.jsx
import React, { useState } from 'react';
import logo from "../images/logo.jpeg";
import { Link } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '', label: 'Classes', subItems: [
                { path: '/classes/pte', label: 'PTE' },
                { path: '/classes/ielts', label: 'IELTS' },
                { path: '/classes/japan', label: 'JAPAN' }
            ]
        },
      
        { path: '/study-abroad', label: 'Study Abroad', subItems: [
                { path: '/study-abroad/usa', label:'Study in USA' },
                { path: '/study-abroad/uk', label: 'Study in UK' },
                { path: '/study-abroad/canada', label: 'Study in Canada' },
                { path: '/study-abroad/japan', label: 'Study in Japan' }
            ]
        },
        { path: '/gallery', label: 'Gallery' }
    ];

    return (
        <nav className="text-white py-4 bg-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo on the left */}
                <div>
                    <img src={logo} alt="Logo" className="h-8 ml-4" />
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:text-white"
                    >
                        {!isOpen ? (
                            <Menu className='text-black mr-4'/>
                        ) : (
                            <Close className='text-black '/>
                        )}
                    </button>
                </div>
                <ul className={`flex flex-col  lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="mr-8 relative group text-black hover:text-textteal">
                            <Link to={item.path}>{item.label}</Link>
                            
                            {item.subItems && (
                                <ul className="absolute hidden bg-white text-gray-500 rounded  pt-2 w-48 p-4  group-hover:block ">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li className="hover:text-textteal mb-2"key={subIndex}>
                                            <Link to={subItem.path}>{subItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
