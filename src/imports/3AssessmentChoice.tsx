import svgPaths from "./svg-ax5zcu15uq";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-[364px]" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">Choose how we assess you</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Both methods are secure and compliant. Choose what best fits your situation.</p>
    </div>
  );
}

function HeaderSectopm() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="Header sectopm">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[19px] text-nowrap whitespace-pre">Select your assessment path:</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[12px] w-[min-content]">Not sure? If you have an existing credit card or loan, traditional may be more accurate. If you’re new to credit or self-employed/gig, alternative may give a fairer picture.</p>
    </div>
  );
}

function OnLightRadioButton() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="On Light: Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="On Light: Radio Button">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Border" r="9.5" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">Traditional (credit score only)</p>
      <OnLightRadioButton />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame4 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] w-full">We’ll check your credit report and do standard affordability checks.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Best if you have pre-existing credit history</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">The most familiar and established lending method</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">{`Pull your score quickly and easily with credit bureaus `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Header1 />
      <Frame3 />
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap underline whitespace-pre">Learn more</p>
    </div>
  );
}

function AssessmentType() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Assessment Type">
      <div className="box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[20px] py-[24px] relative rounded-[inherit] w-[348px]">
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OnLightRadioButton1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="On Light: Radio Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="On Light: Radio Button">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Border" r="9.5" stroke="var(--stroke-0, black)" />
          <circle cx="10" cy="10" fill="var(--fill-0, #333333)" id="Selection" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">Hybrid (credit + alternative data)</p>
      <OnLightRadioButton1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame5 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] w-full">We consider more of your real-life finances (with your permission), like bank transactions, rent, and utilities.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">Best if you’re new to credit or have a thin-file</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] w-[280px]">Recognises steady non-credit payments (e.g., rent, phone, utilities)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame7 />
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">Good for those with variable income, e.g. if you’re a freelancer, gig-worker, or self-employed</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[8px]" style={{ "--transform-inner-width": "5.640625", "--transform-inner-height": "5.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#db0011] size-[5.657px]" data-name="Bullet" />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame11 />
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">See the factors boosting or holding back your score - and how to fix them.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function AssessmentType1() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Assessment Type">
      <div className="box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[20px] py-[24px] relative rounded-[inherit] w-[348px]">
        <Header2 />
        <Frame13 />
        <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap underline whitespace-pre">Learn more</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#db0011] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[348px]" data-name="Cards">
      <AssessmentType />
      <AssessmentType1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <HeaderSectopm />
      <Cards />
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

function ElementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Elements container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Continue</p>
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[348px]" data-name="CTA">
      <NotificationContextual />
      <OnLightButtonPrimary />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Body">
      <Content />
      <Cta />
    </div>
  );
}

export default function Component3AssessmentChoice() {
  return (
    <div className="bg-white relative size-full" data-name="3. Assessment Choice">
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
          <Body />
        </div>
      </div>
    </div>
  );
}