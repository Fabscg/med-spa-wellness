import Home from "./Components/Home";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Us from "./Components/Us"
import Contact from "./Components/Contact";
import './App.css';

import "./index.css"
import React, { useState } from "react"
import Therapies from "./Components/Therapies";




function App() {
  const [currentPage, setCurrentPage] = useState("Home")

  function RenderPage({ currentPage }) {
    if (currentPage === "Home") {
      return <Home />
    }
    if (currentPage === "Us") {
      return <Us />
    }
    if (currentPage === "Therapies") {
      return <Therapies />
    }
    if (currentPage === "Contact") {
      return <Contact />
    }
    return null;
  }

  const handlePageChange = (page) => setCurrentPage(page);
  return (

    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <RenderPage currentPage={currentPage} />

      <Footer />
    </div>
  );
}


export default App;
