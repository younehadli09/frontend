"use client"
import { useState, useEffect } from 'react';

const Employerdata = () => {
  const [employerData, setEmployerData] = useState(null);

  useEffect(() => {
    // Use client to fetch data from the API
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    fetch('/api/employer') // Assuming your API endpoint is '/api/employer'
      .then(response => response.json())
      .then(data => setEmployerData(data))
      .catch(error => console.error('Error fetching employer data:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employer Information</h2>
      {employerData ? (
        <div>
          <p className="mb-2">
            <span className="font-semibold">First Name:</span> {employerData.firstName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Last Name:</span> {employerData.lastName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {employerData.email}
          </p>
          <p>
            <span className="font-semibold">Service:</span> {employerData.service}
          </p>
        </div>
      ) : (
        <p>Loading employer data...</p>
      )}
    </div>
  );
};

export default Employerdata;
