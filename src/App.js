import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import "./style.css"

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      {/* <Footer /> */}
      </div>
    </Router>
    
  )
}
export default App;
