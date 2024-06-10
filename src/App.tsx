import "./style/App.css";

import { Route, Routes } from "react-router-dom";

import Bouton from "./bouton";
import Homepage from "./homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/boutons" element={<Bouton />}></Route>
    </Routes>
  );
}

export default App;
