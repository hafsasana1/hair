import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check,
  Minus,
  Waves,
  CircleDot,
  Zap,
  Droplets,
  DropletOff,
  Droplet,
  HelpCircle,
  Feather,
  Layers,
  Layers3,
  Sun,
  Wind,
  AlertTriangle,
  CircleSlash,
  TrendingDown,
  Sparkles,
  ThumbsUp,
  CloudRain,
  CloudSun,
  Snowflake,
  Thermometer,
  Calendar,
  CalendarDays,
  CalendarRange,
  CalendarClock,
  TrendingUp,
  Shield,
  Star,
  Volume2,
  Target,
  Wrench,
  Heart,
  Leaf,
  Beaker,
  Rabbit,
  Wallet,
  Crown,
  CircleEqual
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/context/QuizContext';
import { useToast } from '@/components/ui/use-toast';
import QuestionCard from '@/components/quiz/QuestionCard';
import ProgressBar from '@/components/quiz/ProgressBar';
import EmailCapture from '@/components/quiz/EmailCapture';

const quizQuestions = [
  {
    id: 'hairType',
    question: 'What is your hair type?',
    options: [
      { value: 'straight', label: 'Straight', description: 'Type 1 - No curls or waves', icon: Minus },
      { value: 'wavy', label: 'Wavy', description: 'Type 2 - Loose S-shaped waves', icon: Waves },
      { value: 'curly', label: 'Curly', description: 'Type 3 - Defined spiral curls', icon: CircleDot },
      { value: 'coily', label: 'Coily/Kinky', description: 'Type 4 - Tight coils or zigzag pattern', icon: Zap }
    ]
  },
  {
    id: 'porosity',
    question: 'What is your hair porosity?',
    options: [
      { value: 'low', label: 'Low Porosity', description: 'Hair resists moisture, takes long to dry', icon: DropletOff },
      { value: 'medium', label: 'Medium Porosity', description: 'Hair absorbs moisture well, balanced', icon: Droplet },
      { value: 'high', label: 'High Porosity', description: 'Hair absorbs moisture quickly, dries fast', icon: Droplets },
      { value: 'unsure', label: 'Not Sure', description: 'I need help determining this', icon: HelpCircle }
    ]
  },
  {
    id: 'density',
    question: 'What is your hair density?',
    options: [
      { value: 'thin', label: 'Thin/Fine', description: 'Can easily see scalp', icon: Feather },
      { value: 'medium', label: 'Medium', description: 'Moderate scalp visibility', icon: Layers },
      { value: 'thick', label: 'Thick/Dense', description: 'Difficult to see scalp', icon: Layers3 }
    ]
  },
  {
    id: 'concerns',
    question: 'What are your main hair concerns? (Select all that apply)',
    multiSelect: true,
    options: [
      { value: 'dryness', label: 'Dryness', icon: Sun },
      { value: 'frizz', label: 'Frizz', icon: Wind },
      { value: 'damage', label: 'Damage/Breakage', icon: AlertTriangle },
      { value: 'dandruff', label: 'Dandruff/Scalp Issues', icon: CircleSlash },
      { value: 'oiliness', label: 'Oiliness', icon: Droplets },
      { value: 'hairLoss', label: 'Hair Loss/Thinning', icon: TrendingDown },
      { value: 'dullness', label: 'Lack of Shine', icon: Sparkles },
      { value: 'none', label: 'No Major Concerns', icon: ThumbsUp }
    ]
  },
  {
    id: 'climate',
    question: 'What climate do you live in?',
    options: [
      { value: 'humid', label: 'Humid', description: 'High moisture in the air', icon: CloudRain },
      { value: 'dry', label: 'Dry/Arid', description: 'Low moisture in the air', icon: Sun },
      { value: 'cold', label: 'Cold', description: 'Low temperatures year-round', icon: Snowflake },
      { value: 'temperate', label: 'Temperate', description: 'Moderate, seasonal changes', icon: CloudSun }
    ]
  },
  {
    id: 'washFrequency',
    question: 'How often do you wash your hair?',
    options: [
      { value: 'daily', label: 'Daily', description: 'Every day', icon: Calendar },
      { value: 'alternate', label: 'Every Other Day', description: '3-4 times per week', icon: CalendarDays },
      { value: 'weekly', label: 'Weekly', description: '1-2 times per week', icon: CalendarRange },
      { value: 'biweekly', label: 'Bi-weekly', description: 'Every 2 weeks or less', icon: CalendarClock }
    ]
  },
  {
    id: 'goals',
    question: 'What are your main hair goals? (Select all that apply)',
    multiSelect: true,
    options: [
      { value: 'growth', label: 'Promote Growth', icon: TrendingUp },
      { value: 'moisture', label: 'Add Moisture', icon: Droplet },
      { value: 'strength', label: 'Strengthen Hair', icon: Shield },
      { value: 'shine', label: 'Increase Shine', icon: Star },
      { value: 'volume', label: 'Add Volume', icon: Volume2 },
      { value: 'definition', label: 'Curl Definition', icon: Target },
      { value: 'repair', label: 'Repair Damage', icon: Wrench },
      { value: 'maintain', label: 'Maintain Health', icon: Heart }
    ]
  },
  {
    id: 'preferences',
    question: 'Product preferences?',
    options: [
      { value: 'natural', label: 'Natural/Organic', description: 'Prefer natural ingredients', icon: Leaf },
      { value: 'sulfateFree', label: 'Sulfate-Free', description: 'No harsh sulfates', icon: Beaker },
      { value: 'vegan', label: 'Vegan/Cruelty-Free', description: 'Ethically sourced', icon: Rabbit },
      { value: 'budget', label: 'Budget-Friendly', description: 'Affordable options', icon: Wallet },
      { value: 'premium', label: 'Premium/Luxury', description: 'High-end products', icon: Crown },
      { value: 'noPreference', label: 'No Preference', description: 'Open to all options', icon: CircleEqual }
    ]
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentStep, setCurrentStep, answers, updateAnswer, userEmail, setUserEmail } = useQuiz();
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (value) => {
    if (currentQuestion.multiSelect) {
      const currentAnswers = answers[currentQuestion.id] || [];
      if (currentAnswers.includes(value)) {
        updateAnswer(
          currentQuestion.id,
          currentAnswers.filter(v => v !== value)
        );
      } else {
        updateAnswer(currentQuestion.id, [...currentAnswers, value]);
      }
    } else {
      updateAnswer(currentQuestion.id, value);
    }
  };

  const handleNext = () => {
    const currentAnswer = answers[currentQuestion.id];
    
    if (!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
      toast({
        title: "Please select an answer",
        description: "You need to select at least one option to continue.",
        variant: "destructive"
      });
      return;
    }

    if (currentStep === totalSteps - 1) {
      setShowEmailCapture(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEmailSubmit = (email) => {
    setUserEmail(email);
    navigate('/results');
  };

  return (
    <>
      <Helmet>
        <title>Hair Care Quiz - HairGen</title>
        <meta name="description" content="Take our comprehensive 8-question quiz to get your personalized hair care routine powered by AI." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Discover Your Perfect Hair Routine
              </h1>
              <p className="text-lg text-gray-600">
                Answer {totalSteps} questions to get your personalized recommendations
              </p>
            </div>

            {/* Progress Bar */}
            <ProgressBar progress={progress} currentStep={currentStep + 1} totalSteps={totalSteps} />

            {/* Question Card */}
            <AnimatePresence mode="wait">
              {!showEmailCapture ? (
                <QuestionCard
                  key={currentStep}
                  question={currentQuestion}
                  answer={answers[currentQuestion.id]}
                  onAnswer={handleAnswer}
                />
              ) : (
                <EmailCapture onSubmit={handleEmailSubmit} />
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {!showEmailCapture && (
              <div className="flex justify-between items-center pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>

                <div className="text-sm text-gray-600">
                  Question {currentStep + 1} of {totalSteps}
                </div>

                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold"
                >
                  {currentStep === totalSteps - 1 ? (
                    <>
                      Complete
                      <Check className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Next
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Quiz;