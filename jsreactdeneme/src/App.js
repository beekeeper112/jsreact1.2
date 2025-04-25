import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkinda" element={<About />} />
          <Route path="/kullanicilar" element={<UserList />} />
          <Route path="/kullanicilar/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
