import type React from "react";

const HeartPulsing: React.FC = () => {
  const hearts = Array.from({ length: 20 });
  const sparkles = Array.from({ length: 10 });
  const glowElements = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <div
            className="text-rose-300/40 text-2xl glow-pink"
            style={{
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            💖
          </div>
        </div>
      ))}

      {sparkles.map((_, index) => (
        <div
          key={`sparkle-${index}`}
          className={`absolute ${
            index % 3 === 0
              ? "animate-sparkle-intense"
              : index % 3 === 1
              ? "animate-sparkle-soft"
              : "animate-sparkle"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <div
            className={`${
              index % 4 === 0
                ? "text-yellow-300/60 text-lg glow-intense"
                : index % 4 === 1
                ? "text-pink-300/50 text-base glow-rose"
                : index % 4 === 2
                ? "text-rose-300/60 text-sm glow-pink"
                : "text-amber-300/50 text-xs"
            }`}
          >
            {index % 5 === 0
              ? "✦"
              : index % 5 === 1
              ? "⭐"
              : index % 5 === 2
              ? "✦"
              : index % 5 === 3
              ? "🌟"
              : "✦"}
          </div>
        </div>
      ))}

      {glowElements.map((_, index) => (
        <div
          key={`glow-${index}`}
          className="absolute animate-glow-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full glow-intense"></div>
        </div>
      ))}
    </div>
  );
};

export default HeartPulsing;
