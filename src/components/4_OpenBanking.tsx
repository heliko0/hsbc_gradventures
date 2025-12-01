// 4OpenBanking.tsx - First Open Banking screen
import styles from './4_OpenBanking.module.css';

interface OpenBankingProps {
  onAddAccounts: () => void;
  onSkip: () => void;
}

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Add Open Banking access </p>
      <p className={styles.headerSubtitle}>Bank (or banked) with anyone else? You can link those accounts here.</p>
    </div>
  );
}

function WhatIsOpenBanking() {
  return (
    <div className={styles.whatIsOpenBanking}>
      <p className={styles.whatIsOpenBankingTitle}>What is Open Banking?</p>
      <p className={styles.whatIsOpenBankingDescription}>We use Open Banking (read‑only) to identify regular payments like rent, utilities, and phone bills.</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className={styles.linkAccountsHeader}>
      <p className={styles.linkAccountsTitle}>Link your bank accounts:</p>
      <p className={styles.linkAccountsDescription}>If you only bank with HSBC, you're all set. You can add other banks you use to give a fuller picture.</p>
    </div>
  );
}

function PrimaryButton({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.primaryButton} onClick={onClick}>
      <div className={styles.primaryButtonInner}>
        <div className={styles.primaryButtonContent}>
          <p className={styles.primaryButtonText}>Add accounts</p>
        </div>
      </div>
    </div>
  );
}

function LinkAccounts({ onAddAccounts }: { onAddAccounts: () => void }) {
  return (
    <div className={styles.linkAccountsSection}>
      <HeaderSection />
      <div className={styles.buttonContainer}>
        <PrimaryButton onClick={onAddAccounts} />
      </div>
    </div>
  );
}

function Content({ onAddAccounts }: { onAddAccounts: () => void }) {
  return (
    <div className={styles.contentTop}>
      <WhatIsOpenBanking />
      <LinkAccounts onAddAccounts={onAddAccounts} />
    </div>
  );
}

function SecondaryButton({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.secondaryButton} onClick={onClick}>
      <div className={styles.secondaryButtonBorder} aria-hidden="true" />
      <div className={styles.secondaryButtonInner}>
        <div className={styles.secondaryButtonContent}>
          <p className={styles.secondaryButtonText}>Skip for now</p>
        </div>
      </div>
    </div>
  );
}

function Cta({ onSkip }: { onSkip: () => void }) {
  return (
    <div className={styles.ctaSection}>
      <SecondaryButton onClick={onSkip} />
    </div>
  );
}

function MainContent({ onAddAccounts, onSkip }: { onAddAccounts: () => void; onSkip: () => void }) {
  return (
    <div className={styles.mainContent}>
      <Content onAddAccounts={onAddAccounts} />
      <Cta onSkip={onSkip} />
    </div>
  );
}

export default function OpenBanking({ onAddAccounts, onSkip }: OpenBankingProps) {
  return (
    <div className={styles.openBankingRoot}>
      <div className={styles.openBankingInner}>
        <div className={styles.openBankingContent}>
          <Header />
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLineWrapper}>
              <svg className={styles.dividerSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <MainContent onAddAccounts={onAddAccounts} onSkip={onSkip} />
        </div>
      </div>
    </div>
  );
}
