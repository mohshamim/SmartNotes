import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SetupGuide from "./pages/SetupGuide";

function App() {
  return (
    <Router>
      <div className="bg-blue-500 p-4">
        <nav className="flex justify-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-200 font-semibold">
            Home
          </Link>
          <Link
            to="/setup"
            className="text-white hover:text-gray-200 font-semibold"
          >
            Setup Guide
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<SetupGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
