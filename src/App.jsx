import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PhoneScreen from './components/PhoneScreen';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import CallLog from './components/CallLog';
import Settings from './components/Settings';
import Conversation from './components/Conversation';





function App() {
  return (
    <div className="App">
     <Routes>
  <Route path="/" element={<PhoneScreen />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/messages" element={<Messages />} />
  <Route path="/calls" element={<CallLog />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/messages/:id" element={<Conversation />} />
</Routes>

    </div>
  );
}

export default App;
