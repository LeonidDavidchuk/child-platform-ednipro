import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
