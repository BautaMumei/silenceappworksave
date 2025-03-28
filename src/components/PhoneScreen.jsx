import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PhoneScreen() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const t = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(t);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const date = now.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="phone-frame">
      <div className="phone-screen home-screen">
        {/* ✅ Barre de statut moderne */}
        <div className="status-bar-modern">
          <span className="status-time">{time}</span>
          <div className="status-icons-modern">
            <span className="icon">🅱️</span> {/* Bluetooth */}
            <span className="icon">📶</span> {/* Wifi */}
            <span className="icon">🔋</span> {/* Batterie */}
          </div>
        </div>

        {/* ✅ Date + Heure */}
        <div className="clock-block">
          <div className="clock-date">{date}</div>
          <div className="clock-time">{time}</div>
        </div>

        {/* ✅ Galerie isolée */}
        <div className="single-app-row">
          <Link to="/gallery" className="app gallery-app">
            <span className="app-icon">🖼️</span>
            <span className="app-label">Galerie</span>
          </Link>
        </div>

        {/* ✅ Barre d'accès rapide */}
        <div className="dock">
          <Link to="/calls" className="dock-app">
            <div className="dock-button">
              <span className="app-icon">📞</span>
              <span className="app-label">Appels</span>
            </div>
          </Link>

          <Link to="/messages" className="dock-app">
            <div className="dock-button">
              <span className="app-icon">📩</span>
              <span className="app-label">Messages</span>
            </div>
          </Link>

          <Link to="/settings" className="dock-app">
            <div className="dock-button">
              <span className="app-icon">⚙️</span>
              <span className="app-label">Réglages</span>
            </div>
          </Link>

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
