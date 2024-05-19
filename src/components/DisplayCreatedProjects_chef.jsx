'use client'
import React, { useState, useEffect } from 'react';
import axios from "axios";


const DisplayCreatedProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('intitule');


  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/project/allproject')
      .then(response => response.json())
      .then(data => {
        setProjectsData(data);
        setSearchResults(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const [formData, setFormData] = useState({
    _id: "",
    
  });
  const handledelete = async (projectId) => {
    try {
      await axios.delete(`http://localhost:3001/api/project/delete/${projectId}`);
      setProjectsData(projectsData.filter(project => project._id !== projectId));
      setSearchResults(searchResults.filter(project => project._id !== projectId));
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const editProject = (projectId) => {
   
    
  };

  const handleSearch = () => {
   
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#3498db', fontSize: '28px' }}>Created Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
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
          <option value="capacity">Capacite Fo</option>
          <option value="extraDocs">Extra Docs</option>
          <option value="extraDocs">Charge Suivee</option>
          <option value="extraDocs">OC</option>
          <option value="extraDocs">Enterprise</option>
        </select>
        <button style={buttonStyle} onClick={handleSearch}>Search</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Type De Projet</th>
            <th style={tableHeaderStyle}>Intitule De Projet</th>
            <th style={tableHeaderStyle}>EXT A</th>
            <th style={tableHeaderStyle}>EXT B</th>
            <th style={tableHeaderStyle}>capacite Fo</th>
            <th style={tableHeaderStyle}>Enterprise</th>
            <th style={tableHeaderStyle}>OC</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(project => (
            <tr key={project.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.typeprojet}</td>
              <td style={tableCellStyle}>{project.intitule}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.capacite}</td>
              <td style={tableCellStyle}>{project.Nom_entreprise}</td>
              <td style={tableCellStyle}>{project.OC}</td>
              <td style={tableCellStyle}>
                <button style={buttonStyle} onClick={() => editProject(project.id)}>Edit</button>
                <button style={buttonStyle} onClick={() => handledelete(project.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  margin: 'auto',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
};

const tableHeaderStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '15px',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
  transition: 'background-color 0.3s',
};

const tableCellStyle = {
  border: '1px solid #ecf0f1',
  padding: '15px',
  textAlign: 'left',
};

const buttonStyle = {
  margin: '0 5px',
  padding: '10px 15px',
  backgroundColor: '#2ecc71',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};


export default DisplayCreatedProjects;
