import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import RegistrationParent from "./pages/RegistrationParent/RegistrationParent.jsx";
import FormsChild from "./pages/FormsChild/FormsChild.jsx";
import Profile from "./pages/Profile/Profile";
import Games from "./pages/Games/Games";
import Programi from "./pages/Programi/Programi";
import AlphabetOne from "./pages/Education/Alphabet/AlphabetOne";
import AlphabetTwo from "./pages/Education/Alphabet/AlphabetTwo";
import AlphabetThree from "./pages/Education/Alphabet/AlphabetThree";
import AlphabetFour from "./pages/Education/Alphabet/AlphabetFour";
import AlphabetFive from "./pages/Education/Alphabet/AlphabetFive";
import AlphabetSix from "./pages/Education/Alphabet/AlphabetSix";
import AlphabetSeven from "./pages/Education/Alphabet/AlphabetSeven";
import Slova from "./pages/Igri/Slova/Slova";
import Figuri from "./pages/Igri/Figuri/Figuri";
import Chitannya from "./pages/Chitannya/Chitannya";
import Podchet from "./pages/Igri/Podchet/Podchet";
import Sloga from "./pages/Igri/Sloga/Sloga";

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
          <Route path="/chitannya" element={<Chitannya />} />

          <Route path="/alphabet_one" element={<AlphabetOne />} />
          <Route path="/alphabet_two" element={<AlphabetTwo />} />
          <Route path="/alphabet_three" element={<AlphabetThree />} />
          <Route path="/alphabet_four" element={<AlphabetFour />} />
          <Route path="/alphabet_five" element={<AlphabetFive />} />
          <Route path="/alphabet_six" element={<AlphabetSix />} />
          <Route path="/alphabet_seven" element={<AlphabetSeven />} />

          <Route path="/slova" element={<Slova />} />
          <Route path="/sloga" element={<Sloga />} />
          <Route path="/figuri" element={<Figuri />} />
          <Route path="/podchet" element={<Podchet />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
