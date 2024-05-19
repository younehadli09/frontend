import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import SearchCurrentCreatedProjects from '../components/Searchcurrentcreatedprojects'
import Searchcurrentcreatedprojects from "../components/Searchcurrentcreatedprojects";

export default function Signin({ setLoginUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [dc, setDc] = useState(""); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/api/login`,
        formData
      );
      const { token, redirect, _id } = response.data;
      
      
      location.href = redirect;

      
     <Searchcurrentcreatedprojects dc={dc} />
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-5 md:flex-row"
      >
        <div className="w-full md:w-2/3 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-700">Algerie Telecome</span>
          </div>

          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-700">
              Sign In To Your Account
            </h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
              <MdEmail className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 outline-none text-sm flex-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
              <RiLockPasswordFill className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-100 outline-none text-sm flex-1"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex w-full md:w-64 mb-5 mt-2 justify-between">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="Remember" className="mr-1" />
                Remember Me
              </label>
              <Link href="./Login/ForgetPassword" className="text-xs">
                Forget Password?
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="border-2 border-blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
