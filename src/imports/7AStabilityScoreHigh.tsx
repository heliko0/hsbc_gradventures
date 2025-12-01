import svgPaths from "./svg-sdy9chkv4";
import imgEllipse7 from "figma:asset/9b0b144e58086cdc7a06ddf4fde1d5e0491a12cb.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#333333] w-full" data-name="Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] text-nowrap whitespace-pre">Your Stability Score</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Your hybrid Stability Score, and a helpful look at how your money habits form it</p>
    </div>
  );
}

function Score() {
  return (
    <div className="h-[100px] leading-[normal] not-italic relative shrink-0 text-[#333333] text-center w-[86px]" data-name="Score">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[43px] text-[19px] top-[7px] translate-x-[-50%] w-[86px]">Score</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[43px] text-[48px] top-[30px] translate-x-[-50%] w-[152px]">845</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[83px] rounded-[500px] size-[182px] top-[55px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-[182px]">
        <Score />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7d8d6] border-solid inset-[-1px] pointer-events-none rounded-[501px]" />
    </div>
  );
}

function Gauge() {
  return (
    <div className="h-[237px] relative shrink-0 w-full" data-name="Gauge">
      <Frame />
      <div className="absolute flex items-center justify-center left-[28px] size-[292px] top-0" style={{ "--transform-inner-width": "261.578125", "--transform-inner-height": "261.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[261.58px]">
            <div className="absolute bottom-1/4 left-0 right-0 top-0">
              <img alt="" className="block max-w-none size-full" height="196.185" src={imgEllipse7} width="261.58" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[28px] size-[292px] top-0" style={{ "--transform-inner-width": "261.578125", "--transform-inner-height": "261.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[261.58px]">
            <div className="absolute bottom-1/4 left-[88.95%] right-0 top-[22.41%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 138">
                <path d={svgPaths.p172d3870} fill="var(--fill-0, #28B67A)" id="Ellipse 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[28px] size-[292px] top-0" style={{ "--transform-inner-width": "261.578125", "--transform-inner-height": "261.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[261.58px]">
            <div className="absolute inset-[5.79%_9.04%_76.78%_71.82%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 46">
                <path d={svgPaths.ped89f00} fill="var(--fill-0, #FDC530)" id="Ellipse 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[28px] size-[292px] top-0" style={{ "--transform-inner-width": "261.578125", "--transform-inner-height": "261.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[261.58px]">
            <div className="absolute bottom-[91.91%] left-[37.32%] right-[27.93%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22">
                <path d={svgPaths.p3d7da000} fill="var(--fill-0, #E8804C)" id="Ellipse 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[28px] size-[292px] top-0" style={{ "--transform-inner-width": "261.578125", "--transform-inner-height": "261.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[261.58px]">
            <div className="absolute bottom-[37.1%] left-0 right-[63.2%] top-[2.04%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 160">
                <path d={svgPaths.p3ed2ed00} fill="var(--fill-0, #DB0011)" id="Ellipse 11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[284.24px] size-[26.02px] top-[102.8px]" style={{ "--transform-inner-width": "23.296875", "--transform-inner-height": "23.296875" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.876deg]">
          <div className="relative size-[23.309px]">
            <div className="absolute inset-[-34.32%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="19.6546" cy="19.6546" fill="var(--fill-0, white)" id="Ellipse 12" r="15.6546" stroke="var(--stroke-0, #28B67A)" strokeWidth="8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreText() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center leading-[normal] not-italic relative shrink-0 text-[#333333] text-center w-[250px]" data-name="Score text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[23px] w-[223px]">You’re in great shape!</p>
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full relative shrink-0 text-[16px] w-[min-content]">Healthy balances and consistent bills are boosting your score.</p>
    </div>
  );
}

function Score1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Score">
      <Gauge />
      <ScoreText />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Light','Noto_Sans:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="[text-underline-position:from-font] decoration-solid underline">Why is this different?</span>
        <span>{` ⓘ`}</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ededed] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-center px-[24px] py-[20px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[0px] text-[16px] text-center w-full">
            <span>{`Your `}</span>
            <span>{`hybrid `}</span>
            <span>{`score is `}</span>over <span className="font-['Inter:Medium',sans-serif] font-medium">180 points higher</span>
            <span>{` than a traditional credit score`}</span>
          </p>
          <Frame2 />
        </div>
      </div>
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
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] w-full">Strong on-time payment history</p>
    </div>
  );
}

function Helping() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Helping">
      <Success />
      <Content />
    </div>
  );
}

function Icon1() {
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
      <Icon1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] w-full">Stable deposits across accounts</p>
    </div>
  );
}

function Helping1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Helping">
      <Success1 />
      <Content1 />
    </div>
  );
}

function Icon2() {
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
      <Icon2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#333333] text-[16px] w-full">Consistent invoices paid</p>
    </div>
  );
}

function Helping2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Helping">
      <Success2 />
      <Content2 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Details">
      <Helping />
      <Helping1 />
      <Helping2 />
    </div>
  );
}

function HelpingYourScore() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[348px]" data-name="Helping your score">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333333] text-[19px] text-nowrap whitespace-pre">Helping your score</p>
      <Details />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Container"></g>
          <circle cx="9" cy="9" fill="var(--fill-0, #FFB006)" id="Backround" r="9" />
          <g id="Content">
            <path d={svgPaths.pb121c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d68b000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Warning() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Warning">
      <Icon3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Light',sans-serif] font-light gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333]" data-name="Content">
      <p className="relative shrink-0 text-[16px] w-full">Minor income swings</p>
      <p className="relative shrink-0 text-[12px] w-full">Add a secondary account (if you have one)</p>
    </div>
  );
}

function Improvements() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Improvements">
      <Warning />
      <Content3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Container"></g>
          <circle cx="9" cy="9" fill="var(--fill-0, #FFB006)" id="Backround" r="9" />
          <g id="Content">
            <path d={svgPaths.pb121c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d68b000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Warning1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Warning">
      <Icon4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Light',sans-serif] font-light gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333]" data-name="Content">
      <p className="relative shrink-0 text-[16px] w-full">High recent spend spike</p>
      <p className="relative shrink-0 text-[12px] w-full">Smooth next month’s outgoings</p>
    </div>
  );
}

function Improvements1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Improvements">
      <Warning1 />
      <Content4 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Details">
      <Improvements />
      <Improvements1 />
    </div>
  );
}

function AreasForImprovement() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[348px]" data-name="Areas for improvement">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333333] text-[19px] text-nowrap whitespace-pre">Areas for improvement</p>
      <Details1 />
    </div>
  );
}

function ScoreAnalysisInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Score analysis info">
      <HelpingYourScore />
      <AreasForImprovement />
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
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
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[12px]">{`Reviewing won't affect your credit score`}</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Review your loan</p>
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

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
      <Score1 />
      <Frame1 />
      <ScoreAnalysisInfo />
      <Cta />
    </div>
  );
}

export default function Component7AStabilityScoreHigh() {
  return (
    <div className="bg-white relative size-full" data-name="7a. Stability score (high)">
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
          <Content5 />
        </div>
      </div>
    </div>
  );
}