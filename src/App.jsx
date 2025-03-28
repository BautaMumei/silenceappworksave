import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PhoneScreen from './components/PhoneScreen';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import CallLog from './components/CallLog';
import Settings from './components/Settings';
import Conversation from './components/Conversation';
import Maps from './components/Maps';

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
        <Route path="/maps" element={<Maps />} />

        {/* 👇 Route fallback pour éviter l'écran noir */}
        <Route path="*" element={<PhoneScreen />} />
      </Routes>
    </div>
  );
}

export default App;
