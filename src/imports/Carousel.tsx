import imgImage12 from "figma:asset/3829741e751ce4f7046f64d51fbb12a7d591c83b.png";
import imgImage13 from "figma:asset/d2a0302e4cf8d9b5144b454b7c3f01a511cc6e59.png";
import imgImage14 from "figma:asset/a82416f130a1bc5e31ed94d8693371aef4efa93b.png";

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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer" data-name="Link">
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer" data-name="Link">
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer" data-name="Link">
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

export default function Carousel() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full overflow-x-auto" data-name="Carousel">
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