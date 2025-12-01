// components/ui/1EntryScreen.tsx
import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-hf8fuwzgy3';
import styles from './1_EntryScreen.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Find a loan that's right for you</p>
      <p className={styles.headerSubtitle}>
        Apply for a personal loan and get an answer in minutes
      </p>
    </div>
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

function Benefit({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.benefitRow}>
      <BenefitIcon />
      <div className={styles.benefitText}>
        <p className={styles.benefitTitle}>{title}</p>
        <p className={styles.benefitDescription}>{description}</p>
      </div>
    </div>
  );
}

function Benefits() {
  return (
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
          description="Choose your repayment data"
        />
      </div>
    </section>
  );
}

interface SliderProps {
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
}

function Slider({
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
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;

  const updateSliderValue = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const perc = x / rect.width;
    const rawValue = min + perc * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const newValue = Math.min(max, Math.max(min, steppedValue));
    onChange(newValue);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderValue(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderValue(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      updateSliderValue(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className={styles.sliderSection}>
      <p className={styles.sliderLabel}>{label}</p>

      <div className={styles.sliderInputRow}>
        <div className={styles.sliderTextInputWrapper}>
          <div className={`${styles.sliderTextInputBorder} ${error ? styles.sliderTextInputBorderError : ''}`} />
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
}

interface LoanPropertiesProps {
  onValidityChange: (valid: boolean) => void;
}

function LoanProperties({ onValidityChange }: LoanPropertiesProps) {
  const MIN_LOAN = 1000;
  const MAX_LOAN = 50000;
  const LOAN_STEP = 1000;

  const MIN_MONTHS = 6;
  const MAX_MONTHS = 96;

  const formatCurrency = (value: number) => `£${value.toLocaleString()}`;

  // ---- NEW: compute middle values ----
  const midpointLoan = Math.round(((MIN_LOAN + MAX_LOAN) / 2) / LOAN_STEP) * LOAN_STEP;
  const midpointMonths = Math.round((MIN_MONTHS + MAX_MONTHS) / 2);

  // Use lazy initialisers so they only run once
  const [loanAmount, setLoanAmount] = useState(() => midpointLoan);
  const [months, setMonths] = useState(() => midpointMonths);
  const [loanAmountInput, setLoanAmountInput] = useState(
    () => formatCurrency(midpointLoan)
  );
  const [monthsInput, setMonthsInput] = useState(
    () => midpointMonths.toString()
  );
  const [loanAmountError, setLoanAmountError] = useState('');
  const [monthsError, setMonthsError] = useState('');

  const parseCurrency = (value: string): number | null => {
    const cleaned = value.replace(/[£,\s]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
  };

  const formatMonthsToYears = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const nbsp = '\u00A0';

  if (years === 0) {
    return `${remainingMonths}${nbsp}Month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years}${nbsp}Year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years}${nbsp}Year${years !== 1 ? 's' : ''}${nbsp}${remainingMonths}${nbsp}Month${remainingMonths !== 1 ? 's' : ''}`;
  }
};

  // Notify parent whenever validity changes
  useEffect(() => {
    const isValid = !loanAmountError && !monthsError;
    onValidityChange(isValid);
  }, [loanAmountError, monthsError, onValidityChange]);

  const handleLoanAmountChange = (value: number) => {
    setLoanAmount(value);
    setLoanAmountInput(formatCurrency(value));
    setLoanAmountError('');
  };

  const handleMonthsChange = (value: number) => {
    setMonths(value);
    setMonthsInput(value.toString());
    setMonthsError('');
  };

  const handleLoanAmountInputChange = (value: string) => {
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
      }
    }
  };

  const handleMonthsInputChange = (value: string) => {
    setMonthsInput(value);
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      if (parsed < MIN_MONTHS || parsed > MAX_MONTHS) {
        setMonthsError(`Please enter a value between ${MIN_MONTHS} and ${MAX_MONTHS}`);
      } else {
        setMonths(parsed);
        setMonthsError('');
      }
    }
  };

  return (
    <section className={styles.loanPropertiesSection}>
      <div className={styles.loanHeader}>
        <p className={styles.sectionTitle}>Calculate your loan</p>
        <p className={styles.loanDescription}>
          This helps us assess your application accurately. You can review these details again before you submit.
        </p>
      </div>

      <Slider
        value={loanAmount}
        min={MIN_LOAN}
        max={MAX_LOAN}
        step={1000}
        onChange={handleLoanAmountChange}
        label="How much would you like to borrow?"
        minDisplayValue="£1,000"
        maxDisplayValue="£50,000"
        secondaryLabel={'5.8% APR\nRepresentative'}
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

interface CtaProps {
  onStartApplication: () => void;
  isFormValid: boolean;
}

function Cta({ onStartApplication, isFormValid }: CtaProps) {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.notificationBanner}>
        <div className={styles.notificationBorder} />
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
}

export interface EntryScreenProps {
  onStartApplication: () => void;
}

export default function EntryScreen({ onStartApplication }: EntryScreenProps) {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <div className={styles.entryScreenRoot}>
      <div className={styles.entryScreenInner}>
        <div className={styles.entryScreenContent}>
          <Header />

          <div className={styles.dividerContainer}>
            <div className={styles.dividerLineWrapper}>
              <svg className={styles.dividerSvg} fill="none" viewBox="0 0 348 1">
                <line x2="348" y1="0.5" y2="0.5" stroke="#9B9B9B" />
              </svg>
            </div>
          </div>

          <Benefits />
          <LoanProperties onValidityChange={setIsFormValid} />
          <Cta onStartApplication={onStartApplication} isFormValid={isFormValid} />
        </div>
      </div>
    </div>
  );
}