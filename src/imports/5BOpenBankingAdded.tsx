import svgPaths from "./svg-rnajv1bdey";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[364px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">{`Add Open Banking access `}</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Bank (or banked) with anyone else? You can link those accounts here.</p>
    </div>
  );
}

function WhatIsOpenBanking() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="What is open banking">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">What is Open Banking?</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">{`We use Open Banking (read‑only) to identify regular payments like rent, utilities, and phone bills. `}</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="header section">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">Link your bank accounts:</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">If you only bank with HSBC, you’re all set. You can add other banks you use to give a fuller picture, and remove access at any time.</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_27_2771)" id="Logo">
          <path d={svgPaths.p27480cb0} fill="url(#paint0_radial_27_2771)" id="Vector" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1.18823 3.14023) scale(18.3678 18.3677)" gradientUnits="userSpaceOnUse" id="paint0_radial_27_2771" r="1">
            <stop stopColor="#20C4F4" />
            <stop offset="0.305" stopColor="#09B4F0" />
            <stop offset="0.5" stopColor="#00AEEF" />
            <stop offset="0.8" stopColor="#0092C8" />
            <stop offset="1" stopColor="#006E98" />
          </radialGradient>
          <clipPath id="clip0_27_2771">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Barclays() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Barclays">
      <Logo />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Barclays</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_27_2765)" id="Logo">
          <path d={svgPaths.pf726c80} fill="var(--fill-0, #E34B5F)" id="Vector" />
          <path d={svgPaths.pd90d00} fill="var(--fill-0, #E7CE9C)" id="Vector_2" />
          <path d={svgPaths.p3f548300} fill="var(--fill-0, #1E7889)" id="Vector_3" />
          <path d={svgPaths.p3dbe100} fill="var(--fill-0, #97BAA6)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_27_2765">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Monzo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Monzo">
      <Logo1 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Monzo</p>
    </div>
  );
}

function ConnectedBanks() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[78px]" data-name="Connected Banks">
      <Barclays />
      <Monzo />
    </div>
  );
}

function AccountsAdded() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Accounts added">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Accounts added:</p>
      <ConnectedBanks />
    </div>
  );
}

function ElementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-center text-nowrap whitespace-pre">Change selection</p>
    </div>
  );
}

function OnLightButtonPrimary() {
  return (
    <div className="relative shrink-0 w-full" data-name="On Light: Button primary">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[11px] pt-[9px] px-[20px] relative w-full">
          <ElementsContainer />
        </div>
      </div>
    </div>
  );
}

function ChooseWhatWeAnalyseHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre" data-name="Choose what we analyse header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">Choose what we analyse:</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">Note: turning off may reduce assessment confidence.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.p282a4b00} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
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

function Text() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Bank Transactions</p>
    </div>
  );
}

function Knob() {
  return <div className="absolute bg-white right-[2px] rounded-[100px] shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[27px] top-1/2 translate-y-[-50%]" data-name="Knob" />;
}

function Switch() {
  return (
    <div className="bg-black h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Switch">
      <Knob />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon1 />
      <Text />
      <Switch />
    </div>
  );
}

function BankTransactions() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Bank Transactions">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <g id="Icon_2">
            <path d={svgPaths.p126e7ef2} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p54a3a70} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2b98ba80} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p307db300} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">{`Rent `}</p>
    </div>
  );
}

function Knob1() {
  return <div className="absolute bg-white right-[2px] rounded-[100px] shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[27px] top-1/2 translate-y-[-50%]" data-name="Knob" />;
}

function Switch1() {
  return (
    <div className="bg-black h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Switch">
      <Knob1 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon3 />
      <Text1 />
      <Switch1 />
    </div>
  );
}

function Rent() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Rent">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path d={svgPaths.p22bd5b00} fill="var(--fill-0, #333333)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Utility Bill</p>
    </div>
  );
}

function Knob2() {
  return <div className="absolute bg-white right-[2px] rounded-[100px] shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[27px] top-1/2 translate-y-[-50%]" data-name="Knob" />;
}

function Switch2() {
  return (
    <div className="bg-black h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Switch">
      <Knob2 />
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon5 />
      <Text2 />
      <Switch2 />
    </div>
  );
}

function UtilityBill() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Utility Bill">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.p36d04200} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[2px] px-0 relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Phone Bill</p>
    </div>
  );
}

function Knob3() {
  return <div className="absolute bg-white right-[2px] rounded-[100px] shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[27px] top-1/2 translate-y-[-50%]" data-name="Knob" />;
}

function Switch3() {
  return (
    <div className="bg-black h-[31px] overflow-clip relative rounded-[100px] shrink-0 w-[51px]" data-name="Switch">
      <Knob3 />
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon7 />
      <Text3 />
      <Switch3 />
    </div>
  );
}

function PhoneBill() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2px] items-start px-0 py-[12px] relative shrink-0 w-full" data-name="Phone Bill">
      <div aria-hidden="true" className="absolute border-[#d7d8d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ContentContainer3 />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Categories">
      <BankTransactions />
      <Rent />
      <UtilityBill />
      <PhoneBill />
    </div>
  );
}

function Categories1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Categories">
      <Categories />
    </div>
  );
}

function ChooseWhatWeAnalyse() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Choose what we analyse">
      <ChooseWhatWeAnalyseHeader />
      <Categories1 />
    </div>
  );
}

function LinkAccounts() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Link accounts">
      <HeaderSection />
      <AccountsAdded />
      <OnLightButtonPrimary />
      <ChooseWhatWeAnalyse />
    </div>
  );
}

function Icon8() {
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
      <Icon8 />
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
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">{`Continuing won't affect your credit score`}</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Continue</p>
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

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <WhatIsOpenBanking />
      <LinkAccounts />
      <Cta />
    </div>
  );
}

export default function Component5BOpenBankingAdded() {
  return (
    <div className="bg-white relative size-full" data-name="5b. Open Banking Added">
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
          <Content />
        </div>
      </div>
    </div>
  );
}