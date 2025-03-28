import React, { useState, useEffect } from 'react';

function StatusBar() {
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

  return (
    <div className="status-bar-modern">
      <span className="status-time">{time}</span>
      <div className="status-icons-modern">
        <span className="icon">🅱️</span> {/* Bluetooth visible */}
        <span className="icon">📶</span>   {/* Wifi */}
        <span className="icon">🔋</span>   {/* Batterie */}
      </div>
    </div>
  );
}

export default StatusBar;
