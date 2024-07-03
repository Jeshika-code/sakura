
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Close, Menu } from '@mui/icons-material';
// import logo from '../images/logoo.jpg';

// const Navbar = () => {


//     const [isOpen, setIsOpen] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null); // Track active menu item

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleSubmenu = (index) => {
//         setActiveMenu(activeMenu === index ? null : index); // Toggle submenu visibility
//     };

//     const closeMenu = () => {
//         setIsOpen(false); // Close main menu
//         setActiveMenu(null); // Close active submenu
//     };

//     const navItems = [
//         { path: '/', label: 'Home' },
//         {
//             path: '/classes', label: 'Classes', subItems: [
//                 { path: '/classes/pte', label: 'PTE' },
//                 { path: '/classes/ielts', label: 'IELTS' },
//                 { path: '/classes/japan', label: 'JAPAN' }
//             ]
//         },
//         {
//             path: '/study-abroad', label: 'Study Abroad', subItems: [
//                 { path: '/study-abroad/usa', label: 'Study in USA' },
//                 { path: '/study-abroad/uk', label: 'Study in UK' },
//                 { path: '/study-abroad/canada', label: 'Study in Canada' },
//                 { path: '/study-abroad/japan', label: 'Study in Japan' }
//             ]
//         },
//         { path: '/gallery', label: 'Gallery' },
//         { path: '/contact', label: 'Contact' },
//         { path: '/mentor', label: 'Mentor' },

        

//     ];

//     return (
//         <nav className="text-white py-4 bg-white sticky top-0 z-50">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div>
//                     <img src={logo} alt="Logo" className="h-20 ml-4" />
//                 </div>
//                 <div className="block lg:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         className="text-black focus:outline-none"
//                     >
//                         {!isOpen ? (
//                             <Menu className='text-black mr-4' />
//                         ) : (
//                             <Close className='text-black' />
//                         )}
//                     </button>
//                 </div>
//                 <ul className={`flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:flex`}>
//                     {navItems.map((item, index) => (
//                         <li key={index} className="relative group text-black hover:text-textteal lg:mx-4">
//                             {item.subItems ? (
//                                 <div
//                                     className="cursor-pointer"
//                                     onClick={() => toggleSubmenu(index)}
//                                 >
//                                     {item.label}
//                                     {activeMenu === index && (
//                                         <ul className="lg:absolute lg:mt-2 bg-white text-gray-500 rounded shadow-lg lg:w-48 p-4 lg:z-50">
//                                             {item.subItems.map((subItem, subIndex) => (
//                                                 <li className="hover:text-textteal mb-2" key={subIndex}>
//                                                     <Link to={subItem.path} onClick={closeMenu}>{subItem.label}</Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </div>
//                             ) : (
//                                 <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';
import logo from '../images/logoo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); // Track active menu item

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index); // Toggle submenu visibility
    };

    const closeMenu = () => {
        setIsOpen(false); // Close main menu
        setActiveMenu(null); // Close active submenu
    };

    const navItems = [
        { path: '/', label: 'Home' },
        {
            path: '/classes', label: 'Classes', subItems: [
                { path: '/classes/japan', label: 'JAPANESE LANGUAGE' },
                { path: '/classes/pte', label: 'PTE' },
                { path: '/classes/ielts', label: 'IELTS' }
            ]
        },
        {
            path: '/study-abroad', label: 'Study Abroad', subItems: [
                { path: '/study-abroad/japan', label: 'Study in Japan' },
                { path: '/study-abroad/usa', label: 'Study in USA' },
                { path: '/study-abroad/uk', label: 'Study in UK' },
                { path: '/study-abroad/canada', label: 'Study in Canada' }
            ]
        },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' },
        { path: '/mentor', label: 'Mentor' },
    ];

    return (
        <nav className="bg-pink-600 text-white py-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={logo} alt="Logo" className="h-20 ml-4" />
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {!isOpen ? (
                            <Menu className='text-white mr-4' />
                        ) : (
                            <Close className='text-white' />
                        )}
                    </button>
                </div>
                <ul className={`flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group text-white hover:text-gray-200 lg:mx-4">
                            {item.subItems ? (
                                <div
                                    className="cursor-pointer"
                                    onClick={() => toggleSubmenu(index)}
                                >
                                    {item.label}
                                    {activeMenu === index && (
                                        <ul className="lg:absolute lg:mt-2 bg-white text-gray-800 rounded shadow-lg lg:w-48 p-4 lg:z-50">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li className="hover:text-gray-700 mb-2" key={subIndex}>
                                                    <Link to={subItem.path} onClick={closeMenu}>{subItem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

