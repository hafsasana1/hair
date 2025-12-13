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
      { value: 'straight', label: 'Straight', description: 'Type 1 - No curls or waves', icon: Minus, iconColor: 'text-slate-600', iconBg: 'bg-slate-100' },
      { value: 'wavy', label: 'Wavy', description: 'Type 2 - Loose S-shaped waves', icon: Waves, iconColor: 'text-sky-600', iconBg: 'bg-sky-100' },
      { value: 'curly', label: 'Curly', description: 'Type 3 - Defined spiral curls', icon: CircleDot, iconColor: 'text-purple-600', iconBg: 'bg-purple-100' },
      { value: 'coily', label: 'Coily/Kinky', description: 'Type 4 - Tight coils or zigzag pattern', icon: Zap, iconColor: 'text-amber-600', iconBg: 'bg-amber-100' }
    ]
  },
  {
    id: 'porosity',
    question: 'What is your hair porosity?',
    options: [
      { value: 'low', label: 'Low Porosity', description: 'Hair resists moisture, takes long to dry', icon: DropletOff, iconColor: 'text-orange-500', iconBg: 'bg-orange-100' },
      { value: 'medium', label: 'Medium Porosity', description: 'Hair absorbs moisture well, balanced', icon: Droplet, iconColor: 'text-blue-500', iconBg: 'bg-blue-100' },
      { value: 'high', label: 'High Porosity', description: 'Hair absorbs moisture quickly, dries fast', icon: Droplets, iconColor: 'text-cyan-500', iconBg: 'bg-cyan-100' },
      { value: 'unsure', label: 'Not Sure', description: 'I need help determining this', icon: HelpCircle, iconColor: 'text-gray-500', iconBg: 'bg-gray-100' }
    ]
  },
  {
    id: 'density',
    question: 'What is your hair density?',
    options: [
      { value: 'thin', label: 'Thin/Fine', description: 'Can easily see scalp', icon: Feather, iconColor: 'text-pink-500', iconBg: 'bg-pink-100' },
      { value: 'medium', label: 'Medium', description: 'Moderate scalp visibility', icon: Layers, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-100' },
      { value: 'thick', label: 'Thick/Dense', description: 'Difficult to see scalp', icon: Layers3, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-100' }
    ]
  },
  {
    id: 'concerns',
    question: 'What are your main hair concerns? (Select all that apply)',
    multiSelect: true,
    options: [
      { value: 'dryness', label: 'Dryness', icon: Sun, iconColor: 'text-yellow-500', iconBg: 'bg-yellow-100' },
      { value: 'frizz', label: 'Frizz', icon: Wind, iconColor: 'text-teal-500', iconBg: 'bg-teal-100' },
      { value: 'damage', label: 'Damage/Breakage', icon: AlertTriangle, iconColor: 'text-red-500', iconBg: 'bg-red-100' },
      { value: 'dandruff', label: 'Dandruff/Scalp Issues', icon: CircleSlash, iconColor: 'text-slate-500', iconBg: 'bg-slate-100' },
      { value: 'oiliness', label: 'Oiliness', icon: Droplets, iconColor: 'text-lime-600', iconBg: 'bg-lime-100' },
      { value: 'hairLoss', label: 'Hair Loss/Thinning', icon: TrendingDown, iconColor: 'text-rose-500', iconBg: 'bg-rose-100' },
      { value: 'dullness', label: 'Lack of Shine', icon: Sparkles, iconColor: 'text-amber-500', iconBg: 'bg-amber-100' },
      { value: 'none', label: 'No Major Concerns', icon: ThumbsUp, iconColor: 'text-green-500', iconBg: 'bg-green-100' }
    ]
  },
  {
    id: 'climate',
    question: 'What climate do you live in?',
    options: [
      { value: 'humid', label: 'Humid', description: 'High moisture in the air', icon: CloudRain, iconColor: 'text-blue-500', iconBg: 'bg-blue-100' },
      { value: 'dry', label: 'Dry/Arid', description: 'Low moisture in the air', icon: Sun, iconColor: 'text-orange-500', iconBg: 'bg-orange-100' },
      { value: 'cold', label: 'Cold', description: 'Low temperatures year-round', icon: Snowflake, iconColor: 'text-cyan-500', iconBg: 'bg-cyan-100' },
      { value: 'temperate', label: 'Temperate', description: 'Moderate, seasonal changes', icon: CloudSun, iconColor: 'text-sky-500', iconBg: 'bg-sky-100' }
    ]
  },
  {
    id: 'washFrequency',
    question: 'How often do you wash your hair?',
    options: [
      { value: 'daily', label: 'Daily', description: 'Every day', icon: Calendar, iconColor: 'text-green-600', iconBg: 'bg-green-100' },
      { value: 'alternate', label: 'Every Other Day', description: '3-4 times per week', icon: CalendarDays, iconColor: 'text-teal-600', iconBg: 'bg-teal-100' },
      { value: 'weekly', label: 'Weekly', description: '1-2 times per week', icon: CalendarRange, iconColor: 'text-blue-600', iconBg: 'bg-blue-100' },
      { value: 'biweekly', label: 'Bi-weekly', description: 'Every 2 weeks or less', icon: CalendarClock, iconColor: 'text-violet-600', iconBg: 'bg-violet-100' }
    ]
  },
  {
    id: 'goals',
    question: 'What are your main hair goals? (Select all that apply)',
    multiSelect: true,
    options: [
      { value: 'growth', label: 'Promote Growth', icon: TrendingUp, iconColor: 'text-green-500', iconBg: 'bg-green-100' },
      { value: 'moisture', label: 'Add Moisture', icon: Droplet, iconColor: 'text-blue-500', iconBg: 'bg-blue-100' },
      { value: 'strength', label: 'Strengthen Hair', icon: Shield, iconColor: 'text-slate-600', iconBg: 'bg-slate-100' },
      { value: 'shine', label: 'Increase Shine', icon: Star, iconColor: 'text-yellow-500', iconBg: 'bg-yellow-100' },
      { value: 'volume', label: 'Add Volume', icon: Volume2, iconColor: 'text-purple-500', iconBg: 'bg-purple-100' },
      { value: 'definition', label: 'Curl Definition', icon: Target, iconColor: 'text-rose-500', iconBg: 'bg-rose-100' },
      { value: 'repair', label: 'Repair Damage', icon: Wrench, iconColor: 'text-orange-500', iconBg: 'bg-orange-100' },
      { value: 'maintain', label: 'Maintain Health', icon: Heart, iconColor: 'text-red-500', iconBg: 'bg-red-100' }
    ]
  },
  {
    id: 'preferences',
    question: 'Product preferences?',
    options: [
      { value: 'natural', label: 'Natural/Organic', description: 'Prefer natural ingredients', icon: Leaf, iconColor: 'text-green-600', iconBg: 'bg-green-100' },
      { value: 'sulfateFree', label: 'Sulfate-Free', description: 'No harsh sulfates', icon: Beaker, iconColor: 'text-purple-600', iconBg: 'bg-purple-100' },
      { value: 'vegan', label: 'Vegan/Cruelty-Free', description: 'Ethically sourced', icon: Rabbit, iconColor: 'text-pink-500', iconBg: 'bg-pink-100' },
      { value: 'budget', label: 'Budget-Friendly', description: 'Affordable options', icon: Wallet, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-100' },
      { value: 'premium', label: 'Premium/Luxury', description: 'High-end products', icon: Crown, iconColor: 'text-amber-500', iconBg: 'bg-amber-100' },
      { value: 'noPreference', label: 'No Preference', description: 'Open to all options', icon: CircleEqual, iconColor: 'text-gray-500', iconBg: 'bg-gray-100' }
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