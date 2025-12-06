import React from 'react';
import svgPaths from '../imports/svg-rnajv1bdey';
import styles from './5_OpenBankingAdded.module.css';

// ============================================================================
// TYPES
// ============================================================================

type BankLogoProps = {
  svgPathId: string;
  defs: React.ReactNode;
};

type BankRowProps = {
  logo: React.ReactNode;
  name: string;
};

type SecondaryButtonProps = {
  onClick: () => void;
};

type PrimaryButtonProps = {
  onClick: () => void;
};

type CtaProps = {
  onContinue: () => void;
};

export type OpenBankingAddedProps = {
  onContinue: () => void;
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
      use to give a fuller picture, and remove access at any time.
    </p>
  </div>
);

// ============================================================================
// BANK LOGO COMPONENTS
// ============================================================================

const BarclaysLogo: React.FC = () => (
  <svg className={styles.bankLogoSvg} fill="none" viewBox="0 0 18 18">
    <g clipPath="url(#clip0_27_2771)">
      <path
        d={svgPaths.p27480cb0}
        fill="url(#paint0_radial_27_2771)"
      />
    </g>
    <defs>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(1.18823 3.14023) scale(18.3678 18.3677)"
        gradientUnits="userSpaceOnUse"
        id="paint0_radial_27_2771"
        r="1"
      >
        <stop stopColor="#20C4F4" />
        <stop offset="0.305" stopColor="#09B4F0" />
        <stop offset="0.5" stopColor="#00AEEF" />
        <stop offset="0.8" stopColor="#0092C8" />
        <stop offset="1" stopColor="#006E98" />
      </radialGradient>
      <clipPath id="clip0_27_2771">
        <rect fill="white" height="18" width="18" />
      </clipPath>
    </defs>
  </svg>
);

const MonzoLogo: React.FC = () => (
  <svg className={styles.bankLogoSvg} fill="none" viewBox="0 0 18 18">
    <g clipPath="url(#clip0_27_2765)">
      <path d={svgPaths.pf726c80} fill="#E34B5F" />
      <path d={svgPaths.pd90d00} fill="#E7CE9C" />
      <path d={svgPaths.p3f548300} fill="#1E7889" />
      <path d={svgPaths.p3dbe100} fill="#97BAA6" />
    </g>
    <defs>
      <clipPath id="clip0_27_2765">
        <rect fill="white" height="18" width="18" />
      </clipPath>
    </defs>
  </svg>
);

// ============================================================================
// BANK ROW COMPONENT
// ============================================================================

const BankRow: React.FC<BankRowProps> = ({ logo, name }) => (
  <div className={styles.bankRow}>
    <div className={styles.bankLogo}>{logo}</div>
    <p className={styles.bankName}>{name}</p>
  </div>
);

// ============================================================================
// CONNECTED BANKS SECTION
// ============================================================================

const ConnectedBanks: React.FC = () => (
  <div className={styles.connectedBanks}>
    <BankRow logo={<BarclaysLogo />} name="Barclays" />
    <BankRow logo={<MonzoLogo />} name="Monzo" />
  </div>
);

const AccountsAdded: React.FC = () => (
  <div className={styles.accountsAdded}>
    <p className={styles.accountsAddedLabel}>Accounts added:</p>
    <ConnectedBanks />
  </div>
);

// ============================================================================
// BUTTON COMPONENTS
// ============================================================================

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.secondaryButton}
  >
    <div className={styles.secondaryButtonBorder} aria-hidden="true" />
    <span>Change selection</span>
  </button>
);

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.primaryButton}
  >
    <span>Continue</span>
  </button>
);

// ============================================================================
// LINK ACCOUNTS SECTION
// ============================================================================

const LinkAccounts: React.FC = () => (
  <section className={styles.linkAccountsSection}>
    <LinkAccountsHeader />
    <AccountsAdded />
    <SecondaryButton onClick={() => {}} />
  </section>
);

const KeySections: React.FC = () => (
  <div className={styles.keySections}>
    <WhatIsOpenBanking />
    <LinkAccounts />
  </div>
);

// ============================================================================
// NOTIFICATION & CTA COMPONENTS
// ============================================================================

const InfoIcon: React.FC = () => (
  <div className={styles.infoIconWrapper}>
    <svg className={styles.infoIconSvg} fill="none" viewBox="0 0 18 18">
      <g>
        <circle cx="9" cy="9" r="9" fill="#305A85" />
        <path d={svgPaths.p19a91380} fill="#ffffff" />
        <path d={svgPaths.p3ddcf200} fill="#ffffff" />
      </g>
    </svg>
  </div>
);

const NotificationBanner: React.FC = () => (
  <div className={styles.notificationBanner}>
    <div className={styles.notificationBorder} aria-hidden="true" />
    <div className={styles.notificationContent}>
      <InfoIcon />
      <p className={styles.notificationText}>
        Continuing won't affect your credit score
      </p>
    </div>
  </div>
);

const Cta: React.FC<CtaProps> = ({ onContinue }) => (
  <section className={styles.ctaSection}>
    <NotificationBanner />
    <PrimaryButton onClick={onContinue} />
  </section>
);

// ============================================================================
// OPEN BANKING ADDED SCREEN
// ============================================================================

const OpenBankingAdded: React.FC<OpenBankingAddedProps> = ({ onContinue }) => (
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

      <main className={styles.content}>
        <KeySections />
        <Cta onContinue={onContinue} />
      </main>
    </div>
  </div>
);

export default OpenBankingAdded;