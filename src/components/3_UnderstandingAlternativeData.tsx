import React from 'react';
import svgPaths from '../imports/svg-1a9s5wdjkt';
import svgPathsExtended from '../imports/svg-l7xr3kb7hk';
import styles from './3_UnderstandingAlternativeData.module.css';

// ============================================================================
// TYPES
// ============================================================================

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type PrivacyBenefitRowProps = {
  text: string;
};

type CtaProps = {
  onBack: () => void;
  onContinue: () => void;
};

export type UnderstandingAlternativeDataProps = {
  onBack: () => void;
  onContinue: () => void;
};

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC = () => (
  <header className={styles.header}>
    <p className={styles.headerTitle}>Understanding alternative data</p>
    <p className={styles.headerSubtitle}>
      Why we ask for it, how we use it, and how it gives a fuller, fairer
      picture of your finances.
    </p>
  </header>
);

const SectionIntro: React.FC = () => (
  <section className={styles.sectionIntro}>
    <p className={styles.sectionIntroTitle}>What is Alternative data?</p>
    <p className={styles.sectionIntroText}>
      Alternative data is financial information like income patterns, bills,
      and spending habits, that show how you actually manage your money. This
      is a new way to measure reliability, rather than just using what's on
      your credit file.
    </p>
  </section>
);

const SectionHeader: React.FC = () => (
  <div className={styles.sectionHeader}>
    <p className={styles.sectionHeaderTitle}>What you can share</p>
    <p className={styles.sectionHeaderText}>
      Each source helps us build your financial profile. Here's what each
      shows us.
    </p>
  </div>
);

// ============================================================================
// ICON COMPONENTS
// ============================================================================

const BankIcon: React.FC = () => (
  <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
    <g>
      <path
        d={svgPaths.p282a4b00}
        fill="#333333"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const RentIcon: React.FC = () => (
  <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
    <g>
      <path d={svgPaths.p126e7ef2} fill="#333333" />
      <path d={svgPaths.p54a3a70} fill="#333333" />
      <path d={svgPaths.p2b98ba80} fill="#333333" />
      <path
        d={svgPaths.p307db300}
        fill="#333333"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const UtilityIcon: React.FC = () => (
  <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
    <g>
      <path d={svgPaths.p22bd5b00} fill="#333333" />
    </g>
  </svg>
);

const SavingsIcon: React.FC = () => (
  <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
    <g>
      <path d={svgPathsExtended.pbc7aa00} fill="#333333" />
    </g>
  </svg>
);

const CarPaymentsIcon: React.FC = () => (
  <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
    <g>
      <path
        d={svgPathsExtended.paa85e00}
        fill="#333333"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const BenefitIcon: React.FC = () => (
  <div className={styles.benefitIconWrapper}>
    <svg className={styles.benefitIconSvg} fill="none" viewBox="0 0 18 18">
      <g>
        <circle cx="9" cy="9" r="9" fill="#00847F" />
        <path d={svgPaths.p2801d500} fill="#ffffff" />
      </g>
    </svg>
  </div>
);

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

// ============================================================================
// CARD COMPONENT
// ============================================================================

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <article className={styles.cardRoot}>
    <div className={styles.cardBorder} aria-hidden="true" />
    <div className={styles.cardContent}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardText}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  </article>
);

// ============================================================================
// DATA SOURCES SECTION
// ============================================================================

const CardsList: React.FC = () => (
  <div className={styles.cardsList}>
    <Card
      icon={<BankIcon />}
      title="Bank Transactions"
      description="Typical income and spending patterns"
    />
    <Card
      icon={<SavingsIcon />}
      title="Savings"
      description="How much you have set aside"
    />
    <Card
      icon={<RentIcon />}
      title="Rent"
      description="Regular monthly housing payments"
    />
    <Card
      icon={<UtilityIcon />}
      title="Utility and Phone Bill"
      description="On‑time essential bill payments"
    />
    <Card
      icon={<CarPaymentsIcon />}
      title="Car Payments"
      description="Fixed instalments paid regularly"
    />
  </div>
);

const DataSourcesSection: React.FC = () => (
  <section className={styles.dataSourcesSection}>
    <SectionHeader />
    <CardsList />
  </section>
);

// ============================================================================
// PRIVACY SECTION
// ============================================================================

const PrivacyBenefitRow: React.FC<PrivacyBenefitRowProps> = ({ text }) => (
  <div className={styles.privacyBenefitRow}>
    <BenefitIcon />
    <p className={styles.privacyBenefitText}>{text}</p>
  </div>
);

const PrivacySection: React.FC = () => (
  <aside className={styles.privacyBox}>
    <div className={styles.privacyBoxContent}>
      <div className={styles.privacyHeader}>
        <p className={styles.privacyHeaderTitle}>Privacy and Control</p>
        <p className={styles.privacyHeaderText}>
          Your privacy is important to us.
        </p>
      </div>
      <div className={styles.privacyBenefitsList}>
        <PrivacyBenefitRow text="You choose what to share" />
        <PrivacyBenefitRow text="You can disconnect anytime" />
        <PrivacyBenefitRow text="Data is encrypted and used only for your application" />
      </div>
    </div>
  </aside>
);

// ============================================================================
// HOW WE USE IT SECTION
// ============================================================================

const HowWeUseItSection: React.FC = () => (
  <section className={styles.howWeUseItSection}>
    <p className={styles.howWeUseItTitle}>How we use it</p>
    <div className={styles.howWeUseItText}>
      <p>
        We look for steady patterns, like paying rent on time, keeping a
        stable account balance, and covering regular bills, to assess
        affordability.
      </p>
      <p>&nbsp;</p>
      <p>
        We combine these into a simple Stability Score. This score is created
        and used by HSBC to help us assess more fairly. It does not go on a
        record, unlike a credit score.
      </p>
    </div>
  </section>
);

// ============================================================================
// NOTIFICATION & CTA COMPONENTS
// ============================================================================

const NotificationBanner: React.FC = () => (
  <div className={styles.notificationBanner}>
    <div className={styles.notificationBorder} aria-hidden="true" />
    <div className={styles.notificationContent}>
      <InfoIcon />
      <p className={styles.notificationText}>
        Prefer the traditional route? You can apply using your credit report
        only - simply return to the previous screen and unselect Alternative
        data.
        {'\n\n'}
        If you're happy, press Continue to proceed.
        {'\n\n'}
        Continuing won't affect your credit score
      </p>
    </div>
  </div>
);

const Cta: React.FC<CtaProps> = ({ onBack, onContinue }) => (
  <section className={styles.ctaSection}>
    <NotificationBanner />
    <button
      type="button"
      onClick={onBack}
      className={styles.secondaryButton}
    >
      <span>Back</span>
    </button>
    <button
      type="button"
      onClick={onContinue}
      className={styles.primaryButton}
    >
      <span>Continue</span>
    </button>
  </section>
);

// ============================================================================
// UNDERSTANDING ALTERNATIVE DATA SCREEN
// ============================================================================

const UnderstandingAlternativeData: React.FC<
  UnderstandingAlternativeDataProps
> = ({ onBack, onContinue }) => (
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

      <SectionIntro />
      <DataSourcesSection />
      <PrivacySection />
      <HowWeUseItSection />
      <Cta onBack={onBack} onContinue={onContinue} />
    </div>
  </div>
);

export default UnderstandingAlternativeData;