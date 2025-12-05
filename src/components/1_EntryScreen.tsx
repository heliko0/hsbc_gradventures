import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-hf8fuwzgy3';
import styles from './1_EntryScreen.module.css';

// ============================================================================
// TYPES
// ============================================================================

type SliderProps = {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
  minDisplayValue: string;
  maxDisplayValue: string;
  secondaryLabel: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  error?: string;
};

type LoanPropertiesProps = {
  onValidityChange: (valid: boolean) => void;
  onLoanAmountChange: (amount: number) => void;
  onMonthsChange: (months: number) => void;
};

type CtaProps = {
  onStartApplication: () => void;
  isFormValid: boolean;
};

export type EntryScreenProps = {
  onStartApplication: () => void;
  onLoanAmountChange: (amount: number) => void;
  onMonthsChange: (months: number) => void;
};

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC = () => (
  <div className={styles.header}>
    <p className={styles.headerTitle}>Find a loan that's right for you</p>
    <p className={styles.headerSubtitle}>
      Apply for a personal loan and get an answer in minutes
    </p>
  </div>
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

type BenefitProps = {
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ title, description }) => (
  <div className={styles.benefitRow}>
    <BenefitIcon />
    <div className={styles.benefitText}>
      <p className={styles.benefitTitle}>{title}</p>
      <p className={styles.benefitDescription}>{description}</p>
    </div>
  </div>
);

const Benefits: React.FC = () => (
  <section className={styles.benefitsSection}>
    <p className={styles.sectionTitle}>Key benefits</p>
    <div className={styles.benefitsList}>
      <Benefit
        title="Instant funds"
        description="If approved, receive the money instantly after signing the loan agreement"
      />
      <Benefit
        title="Approval for everyone"
        description="Choose how we assess your creditworthiness"
      />
      <Benefit
        title="Flexibility"
        description="Choose your repayment date"
      />
    </div>
  </section>
);

// ============================================================================
// SLIDER COMPONENT
// ============================================================================

const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  minDisplayValue,
  maxDisplayValue,
  secondaryLabel,
  inputValue,
  onInputChange,
  error,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const updateSliderValue = (clientX: number): void => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const perc = x / rect.width;
    const rawValue = min + perc * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const newValue = Math.max(min, Math.min(max, steppedValue));
    onChange(newValue);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    updateSliderValue(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      updateSliderValue(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent): void => {
      updateSliderValue(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent): void => {
      if (e.touches.length > 0) {
        updateSliderValue(e.touches[0].clientX);
      }
    };

    const handleEnd = (): void => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div className={styles.sliderSection}>
      <p className={styles.sliderLabel}>{label}</p>

      <div className={styles.sliderInputRow}>
        <div className={styles.sliderTextInputWrapper}>
          <div
            className={`${styles.sliderTextInputBorder} ${
              error ? styles.sliderTextInputBorderError : ''
            }`}
            aria-hidden="true"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className={styles.sliderTextInput}
          />
        </div>

        <div className={styles.sliderSecondaryLabelWrapper}>
          <p className={styles.sliderSecondaryLabel}>{secondaryLabel}</p>
        </div>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      <div className={styles.sliderContainer}>
        <div
          ref={sliderRef}
          className={styles.sliderTrackWrapper}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ '--sliderPercentage': percentage } as React.CSSProperties}
        >
          <div className={styles.sliderTrack}>
            <div className={styles.sliderTrackFilled} />
            <div className={styles.sliderTrackRemaining} />
          </div>
          <div className={styles.sliderHandle}>
            <div className={styles.sliderHandleInner} />
          </div>
        </div>

        <div className={styles.sliderMinMaxRow}>
          <p>{minDisplayValue}</p>
          <p className={styles.sliderMaxValue}>{maxDisplayValue}</p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// LOAN PROPERTIES COMPONENT
// ============================================================================

const LoanProperties: React.FC<LoanPropertiesProps> = ({
  onValidityChange,
  onLoanAmountChange,
  onMonthsChange,
}) => {
  const MIN_LOAN = 1000;
  const MAX_LOAN = 50000;
  const LOAN_STEP = 1000;
  const MIN_MONTHS = 6;
  const MAX_MONTHS = 96;

  const formatCurrency = (value: number): string => `£${value.toLocaleString()}`;

  const formatMonthsToYears = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const nbsp = '\u00A0';

    if (years === 0) {
      return `${remainingMonths}${nbsp}Month${remainingMonths !== 1 ? 's' : ''}`;
    }
    if (remainingMonths === 0) {
      return `${years}${nbsp}Year${years !== 1 ? 's' : ''}`;
    }
    return `${years}${nbsp}Year${years !== 1 ? 's' : ''}${nbsp}${remainingMonths}${nbsp}Month${
      remainingMonths !== 1 ? 's' : ''
    }`;
  };

  const midpointLoan =
    Math.round(((MIN_LOAN + MAX_LOAN) / 2) / LOAN_STEP) * LOAN_STEP;
  const midpointMonths = Math.round((MIN_MONTHS + MAX_MONTHS) / 2);

  const [loanAmount, setLoanAmount] = useState(() => midpointLoan);
  const [months, setMonths] = useState(() => midpointMonths);
  const [loanAmountInput, setLoanAmountInput] = useState(
    () => formatCurrency(midpointLoan)
  );
  const [monthsInput, setMonthsInput] = useState(() => midpointMonths.toString());
  const [loanAmountError, setLoanAmountError] = useState('');
  const [monthsError, setMonthsError] = useState('');

  const parseCurrency = (value: string): number | null => {
    const cleaned = value.replace(/[£,\s]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
  };

  // Notify parent of initial values on mount
  useEffect(() => {
    onLoanAmountChange(loanAmount);
    onMonthsChange(months);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Notify parent whenever validity changes
  useEffect(() => {
    const isValid = !loanAmountError && !monthsError;
    onValidityChange(isValid);
  }, [loanAmountError, monthsError, onValidityChange]);

  const handleLoanAmountChange = (value: number): void => {
    setLoanAmount(value);
    setLoanAmountInput(formatCurrency(value));
    setLoanAmountError('');
    onLoanAmountChange(value);
  };

  const handleMonthsChange = (value: number): void => {
    setMonths(value);
    setMonthsInput(value.toString());
    setMonthsError('');
    onMonthsChange(value);
  };

  const handleLoanAmountInputChange = (value: string): void => {
    setLoanAmountInput(value);
    const parsed = parseCurrency(value);
    if (parsed !== null) {
      if (parsed < MIN_LOAN || parsed > MAX_LOAN) {
        setLoanAmountError(
          `Please enter a value between ${formatCurrency(MIN_LOAN)} and ${formatCurrency(MAX_LOAN)}`
        );
      } else {
        setLoanAmount(parsed);
        setLoanAmountError('');
        onLoanAmountChange(parsed);
      }
    }
  };

  const handleMonthsInputChange = (value: string): void => {
    setMonthsInput(value);
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      if (parsed < MIN_MONTHS || parsed > MAX_MONTHS) {
        setMonthsError(`Please enter a value between ${MIN_MONTHS} and ${MAX_MONTHS}`);
      } else {
        setMonths(parsed);
        setMonthsError('');
        onMonthsChange(parsed);
      }
    }
  };

  return (
    <section className={styles.loanPropertiesSection}>
      <div className={styles.loanHeader}>
        <p className={styles.sectionTitle}>Calculate your loan</p>
        <p className={styles.loanDescription}>
          This helps us assess your application accurately. You can review
          these details again before you submit.
        </p>
      </div>

      <Slider
        value={loanAmount}
        min={MIN_LOAN}
        max={MAX_LOAN}
        step={LOAN_STEP}
        onChange={handleLoanAmountChange}
        label="How much would you like to borrow?"
        minDisplayValue="£1,000"
        maxDisplayValue="£50,000"
        secondaryLabel={
          <>
            <span>5.8% APR</span>
            <br />
            <span>Representative</span>
          </>
        }
        inputValue={loanAmountInput}
        onInputChange={handleLoanAmountInputChange}
        error={loanAmountError}
      />

      <Slider
        value={months}
        min={MIN_MONTHS}
        max={MAX_MONTHS}
        onChange={handleMonthsChange}
        label="Over how many months?"
        minDisplayValue="6"
        maxDisplayValue="96"
        secondaryLabel={formatMonthsToYears(months)}
        inputValue={monthsInput}
        onInputChange={handleMonthsInputChange}
        error={monthsError}
      />
    </section>
  );
};

// ============================================================================
// CTA COMPONENTS
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

const Cta: React.FC<CtaProps> = ({ onStartApplication, isFormValid }) => (
  <div className={styles.ctaSection}>
    <div className={styles.notificationBanner}>
      <div className={styles.notificationBorder} aria-hidden="true" />
      <div className={styles.notificationContent}>
        <InfoIcon />
        <p className={styles.notificationText}>
          Starting an application won't affect your credit score
        </p>
      </div>
    </div>

    <button
      onClick={isFormValid ? onStartApplication : undefined}
      disabled={!isFormValid}
      className={styles.primaryButton}
      type="button"
    >
      <span>Start application</span>
    </button>
  </div>
);

// ============================================================================
// ENTRY SCREEN
// ============================================================================

const EntryScreen: React.FC<EntryScreenProps> = ({
  onStartApplication,
  onLoanAmountChange,
  onMonthsChange,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

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

        <Benefits />
        <LoanProperties
          onValidityChange={setIsFormValid}
          onLoanAmountChange={onLoanAmountChange}
          onMonthsChange={onMonthsChange}
        />
        <Cta onStartApplication={onStartApplication} isFormValid={isFormValid} />
      </div>
    </div>
  );
};

export default EntryScreen;