import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [generatedRoutine, setGeneratedRoutine] = useState(null);

  const updateAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setUserEmail('');
    setGeneratedRoutine(null);
  };

  const value = {
    currentStep,
    setCurrentStep,
    answers,
    updateAnswer,
    userEmail,
    setUserEmail,
    generatedRoutine,
    setGeneratedRoutine,
    nextStep,
    previousStep,
    resetQuiz
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};