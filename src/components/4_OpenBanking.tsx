import React from 'react';
import styles from './4_OpenBanking.module.css';

// ============================================================================
// TYPES
// ============================================================================

type PrimaryButtonProps = {
  onClick: () => void;
};

type SecondaryButtonProps = {
  onClick: () => void;
};

type ContentTopProps = {
  onAddAccounts: () => void;
};

type CtaProps = {
  onSkip: () => void;
};

type ContentProps = {
  onAddAccounts: () => void;
  onSkip: () => void;
};

export type OpenBankingProps = {
  onAddAccounts: () => void;
  onSkip: () => void;
};

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC = () => (
  <header className={styles.header}>
    <p className={styles.headerTitle}>Add Open Banking access</p>
    <p className={styles.headerSubtitle}>
      Bank (or banked) with anyone else? You can link those accounts here.
    </p>
  </header>
);

const WhatIsOpenBanking: React.FC = () => (
  <section className={styles.whatIsOpenBanking}>
    <p className={styles.whatIsOpenBankingTitle}>What is Open Banking?</p>
    <p className={styles.whatIsOpenBankingDescription}>
      We use Open Banking (read‑only) to identify regular payments like rent,
      utilities, and phone bills.
    </p>
  </section>
);

const LinkAccountsHeader: React.FC = () => (
  <div className={styles.linkAccountsHeader}>
    <p className={styles.linkAccountsTitle}>Link your bank accounts:</p>
    <p className={styles.linkAccountsDescription}>
      If you only bank with HSBC, you're all set. You can add other banks you
      use to give a fuller picture.
    </p>
  </div>
);

const LinkAccounts: React.FC = () => (
  <section className={styles.linkAccountsSection}>
    <LinkAccountsHeader />
  </section>
);

// ============================================================================
// BUTTON COMPONENTS
// ============================================================================

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.primaryButton}
  >
    <span>Add other accounts</span>
  </button>
);

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.secondaryButton}
  >
    <div className={styles.secondaryButtonBorder} aria-hidden="true" />
    <span>Skip for now</span>
  </button>
);

// ============================================================================
// CONTENT SECTIONS
// ============================================================================

const ContentTop: React.FC<ContentTopProps> = ({ onAddAccounts }) => (
  <div className={styles.contentTop}>
    <WhatIsOpenBanking />
    <LinkAccounts />
    <PrimaryButton onClick={onAddAccounts} />
  </div>
);

const Cta: React.FC<CtaProps> = ({ onSkip }) => (
  <section className={styles.ctaSection}>
    <SecondaryButton onClick={onSkip} />
  </section>
);

const Content: React.FC<ContentProps> = ({ onAddAccounts, onSkip }) => (
  <main className={styles.content}>
    <ContentTop onAddAccounts={onAddAccounts} />
    <Cta onSkip={onSkip} />
  </main>
);

// ============================================================================
// OPEN BANKING SCREEN
// ============================================================================

const OpenBanking: React.FC<OpenBankingProps> = ({ onAddAccounts, onSkip }) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <Header />

      <div className={styles.dividerContainer}>
        <div className={styles.dividerLineWrapper}>
          <svg
            className={styles.dividerSvg}
            fill="none"
            viewBox="0 0 348 1"
          >
            <line x2="348" y1="0.5" y2="0.5" stroke="#9B9B9B" />
          </svg>
        </div>
      </div>

      <Content onAddAccounts={onAddAccounts} onSkip={onSkip} />
    </div>
  </div>
);

export default OpenBanking;