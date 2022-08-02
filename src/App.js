import Home from "./Components/Home";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./index.css"
import React, { useState } from "react"
import Therapies from "./Components/Therapies";




function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  function RenderPage({ currentPage }) {
    if (currentPage === "Home") {
      return <Home />
    }
    if (currentPage === "About") {
      return <About />
    }
    if (currentPage === "Therapies") {
      return <Therapies />
    }
    if (currentPage === "Book") {
      return <Book />
    }
    return null;
  }

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <Router>
      <>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <RenderPage currentPage={currentPage} />
        <Footer />
      </>
    </Router>
  );
}


export default App;
