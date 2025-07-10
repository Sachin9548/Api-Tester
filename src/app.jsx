import React from "react";

// Import the Home page component
import Home from "./pages/home.jsx";
import Api from "./pages/Api.jsx";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/tester" element={<Api />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
