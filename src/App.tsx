// App.tsx
import { useState } from 'react';
import EntryScreen from './components/1_EntryScreen';
import AssessmentChoice from './components/2_AssessmentChoice';
import UnderstandingAlternativeData from './components/3_UnderstandingAlternativeData';
import OpenBanking from './components/4_OpenBanking';
import OpenBankingAdded from './components/5_OpenBankingAdded';
import DataProcessing from './components/6_DataProcessing';
import StabilityScore from './components/7_StabilityScore';
import ReviewYourLoan from './components/9_ReviewYourLoan';

export default function App() {
  // TEMPORARY: Set to latest screen for development
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'assessment' | 'understanding' | 'openbanking' | 'openbankingadded' | 'dataprocessing' | 'stabilityscore' | 'reviewloan'>('reviewloan');

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
    // Add next screen here when ready
    console.log('Application submitted!');
  };

  if (currentScreen === 'reviewloan') {
    return <ReviewYourLoan onSubmit={handleReviewLoanSubmit} />;
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

  return <EntryScreen onStartApplication={handleStartApplication} />;
}