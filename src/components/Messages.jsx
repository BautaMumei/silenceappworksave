import React from 'react';
import { Link } from 'react-router-dom';

function Messages() {
  const conversations = [
    {
      sender: 'Emma',
      messages: [
        'Tu as trouvé le téléphone ?',
        'Ne dis rien à personne...',
        'Indice : regarde dans les photos ! 📸'
      ]
    },
    {
      sender: 'Lucas',
      messages: [
        'Le mot de passe n\'est pas si compliqué.',
        'Essaie avec son surnom + 42 🤐'
      ]
    },
    {
      sender: 'Inconnu',
      messages: [
        'Tu crois vraiment pouvoir tout découvrir ?',
        'Fais attention à ce que tu cherches...'
      ]
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>📩 Messages</h2>

      <div style={{ marginTop: '20px' }}>
        {conversations.map((conv, i) => (
          <div key={i} style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#444' }}>{conv.sender}</h4>
            <div style={{
              background: '#f2f2f2',
              borderRadius: '10px',
              padding: '10px'
            }}>
              {conv.messages.map((msg, j) => (
                <p key={j} style={{ margin: '5px 0' }}>{msg}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link to="/">🔙 Retour</Link>
    </div>
  );
}

export default Messages;
