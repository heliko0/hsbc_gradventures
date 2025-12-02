import svgPaths from "./svg-chkoja7x7v";
import imgImage12 from "figma:asset/3829741e751ce4f7046f64d51fbb12a7d591c83b.png";
import imgImage13 from "figma:asset/d2a0302e4cf8d9b5144b454b7c3f01a511cc6e59.png";
import imgImage14 from "figma:asset/a82416f130a1bc5e31ed94d8693371aef4efa93b.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[348px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] w-full">Great news! Your loan application is approved.</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[16px] w-full">Let’s confirm the details and get you set up.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#333333] text-[19px] w-full">Your offer</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px] text-black w-full">Loan agreement accepted, download below or find in your profile at any time.</p>
    </div>
  );
}

function ElementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-center text-nowrap whitespace-pre">Download your loan agreement</p>
    </div>
  );
}

function OnLightButtonPrimary() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-[11px] pt-[9px] px-[20px] relative shrink-0 w-[343px]" data-name="On Light: Button primary">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none" />
      <ElementsContainer />
    </div>
  );
}

function YourOffer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Your offer">
      <Text />
      <OnLightButtonPrimary />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] w-full">Products for you</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Based on your new hybrid Stability Score, we’ve picked out a range of products just for you:</p>
    </div>
  );
}

function ProductsForYou() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[348px]" data-name="Products for you">
      <Text1 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Content container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">Save between £25 and £250 every month with a 12-month fixed rate account. Available to customers with a current account.</p>
    </div>
  );
}

function ArrowRightNarrow() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6px]" data-name="Arrow right narrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g id="Arrow right narrow">
          <path clipRule="evenodd" d="M0 12L0 0L6 6L0 12Z" fill="var(--fill-0, #DB0011)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Icon container">
      <ArrowRightNarrow />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">Learn more</p>
      <IconContainer />
    </div>
  );
}

function LinkOne() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link one">
      <Link />
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="Link container">
      <LinkOne />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[143px] relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[143px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333333] text-[19px] w-full">Regular Savings Account</p>
          <ContentContainer />
          <LinkContainer />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start p-px relative shrink-0 w-[295px]" data-name="Card Image with border">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="h-[125px] relative shrink-0 w-full" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.05%] left-0 max-w-none top-[-27.05%] w-full" src={imgImage12} />
        </div>
      </div>
      <Content />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Content container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">Get timely alerts so you never miss a scheduled payment.</p>
    </div>
  );
}

function ArrowRightNarrow1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6px]" data-name="Arrow right narrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g id="Arrow right narrow">
          <path clipRule="evenodd" d="M0 12L0 0L6 6L0 12Z" fill="var(--fill-0, #DB0011)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Icon container">
      <ArrowRightNarrow1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">Learn more</p>
      <IconContainer1 />
    </div>
  );
}

function LinkOne1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link one">
      <Link1 />
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="Link container">
      <LinkOne1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333333] text-[19px] w-full">Savings Booster Pot</p>
          <ContentContainer1 />
          <LinkContainer1 />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start p-px relative shrink-0 w-[295px]" data-name="Card Image with border">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="h-[125px] relative shrink-0 w-full" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <Content1 />
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-start min-h-px min-w-px pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Content container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">Automatically set aside small amounts to build a repayment buffer.</p>
    </div>
  );
}

function ArrowRightNarrow2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[6px]" data-name="Arrow right narrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g id="Arrow right narrow">
          <path clipRule="evenodd" d="M0 12L0 0L6 6L0 12Z" fill="var(--fill-0, #DB0011)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Icon container">
      <ArrowRightNarrow2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">Learn more</p>
      <IconContainer2 />
    </div>
  );
}

function LinkOne2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link one">
      <Link2 />
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full" data-name="Link container">
      <LinkOne2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333333] text-[19px] w-full">Set Repayment Reminders</p>
          <ContentContainer2 />
          <LinkContainer2 />
        </div>
      </div>
    </div>
  );
}

function CardImageWithBorder2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start p-px relative shrink-0 w-[295px]" data-name="Card Image with border">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="h-[125px] relative shrink-0 w-full" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <Content2 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Carousel">
      <div className="flex flex-row items-center self-stretch">
        <CardImageWithBorder />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <CardImageWithBorder1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <CardImageWithBorder2 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <YourOffer />
      <ProductsForYou />
      <Carousel />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Container"></g>
          <circle cx="9" cy="9" fill="var(--fill-0, #305A85)" id="Backround" r="9" />
          <g id="Content">
            <path d={svgPaths.p19a91380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ddcf200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Information">
      <Icon />
    </div>
  );
}

function StatusIconContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 size-[18px]" data-name="Status icon container">
      <Information />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Message container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">You can view your loan agreement in your profile at at any time.</p>
    </div>
  );
}

function NotificationContextual() {
  return (
    <div className="bg-[#ebeff4] relative shrink-0 w-full" data-name="Notification contextual">
      <div aria-hidden="true" className="absolute border border-[#305a85] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[16px] py-[11px] relative w-full">
          <StatusIconContainer />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
}

function ElementsContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Review your loan</p>
    </div>
  );
}

function OnLightButtonPrimary1() {
  return (
    <div className="bg-[#db0011] relative shrink-0 w-full" data-name="On Light: Button primary">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[20px] py-[11px] relative w-full">
          <ElementsContainer1 />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-end relative shrink-0 w-[348px]" data-name="CTA">
      <NotificationContextual />
      <OnLightButtonPrimary1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Content3 />
      <Cta />
    </div>
  );
}

export default function Component10AApproval() {
  return (
    <div className="bg-white relative size-full" data-name="10a. Approval">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[48px] px-[32px] relative size-full">
          <Header />
          <div className="h-0 relative shrink-0 w-[348px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line id="Line 1" stroke="var(--stroke-0, #9B9B9B)" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}