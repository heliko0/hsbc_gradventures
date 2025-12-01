import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-47e4mxxt2t';
import styles from './9_ReviewYourLoan.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Review your loan</p>
      <p className={styles.headerSubtitle}>Review your loan details and see the full cost and repayment breakdown.</p>
    </div>
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
  loanAmount: number;
  months: number;
  onLoanAmountChange: (value: number) => void;
  onMonthsChange: (value: number) => void;
  onValidityChange: (valid: boolean) => void;
}

function LoanProperties({ loanAmount, months, onLoanAmountChange, onMonthsChange, onValidityChange }: LoanPropertiesProps) {
  const MIN_LOAN = 1000;
  const MAX_LOAN = 50000;
  const LOAN_STEP = 1000;

  const MIN_MONTHS = 6;
  const MAX_MONTHS = 96;

  const formatCurrency = (value: number) => `£${value.toLocaleString()}`;

  const [loanAmountInput, setLoanAmountInput] = useState(formatCurrency(loanAmount));
  const [monthsInput, setMonthsInput] = useState(months.toString());
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
    onLoanAmountChange(value);
    setLoanAmountInput(formatCurrency(value));
    setLoanAmountError('');
  };

  const handleMonthsChange = (value: number) => {
    onMonthsChange(value);
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
        onLoanAmountChange(parsed);
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
        onMonthsChange(parsed);
        setMonthsError('');
      }
    }
  };

  useEffect(() => {
    setLoanAmountInput(formatCurrency(loanAmount));
  }, [loanAmount]);

  useEffect(() => {
    setMonthsInput(months.toString());
  }, [months]);

  return (
    <div className={styles.loanPropertiesSection}>
      <div className={styles.loanHeader}>
        <p className={styles.sectionTitle}>Choose your loan</p>
        <p className={styles.loanDescription}>
          Last chance to review these details before you submit.
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
    </div>
  );
}

interface AmountBreakdownProps {
  total: number;
  loanAmount: number;
  interest: number;
}

function AmountBreakdown({ total, loanAmount, interest }: AmountBreakdownProps) {
  const formatCurrency = (value: number) => {
    const formatted = value.toFixed(2);
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `£${parts.join('.')}`;
  };

  return (
    <div className={styles.amountBreakdownContainer}>
      <div className={styles.breakdownRow}>
        <div className={styles.breakdownBorder} />
        <div className={styles.breakdownContentContainer}>
          <div className={styles.breakdownText}>
            <p className={styles.breakdownLabelTotal}>Total</p>
          </div>
          <div className={styles.breakdownAmount}>
            <p className={styles.breakdownValueTotal}>{formatCurrency(total)}</p>
          </div>
        </div>
      </div>

      <div className={styles.breakdownRow}>
        <div className={styles.breakdownBorder} />
        <div className={styles.breakdownContentContainer}>
          <div className={styles.breakdownText}>
            <p className={styles.breakdownLabel}>Loan amount</p>
          </div>
          <div className={styles.breakdownAmount}>
            <p className={styles.breakdownValue}>{formatCurrency(loanAmount)}</p>
          </div>
        </div>
      </div>

      <div className={styles.breakdownRowLast}>
        <div className={styles.breakdownContentContainer}>
          <div className={styles.breakdownText}>
            <p className={styles.breakdownLabel}>Interest (5.8% APR)</p>
          </div>
          <div className={styles.breakdownAmount}>
            <p className={styles.breakdownValue}>{formatCurrency(interest)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RepaymentBreakdownProps {
  repaymentPeriod: string;
  monthlyRepayment: number;
}

function RepaymentBreakdown({ repaymentPeriod, monthlyRepayment }: RepaymentBreakdownProps) {
  const formatCurrency = (value: number) => {
    const formatted = value.toFixed(2);
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `£${parts.join('.')}`;
  };

  return (
    <div className={styles.amountBreakdownContainer}>
      <div className={styles.breakdownRow}>
        <div className={styles.breakdownBorder} />
        <div className={styles.breakdownContentContainer}>
          <div className={styles.breakdownText}>
            <p className={styles.breakdownLabel}>Repayment period</p>
          </div>
          <div className={styles.breakdownAmount}>
            <p className={styles.breakdownValue}>{repaymentPeriod}</p>
          </div>
        </div>
      </div>

      <div className={styles.breakdownRowLast}>
        <div className={styles.breakdownContentContainer}>
          <div className={styles.breakdownText}>
            <p className={styles.breakdownLabel}>Monthly repayment</p>
          </div>
          <div className={styles.breakdownAmount}>
            <p className={styles.breakdownValue}>{formatCurrency(monthlyRepayment)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AmountSectionProps {
  total: number;
  loanAmount: number;
  interest: number;
  repaymentPeriod: string;
  monthlyRepayment: number;
}

function AmountSection({ total, loanAmount, interest, repaymentPeriod, monthlyRepayment }: AmountSectionProps) {
  return (
    <div className={styles.amountSection}>
      <div className={styles.amountBorder} />
      <div className={styles.amountInner}>
        <div className={styles.amountContent}>
          <div className={styles.amountInfo}>
            <p className={styles.amountTitle}>Amount</p>
            <AmountBreakdown total={total} loanAmount={loanAmount} interest={interest} />
          </div>

          <div className={styles.amountInfo}>
            <p className={styles.amountTitle}>Repayment</p>
            <RepaymentBreakdown repaymentPeriod={repaymentPeriod} monthlyRepayment={monthlyRepayment} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoIcon1() {
  return (
    <div className={styles.infoIcon}>
      <svg className={styles.infoIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path clipRule="evenodd" d={svgPaths.p385b6600} fill="#333333" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function InfoIcon2() {
  return (
    <div className={styles.infoIcon}>
      <svg className={styles.infoIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path clipRule="evenodd" d={svgPaths.p388f8700} fill="#333333" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function InfoIcon3() {
  return (
    <div className={styles.infoIcon}>
      <svg className={styles.infoIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path clipRule="evenodd" d={svgPaths.p203fb680} fill="#333333" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function InfoIcon4() {
  return (
    <div className={styles.infoIconLarge}>
      <svg className={styles.infoIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g>
          <g></g>
          <path d={svgPaths.p305be180} fill="#333333" />
        </g>
      </svg>
    </div>
  );
}

function InfoIcon5() {
  return (
    <div className={styles.infoIcon}>
      <svg className={styles.infoIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g></g>
          <path d={svgPaths.p164a9c00} fill="#333333" />
        </g>
      </svg>
    </div>
  );
}

function KeyInformation() {
  return (
    <div className={styles.keyInfoSection}>
      <p className={styles.keyInfoTitle}>Key information</p>
      <p className={styles.keyInfoSubtitle}>Before you submit your application, it's important you understand how it works.</p>
      
      <div className={styles.keyInfoList}>
        <div className={styles.keyInfoItem}>
          <div className={styles.keyInfoItemBorder} />
          <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>
              <InfoIcon1 />
            </div>
            <div className={styles.keyInfoText}>
              <p className={styles.keyInfoItemTitle}>Your data, your control</p>
              <div className={styles.keyInfoItemDescription}>
                <p>We only use data you choose to share. You can change or remove access anytime. Checks are secure and read‑only.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.keyInfoItem}>
          <div className={styles.keyInfoItemBorder} />
          <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>
              <InfoIcon2 />
            </div>
            <div className={styles.keyInfoText}>
              <p className={styles.keyInfoItemTitle}>Applying for a loan will add to your credit file</p>
              <div className={styles.keyInfoItemDescription}>
                <p>We've analysed your loan worthiness without using credit, however applying for a loan leaves a hard check on your credit file.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.keyInfoItem}>
          <div className={styles.keyInfoItemBorder} />
          <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>
              <InfoIcon3 />
            </div>
            <div className={styles.keyInfoText}>
              <p className={styles.keyInfoItemTitle}>How repayments affect your credit</p>
              <div className={styles.keyInfoItemDescription}>
                <p>Paying on time can help your record grow. If a payment is missed, it may hurt your credit. Set up direct debit and reminders to stay on track.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.keyInfoItem}>
          <div className={styles.keyInfoItemBorder} />
          <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>
              <InfoIcon4 />
            </div>
            <div className={styles.keyInfoText}>
              <p className={styles.keyInfoItemTitle}>Speak to us if you miss a repayment or if money gets too tight</p>
              <div className={styles.keyInfoItemDescriptionMulti}>
                <p>If you've missed a loan repayment, we won't try taking it again. Make a repayment on the app to get back on track. </p>
                <p>&nbsp;</p>
                <p>We have to report any repayments you miss to credit bureaus, which can make it harder to borrow later and harm your file.</p>
                <p>&nbsp;</p>
                <p>If you can't pay, talk to us as soon as you can, there are ways we can help.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.keyInfoItem}>
          <div className={styles.keyInfoItemBorder} />
          <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>
              <InfoIcon5 />
            </div>
            <div className={styles.keyInfoText}>
              <p className={styles.keyInfoItemTitleNoWrap}>We're here to help</p>
              <div className={styles.keyInfoItemDescription}>
                <p>Drop us a message in chat, on the phone or in branch if you have any questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationIcon() {
  return (
    <div className={styles.notificationIcon}>
      <svg className={styles.notificationIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
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

function Cta({ onSubmit, isValid }: { onSubmit: () => void; isValid: boolean }) {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.notificationBanner}>
        <div className={styles.notificationBorder} />
        <div className={styles.notificationContent}>
          <div className={styles.notificationIconContainer}>
            <NotificationIcon />
          </div>
          <div className={styles.notificationMessageContainer}>
            <p className={styles.notificationText}>
              Submitting an application will leave a hard check on your credit file.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={isValid ? onSubmit : undefined}
        disabled={!isValid}
        className={styles.primaryButton}
        type="button"
      >
        <span>Submit application</span>
      </button>
    </div>
  );
}

export interface ReviewYourLoanProps {
  onSubmit: () => void;
}

export default function Component9ReviewYourLoan({ onSubmit }: ReviewYourLoanProps) {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [months, setMonths] = useState(62);
  const [isValid, setIsValid] = useState(true);

  // Calculate loan details
  const APR = 0.058;
  
  // Simple interest calculation for display purposes
  const monthlyRate = APR / 12;
  const monthlyRepayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalRepayment = monthlyRepayment * months;
  const totalInterest = totalRepayment - loanAmount;

  const formatMonthsToYears = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Header />

          <div className={styles.dividerWrapper}>
            <div className={styles.dividerContainer}>
              <svg className={styles.divider} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>

          <LoanProperties 
            loanAmount={loanAmount}
            months={months}
            onLoanAmountChange={setLoanAmount}
            onMonthsChange={setMonths}
            onValidityChange={setIsValid}
          />

          <AmountSection 
            total={totalRepayment}
            loanAmount={loanAmount}
            interest={totalInterest}
            repaymentPeriod={formatMonthsToYears(months)}
            monthlyRepayment={monthlyRepayment}
          />

          <div className={styles.dividerWrapper}>
            <div className={styles.dividerContainer}>
              <svg className={styles.divider} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>

          <KeyInformation />

          <Cta onSubmit={isValid ? onSubmit : () => {}} isValid={isValid} />
        </div>
      </div>
    </div>
  );
}