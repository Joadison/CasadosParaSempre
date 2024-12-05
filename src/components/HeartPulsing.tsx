import React from 'react';
import './HeartPulsing.css';

const HeartPulsing: React.FC = () => {
  // Gerar um número aleatório de corações para criar uma sensação de chuva
  const hearts = Array.from({ length: 25 });

  return (
    <div className="heart-container">
      {hearts.map((_, index) => (
        <div
          key={index}
          className="heart"
          style={{
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default HeartPulsing;
