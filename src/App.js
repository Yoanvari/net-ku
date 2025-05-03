import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import Landing from "./pages/Landing";
import profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaksi/:id" element={<Transaksi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
