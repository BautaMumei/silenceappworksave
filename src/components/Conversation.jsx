
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Messages.css';
import StatusBar from './StatusBar';
import { conversations } from './Messages';

function Conversation() {
  const { id } = useParams();
  const convo = conversations.find(c => c.id === id);

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <Link to="/messages" className="back-link">🔙</Link>
        <div className="messages-screen">
          <h2 className="messages-title">{convo?.sender || 'Conversation'}</h2>
          <div className="conversations">
            {convo?.messages.map((msg, i) => (
              <div
                key={i}
                className={`message-bubble ${msg.from === 'self' ? 'sent' : 'received'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className="message-reply-bar">
          <input
            type="text"
            className="message-input"
            placeholder="iMessage"
            disabled
          />
          <button className="send-button" disabled>➤</button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
