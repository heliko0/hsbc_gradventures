// App.tsx
import { useState, useEffect } from 'react';
import EntryScreen from './components/1_EntryScreen';
import AssessmentChoice from './components/2_AssessmentChoice';
import UnderstandingAlternativeData from './components/3_UnderstandingAlternativeData';
import OpenBanking from './components/4_OpenBanking';
import OpenBankingAdded from './components/5_OpenBankingAdded';
import DataProcessing from './components/6_DataProcessing';
import StabilityScore from './components/7_StabilityScore';
import ReviewYourLoan from './components/9_ReviewYourLoan';
import Approval from './components/10_Approval';
import ApprovalAccepted from './components/10b_ApprovalAccepted';

export default function App() {
  
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'assessment' | 'understanding' | 'openbanking' | 'openbankingadded' | 'dataprocessing' | 'stabilityscore' | 'reviewloan' | 'approval' | 'approvalaccepted'>('approval');
  
  // Store loan properties from entry screen
  const [loanAmount, setLoanAmount] = useState(10000);
  const [months, setMonths] = useState(62);

  // Scroll to top when screen changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const handleStartApplication = () => {
    setCurrentScreen('assessment');
  };

  const handleAssessmentContinue = () => {
    setCurrentScreen('understanding');
  };

  const handleUnderstandingBack = () => {
    setCurrentScreen('assessment');
  };

  const handleUnderstandingContinue = () => {
    setCurrentScreen('openbanking');
  };

  const handleOpenBankingAddAccounts = () => {
    setCurrentScreen('openbankingadded');
  };

  const handleOpenBankingSkip = () => {
    setCurrentScreen('dataprocessing');
  };

  const handleOpenBankingAddedContinue = () => {
    setCurrentScreen('dataprocessing');
  };

  const handleDataProcessingComplete = () => {
    setCurrentScreen('stabilityscore');
  };

  const handleStabilityScoreContinue = () => {
    setCurrentScreen('reviewloan');
  };

  const handleReviewLoanSubmit = () => {
    setCurrentScreen('approval');
  };

  const handleViewAgreement = () => {
    setCurrentScreen('approvalaccepted');
  };

  const handleReviewLoan = () => {
    setCurrentScreen('reviewloan');
  };

  if (currentScreen === 'approvalaccepted') {
    return <ApprovalAccepted onReviewLoan={handleReviewLoan} />;
  }

  if (currentScreen === 'approval') {
    return <Approval onViewAgreement={handleViewAgreement} />;
  }

  if (currentScreen === 'reviewloan') {
    return <ReviewYourLoan onSubmit={handleReviewLoanSubmit} initialLoanAmount={loanAmount} initialMonths={months} />;
  }

  if (currentScreen === 'stabilityscore') {
    return <StabilityScore onContinue={handleStabilityScoreContinue} />;
  }

  if (currentScreen === 'dataprocessing') {
    return <DataProcessing onComplete={handleDataProcessingComplete} />;
  }

  if (currentScreen === 'openbankingadded') {
    return <OpenBankingAdded onContinue={handleOpenBankingAddedContinue} />;
  }

  if (currentScreen === 'openbanking') {
    return <OpenBanking onAddAccounts={handleOpenBankingAddAccounts} onSkip={handleOpenBankingSkip} />;
  }

  if (currentScreen === 'understanding') {
    return (
      <UnderstandingAlternativeData
        onBack={handleUnderstandingBack}
        onContinue={handleUnderstandingContinue}
      />
    );
  }

  if (currentScreen === 'assessment') {
    return <AssessmentChoice onContinue={handleAssessmentContinue} />;
  }

  return <EntryScreen onStartApplication={handleStartApplication} onLoanAmountChange={setLoanAmount} onMonthsChange={setMonths} />;
}