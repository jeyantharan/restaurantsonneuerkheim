import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Restaurant SonneUerkheim. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://web.facebook.com/people/Restaurant-Sonne-Uerkheim/61550291038302/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <p>
          <a href="/terms" className="text-blue-400 hover:text-blue-600 ml-2">Impressum</a> | 
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-600 ml-2">Datenschutz</a> |
          <a href="/cookie" className="text-blue-400 hover:text-blue-600 ml-2">Cookie-Einstellungen</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
