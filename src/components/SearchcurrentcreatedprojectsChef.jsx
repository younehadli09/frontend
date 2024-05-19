'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Employerdata from '@/components/Employerdata';
import DisplayCreatedProjectsChef from './DisplayCreatedProjectsChef';
import Modal from 'react-modal';

function SearchcurrentcreatedprojectsChef() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedProject, setEditedProject] = useState({
    intitule: "",
    extA: "",
    extB: "" ,
    typeprojet: "" ,
    capacite: "",
    devis: "",
    OC: "",
    schemma: "",
    chargesuivi: "",
    Nom_entreprise: "",
    status_entreprise: "",
    date_limit_tache: "",
    date_limit: ""
  });
  const [enterprises, setEnterprises] = useState([]);

  const fetchProjects = () => {
    fetch('http://localhost:3001/api/project/allprojects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/entreprise/allentreprise')
      .then(response => response.json())
      .then(data => {
        setEnterprises(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/project/create", editedProject);
      console.log(response.data);

      fetch('http://localhost:3001/api/entreprise/allentreprise')
        .then(response => response.json())
        .then(data => {
          setEnterprises(data);
          fetchProjects();
        });
    } catch (error) {
      console.error("Error occurred:", error);
    }
    setEditModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="h-screen bg-blue-200 flex flex-col">
      <div className="p-4">
        <Employerdata />
      </div>

      <div className="p-4 bg-blue-200 flex-1">
        <DisplayCreatedProjectsChef />
      </div>

      <Modal
        isOpen={editModalVisible}
        onRequestClose={closeEditModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Add Project"
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
          <h2 className="text-lg font-semibold mb-4">Add Project</h2>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="title" className="text-sm font-semibold mb-1">Intitule De Projet:</label>
              <input type="text" id="title" name="intitule" value={editedProject.intitule} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="extA" className="text-sm font-semibold mb-1">EXT A:</label>
              <input type="text" id="extA" name="extA" value={editedProject.extA} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="extB" className="text-sm font-semibold mb-1">EXT B:</label>
              <input type="text" id="extB" name="extB" value={editedProject.extB} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="type" className="text-sm font-semibold mb-1">Type De Projet:</label>
              <input type="text" id="type" name="typeprojet" value={editedProject.typeprojet} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="capacite" className="text-sm font-semibold mb-1">Capacite Fo:</label>
              <select id="capacite" name="capacite" value={editedProject.capacite} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" multiple>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option>
                <option value="256">256</option>
                <option value="512">512</option>
              </select>
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="devis" className="text-sm font-semibold mb-1">Devis:</label>
              <input type="text" id="devis" name="devis" value={editedProject.devis} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="oc" className="text-sm font-semibold mb-1">OC (PDF):</label>
              <input type="text" id="oc" name="OC" value={editedProject.OC} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="schemma" className="text-sm font-semibold mb-1">Schemma:</label>
              <input type="text" id="schemma" name="schemma" value={editedProject.schemma} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="chargesuivi" className="text-sm font-semibold mb-1">Charge Suivee:</label>
              <input type="text" id="chargesuivi" name="chargesuivi" value={editedProject.chargesuivi} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="enterprise" className="text-sm font-semibold mb-1">Enterprise:</label>
              <select id="enterprise" name="Nom_entreprise" value={editedProject.Nom_entreprise} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2">
                <option value="">Select Enterprise</option>
                {enterprises.map(enterprise => (
                  <option key={enterprise.id} value={enterprise.Nom_entreprise}>{enterprise.Nom_entreprise}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="status_enterprise" className="text-sm font-semibold mb-1">Statu Enterprise:</label>
              <input type="text" id="status_enterprise" name="status_entreprise" value={editedProject.status_entreprise} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          
            <div className="flex flex-col mb-4 w-1/2 pl-2">
              <label htmlFor="taskDeadline" className="text-sm font-semibold mb-1">Date Limite de Tache:</label>
              <input type="date" id="taskDeadline" name="date_limit_tache" value={editedProject.date_limit_tache} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex flex-wrap">
            <div className="flex flex-col mb-4 w-1/2 pr-2">
              <label htmlFor="projectDeadline" className="text-sm font-semibold mb-1">Date Limite de Projet:</label>
              <input type="date" id="projectDeadline" name="date_limit" value={editedProject.date_limit} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
            </div>
          </div>
          
          <div className="flex">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Submit</button>
            <button onClick={closeEditModal} className="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
          </div>
        </form>
      </Modal>

      <button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={openEditModal}>Add</button>
    </div>
  );
}

export default SearchcurrentcreatedprojectsChef;
