import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  );
}

export default App;
