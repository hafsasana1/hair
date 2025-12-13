import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Share2, RefreshCw, Sparkles, Clock, Droplets, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/context/QuizContext';
import { useToast } from '@/components/ui/use-toast';

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { answers, userEmail, generatedRoutine, setGeneratedRoutine, resetQuiz } = useQuiz();
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      navigate('/quiz');
      return;
    }

    if (!generatedRoutine) {
      generateRoutine();
    }
  }, []);

  const generateRoutine = async () => {
    setIsGenerating(true);

    // Simulate AI generation (In production, this would call OpenAI API)
    await new Promise(resolve => setTimeout(resolve, 2000));

    const routine = {
      hairProfile: {
        type: answers.hairType || 'Not specified',
        porosity: answers.porosity || 'Not specified',
        density: answers.density || 'Not specified',
        concerns: Array.isArray(answers.concerns) ? answers.concerns.join(', ') : 'None',
        climate: answers.climate || 'Not specified'
      },
      morningRoutine: [
        {
          step: 1,
          title: 'Gentle Cleanse',
          description: 'Use a sulfate-free shampoo suitable for your hair type. Focus on the scalp and massage gently.',
          products: ['Moisturizing Shampoo', 'Clarifying Shampoo (weekly)'],
          frequency: 'As needed based on your wash schedule'
        },
        {
          step: 2,
          title: 'Deep Conditioning',
          description: 'Apply conditioner from mid-length to ends. Leave for 3-5 minutes before rinsing with cool water.',
          products: ['Hydrating Conditioner', 'Leave-in Conditioner'],
          frequency: 'Every wash'
        },
        {
          step: 3,
          title: 'Styling & Protection',
          description: 'Apply heat protectant if using styling tools. Use curl cream or styling mousse for definition.',
          products: ['Heat Protectant Spray', 'Styling Cream', 'Hair Oil'],
          frequency: 'Daily'
        }
      ],
      eveningRoutine: [
        {
          step: 1,
          title: 'Protective Styling',
          description: 'Gently brush hair and apply a small amount of hair oil. Use silk pillowcase or bonnet.',
          products: ['Silk Pillowcase', 'Overnight Hair Oil', 'Hair Bonnet'],
          frequency: 'Every night'
        }
      ],
      weeklyTreatments: [
        {
          title: 'Deep Conditioning Mask',
          description: 'Apply a nourishing hair mask once weekly. Leave on for 20-30 minutes before rinsing.',
          frequency: 'Once per week'
        },
        {
          title: 'Scalp Treatment',
          description: 'Massage scalp with oil or specialized treatment to promote healthy hair growth.',
          frequency: 'Twice per week'
        }
      ],
      recommendations: [
        'Use lukewarm water for washing to prevent damage',
        'Minimize heat styling and always use protection',
        'Trim ends every 8-12 weeks',
        'Stay hydrated and maintain a balanced diet',
        'Protect hair from sun exposure',
        'Be gentle when detangling - start from ends'
      ]
    };

    setGeneratedRoutine(routine);
    setIsGenerating(false);

    // Save to localStorage
    localStorage.setItem('hairgen_routine', JSON.stringify(routine));
  };

  const handleDownloadPDF = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleShare = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleRetake = () => {
    resetQuiz();
    navigate('/quiz');
  };

  if (isGenerating || !generatedRoutine) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-16 h-16 text-green-500 mx-auto" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Creating Your Perfect Routine...
            </h2>
            <p className="text-gray-600">
              Our AI is analyzing your answers and crafting personalized recommendations
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Your Personalized Hair Routine - HairGen</title>
        <meta name="description" content="Your AI-generated personalized hair care routine tailored to your unique needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Your Personalized Hair Routine
              </h1>
              <p className="text-lg text-gray-600">
                Created exclusively for {userEmail || 'you'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
              <Button
                onClick={handleRetake}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Retake Quiz
              </Button>
            </div>

            {/* Hair Profile */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-green-500" />
                Your Hair Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(generatedRoutine.hairProfile).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-green-50 to-yellow-50 p-4 rounded-xl">
                    <p className="text-sm font-semibold text-gray-600 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-lg text-gray-900 capitalize">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Morning Routine */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-400" />
                Morning Routine
              </h2>
              <div className="space-y-6">
                {generatedRoutine.morningRoutine.map((item) => (
                  <div key={item.step} className="border-l-4 border-green-500 pl-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Recommended Products:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.products.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {item.frequency}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Routine */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-500" />
                Evening Routine
              </h2>
              <div className="space-y-6">
                {generatedRoutine.eveningRoutine.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-indigo-500 pl-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Recommended Products:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.products.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {item.frequency}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Treatments */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                Weekly Treatments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generatedRoutine.weeklyTreatments.map((treatment, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">{treatment.title}</h3>
                    <p className="text-gray-600">{treatment.description}</p>
                    <p className="text-sm text-blue-600 font-semibold">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {treatment.frequency}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Expert Tips & Recommendations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedRoutine.recommendations.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AdSense Placeholder */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500 font-semibold">Advertisement Space</p>
              <p className="text-sm text-gray-400 mt-2">Google AdSense Placeholder</p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl p-8 text-center text-white space-y-4">
              <h2 className="text-2xl font-bold">Love Your Results?</h2>
              <p className="text-white/90">
                Share HairGen with friends and help them discover their perfect hair routine too!
              </p>
              <Button
                onClick={handleShare}
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
              >
                Share Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Results;