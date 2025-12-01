// 5OpenBankingAdded.tsx - Second Open Banking screen with account toggles
import { useState } from 'react';
import svgPaths from "../imports/svg-rnajv1bdey";
import styles from './5_OpenBankingAdded.module.css';

interface OpenBankingAddedProps {
  onContinue: () => void;
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
      <p className={styles.whatIsOpenBankingDescription}>We use Open Banking (read‑only) to identify regular payments like rent, utilities, and phone bills. </p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className={styles.linkAccountsHeader}>
      <p className={styles.linkAccountsTitle}>Link your bank accounts:</p>
      <p className={styles.linkAccountsDescription}>If you only bank with HSBC, you're all set. You can add other banks you use to give a fuller picture, and remove access at any time.</p>
    </div>
  );
}

function BarclaysLogo() {
  return (
    <div className={styles.bankLogo}>
      <svg className={styles.bankLogoSvg} fill="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_27_2771)">
          <path d={svgPaths.p27480cb0} fill="url(#paint0_radial_27_2771)" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1.18823 3.14023) scale(18.3678 18.3677)" gradientUnits="userSpaceOnUse" id="paint0_radial_27_2771" r="1">
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
    </div>
  );
}

function MonzoLogo() {
  return (
    <div className={styles.bankLogo}>
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
    </div>
  );
}

function Barclays() {
  return (
    <div className={styles.bankRow}>
      <BarclaysLogo />
      <p className={styles.bankName}>Barclays</p>
    </div>
  );
}

function Monzo() {
  return (
    <div className={styles.bankRow}>
      <MonzoLogo />
      <p className={styles.bankName}>Monzo</p>
    </div>
  );
}

function ConnectedBanks() {
  return (
    <div className={styles.connectedBanks}>
      <Barclays />
      <Monzo />
    </div>
  );
}

function AccountsAdded() {
  return (
    <div className={styles.accountsAdded}>
      <p className={styles.accountsAddedLabel}>Accounts added:</p>
      <ConnectedBanks />
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className={styles.secondaryButton}>
      <div className={styles.secondaryButtonBorder} aria-hidden="true" />
      <div className={styles.secondaryButtonInner}>
        <div className={styles.secondaryButtonContent}>
          <p className={styles.secondaryButtonText}>Change selection</p>
        </div>
      </div>
    </div>
  );
}

function ChooseWhatWeAnalyseHeader() {
  return (
    <div className={styles.chooseWhatWeAnalyseHeader}>
      <p className={styles.chooseWhatWeAnalyseTitle}>Choose what we analyse:</p>
      <p className={styles.chooseWhatWeAnalyseSubtitle}>Note: turning off may reduce assessment confidence.</p>
    </div>
  );
}

function BankTransactionsIcon() {
  return (
    <div className={styles.categoryIcon}>
      <svg className={styles.categoryIconSvg} fill="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path clipRule="evenodd" d={svgPaths.p282a4b00} fill="#333333" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function RentIcon() {
  return (
    <div className={styles.categoryIcon}>
      <svg className={styles.categoryIconSvg} fill="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <g>
            <path d={svgPaths.p126e7ef2} fill="#333333" />
            <path d={svgPaths.p54a3a70} fill="#333333" />
            <path d={svgPaths.p2b98ba80} fill="#333333" />
            <path clipRule="evenodd" d={svgPaths.p307db300} fill="#333333" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UtilityIcon() {
  return (
    <div className={styles.categoryIcon}>
      <svg className={styles.categoryIconSvg} fill="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path d={svgPaths.p22bd5b00} fill="#333333" />
        </g>
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className={styles.categoryIcon}>
      <svg className={styles.categoryIconSvg} fill="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path clipRule="evenodd" d={svgPaths.p36d04200} fill="#333333" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function Switch({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className={`${styles.switch} ${isOn ? styles.switchOn : styles.switchOff}`} onClick={onClick}>
      <div className={`${styles.switchKnob} ${isOn ? styles.switchKnobOn : styles.switchKnobOff}`} />
    </div>
  );
}

function BankTransactions({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className={styles.categoryRow}>
      <div className={styles.categoryContent}>
        <BankTransactionsIcon />
        <div className={styles.categoryText}>
          <p className={styles.categoryLabel}>Bank Transactions</p>
        </div>
        <Switch isOn={isOn} onClick={onClick} />
      </div>
    </div>
  );
}

function Rent({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className={styles.categoryRow}>
      <div className={styles.categoryContent}>
        <RentIcon />
        <div className={styles.categoryText}>
          <p className={styles.categoryLabel}>Rent </p>
        </div>
        <Switch isOn={isOn} onClick={onClick} />
      </div>
    </div>
  );
}

function UtilityBill({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className={styles.categoryRow}>
      <div className={styles.categoryContent}>
        <UtilityIcon />
        <div className={styles.categoryText}>
          <p className={styles.categoryLabel}>Utility Bill</p>
        </div>
        <Switch isOn={isOn} onClick={onClick} />
      </div>
    </div>
  );
}

function PhoneBill({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className={styles.categoryRow}>
      <div className={styles.categoryContent}>
        <PhoneIcon />
        <div className={styles.categoryText}>
          <p className={styles.categoryLabel}>Phone Bill</p>
        </div>
        <Switch isOn={isOn} onClick={onClick} />
      </div>
    </div>
  );
}

interface CategoriesProps {
  toggles: {
    bankTransactions: boolean;
    rent: boolean;
    utility: boolean;
    phone: boolean;
  };
  onToggle: (key: keyof CategoriesProps['toggles']) => void;
}

function Categories({ toggles, onToggle }: CategoriesProps) {
  return (
    <div className={styles.categories}>
      <BankTransactions isOn={toggles.bankTransactions} onClick={() => onToggle('bankTransactions')} />
      <Rent isOn={toggles.rent} onClick={() => onToggle('rent')} />
      <UtilityBill isOn={toggles.utility} onClick={() => onToggle('utility')} />
      <PhoneBill isOn={toggles.phone} onClick={() => onToggle('phone')} />
    </div>
  );
}

function CategoriesContainer({ toggles, onToggle }: CategoriesProps) {
  return (
    <div className={styles.categoriesContainer}>
      <Categories toggles={toggles} onToggle={onToggle} />
    </div>
  );
}

function ChooseWhatWeAnalyse({ toggles, onToggle }: CategoriesProps) {
  return (
    <div className={styles.chooseWhatWeAnalyse}>
      <ChooseWhatWeAnalyseHeader />
      <CategoriesContainer toggles={toggles} onToggle={onToggle} />
    </div>
  );
}

function LinkAccounts({ toggles, onToggle }: CategoriesProps) {
  return (
    <div className={styles.linkAccountsSection}>
      <HeaderSection />
      <AccountsAdded />
      <SecondaryButton />
      <ChooseWhatWeAnalyse toggles={toggles} onToggle={onToggle} />
    </div>
  );
}

function InformationIcon() {
  return (
    <div className={styles.notificationIcon}>
      <svg className={styles.notificationIconSvg} fill="none" viewBox="0 0 18 18">
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

function NotificationContextual() {
  return (
    <div className={styles.notificationContextual}>
      <div className={styles.notificationBorder} aria-hidden="true" />
      <div className={styles.notificationContent}>
        <InformationIcon />
        <p className={styles.notificationMessage}>Continuing won't affect your credit score</p>
      </div>
    </div>
  );
}

function PrimaryButton({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.primaryButton} onClick={onClick}>
      <div className={styles.primaryButtonInner}>
        <div className={styles.primaryButtonContent}>
          <p className={styles.primaryButtonText}>Continue</p>
        </div>
      </div>
    </div>
  );
}

function Cta({ onContinue }: { onContinue: () => void }) {
  return (
    <div className={styles.ctaSection}>
      <NotificationContextual />
      <PrimaryButton onClick={onContinue} />
    </div>
  );
}

function Content({ toggles, onToggle, onContinue }: CategoriesProps & { onContinue: () => void }) {
  return (
    <div className={styles.mainContent}>
      <WhatIsOpenBanking />
      <LinkAccounts toggles={toggles} onToggle={onToggle} />
      <Cta onContinue={onContinue} />
    </div>
  );
}

export default function OpenBankingAdded({ onContinue }: OpenBankingAddedProps) {
  const [toggles, setToggles] = useState({
    bankTransactions: true,
    rent: true,
    utility: true,
    phone: true,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.openBankingAddedRoot}>
      <div className={styles.openBankingAddedInner}>
        <div className={styles.openBankingAddedContent}>
          <Header />
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLineWrapper}>
              <svg className={styles.dividerSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Content toggles={toggles} onToggle={handleToggle} onContinue={onContinue} />
        </div>
      </div>
    </div>
  );
}