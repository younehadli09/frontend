"use client"
import Signin from "../components/Signin";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Signup from "@/components/Signup";
import Searchcurrentcreatedprojects from "../components/Searchcurrentcreatedprojects";

export default function Home() {
  return (
    <main>
        <BrowserRouter> 
       <Routes>
       <Route path='/' element={<Signin />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path="/MainPage/CreateProject/:userid" element={<Searchcurrentcreatedprojects />} />




       </Routes>
      </BrowserRouter>  
    </main>
  );
}
