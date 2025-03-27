import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import indice1 from '../assets/indice1.jpg';
import indice2 from '../assets/indice2.jpg';
import indice3 from '../assets/indice3.jpg';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: indice1, alt: 'Indice 1' },
    { src: indice2, alt: 'Indice 2' },
    { src: indice3, alt: 'Indice 3' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>📸 Galerie Photo</h2>

      {/* Grille de miniatures */}
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '10px',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Image agrandie au clic */}
      {selectedImage && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>{selectedImage.alt}</h3>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{
              width: '90%',
              maxWidth: '400px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          />
          {/* Faux indice visible sur image 2 */}
          {selectedImage.alt === 'Indice 2' && (
            <p style={{ marginTop: '10px', fontWeight: 'bold', color: 'darkred' }}>
              🔐 Mot de passe trouvé : <code>mystere42</code>
            </p>
          )}
        </div>
      )}

      <div style={{ marginTop: '40px' }}>
        <Link to="/">🔙 Retour</Link>
      </div>
    </div>
  );
}

export default Gallery;
