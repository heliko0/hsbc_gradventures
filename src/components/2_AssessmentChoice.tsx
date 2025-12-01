// components/ui/AssessmentChoice.tsx
import React from 'react';
import svgPaths from '../imports/svg-yerdz9yfhi';
import styles from './2_AssessmentChoice.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Choose how we assess you</p>
      <p className={styles.headerSubtitle}>
        Both methods are secure and compliant. Choose the one that best fits your situation.
      </p>
    </header>
  );
}

function SectionIntro() {
  return (
    <section className={styles.sectionIntro}>
      <p className={styles.sectionIntroTitle}>Select your assessment path:</p>
      <p className={styles.sectionIntroText}>
        Not sure? If you have an existing credit card or loan, Traditional may be more accurate. If you're new to credit
        or self-employed/gig, Alternative may give a fairer picture.
      </p>
    </section>
  );
}

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

function Checkbox({ checked, onClick }: CheckboxProps) {
  return (
    <button
      type="button"
      className={styles.checkboxRoot}
      onClick={onClick}
      aria-pressed={checked}
    >
      {checked ? (
        <div className={styles.checkboxChecked}>
          <div className={styles.checkboxInner}>
            <svg className={styles.checkboxIcon} fill="none" viewBox="0 0 12 12">
              <g>
                <path
                  d={svgPaths.p13ddaaf0}
                  fill="#333333"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <div className={styles.checkboxCheckedBorder} />
        </div>
      ) : (
        <div className={styles.checkboxUncheckedBorder} />
      )}
    </button>
  );
}

function Bullet() {
  return (
    <span className={styles.bulletWrapper}>
      <span className={styles.bulletSquare} />
    </span>
  );
}

interface AssessmentCardProps {
  title: string;
  description: string;
  benefits: string[];
  checked: boolean;
  onToggle: () => void;
  onLearnMore: () => void;
}

function AssessmentCard({
  title,
  description,
  benefits,
  checked,
  onToggle,
  onLearnMore,
}: AssessmentCardProps) {
  return (
    <article className={`${styles.cardRoot} ${checked ? styles.cardRootActive : ''}`}>
      <div className={styles.cardBorder} />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>{title}</p>
          <Checkbox checked={checked} onClick={onToggle} />
        </div>
        <p className={styles.cardDescription}>{description}</p>

        <ul className={styles.cardBenefitsList}>
          {benefits.map((benefit, index) => (
            <li key={benefit} className={styles.cardBenefitRow}>
              <Bullet />
              <p className={styles.cardBenefitText}>{benefit}</p>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.learnMoreButton}
          onClick={onLearnMore}
        >
          Learn more
        </button>
      </div>
    </article>
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

function Cta({ onContinue, canContinue }: { onContinue: () => void; canContinue: boolean }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.notificationBanner}>
        <div className={styles.notificationBorder} />
        <div className={styles.notificationContent}>
          <InfoIcon />
          <p className={styles.notificationText}>
            Continuing won't affect your credit score
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={canContinue ? onContinue : undefined}
        disabled={!canContinue}
        className={`${styles.primaryButton} ${
          !canContinue ? styles.primaryButtonDisabled : ''
        }`}
      >
        <span>Continue</span>
      </button>
    </section>
  );
}

interface AssessmentChoiceProps {
  onContinue: () => void;
}

export default function AssessmentChoice({ onContinue }: AssessmentChoiceProps) {
  const [traditionalSelected, setTraditionalSelected] = React.useState(false);
  const [alternativeSelected, setAlternativeSelected] = React.useState(false);

  const canContinue = traditionalSelected || alternativeSelected;

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

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

          <main className={styles.mainLayout}>
            <div className={styles.cardsAndIntro}>
              <SectionIntro />

              <div className={styles.cardsList}>
                <AssessmentCard
                  title="Traditional (credit score only)"
                  description="We'll check your credit report and do standard affordability checks."
                  benefits={[
                    'Best if you have pre-existing credit history',
                    'The most familiar and established lending method',
                    'Pull your score quickly and easily with credit bureaus ',
                  ]}
                  checked={traditionalSelected}
                  onToggle={() => setTraditionalSelected((prev) => !prev)}
                  onLearnMore={handleLearnMore}
                />

                <AssessmentCard
                  title="Hybrid (credit + alternative data)"
                  description="We consider more of your real-life finances (with your permission), like bank transactions, rent, and utilities."
                  benefits={[
                    "Best if you're new to credit or have a thin-file",
                    'Recognises steady non-credit payments (e.g., rent, phone, utilities)',
                    "Good for those with variable income, e.g. if you're a freelancer, gig-worker, or self-employed",
                    "See the factors boosting or holding back your score - and how to fix them"
                  ]}
                  checked={alternativeSelected}
                  onToggle={() => setAlternativeSelected((prev) => !prev)}
                  onLearnMore={handleLearnMore}
                />
              </div>
            </div>

            <Cta onContinue={onContinue} canContinue={canContinue} />
          </main>
        </div>
      </div>
    </div>
  );
}