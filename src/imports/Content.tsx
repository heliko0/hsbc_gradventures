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

function LinkAccounts() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Link accounts">
      <HeaderSectopm />
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
    <div className="bg-[#db0011] box-border content-stretch flex h-[39px] items-start justify-center pb-[11px] pt-[9px] px-[20px] relative shrink-0 w-[348px]" data-name="On Light: Button primary">
      <ElementsContainer />
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Content">
      <WhatIsOpenBanking />
      <LinkAccounts />
      <OnLightButtonPrimary />
    </div>
  );
}