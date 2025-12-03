// 6DataProcessing.tsx - Data processing screen with rotating status messages
import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-jm278l1k32";
import styles from './6_DataProcessing.module.css';
import TechLoader from './TechLoader';

const STATUS_MESSAGES = [
  "Verifying linked accounts…",
  "Spotting regular payments…",
  "Summarising income patterns…",
  "Checking stability indicators…",
  "Preparing your result…"
];

interface DataProcessingProps {
  onComplete?: () => void;
}

function LoadingAnimation() {
  return (
    <div className={styles.loadingContainer}>
      <TechLoader size={263} />
    </div>
  );
}

function TextContent({ onComplete }: { onComplete?: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // if we're on the last message, wait 3s then call onComplete
    if (currentIndex === STATUS_MESSAGES.length - 1) {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // After fade out, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1); // 👈 no modulo
        setIsVisible(true);
      }, 300); // match CSS transition
    }, 1000); // change every 3s

    return () => clearInterval(interval);
  }, [currentIndex, onComplete]); // depend on currentIndex and onComplete

  return (
    <div className={styles.textContainer}>
      <p className={styles.mainText}>Hang tight. We're putting together your score.</p>
      <p className={`${styles.statusText} ${isVisible ? styles.statusTextFadeIn : styles.statusTextFadeOut}`}>
        {STATUS_MESSAGES[currentIndex]}
      </p>
    </div>
  );
}

function EncryptionFooter() {
  return (
    <div className={styles.encryptionFooter}>
      <p className={styles.encryptionText}>Your data is encrypted and protected</p>
    </div>
  );
}

export default function DataProcessing({ onComplete }: DataProcessingProps) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <LoadingAnimation />
        <TextContent onComplete={onComplete} />
        <EncryptionFooter />
      </div>
    </div>
  );
}