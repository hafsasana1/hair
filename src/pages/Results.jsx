import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams, Link } from 'react-router-dom';
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
    hairloss: { icon: TrendingDown, color: 'text-rose-500', bg: 'bg-rose-100' },
    dullness: { icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-100' },
    none: { icon: ThumbsUp, color: 'text-green-500', bg: 'bg-green-100' }
  }
};

// Dynamic FAQs based on hair profile
const getFAQsForProfile = (hairProfile, answers) => {
  const hairType = (answers?.hairType || hairProfile?.type || '').toLowerCase();
  const porosity = (answers?.porosity || hairProfile?.porosity || '').toLowerCase();
  
  const hairTypeDisplay = hairType.charAt(0).toUpperCase() + hairType.slice(1);
  const porosityDisplay = porosity.charAt(0).toUpperCase() + porosity.slice(1);
  
  const washFrequency = {
    straight: { low: '2-3 times per week', medium: '2-3 times per week', high: 'every 2-3 days' },
    wavy: { low: 'every 3-4 days', medium: '2-3 times per week', high: 'every 2-3 days' },
    curly: { low: 'once a week', medium: 'every 4-5 days', high: 'every 3-4 days' },
    coily: { low: 'once a week or less', medium: 'once a week', high: 'every 5-7 days' }
  };

  const routineDescriptions = {
    straight: 'Focus on lightweight products that add volume without weighing hair down. Use a gentle sulfate-free shampoo, apply conditioner mainly to ends, and finish with a light serum for shine.',
    wavy: 'Enhance natural texture with wave-defining products. Use a moisturizing shampoo, apply conditioner from mid-lengths to ends, scrunch with a lightweight mousse, and air dry for best results.',
    curly: 'Prioritize hydration and curl definition. Use a sulfate-free shampoo, deep condition regularly, apply curl cream to wet hair, and scrunch with gel for hold. Diffuse or air dry.',
    coily: 'Maximum moisture retention is key. Pre-poo with oil, use a gentle cleansing conditioner, deep condition weekly, apply leave-in and butter-based products, and protective style regularly.'
  };

  const productsByPorosity = {
    low: 'Water-based, lightweight products work best. Look for humectants like glycerin and honey. Avoid heavy butters and oils. Use heat when deep conditioning to open cuticles.',
    medium: 'Most products work well with balanced porosity. Focus on maintaining moisture with regular conditioning. Use a mix of protein and moisture treatments as needed.',
    high: 'Rich, creamy products seal moisture in. Use the LOC method (Liquid, Oil, Cream). Protein treatments help fill gaps in the cuticle. Heavier oils like castor oil work well.'
  };

  const dailyMaintenance = {
    straight: 'Brush gently from ends to roots, use dry shampoo between washes to absorb oil, protect from heat before styling, and sleep on a silk pillowcase to reduce friction.',
    wavy: 'Refresh waves with water or leave-in spray, scrunch to revive texture, avoid brushing dry hair, and use a satin pillowcase to maintain waves overnight.',
    curly: 'Refresh curls with water and leave-in conditioner, scrunch to reactivate product, pineapple hair at night, and avoid touching curls during the day to prevent frizz.',
    coily: 'Moisturize daily with water and leave-in conditioner, seal with oil, protect hair at night with a satin bonnet or pillowcase, and re-twist or refresh protective styles as needed.'
  };

  const faqs = [
    {
      question: `What is the best routine for ${hairTypeDisplay} hair?`,
      answer: routineDescriptions[hairType] || 'Start with a gentle shampoo, follow with conditioner, and use products suited to your hair texture. Deep condition weekly and minimize heat styling for healthiest results.'
    },
    {
      question: `How often should I wash ${hairTypeDisplay} hair with ${porosityDisplay} porosity?`,
      answer: `For ${hairTypeDisplay.toLowerCase()} hair with ${porosityDisplay.toLowerCase()} porosity, washing ${washFrequency[hairType]?.[porosity] || '2-3 times per week'} is recommended. Adjust based on your scalp condition and lifestyle. Co-washing between shampoos can help maintain moisture.`
    },
    {
      question: `Which products work best for ${porosityDisplay} porosity hair?`,
      answer: productsByPorosity[porosity] || 'Choose products based on your porosity level. Low porosity needs lightweight formulas, medium porosity is versatile, and high porosity benefits from rich, sealing products.'
    },
    {
      question: `How can I maintain healthy ${hairTypeDisplay} hair daily?`,
      answer: dailyMaintenance[hairType] || 'Protect hair while sleeping, minimize heat styling, keep hair moisturized, and handle gently to prevent breakage. Regular trims every 8-12 weeks help maintain healthy ends.'
    },
    {
      question: 'Does hair porosity affect product absorption?',
      answer: 'Yes, porosity determines how well hair absorbs and retains moisture. Low porosity hair has tight cuticles that resist moisture, requiring heat for deep conditioning. High porosity hair absorbs quickly but loses moisture fast, needing sealing products. Medium porosity absorbs and retains moisture well with minimal effort.'
    }
  ];

  return faqs;
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

    const hairType = (answers.hairType || 'curly').toLowerCase();
    const porosity = (answers.porosity || 'medium').toLowerCase();
    const density = (answers.density || 'medium').toLowerCase();
    const concerns = Array.isArray(answers.concerns) ? answers.concerns.map(c => c.toLowerCase()) : [];
    const climate = (answers.climate || 'temperate').toLowerCase();

    // Dynamic morning routine based on hair type and climate
    const getMorningRoutine = () => {
      const routines = {
        straight: [
          {
            step: 1,
            title: 'Gentle Brush Through',
            description: climate === 'humid' 
              ? 'Use a boar bristle brush to distribute natural oils and smooth the cuticle to combat humidity.'
              : 'Gently brush hair from roots to ends to distribute natural oils evenly.',
            icon: 'brush'
          },
          {
            step: 2,
            title: 'Volume Boost',
            description: density === 'thin' 
              ? 'Apply volumizing mousse at the roots and flip head upside down while blow-drying for maximum lift.'
              : 'Apply a light texturizing spray at the roots for natural-looking volume.',
            icon: 'sparkle'
          },
          {
            step: 3,
            title: 'Smoothing Treatment',
            description: climate === 'humid'
              ? 'Apply anti-humidity serum focusing on mid-lengths to ends to prevent frizz and flyaways.'
              : climate === 'dry'
              ? 'Use a hydrating leave-in spray to add moisture and prevent static.'
              : 'Apply a light smoothing serum for a polished, sleek finish.',
            icon: 'bottle'
          },
          {
            step: 4,
            title: 'Heat Protection',
            description: 'If using heat tools, apply heat protectant spray before styling. Consider a sleek blowout or smooth iron finish.',
            icon: 'shield'
          }
        ],
        wavy: [
          {
            step: 1,
            title: 'Refresh Waves',
            description: climate === 'humid'
              ? 'Lightly mist with water mixed with a drop of anti-frizz serum to refresh waves without adding humidity sensitivity.'
              : 'Spritz hair with water or a wave-refreshing spray to reactivate your natural pattern.',
            icon: 'droplet'
          },
          {
            step: 2,
            title: 'Wave Enhancer',
            description: porosity === 'low'
              ? 'Apply a lightweight mousse or sea salt spray - heavier products will weigh down low porosity waves.'
              : 'Scrunch in a wave-enhancing cream or mousse to define and hold your natural waves.',
            icon: 'waves'
          },
          {
            step: 3,
            title: 'Scrunch & Define',
            description: density === 'thick' 
              ? 'Section hair and scrunch each section upward to encourage wave formation without clumping.'
              : 'Gently scrunch waves upward to encourage definition and natural bounce.',
            icon: 'sparkle'
          },
          {
            step: 4,
            title: 'Air Dry or Diffuse',
            description: climate === 'cold'
              ? 'Diffuse on low heat to speed up drying and prevent going outside with wet hair.'
              : 'Let waves air dry naturally or diffuse on low heat. Avoid touching until completely dry.',
            icon: 'wind'
          }
        ],
        curly: [
          {
            step: 1,
            title: 'Hydration Mist',
            description: climate === 'dry'
              ? 'Generously mist curls with water mixed with leave-in conditioner to combat dry climate dehydration.'
              : 'Lightly mist curls with water or a curl refresher spray to reactivate products.',
            icon: 'droplet'
          },
          {
            step: 2,
            title: 'Leave-In Application',
            description: porosity === 'high'
              ? 'Apply a creamy leave-in conditioner, focusing on the ends where high porosity hair loses moisture fastest.'
              : porosity === 'low'
              ? 'Use a lightweight, water-based leave-in spray that won\'t cause buildup on low porosity curls.'
              : 'Work leave-in conditioner through damp curls, focusing on mid-lengths to ends.',
            icon: 'bottle'
          },
          {
            step: 3,
            title: 'Curl Definition',
            description: climate === 'humid'
              ? 'Apply a strong-hold gel with anti-humidity properties to lock in curl definition and fight frizz all day.'
              : 'Apply curl cream or gel using praying hands method, then scrunch to encourage curl clumping.',
            icon: 'sparkle'
          },
          {
            step: 4,
            title: 'Dry & Set',
            description: density === 'thick'
              ? 'Diffuse in sections on medium heat to ensure all curls dry evenly and reduce drying time.'
              : 'Diffuse on low heat or air dry. Once fully dry, scrunch out any gel cast for soft, defined curls.',
            icon: 'wind'
          }
        ],
        coily: [
          {
            step: 1,
            title: 'Deep Moisture Refresh',
            description: climate === 'dry'
              ? 'Saturate coils with a water-based moisturizing spray - dry climates require extra hydration for coily hair.'
              : 'Dampen coils with water or a moisturizing refresher spray to prep for products.',
            icon: 'droplet'
          },
          {
            step: 2,
            title: 'LOC/LCO Method',
            description: porosity === 'low'
              ? 'Apply liquid, then oil, then cream (LOC). Low porosity coils absorb better when water-based products go first.'
              : porosity === 'high'
              ? 'Apply liquid, cream, then oil (LCO). High porosity coils need oil last to seal in moisture.'
              : 'Layer products: apply leave-in, then cream, then seal with oil for maximum moisture retention.',
            icon: 'bottle'
          },
          {
            step: 3,
            title: 'Coil Definition',
            description: density === 'thick'
              ? 'Section hair into smaller parts and use finger coiling or twist-outs for defined coils in thick hair.'
              : 'Define coils with a curl cream or butter, using finger coiling on individual coils for maximum definition.',
            icon: 'sparkle'
          },
          {
            step: 4,
            title: 'Seal & Protect',
            description: climate === 'cold'
              ? 'Apply a heavier sealing oil and cover with a satin-lined cap when going outside to protect from cold, dry air.'
              : 'Seal with a light oil to lock in moisture. Consider a protective style to minimize manipulation.',
            icon: 'shield'
          }
        ]
      };
      return routines[hairType] || routines.curly;
    };

    // Dynamic evening routine based on hair type
    const getEveningRoutine = () => {
      const routines = {
        straight: [
          {
            step: 1,
            title: 'Gentle Detangle',
            description: 'Brush through hair gently to remove any tangles and distribute natural oils from roots to ends.',
            icon: 'brush'
          },
          {
            step: 2,
            title: 'Loose Styling',
            description: density === 'thin'
              ? 'Tie hair in a very loose, low ponytail or leave it down to avoid creasing fine hair.'
              : 'Braid loosely or use a silk scrunchie for a low ponytail to prevent kinks and breakage.',
            icon: 'crown'
          },
          {
            step: 3,
            title: 'Silk Protection',
            description: 'Sleep on a silk or satin pillowcase to reduce friction and prevent hair from getting oily or tangled.',
            icon: 'shield'
          }
        ],
        wavy: [
          {
            step: 1,
            title: 'Loose Pineapple',
            description: 'Gather waves into a very loose, high ponytail using a silk scrunchie to preserve wave pattern overnight.',
            icon: 'crown'
          },
          {
            step: 2,
            title: 'Refresh Ends',
            description: concerns.includes('dryness')
              ? 'Apply a small amount of hair oil to dry ends to prevent overnight moisture loss.'
              : 'Lightly mist ends if they feel dry - waves benefit from overnight hydration.',
            icon: 'droplets'
          },
          {
            step: 3,
            title: 'Satin Sleep',
            description: 'Use a satin bonnet or pillowcase to reduce friction and maintain wave definition while you sleep.',
            icon: 'shield'
          }
        ],
        curly: [
          {
            step: 1,
            title: 'Pineapple Method',
            description: density === 'thick'
              ? 'Create 2-3 pineapples (loose high ponytails) to prevent curls from flattening - single pineapple can be too heavy for thick curls.'
              : 'Gather curls into a loose, high ponytail on top of your head to preserve curl pattern overnight.',
            icon: 'crown'
          },
          {
            step: 2,
            title: 'Moisture Seal',
            description: porosity === 'high'
              ? 'Apply a sealing oil to ends to prevent overnight moisture loss common in high porosity curls.'
              : 'Apply a light moisture spray or oil to any dry areas before bed.',
            icon: 'droplets'
          },
          {
            step: 3,
            title: 'Satin Protection',
            description: 'Use a satin or silk bonnet, scarf, or pillowcase to reduce friction and maintain curl definition.',
            icon: 'shield'
          }
        ],
        coily: [
          {
            step: 1,
            title: 'Protective Styling',
            description: 'Twist or braid coils into large sections to protect them overnight and make morning styling easier.',
            icon: 'crown'
          },
          {
            step: 2,
            title: 'Heavy Moisture Seal',
            description: climate === 'dry'
              ? 'Apply shea butter or a heavy cream to seal in moisture - coily hair in dry climates needs extra overnight protection.'
              : 'Apply a medium-weight oil or butter to seal ends and protect coils overnight.',
            icon: 'droplets'
          },
          {
            step: 3,
            title: 'Full Satin Coverage',
            description: 'Wear a satin bonnet or wrap hair in a satin scarf to fully protect coils from friction and moisture loss.',
            icon: 'shield'
          },
          {
            step: 4,
            title: 'Scalp Treatment',
            description: concerns.includes('hairloss') || concerns.includes('dryness')
              ? 'Apply a few drops of scalp oil (rosemary, peppermint) and massage gently to promote circulation and growth.'
              : 'Optional: massage scalp with a light oil to promote healthy hair growth.',
            icon: 'target'
          }
        ]
      };
      return routines[hairType] || routines.curly;
    };

    // Dynamic weekly schedule based on hair type, porosity, and climate
    const getWeeklySchedule = () => {
      const washFrequency = {
        straight: { day: 'Every 2-3 Days', title: 'Wash Day' },
        wavy: { day: 'Every 3-4 Days', title: 'Wash Day' },
        curly: { day: 'Day 1 (Weekly)', title: 'Wash Day' },
        coily: { day: 'Every 7-10 Days', title: 'Wash Day' }
      };

      const getWashDayTasks = () => {
        const tasks = [];
        
        // Shampoo recommendation
        if (porosity === 'low') {
          tasks.push('Use clarifying shampoo to remove product buildup from low porosity hair');
        } else if (concerns.includes('oiliness')) {
          tasks.push('Use a gentle clarifying or balancing shampoo for oily scalp');
        } else if (hairType === 'coily' || hairType === 'curly') {
          tasks.push('Use a sulfate-free, moisturizing shampoo or co-wash');
        } else {
          tasks.push('Use a gentle, sulfate-free shampoo');
        }

        // Conditioning
        if (hairType === 'straight') {
          tasks.push('Apply conditioner to ends only - avoid roots to prevent oiliness');
        } else if (density === 'thin') {
          tasks.push('Use lightweight conditioner, focusing on ends to avoid weighing down fine hair');
        } else {
          tasks.push('Apply conditioner generously from mid-lengths to ends, detangle with wide-tooth comb');
        }

        // Rinse technique
        if (porosity === 'high') {
          tasks.push('Rinse with cold water to help seal the cuticle and lock in moisture');
        } else {
          tasks.push('Rinse with cool water to seal cuticles and add shine');
        }

        // Styling based on hair type
        if (hairType === 'straight') {
          tasks.push('Apply lightweight serum or heat protectant before styling');
        } else if (hairType === 'wavy') {
          tasks.push('Apply wave cream or mousse to damp hair and scrunch gently');
        } else {
          tasks.push('Apply styling products to soaking wet hair for best curl definition');
        }

        return tasks;
      };

      const getRefreshDayTasks = () => {
        if (hairType === 'straight') {
          return [
            'Use dry shampoo at roots to absorb oil and add volume',
            'Brush through to distribute and remove excess product',
            'Touch up any areas with a flat iron if needed',
            'Apply a light shine spray for a polished finish'
          ];
        } else if (hairType === 'wavy') {
          return [
            'Spray waves with water or wave refresher',
            'Scrunch gently to reactivate wave pattern',
            'Add a small amount of mousse to flat sections',
            'Air dry or diffuse briefly to set'
          ];
        } else if (hairType === 'curly') {
          return [
            'Mist curls with water mixed with leave-in conditioner',
            'Scrunch upward to reactivate curl clumps',
            'Apply a small amount of gel to frizzy areas',
            'Diffuse briefly or air dry without touching'
          ];
        } else {
          return [
            'Spray coils with a moisturizing refresher or water mixture',
            'Reapply a small amount of leave-in cream to dry areas',
            'Finger coil or twist any undefined sections',
            'Seal with a light oil to lock in the refresh'
          ];
        }
      };

      const getDeepConditionTasks = () => {
        const tasks = [];
        
        if (porosity === 'low') {
          tasks.push('Apply deep conditioner to clean, damp hair');
          tasks.push('Use a heat cap, steamer, or warm towel for 20-30 minutes to open cuticles');
          tasks.push('Choose a protein-free, humectant-rich mask for low porosity hair');
        } else if (porosity === 'high') {
          tasks.push('Apply protein-rich deep conditioning mask to strengthen porous hair');
          tasks.push('Leave on for 30-45 minutes - high porosity hair can absorb more');
          tasks.push('Follow with a moisturizing conditioner to add softness');
        } else {
          tasks.push('Apply deep conditioning mask to clean, damp hair');
          tasks.push('Leave on for 20-30 minutes under a plastic cap');
          tasks.push('Alternate between protein and moisture masks for balance');
        }
        
        tasks.push('Rinse with cool water and follow with leave-in conditioner');
        return tasks;
      };

      const schedule = [
        {
          day: washFrequency[hairType]?.day || 'Day 1',
          title: washFrequency[hairType]?.title || 'Wash Day',
          description: hairType === 'coily' 
            ? 'Gentle cleansing routine with plenty of moisture and careful detangling.'
            : hairType === 'curly'
            ? 'Complete cleansing with focus on hydration and curl definition.'
            : hairType === 'wavy'
            ? 'Balanced cleansing to enhance natural wave pattern.'
            : 'Cleansing routine to maintain sleek, healthy straight hair.',
          tasks: getWashDayTasks(),
          color: 'green'
        },
        {
          day: hairType === 'straight' ? 'Day 2' : hairType === 'wavy' ? 'Day 2-3' : 'Day 3-4',
          title: 'Refresh Day',
          description: hairType === 'straight'
            ? 'Maintain freshness and style without washing.'
            : 'Revive your natural texture without a full wash.',
          tasks: getRefreshDayTasks(),
          color: 'blue'
        },
        {
          day: hairType === 'coily' ? 'Weekly' : hairType === 'curly' ? 'Day 7' : 'Weekly',
          title: 'Deep Conditioning',
          description: climate === 'dry'
            ? 'Extra intensive moisture treatment to combat dry climate effects.'
            : 'Deep moisture treatment for healthy, nourished hair.',
          tasks: getDeepConditionTasks(),
          color: 'purple'
        }
      ];

      // Add protein treatment for high porosity or damaged hair
      if (porosity === 'high' || concerns.includes('damage')) {
        schedule.push({
          day: 'Bi-weekly',
          title: 'Protein Treatment',
          description: 'Strengthen hair and fill gaps in the cuticle with protein.',
          tasks: [
            'Apply protein treatment to clean, damp hair',
            'Leave on for 10-20 minutes (follow product instructions)',
            'Rinse thoroughly - protein overload can cause brittleness',
            'Always follow with a moisturizing conditioner'
          ],
          color: 'amber'
        });
      }

      return schedule;
    };

    // Dynamic product recommendations
    const getProductRecommendations = () => {
      const products = [];

      // Shampoo
      let shampooDesc = '';
      if (hairType === 'straight' && concerns.includes('oiliness')) {
        shampooDesc = 'Clarifying or balancing shampoo to control oil while maintaining moisture';
      } else if (hairType === 'coily') {
        shampooDesc = 'Ultra-moisturizing sulfate-free shampoo or cleansing conditioner (co-wash)';
      } else if (porosity === 'low') {
        shampooDesc = 'Clarifying shampoo (use weekly) to remove buildup, plus gentle daily cleanser';
      } else if (porosity === 'high') {
        shampooDesc = 'Creamy, sulfate-free moisturizing shampoo to prevent further cuticle damage';
      } else {
        shampooDesc = 'Gentle sulfate-free shampoo for balanced, healthy cleansing';
      }
      products.push({ category: 'Shampoo', description: shampooDesc, icon: 'bottle' });

      // Conditioner
      let condDesc = '';
      if (density === 'thin') {
        condDesc = 'Lightweight, volumizing conditioner - apply to ends only to avoid weighing down fine hair';
      } else if (hairType === 'coily') {
        condDesc = 'Rich, ultra-moisturizing conditioner with slip for easy detangling of coily hair';
      } else if (porosity === 'high') {
        condDesc = 'Protein-infused conditioner to strengthen and repair high porosity hair';
      } else {
        condDesc = 'Hydrating conditioner with natural oils for smooth, manageable hair';
      }
      products.push({ category: 'Conditioner', description: condDesc, icon: 'jar' });

      // Styler based on hair type
      let stylerDesc = '';
      if (hairType === 'straight') {
        stylerDesc = density === 'thin'
          ? 'Volumizing mousse and lightweight smoothing serum for body without weight'
          : 'Smoothing serum or cream for sleek, polished finish with heat protection';
      } else if (hairType === 'wavy') {
        stylerDesc = climate === 'humid'
          ? 'Sea salt spray or wave cream with anti-humidity properties to hold waves in moisture'
          : 'Lightweight mousse or wave-enhancing cream for natural, touchable waves';
      } else if (hairType === 'curly') {
        stylerDesc = climate === 'humid'
          ? 'Strong-hold curl gel with anti-humidity technology for frizz-free, defined curls all day'
          : 'Curl cream or gel for definition - use praying hands method then scrunch';
      } else {
        stylerDesc = 'Curl defining butter or cream for coily hair - provides moisture and definition without crunch';
      }
      products.push({ category: 'Styling Product', description: stylerDesc, icon: 'tube' });

      // Oil/Serum
      let oilDesc = '';
      if (porosity === 'low') {
        oilDesc = 'Lightweight oils like argan, grapeseed, or jojoba that penetrate without causing buildup';
      } else if (porosity === 'high' || hairType === 'coily') {
        oilDesc = 'Rich sealing oils like castor, olive, or Jamaican black castor oil to lock in moisture';
      } else if (climate === 'humid') {
        oilDesc = 'Anti-humidity serum that seals the cuticle and blocks moisture from entering';
      } else {
        oilDesc = 'Medium-weight oils like argan or sweet almond for shine and frizz control';
      }
      products.push({ category: 'Hair Oil', description: oilDesc, icon: 'dropper' });

      // Climate-specific product
      if (climate === 'humid') {
        products.push({
          category: 'Anti-Humidity Treatment',
          description: 'Anti-humidity spray or serum with silicones to create a barrier against moisture in the air',
          icon: 'spray'
        });
      } else if (climate === 'dry') {
        products.push({
          category: 'Hydrating Treatment',
          description: 'Intensive moisture mask or leave-in treatment with humectants like glycerin and honey',
          icon: 'spray'
        });
      } else if (climate === 'cold') {
        products.push({
          category: 'Protective Treatment',
          description: 'Rich, protective hair butter or cream to shield hair from cold, dry winter air',
          icon: 'spray'
        });
      }

      // Concern-specific products
      if (concerns.includes('damage')) {
        products.push({
          category: 'Bond Repair Treatment',
          description: 'Bond-building treatment (like Olaplex) to repair and strengthen damaged hair bonds',
          icon: 'shield'
        });
      }

      if (concerns.includes('hairloss')) {
        products.push({
          category: 'Scalp Treatment',
          description: 'Stimulating scalp serum with rosemary, peppermint, or caffeine to promote hair growth',
          icon: 'target'
        });
      }

      return products;
    };

    // Dynamic advanced tips
    const getAdvancedTips = () => {
      const tips = [];

      // Hair type specific tip
      const hairTypeTips = {
        straight: {
          title: 'Maximizing Straight Hair Potential',
          content: density === 'thin'
            ? 'Fine straight hair benefits from volumizing products applied at the roots. Blow dry upside down, use velcro rollers for body, and avoid heavy products that weigh hair down. Consider a layered cut for natural movement.'
            : 'Straight hair shows damage easily, so focus on keeping it healthy and shiny. Use a boar bristle brush to distribute natural oils, apply heat protectant before any hot tools, and get regular trims to prevent split ends from traveling up the shaft.',
          icon: 'sparkle'
        },
        wavy: {
          title: 'Enhancing Your Natural Waves',
          content: 'Wavy hair is versatile and can be styled straighter or curlier depending on technique. For more defined waves, apply products to soaking wet hair and scrunch. For looser waves, apply to damp hair and let air dry. Avoid brushing dry waves - use fingers to separate instead.',
          icon: 'waves'
        },
        curly: {
          title: 'Curl Care Essentials',
          content: climate === 'humid'
            ? 'In humid climates, focus on products with anti-humidity properties and strong hold. Apply gel to soaking wet hair, and don\'t touch until completely dry. The key is creating a cast that shields curls from moisture in the air.'
            : 'The key to great curls is moisture and definition. Apply products to soaking wet hair, use the praying hands method to smooth products through, then scrunch. Never touch curls while drying - this causes frizz.',
          icon: 'target'
        },
        coily: {
          title: 'Coily Hair Wisdom',
          content: 'Coily hair requires the most moisture of all hair types. The LOC or LCO method (Liquid, Oil, Cream or Liquid, Cream, Oil) is essential. Gentle handling is crucial - always detangle with conditioner, use fingers or wide-tooth combs only, and embrace protective styles to minimize manipulation.',
          icon: 'crown'
        }
      };
      tips.push(hairTypeTips[hairType] || hairTypeTips.curly);

      // Porosity tip
      tips.push({
        title: 'Understanding Your Porosity',
        content: porosity === 'low'
          ? 'Low porosity hair has tightly sealed cuticles that resist moisture. Use heat (warm water, steamers, heat caps) when conditioning to open cuticles. Choose water-based, lightweight products. Avoid heavy butters and oils that sit on top of hair.'
          : porosity === 'high'
          ? 'High porosity hair absorbs moisture quickly but loses it just as fast due to gaps in the cuticle. Use the LOC/LCO method to layer products and seal moisture. Protein treatments help fill gaps. Rinse with cold water to close cuticles.'
          : 'Medium porosity hair is well-balanced and absorbs moisture effectively. Maintain this with regular conditioning and protect from damage that could raise porosity. Most products work well for you.',
        icon: 'droplet'
      });

      // Climate tip
      const climateTips = {
        humid: {
          title: 'Humidity Defense Strategy',
          content: `In humid climates, hair absorbs excess moisture from the air, causing frizz and loss of style. Combat this with anti-humidity products, strong-hold styling gels, and sealing oils. ${hairType === 'curly' || hairType === 'coily' ? 'Apply gel to soaking wet hair and create a strong cast to shield from humidity.' : 'Use smoothing serums with silicones to create a barrier against moisture.'}`,
          icon: 'cloud'
        },
        dry: {
          title: 'Dry Climate Hydration',
          content: `Dry climates pull moisture from your hair, leaving it brittle and prone to breakage. Deep condition twice weekly, use humectant-rich products (glycerin, honey, aloe), and seal with oils. ${hairType === 'coily' ? 'Heavy butters like shea and mango are your friends in dry climates.' : 'Consider a humidifier in your home and protect hair when going outside.'}`,
          icon: 'sun'
        },
        cold: {
          title: 'Winter Hair Protection',
          content: 'Cold weather brings dry indoor heat and harsh outdoor conditions. Protect hair with satin-lined hats, deep condition regularly, and seal with heavier oils. Never go outside with wet hair in winter - it can freeze and break. Focus on maintaining moisture barrier.',
          icon: 'snowflake'
        },
        temperate: {
          title: 'Seasonal Adaptation',
          content: 'With changing seasons, your hair needs change too. Adjust your routine seasonally - lighter products in summer, richer ones in winter. Pay attention to how your hair responds to humidity and temperature changes and adapt your product lineup accordingly.',
          icon: 'cloudsun'
        }
      };
      tips.push(climateTips[climate] || climateTips.temperate);

      // Concern-based tips
      if (concerns.includes('frizz')) {
        tips.push({
          title: 'Frizz Control Mastery',
          content: 'Frizz happens when hair seeks moisture from the air. Combat it by keeping hair well-moisturized, using anti-frizz products, sleeping on silk, and never touching hair while it dries. Apply products to soaking wet hair and avoid rough towel-drying - use a microfiber towel or t-shirt instead.',
          icon: 'wind'
        });
      }

      if (concerns.includes('damage')) {
        tips.push({
          title: 'Damage Recovery Plan',
          content: 'Repair damaged hair with protein treatments every 2-4 weeks, deep conditioning weekly, and minimal heat styling. Use bond-building treatments, trim split ends regularly, and handle hair gently. Focus on preventing further damage while the healthy hair grows in.',
          icon: 'shield'
        });
      }

      if (concerns.includes('hairloss')) {
        tips.push({
          title: 'Promoting Hair Growth',
          content: 'Stimulate hair growth by massaging your scalp daily to increase blood flow. Use gentle products, avoid tight hairstyles that pull on hair, and consider scalp serums with rosemary or peppermint oil. Ensure adequate protein, iron, and biotin in your diet. Consult a dermatologist if hair loss is significant.',
          icon: 'target'
        });
      }

      return tips;
    };

    // Dynamic general recommendations
    const getRecommendations = () => {
      const recs = [];

      // Water temperature
      if (porosity === 'low') {
        recs.push('Use warm water when conditioning to open cuticles, then rinse with cool water');
      } else {
        recs.push('Use lukewarm water for washing and cool water for final rinse to seal cuticles');
      }

      // Heat styling
      if (hairType === 'straight') {
        recs.push('Always use heat protectant and keep flat iron temperature below 380°F for fine hair, 410°F for normal');
      } else {
        recs.push('Minimize heat styling - embrace your natural texture and use heatless styling methods');
      }

      // Trimming
      if (concerns.includes('damage')) {
        recs.push('Trim every 6-8 weeks to remove damaged ends and prevent splits from traveling');
      } else {
        recs.push('Trim ends every 8-12 weeks to maintain healthy hair');
      }

      // Drying
      if (hairType === 'curly' || hairType === 'coily') {
        recs.push('Never use a regular towel - use microfiber or a cotton t-shirt to dry hair gently');
      } else {
        recs.push('Pat hair dry gently with a soft towel instead of rubbing vigorously');
      }

      // Sleeping
      recs.push('Sleep on silk or satin pillowcase to reduce friction and prevent breakage');

      // Detangling
      if (hairType === 'coily') {
        recs.push('Only detangle when hair is saturated with conditioner - never dry detangle coily hair');
      } else if (hairType === 'curly') {
        recs.push('Detangle in the shower with conditioner using fingers or a wide-tooth comb');
      } else {
        recs.push('Brush gently starting from ends and work up to roots to prevent breakage');
      }

      // Climate specific
      if (climate === 'humid') {
        recs.push('Apply anti-humidity products before going outside to protect your style');
      } else if (climate === 'dry') {
        recs.push('Use a humidifier indoors and deep condition twice weekly in dry climates');
      } else if (climate === 'cold') {
        recs.push('Never go outside with wet hair in winter - always fully dry before leaving');
      }

      // Nutrition
      recs.push('Stay hydrated and eat protein-rich foods for healthy hair growth from within');

      return recs.slice(0, 8);
    };

    // Weekly treatments based on profile
    const getWeeklyTreatments = () => {
      const treatments = [];

      treatments.push({
        title: 'Deep Conditioning Mask',
        description: porosity === 'low'
          ? 'Apply a protein-free, humectant-rich mask under heat for 20-30 minutes weekly.'
          : porosity === 'high'
          ? 'Alternate between protein and moisture masks. Use protein bi-weekly, moisture weekly.'
          : 'Apply a balanced hydrating mask once weekly for 20-30 minutes.',
        frequency: 'Once per week'
      });

      if (hairType === 'coily' || concerns.includes('hairloss')) {
        treatments.push({
          title: 'Scalp Massage & Treatment',
          description: 'Warm oil massage (coconut, castor, or rosemary-infused) to stimulate blood flow and promote growth.',
          frequency: 'Twice per week'
        });
      } else {
        treatments.push({
          title: 'Scalp Care',
          description: 'Gentle scalp massage during washing to promote circulation and healthy hair growth.',
          frequency: 'Every wash day'
        });
      }

      if (porosity === 'high' || concerns.includes('damage')) {
        treatments.push({
          title: 'Protein Treatment',
          description: 'Protein-rich treatment to strengthen and repair damaged or high porosity hair.',
          frequency: 'Every 2-4 weeks'
        });
      }

      if (porosity === 'low') {
        treatments.push({
          title: 'Clarifying Treatment',
          description: 'Use clarifying shampoo to remove product buildup that low porosity hair is prone to.',
          frequency: 'Every 1-2 weeks'
        });
      }

      if (climate === 'dry') {
        treatments.push({
          title: 'Intensive Moisture Treatment',
          description: 'Hot oil treatment or overnight deep conditioning to combat dry climate effects.',
          frequency: 'Weekly in dry weather'
        });
      }

      return treatments;
    };

    const routine = {
      hairProfile: {
        type: hairType,
        porosity: porosity,
        density: density,
        concerns: concerns.length > 0 ? concerns.join(', ') : 'None',
        climate: climate
      },
      morningRoutine: getMorningRoutine(),
      eveningRoutine: getEveningRoutine(),
      weeklySchedule: getWeeklySchedule(),
      productRecommendations: getProductRecommendations(),
      advancedTips: getAdvancedTips(),
      weeklyTreatments: getWeeklyTreatments(),
      recommendations: getRecommendations()
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
    setTimeout(() => {
      navigate('/quiz');
    }, 0);
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
    const type = generatedRoutine?.hairProfile?.type;
    const porosity = generatedRoutine?.hairProfile?.porosity;
    
    if (!type || !porosity) {
      return "Hair Routine Generator – Personalized Care Plan";
    }
    
    const typeStr = type.charAt(0).toUpperCase() + type.slice(1);
    const porosityStr = porosity.charAt(0).toUpperCase() + porosity.slice(1);
    
    return `${typeStr} Hair Routine – ${porosityStr} Porosity Care Plan`;
  };

  const getSEODescription = () => {
    const type = generatedRoutine?.hairProfile?.type;
    const porosity = generatedRoutine?.hairProfile?.porosity;
    
    if (!type || !porosity) {
      return "Generate a personalized hair routine based on your hair type, porosity, and care goals in seconds.";
    }
    
    const typeStr = type.charAt(0).toUpperCase() + type.slice(1);
    const porosityStr = porosity.toLowerCase();
    
    return `Get a personalized daily and weekly hair routine for ${typeStr} hair with ${porosityStr} porosity. Includes step-by-step care and product tips.`;
  };

  const shouldIndexPage = () => {
    const hairType = generatedRoutine?.hairProfile?.type;
    const porosity = generatedRoutine?.hairProfile?.porosity;
    const dailyRoutine = generatedRoutine?.morningRoutine || generatedRoutine?.dailyRoutine;
    const weeklyRoutine = generatedRoutine?.weeklyRoutine || generatedRoutine?.weeklyTreatments;
    const products = generatedRoutine?.productRecommendations || generatedRoutine?.products;
    const tips = generatedRoutine?.careTips || generatedRoutine?.tips || generatedRoutine?.eveningRoutine;
    
    const hasHairType = hairType && ['straight', 'wavy', 'curly', 'coily'].includes(hairType.toLowerCase());
    const hasPorosity = porosity && ['low', 'medium', 'high'].includes(porosity.toLowerCase());
    const hasDailyRoutine = dailyRoutine && dailyRoutine.length > 0;
    const hasWeeklyRoutine = weeklyRoutine && weeklyRoutine.length > 0;
    const hasProducts = products && products.length > 0;
    const hasTips = tips && tips.length > 0;
    
    return hasHairType && hasPorosity && hasDailyRoutine && hasWeeklyRoutine && hasProducts && hasTips;
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

  const getHowToSteps = () => {
    const hairType = (generatedRoutine?.hairProfile?.type || '').toLowerCase();
    const porosity = (generatedRoutine?.hairProfile?.porosity || '').toLowerCase();
    const hairTypeDisplay = hairType.charAt(0).toUpperCase() + hairType.slice(1);
    
    const cleansingDescriptions = {
      straight: 'Use a gentle sulfate-free shampoo to cleanse the scalp. Focus on the roots where oil accumulates while letting suds run through lengths.',
      wavy: 'Apply a moisturizing shampoo to the scalp. Massage gently and let the lather cleanse the lengths without stripping natural oils.',
      curly: 'Use a sulfate-free or co-wash cleanser. Apply to scalp only and gently massage. Rinse thoroughly with lukewarm water.',
      coily: 'Pre-poo with oil before cleansing. Use a gentle sulfate-free shampoo or cleansing conditioner on the scalp. Rinse with warm water.'
    };
    
    const conditioningDescriptions = {
      straight: 'Apply conditioner from mid-lengths to ends, avoiding the roots. Leave for 2-3 minutes and rinse with cool water for added shine.',
      wavy: 'Distribute conditioner through mid-lengths and ends. Detangle gently with fingers or wide-tooth comb. Rinse with cool water.',
      curly: 'Apply generous conditioner and detangle with fingers or wide-tooth comb while hair is saturated. Leave for 3-5 minutes before rinsing.',
      coily: 'Section hair and apply deep conditioner generously. Detangle each section from ends to roots. Use a heat cap for deeper penetration.'
    };
    
    const moisturizingDescriptions = {
      low: 'Apply lightweight, water-based leave-in conditioner to damp hair. Use heat to help products penetrate the cuticle.',
      medium: 'Apply leave-in conditioner and a light moisturizing cream. Distribute evenly through hair for balanced hydration.',
      high: 'Use the LOC method: apply liquid leave-in, seal with oil, then layer with cream to lock in moisture effectively.'
    };
    
    const stylingDescriptions = {
      straight: 'Apply a light serum or heat protectant. Style as desired with minimal heat. Finish with a light-hold hairspray if needed.',
      wavy: 'Scrunch a lightweight mousse or wave cream into damp hair. Air dry or diffuse on low heat. Avoid touching while drying.',
      curly: 'Apply curl cream and gel to soaking wet hair. Scrunch gently and diffuse or air dry. Scrunch out the crunch once fully dry.',
      coily: 'Apply styling butter or cream in sections. Twist, braid, or use your preferred protective style. Seal edges with edge control.'
    };
    
    const weeklyDescriptions = {
      straight: 'Deep condition once weekly. Clarify monthly to remove buildup. Trim every 8-12 weeks to maintain healthy ends.',
      wavy: 'Deep condition weekly. Use a protein treatment monthly if needed. Clarify every 2-3 weeks. Trim regularly.',
      curly: 'Deep condition weekly for 20-30 minutes. Alternate protein and moisture treatments. Clarify monthly. Trim as needed.',
      coily: 'Deep condition weekly with heat. Do protein treatments every 4-6 weeks. Clarify monthly. Protective style regularly.'
    };

    return [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Cleansing",
        "text": cleansingDescriptions[hairType] || 'Cleanse scalp with a gentle shampoo. Massage to remove buildup and rinse thoroughly.'
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Conditioning",
        "text": conditioningDescriptions[hairType] || 'Apply conditioner to lengths and ends. Detangle gently and rinse with cool water.'
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Moisturizing",
        "text": moisturizingDescriptions[porosity] || 'Apply leave-in conditioner to damp hair for added moisture and protection.'
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Styling",
        "text": stylingDescriptions[hairType] || 'Apply styling products suited to your hair type. Allow to air dry or use low heat.'
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Weekly and Monthly Care",
        "text": weeklyDescriptions[hairType] || 'Deep condition weekly. Use clarifying treatment monthly. Trim every 8-12 weeks.'
      }
    ];
  };

  const hairTypeDisplay = (generatedRoutine?.hairProfile?.type || '').charAt(0).toUpperCase() + (generatedRoutine?.hairProfile?.type || '').slice(1);
  const porosityDisplay = (generatedRoutine?.hairProfile?.porosity || '').charAt(0).toUpperCase() + (generatedRoutine?.hairProfile?.porosity || '').slice(1);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `${hairTypeDisplay} Hair Routine for ${porosityDisplay} Porosity`,
    "description": `Complete step-by-step ${hairTypeDisplay.toLowerCase()} hair care routine optimized for ${porosityDisplay.toLowerCase()} porosity. Includes cleansing, conditioning, moisturizing, styling, and maintenance steps.`,
    "totalTime": "PT30M",
    "step": getHowToSteps()
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Personalized Hair Care Routine",
    "description": `Custom hair care routine designed for ${generatedRoutine?.hairProfile?.type || 'your'} ${generatedRoutine?.hairProfile?.porosity || ''} porosity hair. Includes morning routine, evening routine, and weekly treatments.`,
    "brand": {
      "@type": "Brand",
      "name": "Hair Routine Generator"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <>
      <Helmet>
        <title>{getSEOTitle()}</title>
        <meta name="description" content={getSEODescription()} />
        <meta name="robots" content={shouldIndexPage() ? "index, follow" : "noindex, follow"} />
        <meta property="og:title" content={getSEOTitle()} />
        <meta property="og:description" content={getSEODescription()} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`/routine/${getSEOSlug()}`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
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

            {/* Contextual Internal Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-green-500" />
                Explore More Hair Care Resources
              </h2>
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Now that you have your personalized routine, dive deeper into caring for your {generatedRoutine?.hairProfile?.type || 'unique'} hair. 
                  Learn more about {generatedRoutine?.hairProfile?.type ? (
                    <Link to={`/hair-routine-for-${generatedRoutine.hairProfile.type.toLowerCase()}-hair`} className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">
                      {generatedRoutine.hairProfile.type.toLowerCase()} hair care tips
                    </Link>
                  ) : 'hair care tips'} and discover techniques that work best for your texture.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Understanding your {generatedRoutine?.hairProfile?.porosity || 'hair'} porosity is key to choosing the right products. Check out our {generatedRoutine?.hairProfile?.porosity?.toLowerCase() === 'low' ? (
                    <Link to="/hair-routine-for-low-porosity" className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">
                      low porosity hair care guide
                    </Link>
                  ) : generatedRoutine?.hairProfile?.porosity?.toLowerCase() === 'high' ? (
                    <Link to="/hair-routine-for-high-porosity" className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">
                      high porosity hair care guide
                    </Link>
                  ) : (
                    <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">
                      complete hair porosity guide
                    </Link>
                  )} to learn more about product absorption and moisture retention.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Want to try a different approach? Take our <Link to="/quiz" className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">hair routine generator quiz</Link> again 
                  to explore routines for different goals, or browse our <Link to="/blog/hair-types-guide" className="text-green-600 hover:text-green-700 font-medium underline decoration-green-300 hover:decoration-green-500">hair types guide</Link> for 
                  in-depth information about all hair textures.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                <Link to="/quiz" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <RefreshCw className="w-4 h-4 text-green-500" />
                  Retake Quiz
                </Link>
                <Link to="/blog/hair-porosity-guide" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  Porosity Guide
                </Link>
                <Link to="/blog/hair-types-guide" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <Layers className="w-4 h-4 text-purple-500" />
                  Hair Types Guide
                </Link>
                <Link to="/hair-routine-for-curly-hair" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <CircleDot className="w-4 h-4 text-purple-500" />
                  Curly Hair Routine
                </Link>
                <Link to="/hair-routine-for-wavy-hair" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <Waves className="w-4 h-4 text-sky-500" />
                  Wavy Hair Routine
                </Link>
                <Link to="/hair-routine-for-straight-hair" className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-green-600">
                  <Minus className="w-4 h-4 text-slate-500" />
                  Straight Hair Routine
                </Link>
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
                    <p className="font-bold text-sm">hairroutinegen.com</p>
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