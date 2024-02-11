import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import ComicsDetails from "./pages/ComicsDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetails />}
          />
          <Route path="/comic/:comicId" element={<ComicsDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
