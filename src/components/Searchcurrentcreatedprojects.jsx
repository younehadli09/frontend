import React, { useState } from 'react';
import Employerdata from '@/components/Employerdata';
import DisplayCreatedProjects from './DisplayCreatedProjects';

import DisplayCreatedProjects_chef from '../../src/components/DisplayCreatedProjects_chef';

function Searchcurrentcreatedprojects(props) {
  console.log(props.dc)
  const { dc } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-blue-200 flex flex-col">
      {/* First div */}
      <div className="p-4">
        <Employerdata />
      </div>

      {/* Second div */}
      <div className="p-4 bg-blue-200 flex-1">
        {/* Render the component based on the value of dc */}
        {dc ? <DisplayCreatedProjects_chef /> : <DisplayCreatedProjects />}
        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl mb-4">Add New Project</h2>
            <ProjectCreationForm />
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Add button */}
      <button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={openModal}>Add</button>
    </div>
  );
}

export default Searchcurrentcreatedprojects;
