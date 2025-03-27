import React from 'react';
import { Link } from 'react-router-dom';

function PhoneScreen() {
  const now = new Date();
  const date = now.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const time = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        
        {/* Barre de statut */}
        <div className="status-bar">
          <span className="time">12:42</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Date et Heure */}
        <div className="clock-block">
          <div className="clock-date">{date}</div>
          <div className="clock-time">{time}</div>
        </div>

        {/* Galerie seule */}
        <div className="single-app-row">
          <Link to="/gallery" className="app gallery-app">
            <span className="app-icon">🖼️</span>
            <span className="app-label">Galerie</span>
          </Link>
        </div>

        {/* Barre d'accès rapide */}
        <div className="dock">
          <div className="dock-app">
            <div className="dock-button">
              <span className="app-icon">📞</span>
              <span className="app-label">Appels</span>
            </div>
          </div>

          <Link to="/messages" className="dock-app">
            <div className="dock-button">
              <span className="app-icon">📩</span>
              <span className="app-label">Messages</span>
            </div>
          </Link>

          <div className="dock-app">
            <div className="dock-button">
              <span className="app-icon">⚙️</span>
              <span className="app-label">Réglages</span>
            </div>
          </div>

          <div className="dock-app">
            <div className="dock-button">
              <span className="app-icon">🌐</span>
              <span className="app-label">Web</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneScreen;
