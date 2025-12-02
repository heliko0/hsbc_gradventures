import { useRef } from 'react';
import svgPaths from "../imports/svg-nq7ybeon38";
import imgImage12 from "figma:asset/3829741e751ce4f7046f64d51fbb12a7d591c83b.png";
import imgImage13 from "figma:asset/d2a0302e4cf8d9b5144b454b7c3f01a511cc6e59.png";
import imgImage14 from "figma:asset/a82416f130a1bc5e31ed94d8693371aef4efa93b.png";
import styles from './10_Approval.module.css';

interface ApprovalProps {
  onViewAgreement: () => void;
}

function Header() {
  return (
    <div className={styles.header} data-name="Header">
      <p className={styles.headerTitle}>Great news! Your loan application is approved.</p>
      <p className={styles.headerSubtitle}>Let's confirm the details and get you set up.</p>
    </div>
  );
}

function Text() {
  return (
    <div className={styles.offerText} data-name="Text">
      <p className={styles.offerTitle}>Your offer</p>
      <p className={styles.offerDescription}>Click here to view and accept your loan agreement.</p>
    </div>
  );
}

function ElementsContainer() {
  return (
    <div className={styles.primaryButtonContent} data-name="Elements container">
      <p className={styles.primaryButtonText}>View your loan agreement</p>
    </div>
  );
}

function PrimaryButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.primaryButton} data-name="On Light: Button primary" onClick={onClick}>
      <ElementsContainer />
    </button>
  );
}

function YourOffer({ onViewAgreement }: { onViewAgreement: () => void }) {
  return (
    <div className={styles.yourOfferSection} data-name="Your offer">
      <Text />
      <PrimaryButton onClick={onViewAgreement} />
    </div>
  );
}

function Text1() {
  return (
    <div className={styles.productsText} data-name="Text">
      <p className={styles.productsTitle}>Products for you</p>
      <p className={styles.productsDescription}>Based on your new hybrid Stability Score, we've picked out a range of products just for you:</p>
    </div>
  );
}

function ProductsForYou() {
  return (
    <div className={styles.productsSection} data-name="Products for you">
      <Text1 />
    </div>
  );
}

function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.cardDescriptionContainer} data-name="Content container">
      <p className={styles.cardDescription}>{children}</p>
    </div>
  );
}

function ArrowRightNarrow() {
  return (
    <div className={styles.cardLinkIcon} data-name="Arrow right narrow">
      <svg className={styles.cardLinkIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g id="Arrow right narrow">
          <path clipRule="evenodd" d="M0 12L0 0L6 6L0 12Z" fill="var(--fill-0, #DB0011)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className={styles.cardLinkIconContainer} data-name="Icon container">
      <ArrowRightNarrow />
    </div>
  );
}

function Link() {
  return (
    <div className={styles.cardLink} data-name="Link">
      <p className={styles.cardLinkText}>Learn more</p>
      <IconContainer />
    </div>
  );
}

function LinkOne() {
  return (
    <div className={styles.cardLinkWrapper} data-name="Link one">
      <Link />
    </div>
  );
}

function LinkContainer() {
  return (
    <div className={styles.cardLinkContainer} data-name="Link container">
      <LinkOne />
    </div>
  );
}

function Content() {
  return (
    <div className={styles.cardContentOuter} data-name="Content">
      <div className={styles.cardContentInner}>
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>Regular Savings Account</p>
          <ContentContainer>Save between £25 and £250 every month with a 12-month fixed rate account. Available to customers with a current account.</ContentContainer>
          <LinkContainer />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder() {
  return (
    <div className={styles.card} data-name="Card Image with border">
      <div aria-hidden="true" className={styles.cardBorder} />
      <div className={styles.cardImageContainer} data-name="image 12">
        <div className={styles.cardImageWrapper}>
          <img alt="" className={styles.cardImage} src={imgImage12} />
        </div>
      </div>
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className={styles.cardContentOuter} data-name="Content">
      <div className={styles.cardContentInner}>
        <div className={styles.cardContentFlexible}>
          <p className={styles.cardTitle}>Savings Booster Pot</p>
          <ContentContainer>Get timely alerts so you never miss a scheduled payment.</ContentContainer>
          <LinkContainer />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder1() {
  return (
    <div className={styles.card} data-name="Card Image with border">
      <div aria-hidden="true" className={styles.cardBorder} />
      <div className={styles.cardImageContainer} data-name="image 12">
        <img alt="" className={styles.cardImageCover} src={imgImage13} />
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className={styles.cardContentOuter} data-name="Content">
      <div className={styles.cardContentInner}>
        <div className={styles.cardContentFlexible}>
          <p className={styles.cardTitle}>Set Repayment Reminders</p>
          <ContentContainer>Automatically set aside small amounts to build a repayment buffer.</ContentContainer>
          <LinkContainer />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder2() {
  return (
    <div className={styles.card} data-name="Card Image with border">
      <div aria-hidden="true" className={styles.cardBorder} />
      <div className={styles.cardImageContainer} data-name="image 12">
        <img alt="" className={styles.cardImageCover} src={imgImage14} />
      </div>
      <Content2 />
    </div>
  );
}

function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    scrollRef.current.classList.add(styles.carouselDragging);
    startXRef.current = e.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.clientX - startXRef.current;
    scrollRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const endDrag = () => {
    if (!scrollRef.current) return;
    isDraggingRef.current = false;
    scrollRef.current.classList.remove(styles.carouselDragging);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    scrollRef.current.classList.add(styles.carouselDragging);
    startXRef.current = e.touches[0].clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - startXRef.current;
    scrollRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const handleTouchEnd = () => {
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
      <div className={styles.carouselContainer} data-name="Carousel">
        <div className={styles.carouselCardWrapper}>
          <CardImageWithBorder />
        </div>
        <div className={styles.carouselCardWrapper}>
          <CardImageWithBorder1 />
        </div>
        <div className={styles.carouselCardWrapper}>
          <CardImageWithBorder2 />
        </div>
      </div>
    </div>
  );
}

function Content3({ onViewAgreement }: { onViewAgreement: () => void }) {
  return (
    <div className={styles.contentSection} data-name="Content">
      <YourOffer onViewAgreement={onViewAgreement} />
      <ProductsForYou />
      <Carousel />
    </div>
  );
}

function Icon() {
  return (
    <div className={styles.notificationIcon} data-name="Icon">
      <svg className={styles.notificationIconSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Container"></g>
          <circle cx="9" cy="9" fill="var(--fill-0, #FFBB33)" id="Backround" r="9" />
          <g id="Content">
            <path d={svgPaths.pb121c80} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3d68b000} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Warning() {
  return (
    <div className={styles.notificationIconWrapper} data-name="Warning">
      <Icon />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className={styles.notificationMessageContainer} data-name="Message container">
      <p className={styles.notificationText}>Please view and accept the agreement before continuing</p>
    </div>
  );
}

function NotificationContextual() {
  return (
    <div className={styles.notificationBanner} data-name="Notification contextual">
      <div aria-hidden="true" className={styles.notificationBorder} />
      <div className={styles.notificationInner}>
        <div className={styles.notificationContent}>
          <Warning />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
}


function DisabledButton() {
  return (
    <button
      className={styles.primaryButton}
      data-name="On Light: Button primary"
      disabled
    >
      <div className={styles.primaryButtonContent}>
        <p className={styles.primaryButtonText}>Continue</p>
      </div>
    </button>
  );
}

function Cta() {
  return (
    <div className={styles.ctaSection} data-name="CTA">
      <NotificationContextual />
      <DisabledButton />
    </div>
  );
}

function Frame({ onViewAgreement }: { onViewAgreement: () => void }) {
  return (
    <div className={styles.frame}>
      <Content3 onViewAgreement={onViewAgreement} />
      <Cta />
    </div>
  );
}

export default function Approval({ onViewAgreement }: ApprovalProps) {
  return (
    <div className={styles.root} data-name="10a. Approval">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Header />
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLineWrapper}>
              <svg className={styles.dividerSvg} fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line id="Line 1" stroke="var(--stroke-0, #9B9B9B)" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame onViewAgreement={onViewAgreement} />
        </div>
      </div>
    </div>
  );
}
