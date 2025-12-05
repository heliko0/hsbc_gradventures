import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import svgPaths from "../imports/svg-bos869ogsu";
import svgPathsModal from "../imports/svg-vwo2sfhrp7";
import imgEllipse7 from "figma:asset/9b0b144e58086cdc7a06ddf4fde1d5e0491a12cb.png";
import styles from "./7_StabilityScore.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <p className={styles.headerTitle}>Your Stability Score</p>
            <p className={styles.headerSubtitle}>
                A helpful look at how your money habits support this
                application.
            </p>
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
    /** ARC DIMENSIONS */
    const ARC_CONTAINER_SIZE = 292;
    const ARC_INNER_DIAMETER = 261.58;
    const radius = ARC_INNER_DIAMETER / 2;

    /** ARC CENTER POSITION - using centered positioning */
    // arcContainer is centered at 50% with translateX(-50%)
    // So its center is at 50% of gaugeContainer (348px max)
    // The center of the 292px container is at 146px from its own edge
    const centerX = 174; // 50% of 348px
    const centerY = 146; // 292px / 2

    /** ROTATION OFFSET */
    const rotationDeg = 352.876; // The arc is rotated by this amount

    /** ANGLES */
    const startAngle = 180;
    const endAngle = 360;

    /** ANIMATED PROGRESS VALUE */
    const progress = useMotionValue(0);

    /** Position transformation along the arc - accounting for rotation */
    const circleLeft = useTransform(progress, (p) => {
        const scoreAngle = startAngle + (endAngle - startAngle) * (p / 1000);
        // Add the rotation offset to get the actual visual position
        const actualAngle = scoreAngle + rotationDeg;
        const angleRad = (actualAngle * Math.PI) / 180;
        return centerX + radius * Math.cos(angleRad);
    });

    const circleTop = useTransform(progress, (p) => {
        const scoreAngle = startAngle + (endAngle - startAngle) * (p / 1000);
        // Add the rotation offset to get the actual visual position
        const actualAngle = scoreAngle + rotationDeg;
        const angleRad = (actualAngle * Math.PI) / 180;
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

            {/* Green segment (Ellipse 8) */}
            <div className={styles.arcContainer}>
                <div className={styles.arcRotated}>
                    <div className={styles.arcInner}>
                        <div className={styles.greenSegment}>
                            <svg
                                className={styles.segmentSvg}
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 29 138"
                            >
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
                            <svg
                                className={styles.segmentSvg}
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 51 46"
                            >
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
                            <svg
                                className={styles.segmentSvg}
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 91 22"
                            >
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
                            <svg
                                className={styles.segmentSvg}
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 97 160"
                            >
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
        </div>
    );
}

function ScoreText() {
    return (
        <div className={styles.scoreText}>
            <p className={styles.scoreTextTitle}>You're in great shape!</p>
            <p className={styles.scoreTextDescription}>
                Healthy balances and consistent bills are boosting your score.
            </p>
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

function Frame2({ onOpenModal }: { onOpenModal: () => void }) {
    return (
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
}

function Frame1({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <div className={styles.greyPanel}>
            <div className={styles.greyPanelInner}>
                <div className={styles.greyPanelContent}>
                    <p className={styles.greyPanelText}>
                        <span>Your </span>
                        <span>hybrid </span>
                        <span>score is </span>
                        over{" "}
                        <span className={styles.greyPanelBold}>
                            180 points higher
                        </span>
                        <span> than a traditional credit score</span>
                    </p>
                    <Frame2 onOpenModal={onOpenModal} />
                </div>
            </div>
        </div>
    );
}

function CloseIcon() {
    return (
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
}

function CloseButton({ onClose }: { onClose: () => void }) {
    return (
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
}

function ModalContent() {
    return (
        <div className={styles.modalContent}>
            <div className={styles.modalContentInner}>
                <div className={styles.modalContentWrapper}>
                    <div className={styles.modalBody}>
                        <p className={styles.modalTitle}>
                            Why your hybrid score can be different
                        </p>
                        <div className={styles.modalSections}>
                            <div className={styles.modalSection}>
                                <p className={styles.modalSectionTitle}>
                                    What traditional scores use
                                </p>
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
                            </div>

                            <div className={styles.modalSection}>
                                <p className={styles.modalSectionTitle}>
                                    What alternative data adds to your score
                                </p>
                                <div className={styles.modalSectionTextMulti}>
                                    <p>
                                        Your hybrid Stability Score uses
                                        alternative data to add more of your
                                        real-life finances:
                                        <br />
                                        {` • Regular payments like rent, utilities and phone bills`}
                                        <br />
                                        {` • Income coming into your accounts`}
                                        <br />
                                        {` • How steady your balances are over time`}
                                    </p>
                                    <p>
                                        This can give you credit for good money
                                        habits, even if you're newer to credit
                                        or don't use many credit products.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <p className={styles.modalSectionTitle}>
                                    What this means for you
                                </p>
                                <div className={styles.modalSectionContent}>
                                    <p className={styles.modalSectionText}>
                                        Your hybrid score can be higher this
                                        time because it's also spotting:
                                    </p>
                                    <div className={styles.modalDetailsList}>
                                        <div className={styles.modalListItem}>
                                            <Success />
                                            <p className={styles.modalListText}>
                                                Strong on-time payment history
                                            </p>
                                        </div>
                                        <div className={styles.modalListItem}>
                                            <Success />
                                            <p className={styles.modalListText}>
                                                Stable deposits across accounts
                                            </p>
                                        </div>
                                        <div className={styles.modalListItem}>
                                            <Success />
                                            <p className={styles.modalListText}>
                                                Consistent invoices paid
                                            </p>
                                        </div>
                                    </div>
                                    <p className={styles.modalSectionText}>
                                        Together, those patterns suggest you may
                                        be more stable than your traditional
                                        score alone shows.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.modalSection}>
                                <p className={styles.modalSectionTitle}>
                                    Does this change my credit score elsewhere?
                                </p>
                                <div className={styles.modalSectionTextMulti}>
                                    <p>{` No. Your Stability Score is specific to this application and how we assess affordability. Other lenders and credit agencies may use different methods. `}</p>
                                    <p>
                                        However, if you accept a loan agreement
                                        with us, this will then affect your
                                        credit score.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Modal({ onClose }: { onClose: () => void }) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClose={onClose} />
                <ModalContent />
            </div>
        </div>
    );
}

function Icon() {
    return (
        <div className={styles.icon}>
            <svg
                className={styles.iconSvg}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 18"
            >
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
            <svg
                className={styles.iconSvg}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 18"
            >
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

function ImprovementContent({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className={styles.improvementContent}>
            <p className={styles.improvementTitle}>{title}</p>
            <p className={styles.improvementSubtitle}>{subtitle}</p>
        </div>
    );
}

function Improvements({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
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
            <Improvements
                title="Minor income swings"
                subtitle="Add a secondary account (if you have one)"
            />
            <Improvements
                title="High recent spend spike"
                subtitle="Smooth next month's outgoings"
            />
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
            <svg
                className={styles.iconSvg}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 18"
            >
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

function NotificationIconContainer() {
    return (
        <div className={styles.notificationIconContainer}>
            <Information />
        </div>
    );
}

function NotificationMessageContainer() {
    return (
        <div className={styles.notificationMessageContainer}>
            <p className={styles.notificationText}>
                Reviewing won't affect your credit score
            </p>
        </div>
    );
}

function NotificationBanner() {
    return (
        <div className={styles.notificationBanner}>
            <div className={styles.notificationBorder} />
            <div className={styles.notificationContent}>
                <NotificationIconContainer />
                <NotificationMessageContainer />
            </div>
        </div>
    );
}

function PrimaryButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={styles.primaryButton}
        >
            Review your loan
        </button>
    );
}

function Cta({ onContinue }: { onContinue: () => void }) {
    return (
        <div className={styles.ctaSection}>
            <NotificationBanner />
            <PrimaryButton onClick={onContinue} />
        </div>
    );
}

function Content5({
    score,
    onOpenModal,
    onContinue,
}: {
    score: number;
    onOpenModal: () => void;
    onContinue: () => void;
}) {
    return (
        <div className={styles.mainContent}>
            <Score1 score={score} />
            <Frame1 onOpenModal={onOpenModal} />
            <ScoreAnalysisInfo />
            <Cta onContinue={onContinue} />
        </div>
    );
}

export interface StabilityScoreProps {
    onContinue: () => void;
    // stabilityScore provided by page 5 (OpenBankingAdded). undefined if fetch failed.
    stabilityScore?: number;
}

export default function StabilityScore({
    onContinue,
    stabilityScore,
}: StabilityScoreProps) {
    // Map undefined to a sensible default (0) so the gauge can render/animate.
    const score = typeof stabilityScore === "number" ? stabilityScore : 0;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className={styles.root}>
            <div className={styles.inner}>
                <Header />
                <div className={styles.dividerContainer}>
                    <div className={styles.dividerLineWrapper}>
                        <svg
                            className={styles.dividerSvg}
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 348 1"
                        >
                            <line
                                stroke="#9B9B9B"
                                x1="0"
                                x2="348"
                                y1="0.5"
                                y2="0.5"
                            />
                        </svg>
                    </div>
                </div>

                {/* show full content (gauge + text + CTA) and wire modal + continue */}
                <Content5
                    score={score}
                    onOpenModal={handleOpenModal}
                    onContinue={onContinue}
                />
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </div>
    );
}
