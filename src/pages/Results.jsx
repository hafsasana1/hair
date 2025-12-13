import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Share2, 
  RefreshCw, 
  Sparkles, 
  Clock, 
  Droplets, 
  Sun, 
  Moon,
  Minus,
  Waves,
  CircleDot,
  Zap,
  DropletOff,
  Droplet,
  Feather,
  Layers,
  Layers3,
  Wind,
  AlertTriangle,
  CircleSlash,
  TrendingDown,
  ThumbsUp,
  CloudRain,
  CloudSun,
  Snowflake,
  HelpCircle,
  ChevronDown,
  MessageCircleQuestion
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/context/QuizContext';
import { useToast } from '@/components/ui/use-toast';

// Icon and color mapping for hair profile attributes
const profileIconMap = {
  type: {
    straight: { icon: Minus, color: 'text-slate-600', bg: 'bg-slate-100' },
    wavy: { icon: Waves, color: 'text-sky-600', bg: 'bg-sky-100' },
    curly: { icon: CircleDot, color: 'text-purple-600', bg: 'bg-purple-100' },
    coily: { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-100' }
  },
  porosity: {
    low: { icon: DropletOff, color: 'text-orange-500', bg: 'bg-orange-100' },
    medium: { icon: Droplet, color: 'text-blue-500', bg: 'bg-blue-100' },
    high: { icon: Droplets, color: 'text-cyan-500', bg: 'bg-cyan-100' },
    unsure: { icon: HelpCircle, color: 'text-gray-500', bg: 'bg-gray-100' }
  },
  density: {
    thin: { icon: Feather, color: 'text-pink-500', bg: 'bg-pink-100' },
    medium: { icon: Layers, color: 'text-indigo-500', bg: 'bg-indigo-100' },
    thick: { icon: Layers3, color: 'text-emerald-600', bg: 'bg-emerald-100' }
  },
  climate: {
    humid: { icon: CloudRain, color: 'text-blue-500', bg: 'bg-blue-100' },
    dry: { icon: Sun, color: 'text-orange-500', bg: 'bg-orange-100' },
    cold: { icon: Snowflake, color: 'text-cyan-500', bg: 'bg-cyan-100' },
    temperate: { icon: CloudSun, color: 'text-sky-500', bg: 'bg-sky-100' }
  },
  concerns: {
    dryness: { icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-100' },
    frizz: { icon: Wind, color: 'text-teal-500', bg: 'bg-teal-100' },
    damage: { icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-100' },
    dandruff: { icon: CircleSlash, color: 'text-slate-500', bg: 'bg-slate-100' },
    oiliness: { icon: Droplets, color: 'text-lime-600', bg: 'bg-lime-100' },
    hairLoss: { icon: TrendingDown, color: 'text-rose-500', bg: 'bg-rose-100' },
    dullness: { icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-100' },
    none: { icon: ThumbsUp, color: 'text-green-500', bg: 'bg-green-100' }
  }
};

// Dynamic FAQs based on hair profile
const getFAQsForProfile = (hairProfile, answers) => {
  const faqs = [];
  
  // Hair Type FAQs
  const hairType = answers?.hairType || hairProfile?.type;
  if (hairType === 'straight' || hairType === 'Straight') {
    faqs.push({
      question: 'How can I add volume to my straight hair?',
      answer: 'Use volumizing shampoos and conditioners, apply mousse at the roots, blow-dry upside down, and consider layered haircuts to add natural movement and body.'
    });
    faqs.push({
      question: 'Why does my straight hair get oily quickly?',
      answer: 'Straight hair allows oils to travel down the shaft easily. Use dry shampoo between washes, avoid over-conditioning at roots, and wash with a clarifying shampoo weekly.'
    });
  } else if (hairType === 'wavy') {
    faqs.push({
      question: 'How do I enhance my natural waves?',
      answer: 'Apply a sea salt spray or wave-enhancing cream to damp hair, scrunch gently, and let air dry. Avoid brushing dry waves to prevent frizz.'
    });
    faqs.push({
      question: 'Why do my waves fall flat by the end of the day?',
      answer: 'Try using lighter products, apply styling products to damp hair, and refresh with water or a wave spray. Sleeping with a loose bun can help maintain waves.'
    });
  } else if (hairType === 'curly') {
    faqs.push({
      question: 'How do I define my curls without crunch?',
      answer: 'Apply curl cream or gel to soaking wet hair, scrunch out excess water, and let air dry or diffuse. Once fully dry, "scrunch out the crunch" to soften the cast.'
    });
    faqs.push({
      question: 'Why are my curls so frizzy?',
      answer: 'Frizz often means your curls need more moisture. Use a deep conditioner weekly, apply leave-in conditioner, and avoid touching your hair while it dries.'
    });
  } else if (hairType === 'coily') {
    faqs.push({
      question: 'How often should I wash my coily hair?',
      answer: 'Coily hair typically benefits from washing once a week or every two weeks. Co-washing between washes can help maintain moisture without stripping natural oils.'
    });
    faqs.push({
      question: 'What\'s the best way to detangle coily hair?',
      answer: 'Always detangle when hair is wet and saturated with conditioner. Use a wide-tooth comb or your fingers, starting from the ends and working up to the roots.'
    });
  }

  // Porosity FAQs
  const porosity = answers?.porosity || hairProfile?.porosity;
  if (porosity === 'low') {
    faqs.push({
      question: 'Why won\'t products absorb into my low porosity hair?',
      answer: 'Low porosity hair has tightly closed cuticles. Use heat (warm water, steamer, or heat cap) when deep conditioning, and opt for lightweight, water-based products.'
    });
  } else if (porosity === 'high') {
    faqs.push({
      question: 'How do I retain moisture in high porosity hair?',
      answer: 'Layer products using the LOC method (Liquid, Oil, Cream), use protein treatments to fill gaps in the cuticle, and seal with heavier oils like castor or olive oil.'
    });
  }

  // Concerns FAQs
  const concerns = answers?.concerns || [];
  if (concerns.includes('frizz')) {
    faqs.push({
      question: 'What causes frizz and how can I prevent it?',
      answer: 'Frizz is caused by humidity and lack of moisture. Use anti-humidity products, sleep on silk pillowcases, avoid touching your hair, and ensure deep conditioning regularly.'
    });
  }
  if (concerns.includes('damage')) {
    faqs.push({
      question: 'How can I repair damaged hair?',
      answer: 'Use protein treatments to strengthen, deep condition weekly, trim split ends regularly, minimize heat styling, and protect hair from sun and chlorine exposure.'
    });
  }
  if (concerns.includes('hairLoss')) {
    faqs.push({
      question: 'What can I do about hair thinning?',
      answer: 'Massage your scalp to increase blood flow, use gentle hair care products, avoid tight hairstyles, ensure adequate protein and iron in your diet, and consult a dermatologist if concerned.'
    });
  }

  // Climate FAQs
  const climate = answers?.climate || hairProfile?.climate;
  if (climate === 'humid') {
    faqs.push({
      question: 'How do I manage my hair in humid weather?',
      answer: 'Use anti-humidity serums, apply light oils to seal the cuticle, opt for protective styles, and embrace your natural texture rather than fighting it.'
    });
  } else if (climate === 'dry') {
    faqs.push({
      question: 'How do I keep my hair hydrated in a dry climate?',
      answer: 'Use humectant-rich products, deep condition twice weekly, apply leave-in conditioners, and consider using a humidifier at home.'
    });
  }

  // Default FAQs if not enough specific ones
  if (faqs.length < 4) {
    faqs.push({
      question: 'How often should I trim my hair?',
      answer: 'Trim every 8-12 weeks to prevent split ends from traveling up the hair shaft. Regular trims keep hair healthy and can actually help it grow longer.'
    });
  }
  if (faqs.length < 5) {
    faqs.push({
      question: 'Is it bad to wash my hair every day?',
      answer: 'Daily washing can strip natural oils, leading to dryness or overproduction of oil. Most hair types benefit from washing 2-3 times per week or less.'
    });
  }

  return faqs.slice(0, 6); // Return max 6 FAQs
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div 
    className="border-b border-gray-200 last:border-b-0"
    initial={false}
  >
    <button
      onClick={onClick}
      className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-lg px-4"
    >
      <span className="font-semibold text-gray-900 pr-4">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <p className="px-4 pb-4 text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { answers, userEmail, generatedRoutine, setGeneratedRoutine, resetQuiz } = useQuiz();
  const [isGenerating, setIsGenerating] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Get profile icon helper
  const getProfileIcon = (key, value) => {
    const normalizedValue = value?.toLowerCase()?.split(',')[0]?.trim();
    const mapping = profileIconMap[key]?.[normalizedValue];
    if (mapping) {
      return mapping;
    }
    // Default icon
    return { icon: Sparkles, color: 'text-green-500', bg: 'bg-green-100' };
  };

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(generatedRoutine.hairProfile).map(([key, value]) => {
                  const iconData = getProfileIcon(key, value);
                  const IconComponent = iconData.icon;
                  return (
                    <motion.div 
                      key={key} 
                      className="bg-gradient-to-br from-green-50 to-yellow-50 p-5 rounded-xl flex items-center gap-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconData.bg}`}>
                        <IconComponent className={`w-6 h-6 ${iconData.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-lg font-bold text-gray-900 capitalize">{value}</p>
                      </div>
                    </motion.div>
                  );
                })}
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

            {/* Personalized FAQs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MessageCircleQuestion className="w-6 h-6 text-purple-500" />
                FAQs for Your Hair Profile
              </h2>
              <p className="text-gray-600">
                Answers tailored specifically to your hair type and concerns
              </p>
              <div className="divide-y divide-gray-100">
                {getFAQsForProfile(generatedRoutine.hairProfile, answers).map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === idx}
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  />
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