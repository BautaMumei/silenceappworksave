
import React from 'react';
import { Link } from 'react-router-dom';
import './CallLog.css';
import StatusBar from './StatusBar';

function CallLog() {
  const calls = [
    { name: 'Emma', time: 'Aujourd’hui, 14:32', type: 'manqué' },
    { name: 'Inconnu', time: 'Aujourd’hui, 12:10', type: 'reçu' },
    { name: 'Lucas', time: 'Hier, 23:51', type: 'appelé' },
    { name: '??', time: 'Hier, 01:13', type: 'masqué' },
    { name: 'Banque ?', time: '28 mars, 16:42', type: 'manqué' }
  ];

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <Link to="/" className="back-link">🔙</Link>
        <div className="calllog-screen">
          <h2 className="calllog-title">📞 Journal d’appels</h2>
          <ul className="calllog-list">
            {calls.map((call, index) => (
              <li key={index} className={`call-item ${call.type}`}>
                <div className="call-header">
                  <span className="call-name">{call.name}</span>
                  <span className="call-time">{call.time}</span>
                </div>
                <div className="call-type">
                  {call.type === 'manqué' && '📛 Appel manqué'}
                  {call.type === 'reçu' && '📥 Appel reçu'}
                  {call.type === 'appelé' && '📤 Appel émis'}
                  {call.type === 'masqué' && '❓ Numéro masqué'}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CallLog;
