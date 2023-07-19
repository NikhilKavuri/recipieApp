import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import { ContactPage } from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
