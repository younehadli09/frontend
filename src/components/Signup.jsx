"use client"
import { useState } from "react";
import axios from "axios";
import { Route, useHistory } from 'react-router-dom';


export default function Signup() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    usertype: "" 
  });



  const handleInputChange = (e) => {
    if (e.target.tagName === "SELECT") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleUserTypeChange = (e) => {
    setFormData({
      ...formData,
      usertype: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/admin/register", formData,{
        method: "POST"
      });
      console.log(response.data); // Assuming you want to log the response
      Route.push('/signin'); // Redirect to the signin page upon successful signup
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-5 md:flex-row">
        <div className="w-full md:w-2/3 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-700">Algerie Telecom</span>
          </div>

          <form  onSubmit={handleSubmit}  className="py-10">
            <h2 className="text-3xl font-bold text-blue-700">Create an Account</h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
                <input
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div>
              <select
            id="usertype"
            name="usertype"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            onChange={handleUserTypeChange}
          >
            
            
            <option value="admin">Admin</option>
            <option value="employee">employe</option>
    
          </select>
              </div>
              <button
                
                type="submit"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 bg-blue-500 text-white rounded-tr-xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Again</h2>
          <div className="border-2 w-10 inline-block border-white mb-2"></div>
          <p className="mb-2">Already a member? Sign in</p>

          <a
            href="/"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
