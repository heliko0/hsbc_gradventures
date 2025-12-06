import React, { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-47e4mxxt2t";
import svgPathsSuccess from "../imports/svg-tg2rz0vich";
import styles from "./8_ReviewYourLoan.module.css";

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
    loanAmount: number;
    months: number;
    onLoanAmountChange: (value: number) => void;
    onMonthsChange: (value: number) => void;
    onValidityChange: (valid: boolean) => void;
};

type LowerInterestBannerProps = {
    interestSavings: number;
};

type AmountBreakdownProps = {
    total: number;
    loanAmount: number;
    interest: number;
    months: number;
};

type RepaymentBreakdownProps = {
    repaymentPeriod: string;
    monthlyRepayment: number;
};

type AmountSectionProps = {
    total: number;
    loanAmount: number;
    interest: number;
    months: number;
    repaymentPeriod: string;
    monthlyRepayment: number;
};

type CtaProps = {
    onSubmit: () => void;
    isValid: boolean;
};

export type ReviewYourLoanProps = {
    onSubmit: () => void;
    initialLoanAmount?: number;
    initialMonths?: number;
};

// ============================================================================
// CONSTANTS
// ============================================================================

const MIN_LOAN = 1000;
const MAX_LOAN = 50000;
const LOAN_STEP = 1000;
const MIN_MONTHS = 6;
const MAX_MONTHS = 96;
const APR = 0.058;

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC = () => (
    <header className={styles.header}>
        <p className={styles.headerTitle}>Review your loan</p>
        <p className={styles.headerSubtitle}>
            Review your loan details and see the full cost and repayment
            breakdown.
        </p>
    </header>
);

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const formatCurrency = (value: number): string => {
    const formatted = value.toFixed(2);
    const parts = formatted.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `£${parts.join(".")}`;
};

const parseCurrency = (value: string): number | null => {
    const cleaned = value.replace(/[£,\s]/g, "");
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
};

const formatMonthsToYears = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const nbsp = "\u00A0";

    if (years === 0) {
        return `${remainingMonths}${nbsp}Month${
            remainingMonths !== 1 ? "s" : ""
        }`;
    }
    if (remainingMonths === 0) {
        return `${years}${nbsp}Year${years !== 1 ? "s" : ""}`;
    }
    return `${years}${nbsp}Year${
        years !== 1 ? "s" : ""
    }${nbsp}${remainingMonths}${nbsp}Month${remainingMonths !== 1 ? "s" : ""}`;
};

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

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleEnd);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleEnd);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleEnd);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleEnd);
        };
    }, [isDragging]);

    return (
        <div className={styles.sliderSection}>
            <p className={styles.sliderLabel}>{label}</p>

            <div className={styles.sliderInputRow}>
                <div className={styles.sliderTextInputWrapper}>
                    <div
                        className={`${styles.sliderTextInputBorder} ${
                            error ? styles.sliderTextInputBorderError : ""
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
                    <p className={styles.sliderSecondaryLabel}>
                        {secondaryLabel}
                    </p>
                </div>
            </div>

            {error && <p className={styles.errorText}>{error}</p>}

            <div className={styles.sliderContainer}>
                <div
                    ref={sliderRef}
                    className={styles.sliderTrackWrapper}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    style={
                        {
                            "--sliderPercentage": percentage,
                        } as React.CSSProperties
                    }
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
    loanAmount,
    months,
    onLoanAmountChange,
    onMonthsChange,
    onValidityChange,
}) => {
    const [loanAmountInput, setLoanAmountInput] = useState(
        formatCurrency(loanAmount)
    );
    const [monthsInput, setMonthsInput] = useState(months.toString());
    const [loanAmountError, setLoanAmountError] = useState("");
    const [monthsError, setMonthsError] = useState("");

    useEffect(() => {
        const isValid = !loanAmountError && !monthsError;
        onValidityChange(isValid);
    }, [loanAmountError, monthsError, onValidityChange]);

    const handleLoanAmountChange = (value: number): void => {
        onLoanAmountChange(value);
        setLoanAmountInput(formatCurrency(value));
        setLoanAmountError("");
    };

    const handleMonthsChange = (value: number): void => {
        onMonthsChange(value);
        setMonthsInput(value.toString());
        setMonthsError("");
    };

    const handleLoanAmountInputChange = (value: string): void => {
        setLoanAmountInput(value);
        const parsed = parseCurrency(value);
        if (parsed !== null) {
            if (parsed < MIN_LOAN || parsed > MAX_LOAN) {
                setLoanAmountError(
                    `Please enter a value between ${formatCurrency(
                        MIN_LOAN
                    )} and ${formatCurrency(MAX_LOAN)}`
                );
            } else {
                onLoanAmountChange(parsed);
                setLoanAmountError("");
            }
        }
    };

    const handleMonthsInputChange = (value: string): void => {
        setMonthsInput(value);
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) {
            if (parsed < MIN_MONTHS || parsed > MAX_MONTHS) {
                setMonthsError(
                    `Please enter a value between ${MIN_MONTHS} and ${MAX_MONTHS}`
                );
            } else {
                onMonthsChange(parsed);
                setMonthsError("");
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
        <section className={styles.loanPropertiesSection}>
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
                step={LOAN_STEP}
                onChange={handleLoanAmountChange}
                label="How much would you like to borrow?"
                minDisplayValue="£1,000"
                maxDisplayValue="£50,000"
                secondaryLabel={"5.8% APR\nRepresentative"}
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
// ICON COMPONENTS
// ============================================================================

const SuccessIcon: React.FC = () => (
    <div className={styles.successIconWrapper}>
        <div className={styles.successIcon}>
            <svg
                className={styles.successIconSvg}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 18"
            >
                <g>
                    <circle cx="9" cy="9" fill="#00847F" r="9" />
                    <path d={svgPathsSuccess.p2801d500} fill="white" />
                </g>
            </svg>
        </div>
    </div>
);

const NotificationIcon: React.FC = () => (
    <div className={styles.notificationIcon}>
        <svg
            className={styles.notificationIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18"
        >
            <g>
                <circle cx="9" cy="9" fill="#305A85" r="9" />
                <path d={svgPaths.p19a91380} fill="white" />
                <path d={svgPaths.p3ddcf200} fill="white" />
            </g>
        </svg>
    </div>
);

// ============================================================================
// BREAKDOWN COMPONENTS
// ============================================================================

type BreakdownRowProps = {
    label: string;
    value: string;
    isTotal?: boolean;
};

const BreakdownRow: React.FC<BreakdownRowProps> = ({
    label,
    value,
    isTotal = false,
}) => {
    const rowClass = isTotal ? styles.breakdownRowLast : styles.breakdownRow;
    const labelClass = isTotal
        ? styles.breakdownLabelTotal
        : styles.breakdownLabel;
    const valueClass = isTotal
        ? styles.breakdownValueTotal
        : styles.breakdownValue;

    return (
        <div className={rowClass}>
            {!isTotal && (
                <div className={styles.breakdownBorder} aria-hidden="true" />
            )}
            <div className={styles.breakdownContentContainer}>
                <div className={styles.breakdownText}>
                    <p className={labelClass}>{label}</p>
                </div>
                <div className={styles.breakdownAmount}>
                    <p className={valueClass}>{value}</p>
                </div>
            </div>
        </div>
    );
};

const AmountBreakdown: React.FC<AmountBreakdownProps> = ({
    total,
    loanAmount,
    interest,
    months,
}) => {
    const RATE_REDUCTION = 0.004; // 0.4%
    const interestSavings = loanAmount * RATE_REDUCTION * (months / 12);

    return (
        <div className={styles.amountBreakdownContainer}>
            <BreakdownRow label="Total" value={formatCurrency(total)} isTotal />
            <BreakdownRow
                label="Loan amount"
                value={formatCurrency(loanAmount)}
            />
            <BreakdownRow
                label="Interest (5.8% APR)"
                value={formatCurrency(interest)}
            />
            <LowerInterestBanner interestSavings={interestSavings} />
        </div>
    );
};

const RepaymentBreakdown: React.FC<RepaymentBreakdownProps> = ({
    repaymentPeriod,
    monthlyRepayment,
}) => (
    <div className={styles.amountBreakdownContainer}>
        <BreakdownRow label="Repayment period" value={repaymentPeriod} />
        <BreakdownRow
            label="Monthly repayment"
            value={formatCurrency(monthlyRepayment)}
            isTotal
        />
    </div>
);

const LowerInterestBanner: React.FC<LowerInterestBannerProps> = ({
    interestSavings,
}) => (
    <div className={styles.lowerInterestBanner}>
        <div className={styles.lowerInterestContent}>
            <SuccessIcon />
            <div className={styles.lowerInterestTextWrapper}>
                <p className={styles.lowerInterestText}>
                    Your interest is 0.4% lower thanks to your Hybrid Stability
                    Score! You save {formatCurrency(interestSavings)}.
                </p>
            </div>
        </div>
    </div>
);

const AmountSection: React.FC<AmountSectionProps> = ({
    total,
    loanAmount,
    interest,
    months,
    repaymentPeriod,
    monthlyRepayment,
}) => (
    <div className={styles.amountSection}>
        <div className={styles.amountBorder} aria-hidden="true" />
        <div className={styles.amountInner}>
            <div className={styles.amountContent}>
                <div className={styles.amountInfo}>
                    <p className={styles.amountTitle}>Amount</p>
                    <AmountBreakdown
                        total={total}
                        loanAmount={loanAmount}
                        interest={interest}
                        months={months}
                    />
                </div>

                <div className={styles.amountInfo}>
                    <p className={styles.amountTitle}>Repayment</p>
                    <RepaymentBreakdown
                        repaymentPeriod={repaymentPeriod}
                        monthlyRepayment={monthlyRepayment}
                    />
                </div>
            </div>
        </div>
    </div>
);

// ============================================================================
// KEY INFORMATION COMPONENTS
// ============================================================================

type KeyInfoItemProps = {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
};

const KeyInfoItem: React.FC<KeyInfoItemProps> = ({
    icon,
    title,
    description,
}) => (
    <div className={styles.keyInfoItem}>
        <div className={styles.keyInfoItemBorder} aria-hidden="true" />
        <div className={styles.keyInfoItemContent}>
            <div className={styles.keyInfoIconWrapper}>{icon}</div>
            <div className={styles.keyInfoText}>
                <p className={styles.keyInfoItemTitle}>{title}</p>
                <div className={styles.keyInfoItemDescription}>
                    {description}
                </div>
            </div>
        </div>
    </div>
);

const InfoIcon1: React.FC = () => (
    <div className={styles.infoIcon}>
        <svg
            className={styles.infoIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
        >
            <path
                clipRule="evenodd"
                d={svgPaths.p385b6600}
                fill="#333333"
                fillRule="evenodd"
            />
        </svg>
    </div>
);

const InfoIcon2: React.FC = () => (
    <div className={styles.infoIcon}>
        <svg
            className={styles.infoIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
        >
            <path
                clipRule="evenodd"
                d={svgPaths.p388f8700}
                fill="#333333"
                fillRule="evenodd"
            />
        </svg>
    </div>
);

const InfoIcon3: React.FC = () => (
    <div className={styles.infoIcon}>
        <svg
            className={styles.infoIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
        >
            <path
                clipRule="evenodd"
                d={svgPaths.p203fb680}
                fill="#333333"
                fillRule="evenodd"
            />
        </svg>
    </div>
);

const InfoIcon4: React.FC = () => (
    <div className={styles.infoIconLarge}>
        <svg
            className={styles.infoIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 25"
        >
            <path d={svgPaths.p305be180} fill="#333333" />
        </svg>
    </div>
);

const InfoIcon5: React.FC = () => (
    <div className={styles.infoIcon}>
        <svg
            className={styles.infoIconSvg}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
        >
            <path d={svgPaths.p164a9c00} fill="#333333" />
        </svg>
    </div>
);

const KeyInformation: React.FC = () => (
    <section className={styles.keyInfoSection}>
        <p className={styles.keyInfoTitle}>Key information</p>
        <p className={styles.keyInfoSubtitle}>
            Before you submit your application, it's important you understand
            how it works.
        </p>

        <div className={styles.keyInfoList}>
            <KeyInfoItem
                icon={<InfoIcon1 />}
                title="Your data, your control"
                description={
                    <p>
                        We only use data you choose to share. You can change or
                        remove access anytime. Checks are secure and read‑only.
                    </p>
                }
            />

            <KeyInfoItem
                icon={<InfoIcon2 />}
                title="Applying for a loan will add to your credit file"
                description={
                    <p>
                        We've analysed your loan worthiness without using
                        credit, however applying for a loan leaves a hard check
                        on your credit file.
                    </p>
                }
            />

            <KeyInfoItem
                icon={<InfoIcon3 />}
                title="How repayments affect your credit"
                description={
                    <p>
                        Paying on time can help your record grow. If a payment
                        is missed, it may hurt your credit. Set up direct debit
                        and reminders to stay on track.
                    </p>
                }
            />

            <KeyInfoItem
                icon={<InfoIcon4 />}
                title="Speak to us if you miss a repayment or if money gets too tight"
                description={
                    <>
                        <p>
                            If you've missed a loan repayment, we won't try
                            taking it again. Make a repayment on the app to get
                            back on track.
                        </p>
                        <p>
                            We have to report any repayments you miss to credit
                            bureaus, which can make it harder to borrow later
                            and harm your file.
                        </p>
                        <p>
                            If you can't pay, talk to us as soon as you can,
                            there are ways we can help.
                        </p>
                    </>
                }
            />
            
            <KeyInfoItem
                icon={<InfoIcon5 />}
                title="We're here to help"
                description={
                    <p>
                        Drop us a message in chat, on the phone or in branch if
                        you have any questions
                    </p>
                }
            />
        </div>
    </section>
);

// ============================================================================
// CTA COMPONENT
// ============================================================================

const Cta: React.FC<CtaProps> = ({ onSubmit, isValid }) => (
    <section className={styles.ctaSection}>
        <div className={styles.notificationBanner}>
            <div className={styles.notificationBorder} aria-hidden="true" />
            <div className={styles.notificationContent}>
                <div className={styles.notificationIconContainer}>
                    <NotificationIcon />
                </div>
                <div className={styles.notificationMessageContainer}>
                    <p className={styles.notificationText}>
                        Submitting an application will leave a hard check on
                        your credit file.
                    </p>
                </div>
            </div>
        </div>

        <button
            type="button"
            onClick={isValid ? onSubmit : undefined}
            disabled={!isValid}
            className={styles.primaryButton}
        >
            Submit application
        </button>
    </section>
);

// ============================================================================
// REVIEW YOUR LOAN SCREEN
// ============================================================================

const ReviewYourLoan: React.FC<ReviewYourLoanProps> = ({
    onSubmit,
    initialLoanAmount = 10000,
    initialMonths = 62,
}) => {
    const [loanAmount, setLoanAmount] = useState(initialLoanAmount);
    const [months, setMonths] = useState(initialMonths);
    const [isValid, setIsValid] = useState(true);

    const monthlyRate = APR / 12;
    const monthlyRepayment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);
    const totalRepayment = monthlyRepayment * months;
    const totalInterest = totalRepayment - loanAmount;

    return (
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
                    months={months}
                    repaymentPeriod={formatMonthsToYears(months)}
                    monthlyRepayment={monthlyRepayment}
                />

                <div className={styles.dividerContainer}>
                    <div className={styles.dividerLineWrapper}>
                        <svg
                            className={styles.dividerSvg}
                            fill="none"
                            viewBox="0 0 348 1"
                        >
                            <line stroke="#9B9B9B" x2="348" y1="0.5" y2="0.5" />
                        </svg>
                    </div>
                </div>

                <KeyInformation />

                <Cta onSubmit={onSubmit} isValid={isValid} />
            </div>
        </div>
    );
};

export default ReviewYourLoan;
