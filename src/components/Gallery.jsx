
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import indice1 from '../assets/indice1.jpg';
import indice2 from '../assets/indice2.jpg';
import indice3 from '../assets/indice3.jpg';
import './Gallery.css';
import StatusBar from './StatusBar';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: indice1, alt: 'Indice 1' },
    { src: indice2, alt: 'Indice 2' },
    { src: indice3, alt: 'Indice 3' }
  ];

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <StatusBar />
        <div className="gallery-screen">
          <h2 className="gallery-title">📸 Galerie</h2>
          <div className="gallery-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="gallery-thumb"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="image-overlay" onClick={() => setSelectedImage(null)}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery-large animated"
              />
              {selectedImage.alt === 'Indice 2' && (
                <p className="gallery-caption">
                  🧩 Indice caché : Le mot de passe est peut-être lié au silence...
                </p>
              )}
            </div>
          )}

          <Link to="/" className="back-link">🔙</Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
