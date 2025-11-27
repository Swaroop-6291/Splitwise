import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import Register from "./components/Register";
import Home from "./pages/Home";
import {AddTransaction} from "./components/AddTransaction";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-transaction" element={<AddTransaction />} />

        {/* Page Not Found */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
