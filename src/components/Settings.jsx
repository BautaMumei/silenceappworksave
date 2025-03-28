
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBar from './StatusBar';

function Settings() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === 'mute42') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <Link to="/" className="back-link">🔙</Link>
        <div style={{ padding: '20px', color: '#f1f1f1' }}>
          <h2>⚙️ Réglages verrouillés</h2>
          {!unlocked ? (
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Mot de passe"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  width: '200px',
                  fontSize: '16px'
                }}
              />
              <button
                type="submit"
                style={{
                  marginLeft: '10px',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  backgroundColor: '#333',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Déverrouiller
              </button>
              {error && (
                <p style={{ color: 'darkred', marginTop: '10px' }}>
                  ❌ Mot de passe incorrect.
                </p>
              )}
            </form>
          ) : (
            <div style={{ marginTop: '30px' }}>
              <h3>🔓 Accès autorisé</h3>
              <p>Le silence est leur faiblesse...<br />Active ton micro seulement si tu es sûr de pouvoir t’enfuir.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
