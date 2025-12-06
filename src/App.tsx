import React, { useState, useEffect } from "react";
import EntryScreen from "./components/1_EntryScreen";
import AssessmentChoice from "./components/2_AssessmentChoice";
import UnderstandingAlternativeData from "./components/3_UnderstandingAlternativeData";
import OpenBanking from "./components/4_OpenBanking";
import OpenBankingAdded from "./components/5_OpenBankingAdded";
import DataProcessing from "./components/6_DataProcessing";
import StabilityScore from "./components/7_StabilityScore";
import ReviewYourLoan from "./components/8_ReviewYourLoan";
import Approval from "./components/9_Approval";
import ApprovalAccepted from "./components/9b_ApprovalAccepted";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState<
        | "entry"
        | "assessment"
        | "understanding"
        | "openbanking"
        | "openbankingadded"
        | "dataprocessing"
        | "stabilityscore"
        | "reviewloan"
        | "approval"
        | "approvalaccepted"
    >("entry");

    // Store loan properties from entry screen
    const [loanAmount, setLoanAmount] = useState(10000);
    const [months, setMonths] = useState(62);

    // store stability score fetched during DataProcessing
    const [stabilityScore, setStabilityScore] = useState<number | undefined>(
        undefined
    );

    // Scroll to top when screen changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentScreen]);

    const handleStartApplication = () => setCurrentScreen("assessment");
    const handleAssessmentContinue = () => setCurrentScreen("understanding");
    const handleUnderstandingBack = () => setCurrentScreen("assessment");
    const handleUnderstandingContinue = () => setCurrentScreen("openbanking");
    const handleOpenBankingAddAccounts = () =>
        setCurrentScreen("openbankingadded");
    const handleOpenBankingSkip = () => setCurrentScreen("dataprocessing");

    // Page 5 now just navigates to DataProcessing (no fetch here)
    const handleOpenBankingAddedContinue = () => {
        setCurrentScreen("dataprocessing");
    };

    // DataProcessing calls this with the fetched score when ready
    const handleDataProcessingComplete = (score?: number) => {
        setStabilityScore(score);
        setCurrentScreen("stabilityscore");
    };

    const handleStabilityScoreContinue = () => setCurrentScreen("reviewloan");
    const handleReviewLoanSubmit = () => setCurrentScreen("approval");
    const handleViewAgreement = () => setCurrentScreen("approvalaccepted");
    const handleReviewLoan = () => setCurrentScreen("reviewloan");

    if (currentScreen === "approvalaccepted") {
        return <ApprovalAccepted onReviewLoan={handleReviewLoan} />;
    }

    if (currentScreen === "approval") {
        return <Approval onViewAgreement={handleViewAgreement} />;
    }

    if (currentScreen === "reviewloan") {
        return (
            <ReviewYourLoan
                onSubmit={handleReviewLoanSubmit}
                initialLoanAmount={loanAmount}
                initialMonths={months}
            />
        );
    }

    if (currentScreen === "stabilityscore") {
        return (
            <StabilityScore
                onContinue={handleStabilityScoreContinue}
                stabilityScore={stabilityScore}
            />
        );
    }

    if (currentScreen === "dataprocessing") {
        return <DataProcessing onComplete={handleDataProcessingComplete} />;
    }

    if (currentScreen === "openbankingadded") {
        return <OpenBankingAdded onContinue={handleOpenBankingAddedContinue} />;
    }

    if (currentScreen === "openbanking") {
        return (
            <OpenBanking
                onAddAccounts={handleOpenBankingAddAccounts}
                onSkip={handleOpenBankingSkip}
            />
        );
    }

    if (currentScreen === "understanding") {
        return (
            <UnderstandingAlternativeData
                onBack={handleUnderstandingBack}
                onContinue={handleUnderstandingContinue}
            />
        );
    }

    if (currentScreen === "assessment") {
        return <AssessmentChoice onContinue={handleAssessmentContinue} />;
    }

    return (
        <EntryScreen
            onStartApplication={handleStartApplication}
            onLoanAmountChange={setLoanAmount}
            onMonthsChange={setMonths}
        />
    );
}
