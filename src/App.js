import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";

function App() {
  return (
    <Router>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          {" "}
          <Route path="/upload" element={<UploadPage />} />{" "}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
