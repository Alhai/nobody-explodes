import "./style/App.css";

import { Route, Routes } from "react-router-dom";

import Homepage from "./homepage";
import Play from "./play";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/play" element={<Play/>}></Route>
    </Routes>
  )
}

export default App;
