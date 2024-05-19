'use client'
import React from 'react';

const Sidebar = () => {
  const handleEmployersClick = () => {
    console.log('Employers button clicked');
  };

  const handleProjectsClick = () => {
    console.log('Projects button clicked');
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-800 text-white mt-6 ml-6">
      <button className="relative flex flex-col justify-between py-3 px-4 hover:bg-gray-700 transition duration-300" onClick={handleEmployersClick}>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-semibold">Employers</span>
        </div>
        <span className="opacity-50 overflow-hidden whitespace-nowrap mt-1">Manage your Employers</span>
      </button>
      <button className="relative flex flex-col justify-between py-3 px-4 hover:bg-gray-700 transition duration-300 mt-4" onClick={handleProjectsClick}>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-semibold">Projects</span>
        </div>
        <span className="opacity-50 overflow-hidden whitespace-nowrap mt-1">Manage your projects, Current or Ended</span>
      </button>
    </div>
  );
};

export default Sidebar;