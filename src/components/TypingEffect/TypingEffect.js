import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = '', typingSpeed = 100, pauseTime = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (index < text.length && !isDeleting) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
        return null; // Tambahkan return null untuk konsistensi
      }

      if (index === text.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return null; // Tambahkan return null untuk konsistensi
      }

      if (isDeleting && displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        return null; // Tambahkan return null untuk konsistensi
      }

      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setIndex(0);
        return null; // Tambahkan return null untuk konsistensi
      }

      return null; // Tambahkan return default untuk linting
    };

    if (text) {
      const timer = setTimeout(() => {
        handleTyping(); // Panggil handleTyping
      }, typingSpeed);

      return () => clearTimeout(timer); // Bersihkan timer
    }

    return undefined; // Tambahkan return default untuk linting
  }, [text, typingSpeed, pauseTime, isDeleting, index, displayText]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
