import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PhoneScreen from './components/PhoneScreen';
import Gallery from './components/Gallery';
import Messages from './components/Messages';


function App() {
  return (
    <div className="App">
     <Routes>
  <Route path="/" element={<PhoneScreen />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/messages" element={<Messages />} />
</Routes>

    </div>
  );
}

export default App;
