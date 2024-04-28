import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import AdminComponent from './Component/AdminComponent';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin" element={<AdminComponent />} />
      </Routes>
  </Router>
  );
};

export default App;
