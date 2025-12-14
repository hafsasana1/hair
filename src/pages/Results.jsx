import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
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
  MessageCircleQuestion,
  Calendar,
  Scissors,
  Flame,
  ShoppingBag,
  Lightbulb,
  ArrowRight,
  Check,
  Star,
  Target,
  Shield
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
  const { slug } = useParams();
  const { toast } = useToast();
  const { answers, userEmail, generatedRoutine, setGeneratedRoutine, resetQuiz, setAnswers } = useQuiz();
  const [isGenerating, setIsGenerating] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [localAnswers, setLocalAnswers] = useState(null);

  // Get profile icon helper
  const getProfileIcon = (key, value) => {
    const normalizedValue = value?.toLowerCase()?.split(',')[0]?.trim();
    const mapping = profileIconMap[key]?.[normalizedValue];
    if (mapping) {
      return mapping;
    }
    return { icon: Sparkles, color: 'text-green-500', bg: 'bg-green-100' };
  };

  useEffect(() => {
    const hasContextAnswers = answers && Object.keys(answers).length > 0;
    
    if (!hasContextAnswers) {
      const savedRoutine = localStorage.getItem('hairgen_routine');
      const savedAnswers = localStorage.getItem('hairgen_answers');
      
      if (savedRoutine && savedAnswers) {
        try {
          const parsedRoutine = JSON.parse(savedRoutine);
          const parsedAnswers = JSON.parse(savedAnswers);
          setLocalAnswers(parsedAnswers);
          setGeneratedRoutine(parsedRoutine);
          if (setAnswers) {
            setAnswers(parsedAnswers);
          }
        } catch (e) {
          if (!slug) {
            navigate('/quiz');
          }
        }
      } else if (!slug) {
        navigate('/quiz');
        return;
      }
    }

    if (hasContextAnswers && !generatedRoutine) {
      generateRoutine();
    }
  }, [answers, generatedRoutine]);

  const generateRoutine = async () => {
    setIsGenerating(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const hairType = answers.hairType || 'Not specified';
    const porosity = answers.porosity || 'Not specified';
    const density = answers.density || 'Not specified';
    const concerns = Array.isArray(answers.concerns) ? answers.concerns : [];
    const climate = answers.climate || 'Not specified';

    const routine = {
      hairProfile: {
        type: hairType,
        porosity: porosity,
        density: density,
        concerns: concerns.length > 0 ? concerns.join(', ') : 'None',
        climate: climate
      },
      morningRoutine: [
        {
          step: 1,
          title: 'Refresh & Hydrate',
          description: 'Mist hair lightly with water or a hydrating spray to reactivate products and add moisture.',
          icon: 'droplet'
        },
        {
          step: 2,
          title: 'Apply Leave-In Conditioner',
          description: 'Work a lightweight leave-in conditioner through damp hair, focusing on mid-lengths to ends.',
          icon: 'bottle'
        },
        {
          step: 3,
          title: 'Style Definition',
          description: porosity === 'low' 
            ? 'Use water-based, lightweight curl cream. Low porosity hair absorbs better with heat, so consider diffusing.'
            : 'Apply curl-defining cream or gel to enhance your natural texture and reduce frizz.',
          icon: 'sparkle'
        },
        {
          step: 4,
          title: 'Air Dry or Diffuse',
          description: 'Let hair air dry naturally or use a diffuser on low heat. Avoid touching hair while drying to prevent frizz.',
          icon: 'wind'
        }
      ],
      eveningRoutine: [
        {
          step: 1,
          title: 'Pineapple Method',
          description: 'Gather hair into a loose, high ponytail on top of your head to preserve curls and prevent flattening while sleeping.',
          icon: 'crown'
        },
        {
          step: 2,
          title: 'Satin Protection',
          description: 'Use a satin or silk bonnet, scarf, or pillowcase to reduce friction and prevent breakage overnight.',
          icon: 'shield'
        },
        {
          step: 3,
          title: 'Moisture Lock',
          description: 'Apply a light moisture spray or oil to dry ends before bed to maintain hydration.',
          icon: 'droplets'
        }
      ],
      weeklySchedule: [
        {
          day: 'Day 1',
          title: 'Wash Day',
          description: 'Complete cleansing routine with shampoo, conditioner, and detangling session.',
          tasks: [
            porosity === 'low' ? 'Use clarifying shampoo to remove buildup' : 'Use sulfate-free moisturizing shampoo',
            'Apply conditioner and detangle with wide-tooth comb',
            'Rinse with cool water to seal cuticles',
            'Apply styling products while hair is soaking wet'
          ],
          color: 'green'
        },
        {
          day: 'Day 3-4',
          title: 'Refresh Day',
          description: 'Revive your style without full wash.',
          tasks: [
            'Spray hair with water or refresher spray',
            'Scrunch to reactivate curl pattern',
            'Add light styling product if needed',
            'Diffuse roots for volume if flat'
          ],
          color: 'blue'
        },
        {
          day: 'Day 7',
          title: 'Deep Conditioning',
          description: 'Intensive moisture treatment for healthy hair.',
          tasks: [
            'Apply deep conditioning mask to clean, damp hair',
            porosity === 'low' ? 'Use heat cap or steamer for 20-30 minutes' : 'Leave on for 20-30 minutes',
            'Rinse thoroughly with cool water',
            'Follow with leave-in conditioner'
          ],
          color: 'purple'
        }
      ],
      productRecommendations: [
        {
          category: 'Shampoo',
          description: porosity === 'low' 
            ? 'Clarifying shampoo to remove buildup from low porosity hair'
            : porosity === 'high'
            ? 'Moisturizing, sulfate-free shampoo to retain moisture'
            : 'Gentle sulfate-free shampoo for balanced cleansing',
          icon: 'bottle'
        },
        {
          category: 'Deep Conditioner',
          description: porosity === 'low'
            ? 'Lightweight protein-free deep conditioner with humectants'
            : porosity === 'high'
            ? 'Rich, protein-packed deep conditioner to strengthen hair'
            : 'Balanced hydrating mask with natural oils',
          icon: 'jar'
        },
        {
          category: 'Curl Cream / Styler',
          description: hairType === 'curly' || hairType === 'coily'
            ? 'Curl-defining cream with hold for defined, bouncy curls'
            : hairType === 'wavy'
            ? 'Lightweight mousse or sea salt spray for enhanced waves'
            : 'Smoothing serum for sleek, polished finish',
          icon: 'tube'
        },
        {
          category: 'Hair Oil / Serum',
          description: porosity === 'low'
            ? 'Lightweight oils like argan or grapeseed that won\'t weigh hair down'
            : 'Rich oils like castor, olive, or JBCO to seal in moisture',
          icon: 'dropper'
        },
        {
          category: 'Anti-Frizz Treatment',
          description: climate === 'humid'
            ? 'Anti-humidity serum or gel to combat frizz in moisture-rich air'
            : 'Hydrating anti-frizz spray for smooth, defined texture',
          icon: 'spray'
        }
      ],
      advancedTips: [
        {
          title: 'Understanding Your Porosity',
          content: porosity === 'low'
            ? 'Low porosity hair has tightly closed cuticles, making it harder for moisture to penetrate. Use heat when deep conditioning, avoid heavy products that cause buildup, and opt for water-based, lightweight formulas.'
            : porosity === 'high'
            ? 'High porosity hair absorbs moisture quickly but loses it just as fast. Use the LOC (Liquid-Oil-Cream) method to layer products, incorporate protein treatments, and seal with heavier oils.'
            : 'Medium porosity hair is the most versatile. Focus on maintaining moisture balance and protect from damage to keep cuticles healthy.',
          icon: 'droplet'
        },
        {
          title: 'Scalp Health Matters',
          content: concerns.includes('oiliness')
            ? 'Oily scalp may require more frequent washing. Focus shampoo on roots only, use a gentle clarifying treatment weekly, and avoid heavy oils near the scalp.'
            : concerns.includes('dandruff')
            ? 'For dandruff-prone scalp, use anti-dandruff shampoo, massage scalp to improve circulation, and consider tea tree oil treatments.'
            : 'Healthy hair starts with a healthy scalp. Massage your scalp during washing to stimulate blood flow and promote hair growth.',
          icon: 'target'
        },
        {
          title: 'Preventing Breakage',
          content: 'Always detangle when hair is wet and saturated with conditioner. Start from the ends and work up to roots. Use wide-tooth combs or fingers, never brush curly/coily hair when dry. Sleep on satin to reduce friction.',
          icon: 'shield'
        },
        {
          title: 'Heat Protection Tips',
          content: 'If using heat styling tools, always apply a heat protectant spray first. Use the lowest effective temperature setting. Limit heat styling to once or twice a week maximum, and consider heatless styling alternatives.',
          icon: 'flame'
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

    localStorage.setItem('hairgen_routine', JSON.stringify(routine));
    localStorage.setItem('hairgen_answers', JSON.stringify(answers));
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

  const getSEOTitle = () => {
    const type = generatedRoutine?.hairProfile?.type || 'Your';
    const porosity = generatedRoutine?.hairProfile?.porosity || '';
    const typeStr = type.charAt(0).toUpperCase() + type.slice(1);
    const porosityStr = porosity ? `, ${porosity.charAt(0).toUpperCase() + porosity.slice(1)} Porosity` : '';
    return `Your Personalized Hair Routine for ${typeStr}${porosityStr} Hair`;
  };

  const getSEOSlug = () => {
    const type = (generatedRoutine?.hairProfile?.type || 'custom').toLowerCase();
    const porosity = (generatedRoutine?.hairProfile?.porosity || '').toLowerCase();
    const density = (generatedRoutine?.hairProfile?.density || '').toLowerCase();
    return `${type}-${porosity}-${density}-hair`.replace(/\s+/g, '-').replace(/-+/g, '-');
  };

  const effectiveAnswers = answers && Object.keys(answers).length > 0 ? answers : localAnswers || {};
  const faqs = getFAQsForProfile(generatedRoutine?.hairProfile, effectiveAnswers);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{getSEOTitle()} - Hair Routine Generator</title>
        <meta name="description" content={`Complete daily and weekly hair routine customized for ${generatedRoutine?.hairProfile?.type || 'your'} hair with ${generatedRoutine?.hairProfile?.porosity || 'balanced'} porosity. Get personalized product recommendations and expert tips.`} />
        <meta property="og:title" content={getSEOTitle()} />
        <meta property="og:description" content="AI-generated personalized hair care routine based on your unique hair type, porosity, and goals." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`/routine/${getSEOSlug()}`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
                {getSEOTitle()}
              </h1>
              <p className="text-lg font-semibold text-gray-700 max-w-3xl mx-auto">
                Here is your complete daily + weekly hair routine based on your hair type, porosity, scalp condition, and goals.
              </p>
              <p className="text-gray-600">
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

            {/* Daily Hair Routine Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Daily Hair Routine</h2>
                <p className="text-gray-600">Follow these morning and night routines for healthy, beautiful hair</p>
              </div>

              {/* Morning Routine */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Morning Routine</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generatedRoutine.morningRoutine.map((item) => (
                    <motion.div 
                      key={item.step} 
                      className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Night Routine */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Moon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Night Routine</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {generatedRoutine.eveningRoutine.map((item) => (
                    <motion.div 
                      key={item.step} 
                      className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Routine Schedule */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Weekly Routine Schedule</h2>
                  <p className="text-gray-600">Your weekly hair care calendar</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {generatedRoutine.weeklySchedule?.map((schedule, idx) => {
                  const colorMap = {
                    green: { bg: 'from-green-50 to-emerald-50', badge: 'bg-green-500', text: 'text-green-700' },
                    blue: { bg: 'from-blue-50 to-cyan-50', badge: 'bg-blue-500', text: 'text-blue-700' },
                    purple: { bg: 'from-purple-50 to-pink-50', badge: 'bg-purple-500', text: 'text-purple-700' }
                  };
                  const colors = colorMap[schedule.color] || colorMap.green;
                  return (
                    <motion.div 
                      key={idx} 
                      className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl space-y-4`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`${colors.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                          {schedule.day}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{schedule.title}</h3>
                      <p className="text-gray-600 text-sm">{schedule.description}</p>
                      <ul className="space-y-2">
                        {schedule.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex items-start gap-2 text-sm">
                            <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Product Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Product Recommendations</h2>
                  <p className="text-gray-600">Products tailored for your {generatedRoutine.hairProfile?.porosity} porosity, {generatedRoutine.hairProfile?.type} hair</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {generatedRoutine.productRecommendations?.map((product, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-pink-500" />
                      <h4 className="font-bold text-gray-900">{product.category}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Advanced Tips Box */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Advanced Hair Care Tips</h2>
                  <p className="text-gray-600">Expert insights for your specific hair needs</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generatedRoutine.advancedTips?.map((tip, idx) => {
                  const iconMap = {
                    droplet: Droplet,
                    target: Target,
                    shield: Shield,
                    flame: Flame
                  };
                  const TipIcon = iconMap[tip.icon] || Lightbulb;
                  return (
                    <motion.div 
                      key={idx} 
                      className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <TipIcon className="w-5 h-5 text-amber-600" />
                        </div>
                        <h4 className="font-bold text-gray-900">{tip.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Quick Tips & Reminders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedRoutine.recommendations.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
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

            {/* Pinterest-Style Shareable Routine Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-pink-500" />
                  Save & Share Your Routine
                </h2>
              </div>
              <p className="text-gray-600 mb-6">Pin this beautiful routine card to save for later or share with friends!</p>
              
              {/* Pinterest Card Preview */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  {/* Card Header */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">My Hair Routine</h3>
                    <p className="text-white/80 text-sm mt-1">
                      {generatedRoutine.hairProfile?.type} | {generatedRoutine.hairProfile?.porosity} Porosity
                    </p>
                  </div>
                  
                  {/* Quick Routine Summary */}
                  <div className="space-y-3 relative z-10">
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4" />
                        <span className="font-semibold text-sm">Morning</span>
                      </div>
                      <p className="text-xs text-white/90">Mist, Leave-in, Style, Air Dry</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Moon className="w-4 h-4" />
                        <span className="font-semibold text-sm">Night</span>
                      </div>
                      <p className="text-xs text-white/90">Pineapple, Satin Bonnet, Moisture</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold text-sm">Weekly</span>
                      </div>
                      <p className="text-xs text-white/90">Wash Day, Refresh, Deep Condition</p>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="text-center mt-6 relative z-10">
                    <p className="text-xs text-white/70">Get your routine at</p>
                    <p className="font-bold text-sm">HairRoutineGenerator.com</p>
                  </div>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Button
                  onClick={handleShare}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Pinterest
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Card
                </Button>
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
                Share Hair Routine Generator with friends and help them discover their perfect hair routine too!
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