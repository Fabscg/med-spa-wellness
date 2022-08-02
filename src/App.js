import Home from "./Components/Home";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./index.css"
import Therapies from "./Components/Therapies";



function App() {
  return (
    <Router>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </Router>
  );
}


export default App;
