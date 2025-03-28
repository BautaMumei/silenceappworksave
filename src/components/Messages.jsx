
import React from 'react';
import { Link } from 'react-router-dom';
import './Messages.css';
import StatusBar from './StatusBar';

const conversations = [
  {
    id: 'emma',
    sender: 'Emma',
    preview: 'Tu as trouvé le téléphone ?',
    messages: [
      { from: 'other', text: 'Tu as trouvé le téléphone ?' },
      { from: 'other', text: 'Ne dis rien à personne...' },
      { from: 'other', text: 'Indice : regarde dans les photos ! 📸' }
    ]
  },
  {
    id: 'lucas',
    sender: 'Lucas',
    preview: 'Essaie avec son surnom + 42 🤐',
    messages: [
      { from: 'other', text: "Le mot de passe n'est pas si compliqué." },
      { from: 'other', text: 'Essaie avec son surnom + 42 🤐' }
    ]
  },
  {
    id: 'inconnu',
    sender: 'Inconnu',
    preview: 'Fais attention à ce que tu cherches...',
    messages: [
      { from: 'other', text: 'Tu crois vraiment pouvoir tout découvrir ?' },
      { from: 'other', text: 'Fais attention à ce que tu cherches...' }
    ]
  }
];

function Messages() {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <Link to="/" className="back-link">🔙</Link>
        <div className="messages-screen">
          <h2 className="messages-title">📩 Messages</h2>
          <div className="conversation-list">
            {conversations.map((conv) => (
              <Link to={`/messages/${conv.id}`} key={conv.id} className="conversation-preview">
                <div className="contact-name">{conv.sender}</div>
                <div className="preview-text">{conv.preview}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { conversations };
export default Messages;
