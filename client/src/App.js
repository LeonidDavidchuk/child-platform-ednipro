import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import RegistrationParent from "./pages/RegistrationParent/RegistrationParent.jsx";
import FormsChild from "./pages/FormsChild/FormsChild.jsx";
import Profile from "./pages/Profile/Profile";
import Games from "./pages/Games/Games";
import Programi from "./pages/Programi/Programi";
import AlphabetOne from "./pages/Education/Alphabet/AlphabetOne";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrationparent" element={<RegistrationParent />} />
          <Route path="/formschild" element={<FormsChild />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education_games" element={<Games />} />
          <Route path="/programi" element={<Programi />} />
          <Route path="/alphabet_one" element={<AlphabetOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
