import React from 'react';
import logo from '../assets/govt.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
     

          {/* School Logo */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex items-center justify-center">
            <img src={logo} alt="School Logo" className="h-16 w-16" />
          </div>
        {/* </div> */}
     

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p>&copy; 2024 Karnataka Public School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
