import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import svgPaths from "../imports/svg-bos869ogsu";
import imgEllipse7 from "figma:asset/9b0b144e58086cdc7a06ddf4fde1d5e0491a12cb.png";
import styles from './7_StabilityScore.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Your Stability Score</p>
      <p className={styles.headerSubtitle}>A helpful look at how your money habits support this application.</p>
    </div>
  );
}

function Score({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentScore = Math.round(easeOut * score);
      
      setDisplayScore(currentScore);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div className={styles.scoreContainer}>
      <p className={styles.scoreLabel}>Score</p>
      <p className={styles.scoreValue}>{displayScore}</p>
    </div>
  );
}

function Frame({ score }: { score: number }) {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.frameInner}>
        <Score score={score} />
      </div>
      <div className={styles.frameBorder} />
    </div>
  );
}

function Gauge({ score }: { score: number }) {
  /** ARC DIMENSIONS — ROUNDED TO NEAREST EVEN NUMBERS */
  const ARC_CONTAINER_SIZE = 292;     // .arcContainer width/height (stays even)
  const ARC_INNER_DIAMETER = 262;     // 261.58 → rounded to 262
  const radius = ARC_INNER_DIAMETER / 2 - 3; // try -1 or +1


  /** ARC POSITION — ROUNDED */
  const arcOffsetLeft = 28;  // from CSS (already even)
  const arcOffsetTop = 0;

  /** TRUE ARC CENTER — ROUNDED */
  const centerX = arcOffsetLeft + ARC_CONTAINER_SIZE / 2; // 28 + 146 = 174
  const centerY = arcOffsetTop + ARC_CONTAINER_SIZE / 2;  // 0 + 146 = 146

  /** ANGLES */
  const startAngle = 180;
  const endAngle = 360;

  /** ANIMATED PROGRESS VALUE */
  const progress = useMotionValue(0);

  /** Position transformation along the arc */
  const circleLeft = useTransform(progress, (p) => {
    const scoreAngle = startAngle + ((endAngle - startAngle) * (p / 100));
    const angleRad = (scoreAngle * Math.PI) / 180;
    return centerX + radius * Math.cos(angleRad);
  });

  const circleTop = useTransform(progress, (p) => {
    const scoreAngle = startAngle + ((endAngle - startAngle) * (p / 100));
    const angleRad = (scoreAngle * Math.PI) / 180;
    return centerY + radius * Math.sin(angleRad);
  });

  /** Animation driver */
  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);

      // easeOut cubic
      const eased = 1 - Math.pow(1 - t, 3);
      progress.set(eased * score);

      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [score, progress]);

  
  return (
    <div className={styles.gaugeContainer}>
      <Frame score={score} />
      
      {/* Background arc image */}
      <div className={styles.arcContainer}>
        <div className={styles.arcRotated}>
          <div className={styles.arcInner}>
            <div className={styles.arcImageWrapper}>
              <img alt="" className={styles.arcImage} height="196.185" src={imgEllipse7} width="261.58" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Green segment (Ellipse 8) */}
      <div className={styles.arcContainer}>
        <div className={styles.arcRotated}>
          <div className={styles.arcInner}>
            <div className={styles.greenSegment}>
              <svg className={styles.segmentSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 29 138">
                <path d={svgPaths.p172d3870} fill="#28B67A" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yellow segment (Ellipse 9) */}
      <div className={styles.arcContainer}>
        <div className={styles.arcRotated}>
          <div className={styles.arcInner}>
            <div className={styles.yellowSegment}>
              <svg className={styles.segmentSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 51 46">
                <path d={svgPaths.ped89f00} fill="#FDC530" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orange segment (Ellipse 10) */}
      <div className={styles.arcContainer}>
        <div className={styles.arcRotated}>
          <div className={styles.arcInner}>
            <div className={styles.orangeSegment}>
              <svg className={styles.segmentSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
                <path d={svgPaths.p3d7da000} fill="#E8804C" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Red segment (Ellipse 11) */}
      <div className={styles.arcContainer}>
        <div className={styles.arcRotated}>
          <div className={styles.arcInner}>
            <div className={styles.redSegment}>
              <svg className={styles.segmentSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 97 160">
                <path d={svgPaths.p3ed2ed00} fill="#DB0011" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated circle indicator */}
      <motion.div
        className={styles.circleIndicatorContainer}
        style={{ left: circleLeft, top: circleTop }}
      >
        <div className={styles.circleRotated}>
          <div className={styles.circleInner}>
            <div className={styles.circleSvgWrapper}>
              <svg className={styles.circleSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="19.6546" cy="19.6546" fill="white" r="15.6546" stroke="#28B67A" strokeWidth="8" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ScoreText() {
  return (
    <div className={styles.scoreText}>
      <p className={styles.scoreTextTitle}>You're in great shape!</p>
      <p className={styles.scoreTextDescription}>Healthy balances and consistent bills are boosting your score.</p>
    </div>
  );
}

function Score1({ score }: { score: number }) {
  return (
    <div className={styles.scoreSection}>
      <Gauge score={score} />
      <ScoreText />
    </div>
  );
}

function Icon() {
  return (
    <div className={styles.icon}>
      <svg className={styles.iconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <g></g>
          <circle cx="9" cy="9" fill="#00847F" r="9" />
          <path d={svgPaths.p2801d500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function Success() {
  return (
    <div className={styles.successIcon}>
      <Icon />
    </div>
  );
}

function Content({ text }: { text: string }) {
  return (
    <div className={styles.listContent}>
      <p className={styles.listText}>{text}</p>
    </div>
  );
}

function Helping({ text }: { text: string }) {
  return (
    <div className={styles.listItem}>
      <Success />
      <Content text={text} />
    </div>
  );
}

function Details() {
  return (
    <div className={styles.detailsList}>
      <Helping text="Strong on-time payment history" />
      <Helping text="Stable deposits across accounts" />
      <Helping text="Consistent invoices paid" />
    </div>
  );
}

function HelpingYourScore() {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Helping your score</p>
      <Details />
    </div>
  );
}

function WarningIcon() {
  return (
    <div className={styles.icon}>
      <svg className={styles.iconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <g></g>
          <circle cx="9" cy="9" fill="#FFB006" r="9" />
          <g>
            <path d={svgPaths.pb121c80} fill="white" />
            <path d={svgPaths.p3d68b000} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Warning() {
  return (
    <div className={styles.successIcon}>
      <WarningIcon />
    </div>
  );
}

function ImprovementContent({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.improvementContent}>
      <p className={styles.improvementTitle}>{title}</p>
      <p className={styles.improvementSubtitle}>{subtitle}</p>
    </div>
  );
}

function Improvements({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.listItem}>
      <Warning />
      <ImprovementContent title={title} subtitle={subtitle} />
    </div>
  );
}

function Details1() {
  return (
    <div className={styles.detailsList}>
      <Improvements title="Minor income swings" subtitle="Add a secondary account (if you have one)" />
      <Improvements title="High recent spend spike" subtitle="Smooth next month's outgoings" />
    </div>
  );
}

function AreasForImprovement() {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Areas for improvement</p>
      <Details1 />
    </div>
  );
}

function ScoreAnalysisInfo() {
  return (
    <div className={styles.analysisInfo}>
      <HelpingYourScore />
      <AreasForImprovement />
    </div>
  );
}

function InfoIcon() {
  return (
    <div className={styles.icon}>
      <svg className={styles.iconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <g></g>
          <circle cx="9" cy="9" fill="#305A85" r="9" />
          <g>
            <path d={svgPaths.p19a91380} fill="white" />
            <path d={svgPaths.p3ddcf200} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Information() {
  return (
    <div className={styles.successIcon}>
      <InfoIcon />
    </div>
  );
}

function StatusIconContainer() {
  return (
    <div className={styles.statusIconContainer}>
      <Information />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.messageText}>Reviewing won't affect your credit score</p>
    </div>
  );
}

function NotificationContextual() {
  return (
    <div className={styles.notification}>
      <div className={styles.notificationBorder} />
      <div className={styles.notificationInner}>
        <div className={styles.notificationContent}>
          <StatusIconContainer />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
}

function ElementsContainer() {
  return (
    <div className={styles.buttonElements}>
      <p className={styles.buttonText}>Review your loan</p>
    </div>
  );
}

function OnLightButtonPrimary() {
  return (
    <div className={styles.primaryButton}>
      <div className={styles.buttonInner}>
        <div className={styles.buttonContentWrapper}>
          <ElementsContainer />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className={styles.ctaSection}>
      <NotificationContextual />
      <OnLightButtonPrimary />
    </div>
  );
}

function Content5({ score }: { score: number }) {
  return (
    <div className={styles.mainContent}>
      <Score1 score={score} />
      <ScoreAnalysisInfo />
      <Cta />
    </div>
  );
}

export default function Component7StabilityScore() {
  const userScore = 84;
  
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Header />
          <div className={styles.dividerWrapper}>
            <div className={styles.dividerContainer}>
              <svg className={styles.divider} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Content5 score={userScore} />
        </div>
      </div>
    </div>
  );
}