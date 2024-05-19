'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Function component to display created projects
const DisplayCreatedProjectsAdmin = ({  }) => {
  
 

  // State to manage the list of projects
  
  const [projectsData, setProjectsData] = useState([]);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default search type
  const [searchResults, setSearchResults] = useState(projectsData);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedProject, setEditedProject] = useState(null);

  // Function to update search results based on search term and type
  useEffect(() => {
    fetch('http://localhost:3001/api/project/allproject')
      .then(response => response.json())
      .then(data => {
        
        setSearchResults(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to open edit modal with selected project
  const openEditModal = (project) => {
    setEditedProject({ ...project });
    setEditModalVisible(true);
  };

  // Function to handle editing of project
  const handleEditProject = () => {
    const index = projectsData.findIndex(project => project.id === editedProject.id);
    if (index !== -1) {
      const updatedProjectsData = [...projectsData];
      updatedProjectsData[index] = editedProject;
      setProjectsData(updatedProjectsData);
      setEditModalVisible(false);
    } else {
      console.error('Project not found for editing.');
    }
  };

  // Function to handle input change in edit modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle file upload in edit modal
  {/*const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setEditedProject(prevState => ({
      ...prevState,
      oc: file,
    }));
  };*/}

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setEditModalVisible(false);
  };

  // Function to check if a date is past the current date
  const isDatePast = (dateStr) => {
    const currentDate = new Date();
    const date = new Date(dateStr);
    return date < currentDate;
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#3498db', fontSize: '28px' }}>Created Projects</h2>
      {/* Search bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by project details"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        >
          <option value="id">ID</option>
          <option value="type">Type</option>
          <option value="title">Title</option>
          <option value="extA">EXT A</option>
          <option value="extB">EXT B</option>
          <option value="capacity">Capacity</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <button onClick={() => { }} style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #bdc3c7', backgroundColor: '#3498db', color: 'white', marginLeft: '10px', cursor: 'pointer' }}>Search</button>
      </div>
      {/* Table to display projects */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Type De Projet</th>
            <th style={tableHeaderStyle}>Intitule De Projet</th>
            <th style={tableHeaderStyle}>EXT A</th>
            <th style={tableHeaderStyle}>EXT B</th>
            <th style={tableHeaderStyle}>Capacite Fo</th>
            <th style={tableHeaderStyle}>Enterprise</th>
            <th style={tableHeaderStyle}>OC</th>
            <th style={tableHeaderStyle}>Date Limite de Tache</th>
            <th style={tableHeaderStyle}>Date Limite de Projet</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through search results to display projects */}
          {searchResults.map(project => (
            <tr key={project.id} style={isDatePast(project.projectDeadline) ? { backgroundColor: 'red' } : isDatePast(project.taskDeadline) ? { backgroundColor: 'orange' } : {}}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.typeprojet}</td>
              <td style={tableCellStyle}>{project.intitule}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.capacite}</td>
              <td style={tableCellStyle}>{project.Nom_entreprise}</td>
              <td style={tableCellStyle}>{project.OC ? project.OC: 'No File'}</td>
              <td style={tableCellStyle}>{new Date(project.date_limit_tache).toLocaleDateString()}</td>
              <td style={tableCellStyle}>{new Date(project.date_limit_tache).toLocaleDateString()}</td>
              <td style={tableCellStyle}>
                <button style={buttonStyle1} onClick={() => openEditModal(project)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Project Modal */}
      {/*<Modal
        isOpen={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Edit Project"
        portalClassName="modal-portal"
        style={{
          content: {
            top: '20%',
            margin: 'auto 400px',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginLeft: '970px',
            marginTop: '-500px'
          },
        }}
      >
        <form onSubmit={handleSubmit}> 
          <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="type" className="text-sm font-semibold mb-1">Type De Projet:</label>
            <input type="text" id="type" name="typeprojet" value={editedProject ? editedProject.type : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-sm font-semibold mb-1">Intitule De Projet:</label>
            <input type="text" id="title" name="intitule" value={editedProject ? editedProject.title : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="extA" className="text-sm font-semibold mb-1">EXT A:</label>
            <input type="text" id="extA" name="extA" value={editedProject ? editedProject.extA : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="extB" className="text-sm font-semibold mb-1">EXT B:</label>
            <input type="text" id="extB" name="extB" value={editedProject ? editedProject.extB : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="capacity" className="text-sm font-semibold mb-1">Capacite Fo:</label>
            <input type="text" id="capacity" name="capacite" value={editedProject ? editedProject.capacity : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="enterprise" className="text-sm font-semibold mb-1">Enterprise:</label>
            <select id="enterprise" name="Nom_entreprise" value={editedProject ? editedProject.enterprise : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2">
              <option value="Enterprise 1">Enterprise 1</option>
              <option value="Enterprise 2">Enterprise 2</option>
              <option value="Enterprise 3">Enterprise 3</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="oc" className="text-sm font-semibold mb-1">OC (PDF):</label>
            <input type="file" id="oc" name="OC" onChange={handleFileUpload} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="taskDeadline" className="text-sm font-semibold mb-1">Date Limite de Tache:</label>
            <input type="date" id="taskDeadline" name="taskDeadline" value={editedProject ? editedProject.taskDeadline : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="projectDeadline" className="text-sm font-semibold mb-1">Date Limite de Projet:</label>
            <input type="date" id="projectDeadline" name="projectDeadline" value={editedProject ? editedProject.projectDeadline : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          
          <div className="flex">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Submit</button>
            <button onClick={() => setEditModalVisible(false)} className="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
          </div>
        </form> 
      </Modal>*/}
    </div>
  );
};

// Styles for the table
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tableHeaderStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '15px',
};

const tableCellStyle = {
  border: '1px solid #ecf0f1',
  padding: '15px',
  backgroundColor: 'white'
};

const buttonStyle1 = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  marginRight: '5px',
  backgroundColor: 'blue',
  color: 'white'
};

export default DisplayCreatedProjectsAdmin;
