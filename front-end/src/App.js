import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Update from "./Components/Update";
import Detail from "./Components/Detail";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/view/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
