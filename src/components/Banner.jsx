import React from 'react';
import leftLogo from '../assets/govt.jpg';
import rightLogo from '../assets/right_education.jpg';

function Banner() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-blue-500 p-4">
        {/* Left Logo */}
        <div className="md:mr-4 mb-4 md:mb-0">
          <img src={leftLogo} alt="Left Logo" className="h-12 w-12 md:h-16 md:w-16" />
        </div>

        {/* School Text */}
        <div className="text-white text-center md:text-left">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            Karnataka Public School Ramteerth Nagar Belagavi -590017
          </p>
        </div>

        {/* Right Logo */}
        <div className="md:ml-4">
          <img src={rightLogo} alt="Right Logo" className="h-12 w-30 md:h-16 md:w-40 lg:h-20 lg:w-48" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
