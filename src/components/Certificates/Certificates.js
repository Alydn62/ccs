import React from 'react';
import { certificates } from '../../portfolio';
import '../../App.css';

const Certificates = () => {
  if (!certificates.length) return null;

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">Certificates</h2>

      <div className="certificates__grid">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate">
            {/* Tambahkan gambar sertifikat */}
            {certificate.image && (
              <img
                src={certificate.image}
                alt={certificate.name}
                className="certificate__image"
              />
            )}
            <h3 className="certificate__name">{certificate.name}</h3>
            <p className="certificate__organization">{certificate.organization}</p>
            <p className="certificate__date">{certificate.date}</p>
            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate__link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
