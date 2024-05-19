
'use client'
import React, { useState } from 'react';
import Header from "@/components/HeaderA";
import Sidebar from '@/components/SideBar';
import CrudEmployer from '@/components/CrudEmployers';
import CrudProjects from '@/components/CrudProjects';
import DisplayCreatedProjects from '@/components/DisplayCreatedProjects';


export default function Home() {
  const [displayComponent, setDisplayComponent] = useState('CrudProjects');

  const handleClick = (component) => {
    setDisplayComponent(component);
  };

  return (
    <main>
      <Header />
      <Sidebar />
      
      {displayComponent === 'CrudProjects' && <CrudProjects />}
      {displayComponent === 'CrudEmployer' && <CrudEmployer />}
      {displayComponent === 'DisplayCreatedProjects' && <DisplayCreatedProjects />}
     
      
      <div className="mt-6 ml-6 overflow-x-auto relative">
        <button onClick={() => handleClick('DisplayCreatedProjects')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Service FO
        </button>
        <button onClick={() => handleClick('CrudEmployer')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
          Service ET
        </button>
        <button onClick={() => handleClick('CrudEmployer')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
          Gestion Des Employers
        </button>
       

      </div>
    </main>
  );
}