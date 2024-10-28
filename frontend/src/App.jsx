import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";

function App() {
    return (
        // <div className="bg-gradient-to-r from-cyan-100 to-blue-100 min-h-screen">
         <div className="bg-gradient-to-r min-h-screen">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
