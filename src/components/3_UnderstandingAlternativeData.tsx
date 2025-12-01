// 3UnderstandingAlternativeData.tsx
import React from 'react';
import svgPaths from '../imports/svg-1a9s5wdjkt';
import styles from './3_UnderstandingAlternativeData.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Understanding alternative data</p>
      <p className={styles.headerSubtitle}>
        Why we ask for it, how we use it, and how it gives a fuller, fairer picture of your finances.
      </p>
    </header>
  );
}

function SectionIntro() {
  return (
    <section className={styles.sectionIntro}>
      <p className={styles.sectionIntroTitle}>What is Alternative data?</p>
      <p className={styles.sectionIntroText}>
        We ask for optional extra data (with your permission) to see responsible habits that a credit report can miss.
      </p>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.sectionHeaderTitle}>What you can share</p>
      <p className={styles.sectionHeaderText}>
        Each source helps us build your financial profile. Here's what each shows us.
      </p>
    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardBorder} />
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardText}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function BankIcon() {
  return (
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
}

function RentIcon() {
  return (
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
}

function UtilityIcon() {
  return (
    <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p22bd5b00} fill="#333333" />
      </g>
    </svg>
  );
}

function GigIcon() {
  return (
    <svg className={styles.iconSvg} fill="none" viewBox="0 0 24 24">
      <g>
        <path
          d={svgPaths.pa266dc0}
          fill="#333333"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}

function CardsList() {
  return (
    <div className={styles.cardsList}>
      <Card
        icon={<BankIcon />}
        title="Bank Transactions"
        description="Typical income and spending patterns"
      />
      <Card
        icon={<RentIcon />}
        title="Rent "
        description="Demonstrates reliable monthly commitments"
      />
      <Card
        icon={<UtilityIcon />}
        title="Utility and Phone Bill"
        description="Steady bill payments made on schedule"
      />
      <Card
        icon={<GigIcon />}
        title="Gig or Self-Employed Earnings"
        description="Platform payouts or accounting summaries give us insight into your income stability"
      />
    </div>
  );
}

function DataSourcesSection() {
  return (
    <section className={styles.dataSourcesSection}>
      <SectionHeader />
      <CardsList />
    </section>
  );
}

function BenefitIcon() {
  return (
    <div className={styles.benefitIconWrapper}>
      <svg className={styles.benefitIconSvg} fill="none" viewBox="0 0 18 18">
        <g>
          <circle cx="9" cy="9" r="9" fill="#00847F" />
          <path d={svgPaths.p2801d500} fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

function PrivacyBenefitRow({ text }: { text: string }) {
  return (
    <div className={styles.privacyBenefitRow}>
      <BenefitIcon />
      <p className={styles.privacyBenefitText}>{text}</p>
    </div>
  );
}

function PrivacySection() {
  return (
    <div className={styles.privacyBox}>
      <div className={styles.privacyBoxContent}>
        <div className={styles.privacyHeader}>
          <p className={styles.privacyHeaderTitle}>Privacy and Control</p>
          <p className={styles.privacyHeaderText}>Your privacy is important to us.</p>
        </div>
        <div className={styles.privacyBenefitsList}>
          <PrivacyBenefitRow text="You choose what to share" />
          <PrivacyBenefitRow text="You can disconnect anytime" />
          <PrivacyBenefitRow text="Data is encrypted and used only for your application" />
        </div>
      </div>
    </div>
  );
}

function HowWeUseItSection() {
  return (
    <section className={styles.howWeUseItSection}>
      <p className={styles.howWeUseItTitle}>How we use it</p>
      <div className={styles.howWeUseItText}>
        <p>
          We look for steady patterns, like paying rent on time, keeping a stable account balance, and covering regular
          bills, to assess affordability.
        </p>
        <p>&nbsp;</p>
        <p>
          We combine these into a simple Stability Score. This score is created and used by HSBC to help us assess more
          fairly. It does not go on a record, unlike a credit score.
        </p>
      </div>
    </section>
  );
}

function InfoIcon() {
  return (
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
}

function NotificationBanner() {
  return (
    <div className={styles.notificationBanner}>
      <div className={styles.notificationBorder} />
      <div className={styles.notificationContent}>
        <InfoIcon />
        <p className={styles.notificationText}>
          Prefer the traditional route? You can apply using your credit report only - simply return to the previous
          screen and unselect Alternative data.
          {'\n\n'}
          If you're happy, press Continue to proceed.
          {'\n\n'}
          Continuing won't affect your credit score
        </p>
      </div>
    </div>
  );
}

function Cta({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  return (
    <section className={styles.ctaSection}>
      <NotificationBanner />
      <button type="button" onClick={onBack} className={styles.secondaryButton}>
        <span>Back</span>
      </button>
      <button type="button" onClick={onContinue} className={styles.primaryButton}>
        <span>Continue</span>
      </button>
    </section>
  );
}

interface UnderstandingAlternativeDataProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function UnderstandingAlternativeData({ onBack, onContinue }: UnderstandingAlternativeDataProps) {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageInner}>
        <div className={styles.pageContent}>
          <Header />

          <div className={styles.dividerContainer}>
            <div className={styles.dividerLineWrapper}>
              <svg className={styles.dividerSvg} fill="none" viewBox="0 0 348 1">
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
    </div>
  );
}
