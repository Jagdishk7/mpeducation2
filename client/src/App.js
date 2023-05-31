import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScroll from "./components/navbar/NavScroll";

import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About/About";
import Register from "./components/pages/register&login/Register";
import Login from "./components/pages/register&login/Login";
import Contact from "./components/pages/contact/Contact";
import PlaySchool from "./components/pages/allSchools/PlaySchool";
import BoardingSchools from "./components/pages/allSchools/BoardingSchools";
import CollegesUniversities from "./components/pages/allSchools/CollegesUniversities";
import Coachings from "./components/pages/allSchools/Coachings";
import TechnicalInstitutes from "./components/pages/allSchools/TechnicalInstitutes";
import SoftwareInstitutes from "./components/pages/allSchools/SoftwareInstitutes";
import FAQs from "./components/pages/faqs/FAQs";
import Blogs from "./components/pages/blogs/Blogs";
import EducationBlog from "./components/pages/blogs/EducationBlog";
import TeacherBlog from "./components/pages/blogs/TeacherBlog";
import ManagementBlog from "./components/pages/blogs/ManagementBlog";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/educationBlog" element={<EducationBlog/>} />
          <Route path="/teacherBlog" element={<TeacherBlog/>} />
          <Route path="/managementBlog" element={<ManagementBlog/>} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playschool" element={<PlaySchool />} />
          <Route path="/BoardingSchools" element={<BoardingSchools />} />
          <Route
            path="/CollegesUniversities"
            element={<CollegesUniversities />}
          />
          <Route path="/coachings" element={<Coachings />} />
          <Route
            path="/TechnicalInstitutes"
            element={<TechnicalInstitutes />}
          />
          <Route path="/SoftwareInstitutes" element={<SoftwareInstitutes />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
