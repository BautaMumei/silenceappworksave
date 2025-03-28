
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import StatusBar from './StatusBar';

function PhoneScreen() {
  const date = new Date();
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const day = date.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="phone-frame">
      <div className="phone-screen home-screen">
        <StatusBar />
        <div className="clock-block">
          <div className="clock-time">{time}</div>
          <div className="clock-date">{day}</div>
        </div>

        <div className="single-app-row">
          <Link to="/gallery" className="gallery-app dock-button">
            <div className="app-icon">📸</div>
            <div className="app-label">Galerie</div>
          </Link>
        </div>

        <div className="dock">
          <Link to="/calllog" className="dock-app">
            <div className="dock-button">
              <div className="app-icon">📞</div>
              <div className="app-label">Appels</div>
            </div>
          </Link>
          <Link to="/messages" className="dock-app">
            <div className="dock-button">
              <div className="app-icon">💬</div>
              <div className="app-label">Messages</div>
            </div>
          </Link>
          <Link to="/settings" className="dock-app">
            <div className="dock-button">
              <div className="app-icon">⚙️</div>
              <div className="app-label">Réglages</div>
            </div>
          </Link>
          <Link to="/maps" className="dock-app">
            <div className="dock-button">
              <div className="app-icon">🗺️</div>
              <div className="app-label">Maps</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneScreen;
