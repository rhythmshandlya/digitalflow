import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./COMPOENTS/Login And Signup/Signup";
import Login from "./COMPOENTS/Login And Signup/Login";
import Home from "./COMPOENTS/Home/COMPONENTS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="home" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
