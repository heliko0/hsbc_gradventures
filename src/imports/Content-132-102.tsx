import svgPaths from "./svg-tg2rz0vich";

function Text() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#db0011] text-[12px] text-nowrap whitespace-pre">Total</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="Amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#db0011] text-[12px] text-nowrap text-right whitespace-pre">£3,317.02</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Text />
      <div className="flex flex-row items-center self-stretch">
        <Amount />
      </div>
    </div>
  );
}

function Total() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Total">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Loan amount</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="Amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap text-right whitespace-pre">£3,200.00</p>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Text1 />
      <div className="flex flex-row items-center self-stretch">
        <Amount1 />
      </div>
    </div>
  );
}

function LoanAmount() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Loan amount">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Interest (5.8% APR)</p>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="Amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap text-right whitespace-pre">£117.02</p>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Text2 />
      <div className="flex flex-row items-center self-stretch">
        <Amount2 />
      </div>
    </div>
  );
}

function Interest() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Interest">
      <div aria-hidden="true" className="absolute border-0 border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <ContentContainer2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Container"></g>
          <circle cx="9" cy="9" fill="var(--fill-0, #00847F)" id="Backround" r="9" />
          <path d={svgPaths.p2801d500} fill="var(--fill-0, white)" id="Content" />
        </g>
      </svg>
    </div>
  );
}

function Success() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Success">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] w-full">Your interest is 0.4% lower thanks to your hybrid Stability Score!</p>
    </div>
  );
}

function LowerInterest() {
  return (
    <div className="bg-[#ededed] relative shrink-0 w-full" data-name="Lower interest">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative w-full">
          <Success />
          <Content />
        </div>
      </div>
    </div>
  );
}

function AmountBreakdown() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Amount breakdown">
      <Total />
      <LoanAmount />
      <Interest />
      <LowerInterest />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Amount</p>
      <AmountBreakdown />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Repayment period</p>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="Amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap text-right whitespace-pre">1 year 2 months</p>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Text3 />
      <div className="flex flex-row items-center self-stretch">
        <Amount3 />
      </div>
    </div>
  );
}

function Total1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Total">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Monthly repayment</p>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="Amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap text-right whitespace-pre">£236.93</p>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Text4 />
      <div className="flex flex-row items-center self-stretch">
        <Amount4 />
      </div>
    </div>
  );
}

function LoanAmount1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Loan amount">
      <div aria-hidden="true" className="absolute border-0 border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <ContentContainer4 />
    </div>
  );
}

function AmountBreakdown1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Amount breakdown">
      <Total1 />
      <LoanAmount1 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Repayment</p>
      <AmountBreakdown1 />
    </div>
  );
}

function Amount5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Amount">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
          <Info />
          <Info1 />
        </div>
      </div>
    </div>
  );
}

export default function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Content">
      <Amount5 />
    </div>
  );
}