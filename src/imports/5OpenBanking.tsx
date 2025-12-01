function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[364px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">{`Add Open Banking access `}</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Bank (or banked) with anyone else? You can link those accounts here.</p>
    </div>
  );
}

function WhatIsOpenBanking() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="What is open banking">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">What is Open Banking?</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">We use Open Banking (read‑only) to identify regular payments like rent, utilities, and phone bills.</p>
    </div>
  );
}

function HeaderSectopm() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="Header sectopm">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">Link your bank accounts:</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">If you only bank with HSBC, you’re all set. You can add other banks you use to give a fuller picture.</p>
    </div>
  );
}

function ElementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Add accounts</p>
    </div>
  );
}

function OnLightButtonPrimary() {
  return (
    <div className="bg-[#db0011] relative shrink-0 w-full" data-name="On Light: Button primary">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[11px] pt-[9px] px-[20px] relative w-full">
          <ElementsContainer />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <OnLightButtonPrimary />
    </div>
  );
}

function LinkAccounts() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Link accounts">
      <HeaderSectopm />
      <Frame />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <WhatIsOpenBanking />
      <LinkAccounts />
    </div>
  );
}

function ElementsContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-center text-nowrap whitespace-pre">Skip for now</p>
    </div>
  );
}

function OnLightButtonPrimary1() {
  return (
    <div className="relative shrink-0 w-full" data-name="On Light: Button primary">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[11px] pt-[9px] px-[20px] relative w-full">
          <ElementsContainer1 />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-end relative shrink-0 w-[348px]" data-name="CTA">
      <OnLightButtonPrimary1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Content />
      <Cta />
    </div>
  );
}

export default function Component5OpenBanking() {
  return (
    <div className="bg-white relative size-full" data-name="5. Open Banking">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[48px] px-[32px] relative size-full">
          <Header />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
                <line id="Line 1" stroke="var(--stroke-0, #9B9B9B)" x2="348" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Content1 />
        </div>
      </div>
    </div>
  );
}