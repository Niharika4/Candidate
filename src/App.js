import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddCandidate from "./pages/AddCandidate";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/Job" element={<Dashboard />} />
          <Route path="/candidate" element={<AddCandidate />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>

    </BrowserRouter>
  );
}

export default App;