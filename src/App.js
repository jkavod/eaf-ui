import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Donate, Home, Media } from "./Pages";
import Images from "./Pages/MediaPages/Images";
import Videos from "./Pages/MediaPages/Videos";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/videos" element={<Videos />} />
          {/* <Route exact path="/donate" element={<Donate />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;