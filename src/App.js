import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Eshop from "./pages/Eshop";
import ContactUs from "./pages/ContanctUs"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
            <Route path="eshop" element={<Eshop/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
