import { useState, useEffect } from "react";
import api from "../api/axios";
import svgPaths from "../imports/svg-jm278l1k32";
import styles from "./6_DataProcessing.module.css";
import TechLoader from "./TechLoader";

const STATUS_MESSAGES = [
    "Verifying linked accounts…",
    "Spotting regular payments…",
    "Summarising income patterns…",
    "Checking stability indicators…",
    "Preparing your result…",
];

interface DataProcessingProps {
    onComplete?: (stabilityScore?: number) => void;
}

function LoadingAnimation() {
    return (
        <div className={styles.loadingContainer}>
            <TechLoader size={263} />
        </div>
    );
}

function TextContent({
    onComplete,
}: {
    onComplete?: (stabilityScore?: number) => void;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // if we're on the last message, wait longer (3s instead of 1s) to ensure fetch completes
        if (currentIndex === STATUS_MESSAGES.length - 1) {
            const timeout = setTimeout(() => {
                // Retrieve the fetched score and pass it
                const score = (window as any).__stabilityScore;
                console.log("Calling onComplete with score:", score);
                onComplete?.(score);
            }, 5000); // increased from 1000 to 3000
            return () => clearTimeout(timeout);
        }

        const interval = setInterval(() => {
            // Fade out
            setIsVisible(false);

            // After fade out, change text and fade in
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setIsVisible(true);
            }, 300);
        }, 1000);

        return () => clearInterval(interval);
    }, [currentIndex, onComplete]);

    return (
        <div className={styles.textContainer}>
            <p className={styles.mainText}>
                Hang tight. We're putting together your score.
            </p>
            <p
                className={`${styles.statusText} ${
                    isVisible
                        ? styles.statusTextFadeIn
                        : styles.statusTextFadeOut
                }`}
            >
                {STATUS_MESSAGES[currentIndex]}
            </p>
        </div>
    );
}
// ...rest of component...

function EncryptionFooter() {
    return (
        <div className={styles.encryptionFooter}>
            <p className={styles.encryptionText}>
                Your data is encrypted and protected
            </p>
        </div>
    );
}

export default function DataProcessing({ onComplete }: DataProcessingProps) {
    // Fetch in background without affecting UI
    useEffect(() => {
        let mounted = true;

        const fetchScore = async () => {
            try {
                console.log("Starting fetch...");
                // Use fetch directly instead of axios to bypass proxy issues
                const res = await fetch("/api/loan-approval", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const data = await res.json();
                const stability = data?.stability_score;
                console.log("Fetched response:", data);

                if (mounted) {
                    console.log("Fetched stability score:", stability);
                    (window as any).__stabilityScore =
                        typeof stability === "number" ? stability : undefined;
                }
            } catch (err) {
                console.error("DataProcessing fetch failed", err);
                if (mounted) {
                    (window as any).__stabilityScore = undefined;
                }
            }
        };

        fetchScore();

        return () => {
            mounted = false;
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
}
