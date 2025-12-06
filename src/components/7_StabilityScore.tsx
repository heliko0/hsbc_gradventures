import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import svgPaths from '../imports/svg-bos869ogsu';
import svgPathsModal from '../imports/svg-vwo2sfhrp7';
import imgEllipse7 from 'figma:asset/9b0b144e58086cdc7a06ddf4fde1d5e0491a12cb.png';
import styles from './7_StabilityScore.module.css';

// ============================================================================
// TYPES
// ============================================================================

type ScoreProps = {
  score: number;
};

type FrameProps = {
  score: number;
};

type GaugeProps = {
  score: number;
};

type ScoreTextProps = {
  children?: React.ReactNode;
};

type Score1Props = {
  score: number;
};

type Frame2Props = {
  onOpenModal: () => void;
};

type Frame1Props = {
  onOpenModal: () => void;
};

type CloseButtonProps = {
  onClose: () => void;
};

type ModalProps = {
  onClose: () => void;
};

type IconProps = {
  children?: React.ReactNode;
};

type SuccessProps = {
  children?: React.ReactNode;
};

type ContentProps = {
  text: string;
};

type HelpingProps = {
  text: string;
};

type DetailsProps = {
  children?: React.ReactNode;
};

type ImprovementContentProps = {
  title: string;
  subtitle: string;
};

type ImprovementsProps = {
  title: string;
  subtitle: string;
};

type Details1Props = {
  children?: React.ReactNode;
};

type ScoreAnalysisInfoProps = {
  children?: React.ReactNode;
};

type CtaProps = {
  onContinue: () => void;
};

type Content5Props = {
  score: number;
  onOpenModal: () => void;
  onContinue: () => void;
};

export type StabilityScoreProps = {
  onContinue: () => void;
  stabilityScore?: number;
};

// ============================================================================
// CONSTANTS
// ============================================================================

const ARC_CONTAINER_SIZE = 292;
const ARC_INNER_DIAMETER = 261.58;
const ARC_CENTER_X = 174; // 50% of 348px
const ARC_CENTER_Y = 146; // 292px / 2
const ARC_ROTATION_DEG = 352.876;
const ARC_START_ANGLE = 180;
const ARC_END_ANGLE = 360;
const ANIMATION_DURATION = 2000;

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC = () => (
  <header className={styles.header}>
    <p className={styles.headerTitle}>Your Stability Score</p>
    <p className={styles.headerSubtitle}>
      A helpful look at how your money habits support this application.
    </p>
  </header>
);

// ============================================================================
// GAUGE COMPONENTS
// ============================================================================

const Score: React.FC<ScoreProps> = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = (): void => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

      // Ease out cubic
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
};

const Frame: React.FC<FrameProps> = ({ score }) => (
  <div className={styles.frameContainer}>
    <div className={styles.frameInner}>
      <Score score={score} />
    </div>
    <div className={styles.frameBorder} aria-hidden="true" />
  </div>
);

const ArcSegment: React.FC<{ className: string; viewBox: string; pathData: string; color: string }> = ({
  className,
  viewBox,
  pathData,
  color,
}) => (
  <div className={styles.arcContainer}>
    <div className={styles.arcRotated}>
      <div className={styles.arcInner}>
        <div className={className}>
          <svg
            className={styles.segmentSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox={viewBox}
          >
            <path d={pathData} fill={color} />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const BackgroundArc: React.FC = () => (
  <div className={styles.arcContainer}>
    <div className={styles.arcRotated}>
      <div className={styles.arcInner}>
        <div className={styles.arcImageWrapper}>
          <img
            alt=""
            className={styles.arcImage}
            height="196.185"
            src={imgEllipse7}
            width="261.58"
          />
        </div>
      </div>
    </div>
  </div>
);

const CircleIndicator: React.FC<{ circleLeft: any; circleTop: any }> = ({ circleLeft, circleTop }) => (
  <motion.div
    className={styles.circleIndicatorContainer}
    style={{ left: circleLeft, top: circleTop }}
  >
    <div className={styles.circleIndicatorInner}>
      <div className={styles.circleSvgWrapper}>
        <svg
          className={styles.circleSvg}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 40"
        >
          <circle
            cx="19.6546"
            cy="19.6546"
            fill="white"
            r="15.6546"
            stroke="#28B67A"
            strokeWidth="8"
          />
        </svg>
      </div>
    </div>
  </motion.div>
);

const Gauge: React.FC<GaugeProps> = ({ score }) => {
  const radius = ARC_INNER_DIAMETER / 2;
  const progress = useMotionValue(0);

  const circleLeft = useTransform(progress, (p) => {
    const scoreAngle = ARC_START_ANGLE + (ARC_END_ANGLE - ARC_START_ANGLE) * (p / 1000);
    const actualAngle = scoreAngle + ARC_ROTATION_DEG;
    const angleRad = (actualAngle * Math.PI) / 180;
    return ARC_CENTER_X + radius * Math.cos(angleRad);
  });

  const circleTop = useTransform(progress, (p) => {
    const scoreAngle = ARC_START_ANGLE + (ARC_END_ANGLE - ARC_START_ANGLE) * (p / 1000);
    const actualAngle = scoreAngle + ARC_ROTATION_DEG;
    const angleRad = (actualAngle * Math.PI) / 180;
    return ARC_CENTER_Y + radius * Math.sin(angleRad);
  });

  useEffect(() => {
    const startTime = Date.now();

    const animate = (): void => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / ANIMATION_DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      progress.set(eased * score);

      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [score, progress]);

  return (
    <div className={styles.gaugeContainer}>
      <Frame score={score} />
      <BackgroundArc />
      <ArcSegment
        className={styles.greenSegment}
        viewBox="0 0 29 138"
        pathData={svgPaths.p172d3870}
        color="#28B67A"
      />
      <ArcSegment
        className={styles.yellowSegment}
        viewBox="0 0 51 46"
        pathData={svgPaths.ped89f00}
        color="#FDC530"
      />
      <ArcSegment
        className={styles.orangeSegment}
        viewBox="0 0 91 22"
        pathData={svgPaths.p3d7da000}
        color="#E8804C"
      />
      <ArcSegment
        className={styles.redSegment}
        viewBox="0 0 97 160"
        pathData={svgPaths.p3ed2ed00}
        color="#DB0011"
      />
      <CircleIndicator circleLeft={circleLeft} circleTop={circleTop} />
    </div>
  );
};

// ============================================================================
// SCORE DISPLAY COMPONENTS
// ============================================================================

const ScoreText: React.FC<ScoreTextProps> = () => (
  <div className={styles.scoreText}>
    <p className={styles.scoreTextTitle}>You're in great shape!</p>
    <p className={styles.scoreTextDescription}>
      Healthy balances and consistent bills are boosting your score.
    </p>
  </div>
);

const Score1: React.FC<Score1Props> = ({ score }) => (
  <section className={styles.scoreSection}>
    <Gauge score={score} />
    <ScoreText />
  </section>
);

// ============================================================================
// INFO PANEL COMPONENTS
// ============================================================================

const InfoLink: React.FC<Frame2Props> = ({ onOpenModal }) => (
  <div className={styles.linkContainer}>
    <button
      type="button"
      onClick={onOpenModal}
      className={styles.linkButton}
    >
      <span className={styles.linkText}>Why is this different?</span>
      <span> ⓘ</span>
    </button>
  </div>
);

const InfoPanel: React.FC<Frame1Props> = ({ onOpenModal }) => (
  <aside className={styles.greyPanel}>
    <div className={styles.greyPanelInner}>
      <div className={styles.greyPanelContent}>
        <p className={styles.greyPanelText}>
          <span>Your </span>
          <span>hybrid </span>
          <span>score is </span>
          <span className={styles.greyPanelBold}>140 points higher</span>
          <span> than a traditional credit score</span>
        </p>
        <InfoLink onOpenModal={onOpenModal} />
      </div>
    </div>
  </aside>
);

// ============================================================================
// ICON COMPONENTS
// ============================================================================

const SuccessIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 18 18"
  >
    <circle cx="9" cy="9" fill="#00847F" r="9" />
    <path d={svgPaths.p2801d500} fill="white" />
  </svg>
);

const WarningIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 18 18"
  >
    <circle cx="9" cy="9" fill="#FFB006" r="9" />
    <path d={svgPaths.pb121c80} fill="white" />
    <path d={svgPaths.p3d68b000} fill="white" />
  </svg>
);

const InfoIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 18 18"
  >
    <circle cx="9" cy="9" fill="#305A85" r="9" />
    <path d={svgPaths.p19a91380} fill="white" />
    <path d={svgPaths.p3ddcf200} fill="white" />
  </svg>
);

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.icon}>{children}</div>
);

// ============================================================================
// ANALYSIS LIST COMPONENTS
// ============================================================================

const HelpingItem: React.FC<HelpingProps> = ({ text }) => (
  <div className={styles.listItem}>
    <div className={styles.successIcon}>
      <IconWrapper>
        <SuccessIcon />
      </IconWrapper>
    </div>
    <div className={styles.listContent}>
      <p className={styles.listText}>{text}</p>
    </div>
  </div>
);

const HelpingList: React.FC<DetailsProps> = () => (
  <div className={styles.detailsList}>
    <HelpingItem text="Strong on-time payment history" />
    <HelpingItem text="Stable deposits across accounts" />
    <HelpingItem text="Consistent invoices paid" />
  </div>
);

const HelpingYourScore: React.FC = () => (
  <section className={styles.section}>
    <p className={styles.sectionTitle}>Helping your score</p>
    <HelpingList />
  </section>
);

const ImprovementItem: React.FC<ImprovementsProps> = ({ title, subtitle }) => (
  <div className={styles.listItem}>
    <div className={styles.successIcon}>
      <IconWrapper>
        <WarningIcon />
      </IconWrapper>
    </div>
    <div className={styles.improvementContent}>
      <p className={styles.improvementTitle}>{title}</p>
      <p className={styles.improvementSubtitle}>{subtitle}</p>
    </div>
  </div>
);

const ImprovementList: React.FC<Details1Props> = () => (
  <div className={styles.detailsList}>
    <ImprovementItem
      title="Minor income swings"
      subtitle="Add a secondary account (if you have one)"
    />
    <ImprovementItem
      title="High recent spend spike"
      subtitle="Smooth next month's outgoings"
    />
  </div>
);

const AreasForImprovement: React.FC = () => (
  <section className={styles.section}>
    <p className={styles.sectionTitle}>Areas for improvement</p>
    <ImprovementList />
  </section>
);

const ScoreAnalysis: React.FC<ScoreAnalysisInfoProps> = () => (
  <div className={styles.analysisInfo}>
    <HelpingYourScore />
    <AreasForImprovement />
  </div>
);

// ============================================================================
// MODAL COMPONENTS
// ============================================================================

const CloseIcon: React.FC = () => (
  <div className={styles.closeIcon}>
    <svg
      className={styles.closeIconSvg}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <g>
        <g></g>
        <path
          clipRule="evenodd"
          d={svgPathsModal.p6810480}
          fill="#333333"
          fillRule="evenodd"
        />
      </g>
    </svg>
  </div>
);

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
  <div className={styles.closeButtonWrapper}>
    <div className={styles.closeButtonInner}>
      <div className={styles.closeButtonContent}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  </div>
);

const ModalSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className={styles.modalSection}>
    <p className={styles.modalSectionTitle}>{title}</p>
    {children}
  </div>
);

const ModalListItem: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.modalListItem}>
    <div className={styles.successIcon}>
      <IconWrapper>
        <SuccessIcon />
      </IconWrapper>
    </div>
    <p className={styles.modalListText}>{text}</p>
  </div>
);

const ModalContent: React.FC = () => (
  <div className={styles.modalContent}>
    <div className={styles.modalContentInner}>
      <div className={styles.modalContentWrapper}>
        <div className={styles.modalBody}>
          <p className={styles.modalTitle}>Why your hybrid score can be different</p>
          <div className={styles.modalSections}>
            <ModalSection title="What traditional scores use">
              <p className={styles.modalSectionText}>
                Traditional credit scores mostly look at:
                <br />
                {` • Credit cards, loans and overdrafts`}
                <br />
                {` • How long you've had them`}
                <br />
                {` • Missed or late payments`}
                <br />
                {` • How much of your credit you're using`}
              </p>
            </ModalSection>

            <ModalSection title="What alternative data adds to your score">
              <div className={styles.modalSectionTextMulti}>
                <p>
                  Your hybrid Stability Score uses alternative data to add more of your
                  real-life finances:
                  <br />
                  {` • Regular payments like rent, utilities and phone bills`}
                  <br />
                  {` • Income coming into your accounts`}
                  <br />
                  {` • How steady your balances are over time`}
                </p>
                <p>
                  This can give you credit for good money habits, even if you're newer to
                  credit or don't use many credit products.
                </p>
              </div>
            </ModalSection>

            <ModalSection title="What this means for you">
              <div className={styles.modalSectionContent}>
                <p className={styles.modalSectionText}>
                  Your hybrid score can be higher this time because it's also spotting:
                </p>
                <div className={styles.modalDetailsList}>
                  <ModalListItem text="Strong on-time payment history" />
                  <ModalListItem text="Stable deposits across accounts" />
                  <ModalListItem text="Consistent invoices paid" />
                </div>
                <p className={styles.modalSectionText}>
                  Together, those patterns suggest you may be more stable than your
                  traditional score alone shows.
                </p>
              </div>
            </ModalSection>

            <ModalSection title="Does this change my credit score elsewhere?">
              <div className={styles.modalSectionTextMulti}>
                <p>
                  {` No. Your Stability Score is specific to this application and how we assess affordability. Other lenders and credit agencies may use different methods. `}
                </p>
                <p>
                  However, if you accept a loan agreement with us, this will then affect
                  your credit score.
                </p>
              </div>
            </ModalSection>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Modal: React.FC<ModalProps> = ({ onClose }) => (
  <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <CloseButton onClose={onClose} />
      <ModalContent />
    </div>
  </div>
);

// ============================================================================
// CTA COMPONENTS
// ============================================================================

const NotificationBanner: React.FC = () => (
  <div className={styles.notificationBanner}>
    <div className={styles.notificationBorder} aria-hidden="true" />
    <div className={styles.notificationContent}>
      <div className={styles.notificationIconContainer}>
        <div className={styles.successIcon}>
          <IconWrapper>
            <InfoIcon />
          </IconWrapper>
        </div>
      </div>
      <div className={styles.notificationMessageContainer}>
        <p className={styles.notificationText}>Reviewing won't affect your credit score</p>
      </div>
    </div>
  </div>
);

const PrimaryButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.primaryButton}>
    Review your loan
  </button>
);

const Cta: React.FC<CtaProps> = ({ onContinue }) => (
  <section className={styles.ctaSection}>
    <NotificationBanner />
    <PrimaryButton onClick={onContinue} />
  </section>
);

// ============================================================================
// MAIN CONTENT CONTAINER
// ============================================================================

const Content: React.FC<Content5Props> = ({ score, onOpenModal, onContinue }) => (
  <main className={styles.mainContent}>
    <Score1 score={score} />
    <InfoPanel onOpenModal={onOpenModal} />
    <ScoreAnalysis />
    <Cta onContinue={onContinue} />
  </main>
);

// ============================================================================
// STABILITY SCORE SCREEN
// ============================================================================

const StabilityScore: React.FC<StabilityScoreProps> = ({ onContinue, stabilityScore }) => {
  const score = typeof stabilityScore === 'number' ? stabilityScore : 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (): void => setIsModalOpen(true);
  const handleCloseModal = (): void => setIsModalOpen(false);

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Header />

        <div className={styles.dividerContainer}>
          <div className={styles.dividerLineWrapper}>
            <svg className={styles.dividerSvg} fill="none" viewBox="0 0 348 1">
              <line x2="348" y1="0.5" y2="0.5" stroke="#9B9B9B" />
            </svg>
          </div>
        </div>

        <Content score={score} onOpenModal={handleOpenModal} onContinue={onContinue} />
      </div>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default StabilityScore;