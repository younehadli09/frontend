'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('Creer');

  useEffect(() => {
    fetch('http://localhost:3001/api/project/allproject')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const openStatusModal = (index) => {
    setSelectedProjectIndex(index);
    setStatusModalVisible(true);
  };

  const handleStatusChange = (status) => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[selectedProjectIndex].status = status;
      return updatedProjects;
    });
    setStatusModalVisible(false);
  };

  return (
    <div className="mt-6 ml-6 overflow-x-auto relative">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">ID</th>
            <th className="px-4 py-2 bg-gray-200">Intitule</th>
            <th className="px-4 py-2 bg-gray-200">Type</th>
            <th className="px-4 py-2 bg-gray-200">Ext A</th>
            <th className="px-4 py-2 bg-gray-200">Ext B</th>
            <th className="px-4 py-2 bg-gray-200">OC</th>
            <th className="px-4 py-2 bg-gray-200">Charge Suive</th>
            <th className="px-4 py-2 bg-gray-200">Capacite FO</th>
            <th className="px-4 py-2 bg-gray-200">Status</th>
            <th className="px-4 py-2 bg-gray-200">Action</th>
            <th className="px-4 py-2 bg-gray-200">Num DA</th>
            <th className="px-4 py-2 bg-gray-200">Renvoi Fibre</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{project.id}</td>
              <td className="border px-4 py-2">{project.intitule}</td>
              <td className="border px-4 py-2">{project.typeprojet}</td>
              <td className="border px-4 py-2">{project.extA}</td>
              <td className="border px-4 py-2">{project.extB}</td>
              <td className="border px-4 py-2">{project.OC}</td>
              <td className="border px-4 py-2">{project.chargesuivi}</td>
              <td className="border px-4 py-2">{project.capacite5}</td>
              <td
                className={`border px-4 py-2 ${getStatusColor(project.status)}`}
                onClick={() => openStatusModal(index)}
                style={{ cursor: 'pointer' }} 
              >
                {project.status}
                
              </td>
              <td className="border px-4 py-2">{project.NumDA}</td>
              <td className="border px-4 py-2">{project.RFibre}</td>
              <td className="border px-4 py-2">
                <button className="btn bg-blue mr-2">Edit</button>
                <button className="btn bg-red">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Project Modal */}
      <Modal
        isOpen={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Add Project Modal"
        portalClassName="modal-portal"
      >
        <div className="flex flex-col items-center justify-center p-8 bg-blue-100">
          <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
          {/* Your form inputs */}
        </div>
      </Modal>

      {/* Status Edit Modal */}
      
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Creer':
      return 'bg-yellow-200';
    case 'En cours':
      return 'bg-orange-200';
    case 'Realiser':
      return 'bg-green-200';
    default:
      return '';
  }
};

export default ProjectTable; 
