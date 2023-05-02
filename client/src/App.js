import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import RegistrationParent from "./pages/RegistrationParent/RegistrationParent.jsx";
import FormsChild from "./pages/FormsChild/FormsChild.jsx";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrationparent" element={<RegistrationParent />} />
          <Route path="/formschild" element={<FormsChild />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education_games" element={< />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
