// components/ui/TechLoader.jsx
import React from 'react';
import styles from './TechLoader.module.css';

const TechLoader = () => {
  // Reduced from 16 to 9 for a cleaner, less "crowded" look
  const lineCount = 9; 
  const lines = Array.from({ length: lineCount });

  return (
    <div className={styles.loaderRoot}>
      <svg
        className={styles.loaderSvg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dark Group */}
        <g className={styles.groupDark}>
          {lines.map((_, i) => (
            <ellipse
              key={`dark-${i}`}
              className={styles.orbitLine}
              cx="50"
              cy="50"
              rx="16"
              ry="38"
              style={{
                '--index': i,
                '--total': lineCount,
                '--rotate-offset': `${(i * 180) / lineCount}deg`
              }}
            />
          ))}
        </g>

        {/* Red Group */}
        <g className={styles.groupRed}>
          {lines.map((_, i) => (
            <ellipse
              key={`red-${i}`}
              className={styles.orbitLine}
              cx="50"
              cy="50"
              rx="16"
              ry="38"
              style={{
                '--index': i,
                '--total': lineCount,
                '--rotate-offset': `${(i * 180) / lineCount}deg`
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default TechLoader;