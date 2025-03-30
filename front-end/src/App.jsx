import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewDoctors from "./components/ViewDoctors"; // Importing the component
import AddDoctor from "./components/AddDoctors";
import ViewSpecializations from "./components/ViewSpecialization";
import ViewTodaysSurgery from "./components/TodaySurgery";
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
    <Navbar />
      <Footer />
    <Routes>
      <Route path="/viewDoctor" element={<ViewDoctors /> } />
      <Route path="/specialization" element={<ViewSpecializations/> } />
      <Route path="/todaySergion" element={<ViewTodaysSurgery/> } />
      <Route path="/addDoctor" element={ <AddDoctor/>} />

    </Routes>
      
    </>
    </Router>
  );
}

export default App;
