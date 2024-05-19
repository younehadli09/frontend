'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const EmployerTable = () => {
  const [visible, setVisible] = useState(false);
  const [editingEmployer, setEditingEmployer] = useState(null); // State to store the employer being edited
  const [newEmployer, setNewEmployer] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    employerType: 'Normal',
  });

  const [employers, setEmployers] = useState([
   
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployer(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingEmployer) {
      // If editing an existing employer, update the employers array
      const updatedEmployers = employers.map(employer =>
        employer.username === editingEmployer.username ? newEmployer : employer
      );
      setEmployers(updatedEmployers);
      setEditingEmployer(null); // Reset editing employer state
    } else {
      // If adding a new employer, add it to the employers array
      setEmployers(prevEmployers => [...prevEmployers, newEmployer]);
    }
    setVisible(false);
  };

  const handleEdit = (username) => {
    // Find the employer to edit based on username
    const employerToEdit = employers.find(employer => employer.username === username);
    if (employerToEdit) {
      // Set the editing employer and populate the form fields with its data
      setEditingEmployer(employerToEdit);
      setNewEmployer(employerToEdit);
      setVisible(true);
    }
  };

  const handleDelete = (username) => {
    // Filter out the employer to delete based on username
    const updatedEmployers = employers.filter(employer => employer.username !== username);
    setEmployers(updatedEmployers);
  };

  return (
    <div className="mt-6 ml-6 overflow-x-auto">
      <div className="mb-4 flex justify-between items-center">
        <input type="text" placeholder="Search by..." className="px-4 py-2 border rounded-md mr-2" />
        <button onClick={() => { setVisible(true); setEditingEmployer(null); }} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-56">
          Add Employer
        </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">Username</th>
            <th className="px-4 py-2 bg-gray-200">First Name</th>
            <th className="px-4 py-2 bg-gray-200">Last Name</th>
            <th className="px-4 py-2 bg-gray-200">Email</th>
            <th className="px-4 py-2 bg-gray-200">Password</th>
            <th className="px-4 py-2 bg-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{employer.username}</td>
              <td className="border px-4 py-2">{employer.firstName}</td>
              <td className="border px-4 py-2">{employer.lastName}</td>
              <td className="border px-4 py-2">{employer.email}</td>
              <td className="border px-4 py-2">{employer.password}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(employer.username)} className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                <button onClick={() => handleDelete(employer.username)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel={editingEmployer ? "Edit Employer Modal" : "Add Employer Modal"} // Change content label based on whether editing or adding
        portalClassName="modal-portal"
      >
        <motion.div
          className="p-6 flex flex-col justify-center items-center rounded-lg ml-auto mr-auto mt-20 md:mt-0"
          initial={{ y: '-100vh' }}
          animate={{ y: -500 }}
          transition={{ type: 'spring', stiffness: 120 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
            backdropFilter: 'blur(10px)', // Glass effect backdrop filter
          }}
        >
          <h2 className="text-xl font-bold mb-4">{editingEmployer ? 'Edit Employer' : 'Add Employer'}</h2> {/* Change modal title based on whether editing or adding */}
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-sm font-semibold mb-1">Username:</label>
            <input type="text" id="username" name="username" value={newEmployer.username} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName" className="text-sm font-semibold mb-1">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={newEmployer.firstName} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName" className="text-sm font-semibold mb-1">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={newEmployer.lastName} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-semibold mb-1">Email:</label>
            <input type="email" id="email" name="email" value={newEmployer.email} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-sm font-semibold mb-1">Password:</label>
            <input type="password" id="password" name="password" value={newEmployer.password} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="employerType" className="text-sm font-semibold mb-1">Employer Type:</label>
            <select id="employerType" name="employerType" value={newEmployer.employerType} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2">
              <option value="Normal">Normal Employer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex">
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Submit</button>
            <button onClick={() => setVisible(false)} className="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default EmployerTable;