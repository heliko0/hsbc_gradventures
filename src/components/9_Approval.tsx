import React, { useRef } from 'react';
import svgPaths from '../imports/svg-nq7ybeon38';
import imgImage12 from 'figma:asset/3829741e751ce4f7046f64d51fbb12a7d591c83b.png';
import imgImage13 from 'figma:asset/d2a0302e4cf8d9b5144b454b7c3f01a511cc6e59.png';
import imgImage14 from 'figma:asset/a82416f130a1bc5e31ed94d8693371aef4efa93b.png';
import styles from './9_Approval.module.css';

// ============================================================================
// TYPES
// ============================================================================

type HeaderProps = Record<string, never>;

type YourOfferProps = {
  onViewAgreement: () => void;
};

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
};

type CarouselProps = Record<string, never>;

type ContentProps = {
  onViewAgreement: () => void;
};

type CtaProps = Record<string, never>;

export type ApprovalProps = {
  onViewAgreement: () => void;
};

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC<HeaderProps> = () => (
  <header className={styles.header}>
    <p className={styles.headerTitle}>Great news! Your loan application is approved.</p>
    <p className={styles.headerSubtitle}>Let's confirm the details and get you set up.</p>
  </header>
);

// ============================================================================
// YOUR OFFER SECTION
// ============================================================================

const YourOfferText: React.FC = () => (
  <div className={styles.offerText}>
    <p className={styles.offerTitle}>Your offer</p>
    <p className={styles.offerDescription}>
      Click here to view and accept your loan agreement.
    </p>
  </div>
);

const PrimaryButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.primaryButton}
  >
    <p className={styles.primaryButtonText}>View your loan agreement</p>
  </button>
);

const YourOffer: React.FC<YourOfferProps> = ({ onViewAgreement }) => (
  <section className={styles.yourOfferSection}>
    <YourOfferText />
    <PrimaryButton onClick={onViewAgreement} />
  </section>
);

// ============================================================================
// PRODUCTS FOR YOU SECTION
// ============================================================================

const ProductsHeader: React.FC = () => (
  <div className={styles.productsText}>
    <p className={styles.productsTitle}>Products for you</p>
    <p className={styles.productsDescription}>
      Based on your new hybrid Stability Score, we've picked out a range of
      products just for you:
    </p>
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => (
  <div className={styles.card}>
    <div className={styles.cardBorder} aria-hidden="true" />
    <div className={styles.cardImageContainer}>
      <div className={styles.cardImageWrapper}>
        <img alt="" className={styles.cardImage} src={image} />
      </div>
    </div>
    <div className={styles.cardContentOuter}>
      <div className={styles.cardContentInner}>
        <div className={styles.cardContentFlexible}>
          <p className={styles.cardTitle}>{title}</p>
          <div className={styles.cardDescriptionContainer}>
            <p className={styles.cardDescription}>{description}</p>
          </div>
          <div className={styles.cardLinkContainer}>
            <div className={styles.cardLinkWrapper}>
              <div className={styles.cardLink}>
                <p className={styles.cardLinkText}>Learn more</p>
                <div className={styles.cardLinkIconContainer}>
                  <div className={styles.cardLinkIcon}>
                    <svg
                      className={styles.cardLinkIconSvg}
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 6 12"
                    >
                      <path
                        clipRule="evenodd"
                        d="M0 12L0 0L6 6L0 12Z"
                        fill="#DB0011"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Carousel: React.FC<CarouselProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    scrollRef.current.classList.add(styles.carouselDragging);
    startXRef.current = e.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.clientX - startXRef.current;
    scrollRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const endDrag = (): void => {
    if (!scrollRef.current) return;
    isDraggingRef.current = false;
    scrollRef.current.classList.remove(styles.carouselDragging);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    scrollRef.current.classList.add(styles.carouselDragging);
    startXRef.current = e.touches[0].clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - startXRef.current;
    scrollRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const handleTouchEnd = (): void => {
    if (!scrollRef.current) return;
    isDraggingRef.current = false;
    scrollRef.current.classList.remove(styles.carouselDragging);
  };

  return (
    <div
      ref={scrollRef}
      className={styles.carouselWrapper}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carouselContainer}>
        <div className={styles.carouselCardWrapper}>
          <ProductCard
            title="Regular Savings Account"
            description="Save between £25 and £250 every month with a 12-month fixed rate account. Available to customers with a current account."
            image={imgImage12}
          />
        </div>
        <div className={styles.carouselCardWrapper}>
          <ProductCard
            title="Savings Booster Pot"
            description="Get timely alerts so you never miss a scheduled payment."
            image={imgImage13}
          />
        </div>
        <div className={styles.carouselCardWrapper}>
          <ProductCard
            title="Set Repayment Reminders"
            description="Automatically set aside small amounts to build a repayment buffer."
            image={imgImage14}
          />
        </div>
      </div>
    </div>
  );
};

const ProductsForYou: React.FC = () => (
  <section className={styles.productsSection}>
    <ProductsHeader />
    <Carousel />
  </section>
);

// ============================================================================
// MAIN CONTENT
// ============================================================================

const Content: React.FC<ContentProps> = ({ onViewAgreement }) => (
  <div className={styles.contentSection}>
    <YourOffer onViewAgreement={onViewAgreement} />
    <ProductsForYou />
  </div>
);

// ============================================================================
// CTA SECTION
// ============================================================================

const NotificationIcon: React.FC = () => (
  <div className={styles.notificationIcon}>
    <svg
      className={styles.notificationIconSvg}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <circle cx="9" cy="9" fill="#FFBB33" r="9" />
      <path d={svgPaths.pb121c80} fill="#333333" />
      <path d={svgPaths.p3d68b000} fill="#333333" />
    </svg>
  </div>
);

const NotificationBanner: React.FC = () => (
  <div className={styles.notificationBanner}>
    <div className={styles.notificationBorder} aria-hidden="true" />
    <div className={styles.notificationContent}>
      <div className={styles.notificationIconWrapper}>
        <NotificationIcon />
      </div>
      <div className={styles.notificationMessageContainer}>
        <p className={styles.notificationText}>
          Please view and accept the agreement before continuing
        </p>
      </div>
    </div>
  </div>
);

const ContinueButton: React.FC = () => (
  <button type="button" className={styles.primaryButton} disabled>
    <p className={styles.primaryButtonText}>Continue</p>
  </button>
);

const Cta: React.FC<CtaProps> = () => (
  <section className={styles.ctaSection}>
    <NotificationBanner />
    <ContinueButton />
  </section>
);

// ============================================================================
// APPROVAL SCREEN
// ============================================================================

const Approval: React.FC<ApprovalProps> = ({ onViewAgreement }) => (
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

      <main className={styles.frame}>
        <Content onViewAgreement={onViewAgreement} />
        <Cta />
      </main>
    </div>
  </div>
);

export default Approval;