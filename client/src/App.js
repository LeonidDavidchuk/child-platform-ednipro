import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
