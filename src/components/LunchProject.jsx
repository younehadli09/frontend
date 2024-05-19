"use client"
import React, { useState } from 'react';

const LunchProject = () => {
  const [champ1, setChamp1] = useState('');
  const [deadline, setDeadline] = useState('');
  const [demandeAchat, setDemandeAchat] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [bonDeCommande, setBonDeCommande] = useState(null);
  const [ods, setOds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lunch Project</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ1 */}
        <div className="mb-4">
          <label htmlFor="champ1" className="block text-sm font-medium text-gray-700">
            Champ1:
          </label>
          <input
            type="text"
            id="champ1"
            name="champ1"
            onChange={(e) => setChamp1(e.target.value)}
            value={champ1}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline (Number of Days):
          </label>
          <input
            type="number"
            id="deadline"
            name="deadline"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Demande d'Achat */}
        <div className="mb-4">
          <label htmlFor="demandeAchat" className="block text-sm font-medium text-gray-700">
            Demande d'Achat:
          </label>
          <input
            type="text"
            id="demandeAchat"
            name="demandeAchat"
            onChange={(e) => setDemandeAchat(e.target.value)}
            value={demandeAchat}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Nom d'Entreprise */}
        <div className="mb-4">
          <label htmlFor="nomEntreprise" className="block text-sm font-medium text-gray-700">
            Nom d'Entreprise:
          </label>
          <select
            id="nomEntreprise"
            name="nomEntreprise"
            onChange={(e) => setNomEntreprise(e.target.value)}
            value={nomEntreprise}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            {/* Add your options here */}
            <option value="entreprise1">Entreprise 1</option>
            <option value="entreprise2">Entreprise 2</option>
            <option value="entreprise3">Entreprise 3</option>
          </select>
        </div>

        {/* Bon de Commande */}
        <div className="mb-4">
          <label htmlFor="bonDeCommande" className="block text-sm font-medium text-gray-700">
            Bon de Commande (Max Size: 50 MB):
          </label>
          <input
            type="file"
            id="bonDeCommande"
            name="bonDeCommande"
            onChange={(e) => setBonDeCommande(e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            accept=".pdf, .doc, .docx, .xls, .xlsx"
            required
          />
        </div>

        {/* Ods */}
        <div className="mb-4">
          <label htmlFor="ods" className="block text-sm font-medium text-gray-700">
            Ods:
          </label>
          <input
            type="number"
            id="ods"
            name="ods"
            onChange={(e) => setOds(e.target.value)}
            value={ods}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LunchProject;
