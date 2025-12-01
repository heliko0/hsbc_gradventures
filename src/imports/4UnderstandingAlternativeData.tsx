import svgPaths from "./svg-1a9s5wdjkt";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[364px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">Understanding alternative data</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Why we ask for it, how we use it, and how it gives a fuller, fairer picture of your finances.</p>
    </div>
  );
}

function WhatAltDataMeans() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-full" data-name="What alt data means">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full">What is Alternative data?</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">We ask for optional extra data (with your permission) to see responsible habits that a credit report can miss.</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-full" data-name="Description">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full">What you can share</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Each source helps us build your financial profile. Here’s what each shows us.</p>
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
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-nowrap whitespace-pre">Bank Transactions</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">Typical income and spending patterns</p>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon1 />
      <Text />
    </div>
  );
}

function BankTransactions() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Bank Transactions">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer />
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
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-nowrap whitespace-pre">{`Rent `}</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">Demonstrates reliable monthly commitments</p>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Rent() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Rent">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[16px] relative w-full">
          <ContentContainer1 />
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
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-nowrap whitespace-pre">Utility and Phone Bill</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">Steady bill payments made on schedule</p>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function UtilityAndPhoneBIll() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Utility and Phone BIll">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[16px] relative w-full">
          <ContentContainer2 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Container"></g>
          <path clipRule="evenodd" d={svgPaths.pa266dc0} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[24px]" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic overflow-clip pb-0 pt-[2px] px-0 relative shrink-0 text-[#333333] text-[12px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-nowrap whitespace-pre">Gig or Self-Employed Earnings</p>
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">Platform payouts or accounting summaries give us insight into your income stability</p>
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Icon7 />
      <Text3 />
    </div>
  );
}

function GigOrSelfEmployed() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Gig or self employed">
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[16px] relative w-full">
          <ContentContainer3 />
        </div>
      </div>
    </div>
  );
}

function DataSourcesCards() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[348px]" data-name="Data sources cards">
      <BankTransactions />
      <Rent />
      <UtilityAndPhoneBIll />
      <GigOrSelfEmployed />
    </div>
  );
}

function WhatYouCanShare() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="What you can share">
      <Description />
      <DataSourcesCards />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full">Privacy and Control</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Your privacy is important to us.</p>
    </div>
  );
}

function Icon8() {
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
      <Icon8 />
    </div>
  );
}

function YouChooseWhatToShare() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="You choose what to share">
      <Success />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">You choose what to share</p>
    </div>
  );
}

function Icon9() {
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

function Success1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Success">
      <Icon9 />
    </div>
  );
}

function YouCanDisconnectAnytime() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="You can disconnect anytime.">
      <Success1 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">You can disconnect anytime</p>
    </div>
  );
}

function Icon10() {
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

function Success2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Success">
      <Icon10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Success2 />
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black">{`Data is encrypted and used only for your application `}</p>
    </div>
  );
}

function PrivacyInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Privacy info">
      <YouChooseWhatToShare />
      <YouCanDisconnectAnytime />
      <Frame2 />
    </div>
  );
}

function HowWeUseIt() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="How we use it">
      <Header1 />
      <PrivacyInfo />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ededed] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[20px] relative w-full">
          <HowWeUseIt />
        </div>
      </div>
    </div>
  );
}

function HowWeUseIt1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#333333] w-full" data-name="How we use it">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] w-full">How we use it</p>
      <div className="font-['Inter:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">We look for steady patterns, like paying rent on time, keeping a stable account balance, and covering regular bills, to assess affordability.</p>
        <p className="mb-0">&nbsp;</p>
        <p>We combine these into a simple Stability Score. This score is created and used by HSBC to help us assess more fairly. It does not go on a record, unlike a credit score.</p>
      </div>
    </div>
  );
}

function Icon11() {
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
      <Icon11 />
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
      <div className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">
        <p className="mb-0">Prefer the traditional route? You can apply using your credit report only - simply return to the previous screen and unselect Alternative data.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Inter:Light',sans-serif] font-light not-italic">If you’re happy, press Continue to proceed</span>.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Continuing won't affect your credit score`}</p>
      </div>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-center text-nowrap whitespace-pre">Back</p>
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[348px]" data-name="CTA">
      <NotificationContextual />
      <OnLightButtonPrimary />
      <OnLightButtonPrimary1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
      <WhatAltDataMeans />
      <WhatYouCanShare />
      <Frame />
      <HowWeUseIt1 />
      <Cta />
    </div>
  );
}

export default function Component4UnderstandingAlternativeData() {
  return (
    <div className="bg-white relative size-full" data-name="4. Understanding alternative data">
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
          <Frame1 />
        </div>
      </div>
    </div>
  );
}