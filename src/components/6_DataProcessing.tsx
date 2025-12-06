import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import svgPaths from '../imports/svg-jm278l1k32';
import styles from './6_DataProcessing.module.css';
import TechLoader from './TechLoader';

// ============================================================================
// TYPES
// ============================================================================

type TextContentProps = {
  onComplete?: (stabilityScore?: number) => void;
};

export type DataProcessingProps = {
  onComplete?: (stabilityScore?: number) => void;
};

// ============================================================================
// CONSTANTS
// ============================================================================

const STATUS_MESSAGES = [
  'Verifying linked accounts…',
  'Spotting regular payments…',
  'Summarising income patterns…',
  'Checking stability indicators…',
  'Preparing your result…',
] as const;

const STATUS_MESSAGE_DURATION = 1000;
const MINIMUM_FINAL_MESSAGE_DURATION = 2000;
const FADE_TRANSITION_DURATION = 300;

// ============================================================================
// COMPONENTS
// ============================================================================

const LoadingAnimation: React.FC = () => (
  <div className={styles.loadingContainer}>
    <TechLoader size={263} />
  </div>
);

const TextContent: React.FC<TextContentProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const isLastMessage = currentIndex === STATUS_MESSAGES.length - 1;

  useEffect(() => {
    // On final message, wait for API to complete with minimum 2s delay
    if (isLastMessage) {
      const startTime = Date.now();
      
      const checkAndComplete = () => {
        const score = (window as any).__stabilityScore as number | undefined;
        const fetchComplete = (window as any).__stabilityScoreFetchComplete as boolean;
        const elapsed = Date.now() - startTime;
        
        // Check if both conditions are met: minimum time passed AND fetch completed
        if (elapsed >= MINIMUM_FINAL_MESSAGE_DURATION && fetchComplete) {
          console.log('Calling onComplete with score:', score);
          onComplete?.(score);
        } else {
          // Check again in 100ms
          setTimeout(checkAndComplete, 100);
        }
      };
      
      checkAndComplete();
      return; // Exit early to prevent setting up the interval below
    }

    // Cycle through status messages with fade effect
    const interval = setInterval(() => {
      setIsVisible(false);

      const fadeTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsVisible(true);
      }, FADE_TRANSITION_DURATION);

      return () => clearTimeout(fadeTimeout);
    }, STATUS_MESSAGE_DURATION);

    return () => clearInterval(interval);
  }, [currentIndex, isLastMessage, onComplete]);

  return (
    <div className={styles.textContainer}>
      <p className={styles.mainText}>
        Hang tight. We're putting together your score.
      </p>
      <p
        className={`${styles.statusText} ${
          isVisible ? styles.statusTextFadeIn : styles.statusTextFadeOut
        }`}
      >
        {STATUS_MESSAGES[currentIndex]}
      </p>
    </div>
  );
};

const EncryptionFooter: React.FC = () => (
  <footer className={styles.encryptionFooter}>
    <p className={styles.encryptionText}>
      Your data is encrypted and protected
    </p>
  </footer>
);

// ============================================================================
// DATA FETCHING
// ============================================================================

/**
 * Fetches the stability score from the API and stores it in window.__stabilityScore.
 * The score is later retrieved by TextContent when the processing completes.
 */
const fetchStabilityScore = async (): Promise<void> => {
  try {
    console.log('Starting fetch...');
    const res = await fetch('/api/loan-approval', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    const stabilityScore = data?.stability_score as number | undefined;
    console.log('Fetched response:', data);
    console.log('Fetched stability score:', stabilityScore);

    (window as any).__stabilityScore =
      typeof stabilityScore === 'number' ? stabilityScore : undefined;
    (window as any).__stabilityScoreFetchComplete = true;
  } catch (error) {
    console.error('DataProcessing fetch failed:', error);
    (window as any).__stabilityScore = undefined;
    (window as any).__stabilityScoreFetchComplete = true;
  }
};

// ============================================================================
// DATA PROCESSING SCREEN
// ============================================================================

const DataProcessing: React.FC<DataProcessingProps> = ({ onComplete }) => {
  // Fetch stability score in background without blocking UI
  useEffect(() => {
    let isMounted = true;

    const initiateFetch = async (): Promise<void> => {
      await fetchStabilityScore();
      // Ensure component is still mounted before any state updates
      if (!isMounted) {
        console.log('Component unmounted, discarding fetch result');
      }
    };

    initiateFetch();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <LoadingAnimation />
        <TextContent onComplete={onComplete} />
        <EncryptionFooter />
      </div>
    </div>
  );
};

export default DataProcessing;