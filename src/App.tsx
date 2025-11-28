// App.tsx
import { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import AssessmentChoice from './components/AssessmentChoice';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'assessment'>('entry');

  const handleStartApplication = () => {
    setCurrentScreen('assessment');
  };

  const handleContinue = () => {
    console.log('Continue to next step');
    // Add next step logic here
  };

  if (currentScreen === 'assessment') {
    return <AssessmentChoice onContinue={handleContinue} />;
  }

  return <EntryScreen onStartApplication={handleStartApplication} />;
}
