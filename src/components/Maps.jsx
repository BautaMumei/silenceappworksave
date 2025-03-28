
import React from 'react';
import { Link } from 'react-router-dom';
import StatusBar from './StatusBar';

function Maps() {
  const gifSrc = `/maps.gif?${Date.now()}`;

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <Link to="/" className="back-link">🔙</Link>
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}>
          <img
            src={gifSrc}
            alt="Carte étrange"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '24px'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Maps;
