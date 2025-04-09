import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "./gridview";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Home from "./Home";
import ProfileCard from "./Profilecard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Profilecard" element={<ProfileCard />} />
        <Route path="/gridview" element={<GridView />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
