import svgPaths from "./svg-47e4mxxt2t";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[348px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">Review your loan</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Review your loan details and see the full cost and repayment breakdown.</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-full" data-name="Header">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">Choose your loan</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">Last chance to review these details before you submit.</p>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">£10,000</p>
        </div>
      </div>
    </div>
  );
}

function Apr() {
  return (
    <div className="bg-[#ededed] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[24px] py-[6px] relative shrink-0 w-[140px]" data-name="APR">
      <div className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap whitespace-pre">
        <p className="mb-0">5.8% APR</p>
        <p>Representative</p>
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Inputs">
      <InputField />
      <Apr />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Group">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Inputs />
      </div>
    </div>
  );
}

function Markers() {
  return <div className="content-stretch flex items-start justify-between shrink-0 w-full" data-name="Markers" />;
}

function Track() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Track">
      <div className="basis-0 bg-[#db0011] grow h-[8px] min-h-px min-w-px shrink-0" data-name="Track dark" />
      <div className="basis-0 bg-[#ededed] grow h-[8px] min-h-px min-w-px shrink-0" data-name="Track" />
    </div>
  );
}

function Track1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-20px] relative shrink-0 w-full" data-name="Track">
      <Markers />
      <Track />
    </div>
  );
}

function SliderHandle() {
  return (
    <div className="mb-[-20px] relative shrink-0 size-[32px]" data-name=".Slider handle">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id=".Slider handle">
            <circle cx="16.5" cy="16.5" fill="var(--fill-0, white)" id="Handle" r="16" stroke="var(--stroke-0, #D7D8D6)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="box-border content-stretch flex flex-col h-[32px] items-center justify-end pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Slider">
      <Track1 />
      <SliderHandle />
    </div>
  );
}

function Vaues() {
  return (
    <div className="content-stretch flex font-['Inter:Light',sans-serif] font-light items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap w-full whitespace-pre" data-name="Vaues">
      <p className="relative shrink-0">£1,000</p>
      <p className="relative shrink-0 text-right">£50,000</p>
    </div>
  );
}

function SliderSingle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slider single">
      <Slider />
      <Vaues />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] w-full">How much would you like to borrow?</p>
      <Group />
      <SliderSingle />
    </div>
  );
}

function InputField1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[11px] relative w-full">
          <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">62</p>
        </div>
      </div>
    </div>
  );
}

function Apr1() {
  return (
    <div className="bg-[#ededed] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[24px] py-[6px] relative shrink-0 w-[140px]" data-name="APR">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap whitespace-pre">5 Years 2 Months</p>
    </div>
  );
}

function Inputs1() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Inputs">
      <InputField1 />
      <Apr1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Group">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Inputs1 />
      </div>
    </div>
  );
}

function Markers1() {
  return <div className="content-stretch flex items-start justify-between shrink-0 w-full" data-name="Markers" />;
}

function Track2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Track">
      <div className="basis-0 bg-[#db0011] grow h-[8px] min-h-px min-w-px shrink-0" data-name="Track dark" />
      <div className="basis-0 bg-[#ededed] grow h-[8px] min-h-px min-w-px shrink-0" data-name="Track" />
    </div>
  );
}

function Track3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-20px] relative shrink-0 w-full" data-name="Track">
      <Markers1 />
      <Track2 />
    </div>
  );
}

function SliderHandle1() {
  return (
    <div className="mb-[-20px] relative shrink-0 size-[32px]" data-name=".Slider handle">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id=".Slider handle">
            <circle cx="16.5" cy="16.5" fill="var(--fill-0, white)" id="Handle" r="16" stroke="var(--stroke-0, #D7D8D6)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Slider1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[32px] items-center justify-end pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Slider">
      <Track3 />
      <SliderHandle1 />
    </div>
  );
}

function Vaues1() {
  return (
    <div className="content-stretch flex font-['Inter:Light',sans-serif] font-light items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap w-full whitespace-pre" data-name="Vaues">
      <p className="relative shrink-0">6</p>
      <p className="relative shrink-0 text-right">96</p>
    </div>
  );
}

function SliderSingle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slider single">
      <Slider1 />
      <Vaues1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] w-full">Over how many months?</p>
      <Group1 />
      <SliderSingle1 />
    </div>
  );
}

function LoanProperties() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Loan properties">
      <Header1 />
      <Frame />
      <Frame1 />
    </div>
  );
}

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

function AmountBreakdown() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Amount breakdown">
      <Total />
      <LoanAmount />
      <Interest />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.p385b6600} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Icon />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">Your data, your control</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">We only use data you choose to share. You can change or remove access anytime. Checks are secure and read‑only.</p>
      </div>
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <Icon1 />
      <Text5 />
    </div>
  );
}

function TakingOutALoan() {
  return (
    <div className="relative shrink-0 w-full" data-name="Taking out a loan">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer5 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.p388f8700} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">Applying for a loan will add to your credit file</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">We’ve analysed your loan worthiness without using credit, however applying for a loan leaves a hard check on your credit file.</p>
      </div>
    </div>
  );
}

function ContentContainer6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <Icon3 />
      <Text6 />
    </div>
  );
}

function TakingOutALoan1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Taking out a loan">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer6 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.p203fb680} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">How repayments affect your credit</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">Paying on time can help your record grow. If a payment is missed, it may hurt your credit. Set up direct debit and reminders to stay on track.</p>
      </div>
    </div>
  );
}

function ContentContainer7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <Icon5 />
      <Text7 />
    </div>
  );
}

function TakingOutALoan2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Taking out a loan">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer7 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24.013px] relative shrink-0 w-[24.005px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Icon">
          <g id="Container"></g>
          <path d={svgPaths.p305be180} fill="var(--fill-0, #333333)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">Speak to us if you miss a repayment or if money gets too tight</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[normal] relative shrink-0 w-full">
        <p className="mb-0">{`If you’ve missed a loan repayment, we won’t try taking it again. Make a repayment on the app to get back on track. `}</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="mb-0">We have to report any repayments you miss to credit bureaus, which can make it harder to borrow later and harm your file.</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p>If you can’t pay, talk to us as soon as you can, there are ways we can help.</p>
      </div>
    </div>
  );
}

function ContentContainer8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <Icon7 />
      <Text8 />
    </div>
  );
}

function TakingOutALoan3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Taking out a loan">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer8 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path d={svgPaths.p164a9c00} fill="var(--fill-0, #333333)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
      <Icon8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-nowrap whitespace-pre">We’re here to help</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">Drop us a message in chat, on the phone or in branch if you have any questions</p>
      </div>
    </div>
  );
}

function ContentContainer9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <Icon9 />
      <Text9 />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact us">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer9 />
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-name="Info">
      <TakingOutALoan />
      <TakingOutALoan1 />
      <TakingOutALoan2 />
      <TakingOutALoan3 />
      <ContactUs />
    </div>
  );
}

function InfoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Info section">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[19px] text-black text-nowrap whitespace-pre">Key information</p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">Before you submit your application, it’s important you understand how it works.</p>
      <Info2 />
    </div>
  );
}

function Icon10() {
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
      <Icon10 />
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
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">Submitting an application will leave a hard check on your credit file.</p>
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

function ElementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Submit application</p>
    </div>
  );
}

function OnLightButtonPrimary() {
  return (
    <div className="bg-[#db0011] relative shrink-0 w-full" data-name="On Light: Button primary">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[20px] py-[11px] relative w-full">
          <ElementsContainer />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-end relative shrink-0 w-[348px]" data-name="CTA">
      <NotificationContextual />
      <OnLightButtonPrimary />
    </div>
  );
}

export default function Component9ReviewYourLoan() {
  return (
    <div className="bg-white relative size-full" data-name="9. Review your loan">
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
          <LoanProperties />
          <Amount5 />
          <div className="h-0 relative shrink-0 w-[348px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line id="Line 1" stroke="var(--stroke-0, #9B9B9B)" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <InfoSection />
          <Cta />
        </div>
      </div>
    </div>
  );
}