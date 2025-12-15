import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Search, 
  Fingerprint, 
  Calendar, 
  Wand2,
  Waves,
  Wind,
  ArrowDown,
  TrendingUp,
  AlertCircle,
  Droplets,
  Droplet,
  Sun,
  ChevronDown,
  HelpCircle,
  FlaskConical,
  UserCheck,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI Hair Routine Generator – Personalized Hair Care by Hair Type & Porosity",
        "alternateName": "Free Hair Routine Generator",
        "applicationCategory": "LifestyleApplication",
        "applicationSubCategory": "Beauty & Personal Care",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "description": "Free AI-powered hair routine generator that creates personalized daily and weekly hair care plans based on your hair type (1A-4C), porosity level, scalp condition, and local climate.",
        "featureList": [
          "AI-powered hair type analysis",
          "Climate-based routine optimization",
          "Porosity level detection",
          "Custom product recommendations",
          "Step-by-step daily and weekly plans",
          "Scalp condition assessment",
          "Seasonal adjustment tips"
        ],
        "author": {
          "@type": "Organization",
          "name": "Hair Routine Generator",
          "url": "https://hairroutinegen.com"
        }
      },
      {
        "@type": "HowTo",
        "name": "How the Hair Routine Generator Works",
        "description": "Generate a personalized hair care routine in 4 simple steps",
        "totalTime": "PT1M",
        "step": [
          {
            "@type": "HowToStep",
            "url": "https://hairroutinegen.com/#step1",
            "name": "Analyze Your Hair",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Analyze your hair type, porosity, and scalp condition through our smart quiz that gathers details about your unique hair characteristics."
            }
          },
          {
            "@type": "HowToStep",
            "url": "https://hairroutinegen.com/#step2",
            "name": "Identify Goals",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Identify your hair care goals and lifestyle preferences to ensure your routine fits seamlessly into your daily life."
            }
          },
          {
            "@type": "HowToStep",
            "url": "https://hairroutinegen.com/#step3",
            "name": "Generate Routine",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Generate a personalized daily and weekly hair routine using our AI that combines expert knowledge with your specific needs."
            }
          },
          {
            "@type": "HowToStep",
            "url": "https://hairroutinegen.com/#step4",
            "name": "Follow and Adjust",
            "itemListElement": {
              "@type": "HowToDirection",
              "text": "Follow your routine and adjust based on results to achieve optimal hair health over time."
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this hair routine generator really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our hair routine generator is 100% free to use. There are no hidden fees, subscriptions, or signup requirements. Simply take our quick quiz, and you'll receive a complete personalized hair care routine instantly. We believe everyone deserves access to professional-quality hair care advice."
            }
          },
          {
            "@type": "Question",
            "name": "How does hair porosity affect my routine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hair porosity determines how well your hair absorbs and retains moisture. Low porosity hair has tightly closed cuticles that resist moisture, requiring lightweight products and heat during conditioning. High porosity hair absorbs moisture quickly but loses it fast, needing heavier products and protein treatments. Our AI analyzes your porosity to recommend the right products and techniques for optimal moisture balance."
            }
          },
          {
            "@type": "Question",
            "name": "Is this routine suitable for curly and coily hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Our hair routine generator is designed for all hair types from straight 1A to coily 4C. For curly and coily hair, we recommend specific techniques like the LOC/LCO method, diffusing tips, protective styling routines, and products that enhance curl definition while providing deep hydration."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I wash my hair based on my hair type?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wash frequency varies by hair type and lifestyle. Straight and oily hair may need washing every 1-2 days, while curly and coily hair benefits from washing once a week or less to prevent dryness. Our AI considers your hair type, scalp condition, activity level, and climate to recommend the ideal wash schedule."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use this routine for hair growth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our hair routine generator includes specific recommendations for promoting hair growth. Based on your answers, we suggest scalp massage techniques, growth-stimulating ingredients like rosemary and peppermint oils, protein-moisture balance tips, and protective styling advice."
            }
          },
          {
            "@type": "Question",
            "name": "Does climate really affect hair care routines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Climate has a significant impact on hair health. Humid environments cause frizz, dry climates lead to brittle hair, cold weather causes static and dryness, while hot weather increases oil production. Our AI factors in your local climate to recommend products and techniques that keep your hair healthy year-round."
            }
          }
        ]
      }
    ]
  };

  const workflowSteps = [
    {
      icon: Search,
      title: 'Analyze Your Hair',
      description: 'Our smart quiz gathers details about your unique hair texture, density, and lifestyle.'
    },
    {
      icon: Fingerprint,
      title: 'Identify Type & Porosity',
      description: 'We scientifically categorize your hair type (1a-4c) and porosity level for precise care.'
    },
    {
      icon: Wand2,
      title: 'Build Personalized Routine',
      description: 'AI instantly generates a custom regimen combining expert rules and product matching.'
    },
    {
      icon: Calendar,
      title: 'Step-by-Step Daily Plan',
      description: 'Get a clear morning, evening, and weekly schedule to reach your hair goals.'
    }
  ];

  const targetAudiences = [
    { icon: Waves, title: 'Curly Hair Routines', subtitle: 'Types 3a, 3b, 3c', link: '/hair-routine-for-curly-hair', color: 'from-purple-500 to-violet-600', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { icon: Wind, title: 'Wavy Hair Care', subtitle: 'Types 2a, 2b, 2c', link: '/hair-routine-for-wavy-hair', color: 'from-teal-500 to-cyan-600', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
    { icon: ArrowDown, title: 'Straight Hair', subtitle: 'Types 1a, 1b, 1c', link: '/hair-routine-for-straight-hair', color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { icon: TrendingUp, title: 'Hair Growth', subtitle: 'Length & Volume', link: '/hair-growth-routine', color: 'from-pink-500 to-rose-600', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { icon: AlertCircle, title: 'Damaged & Frizzy', subtitle: 'Repair & Smooth', link: '/hair-routine-for-frizzy-hair', color: 'from-amber-500 to-orange-600', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
    { icon: Droplets, title: 'Hair Porosity', subtitle: 'Low, Medium, High', link: '/hair-routine-for-low-porosity', color: 'from-emerald-500 to-green-600', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
    { icon: Droplet, title: 'Oily Scalp', subtitle: 'Balance & Cleanse', link: '/hair-routine-for-oily-scalp', color: 'from-lime-500 to-green-600', bgColor: 'bg-lime-50', textColor: 'text-lime-600' },
    { icon: Sun, title: 'Dry Scalp', subtitle: 'Hydrate & Soothe', link: '/hair-routine-for-dry-scalp', color: 'from-yellow-500 to-amber-600', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' }
  ];

  const features = [
    'Custom product recommendations',
    'Step-by-step routine guide',
    'Seasonal adjustments',
    'Downloadable PDF results',
    'Email support',
    'Regular updates'
  ];

  const faqs = [
    {
      q: "Is this hair routine generator really free?",
      a: "Yes, our hair routine generator is 100% free to use. There are no hidden fees, subscriptions, or signup requirements. Simply take our quick quiz, and you'll receive a complete personalized hair care routine instantly. We believe everyone deserves access to professional-quality hair care advice."
    },
    {
      q: "How does hair porosity affect my routine?",
      a: "Hair porosity determines how well your hair absorbs and retains moisture. Low porosity hair has tightly closed cuticles that resist moisture, requiring lightweight products and heat during conditioning. High porosity hair absorbs moisture quickly but loses it fast, needing heavier products and protein treatments. Our AI analyzes your porosity to recommend the right products and techniques for optimal moisture balance."
    },
    {
      q: "Is this routine suitable for curly and coily hair?",
      a: "Absolutely! Our hair routine generator is designed for all hair types from straight 1A to coily 4C. For curly and coily hair, we recommend specific techniques like the LOC/LCO method, diffusing tips, protective styling routines, and products that enhance curl definition while providing deep hydration. Each routine is customized to your unique curl pattern."
    },
    {
      q: "How often should I wash my hair based on my hair type?",
      a: "Wash frequency varies by hair type and lifestyle. Straight and oily hair may need washing every 1-2 days, while curly and coily hair benefits from washing once a week or less to prevent dryness. Our AI considers your hair type, scalp condition, activity level, and climate to recommend the ideal wash schedule for maintaining healthy, balanced hair."
    },
    {
      q: "Can I use this routine for hair growth?",
      a: "Yes! Our hair routine generator includes specific recommendations for promoting hair growth. Based on your answers, we suggest scalp massage techniques, growth-stimulating ingredients like rosemary and peppermint oils, protein-moisture balance tips, and protective styling advice. A consistent routine addressing your specific needs is key to achieving longer, stronger hair."
    },
    {
      q: "Does climate really affect hair care routines?",
      a: "Climate has a significant impact on hair health. Humid environments cause frizz and can make styling difficult, requiring anti-humidity products and sealants. Dry climates strip moisture, leading to brittle hair that needs extra hydration. Cold weather causes static and dryness, while hot weather increases oil production. Our AI factors in your local climate to recommend products and techniques that keep your hair healthy year-round."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hair Routine Generator – Personalized Care by Hair Type</title>
        <meta name="title" content="Hair Routine Generator – Personalized Care by Hair Type" />
        <meta name="description" content="Generate a personalized hair routine based on your hair type, porosity, and local climate. Get daily and weekly hair care steps in minutes." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://hairroutinegen.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairroutinegen.com/" />
        <meta property="og:title" content="Hair Routine Generator – Personalized Care by Hair Type" />
        <meta property="og:description" content="Generate a personalized hair routine based on your hair type, porosity, and local climate. Get daily and weekly hair care steps in minutes." />
        <meta property="og:image" content="https://hairroutinegen.com/og-image.jpg" />
        <meta property="og:site_name" content="Hair Routine Generator" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Routine Generator – Personalized Care by Hair Type" />
        <meta name="twitter:description" content="Generate a personalized hair routine based on your hair type, porosity, and local climate. Get daily and weekly hair care steps in minutes." />
        <meta name="twitter:image" content="https://hairroutinegen.com/twitter-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="inline-block">
                  <span className="px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-semibold">
                    ✨ AI-Powered Analysis
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  AI Hair Routine Generator{' '}
                  <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                    – Personalized Hair Care by Hair Type & Porosity
                  </span>
                </h1>
                <p className="text-sm text-gray-600 hero-description leading-relaxed">
                  Generate a personalized hair care routine in under 60 seconds. Our AI analyzes your hair type (1A–4C), porosity, scalp condition, and climate to create a custom daily and weekly hair routine designed for healthier hair.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/quiz">
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-medium text-xs px-4 py-1.5 group">
                      Generate My Routine
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="sm" variant="outline" className="border border-green-500 text-green-600 hover:bg-green-50 font-medium text-xs px-4 py-1.5">
                      How It Works
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-5 pt-2">
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-500">100%</p>
                    <p className="text-[10px] text-gray-600">Free to Use</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-yellow-400">4.9★</p>
                    <p className="text-[10px] text-gray-600">User Rating</p>
                  </div>
                </div>
                
                {/* Trust Signals */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-1 text-gray-600">
                    <FlaskConical className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[10px] font-medium">Science-Based</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <UserCheck className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[10px] font-medium">Best Practices</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Lock className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[10px] font-medium">No Signup</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div 
                  className="relative z-10"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img 
                    alt="AI hair routine generator result preview" 
                    className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl" 
                    src="/images/hero-hair-types.webp" 
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div 
                  className="absolute -top-6 -right-6 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50 -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-50 -z-10"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.35, 0.5]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What the Tool Does Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <span className="inline-block px-2.5 py-0.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-[10px] font-semibold mb-2">
                How It Works
              </span>
              <h2 className="text-lg md:text-xl font-bold mb-2">
                <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                  What Our Tool Does
                </span>
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                A complete hair analysis and routine builder in <span className="text-green-600 font-semibold">4 simple steps</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-green-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-green-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-400 rounded-md flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* SEO Content Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <p className="text-gray-600 text-center leading-relaxed">
                HairRoutineGen is an advanced hair routine generator designed to create personalized hair care plans based on your unique hair type, porosity, scalp condition, and hair goals. Unlike generic hair tips, our tool provides step-by-step daily and weekly routines tailored specifically for your hair.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who This Helps Section */}
        <section className="py-8 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <span className="inline-block px-2.5 py-0.5 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-[10px] font-semibold mb-2">
                Perfect For Everyone
              </span>
              <h2 className="text-lg md:text-xl font-bold mb-2">
                <span className="text-gray-900">Who This </span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Hair Routine Generator</span>
                <span className="text-gray-900"> Helps</span>
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Customized solutions for <span className="text-amber-600 font-semibold">every hair type</span> and concern
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {targetAudiences.map((item, index) => (
                <Link to={item.link} key={index} className="block h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 h-full hover:border-transparent hover:ring-2 hover:ring-offset-1 flex flex-col items-center text-center group`}
                    style={{ '--ring-color': 'currentColor' }}
                  >
                    <div className={`w-10 h-10 ${item.bgColor} rounded-xl flex items-center justify-center mb-3 ${item.textColor} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-sm font-bold mb-0.5 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.title}</h3>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{item.subtitle}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* How It Works Schema Section */}
        <section className="py-12 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 rounded-full text-xs font-semibold mb-3">
                Step-by-Step Process
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="text-gray-900">How the </span>
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Hair Routine Generator</span>
                <span className="text-gray-900"> Works</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Your journey to <span className="text-teal-600 font-semibold">healthier hair</span> starts here
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: 1,
                  title: "Analyze your hair type, porosity, and scalp condition",
                  desc: "through our smart quiz that gathers details about your unique hair characteristics."
                },
                {
                  num: 2,
                  title: "Identify your hair care goals and lifestyle",
                  desc: "preferences to ensure your routine fits seamlessly into your daily life."
                },
                {
                  num: 3,
                  title: "Generate a personalized daily and weekly hair routine",
                  desc: "using our AI that combines expert knowledge with your specific needs."
                },
                {
                  num: 4,
                  title: "Follow your routine and adjust based on results",
                  desc: "to achieve optimal hair health over time."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-emerald-100 hover:shadow-lg hover:border-emerald-200 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section (Existing) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img alt="Hair care products and routine" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1686121544192-6112bb5ffded" loading="lazy" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold">
                  Complete Care System
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Comprehensive
                  </span>
                  <span className="text-gray-900"> Hair Care Plans</span>
                </h2>
                <p className="text-base text-gray-500 leading-relaxed">
                  We don't just recommend products; we build a <span className="text-purple-600 font-semibold">complete lifestyle plan</span> for your hair.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/quiz">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold mt-4">
                    Start Your Free Analysis
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                Got Questions?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="text-gray-900">Frequently </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Asked Questions</span>
              </h2>
              <p className="text-gray-500 text-sm">Common questions about our <span className="text-blue-600 font-medium">AI hair routine generator</span></p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      openFAQ === index 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-400' 
                        : 'bg-gradient-to-br from-blue-100 to-cyan-100'
                    }`}>
                      <HelpCircle className={`w-5 h-5 ${openFAQ === index ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <h3 className="flex-1 text-lg font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        openFAQ === index ? 'bg-blue-500' : 'bg-gray-100'
                      }`}
                    >
                      <ChevronDown className={`w-5 h-5 ${openFAQ === index ? 'text-white' : 'text-gray-500'}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-14 border-l-4 border-blue-400 ml-5">
                            <p className="text-gray-600 leading-relaxed pl-4">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-green-500 to-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <Sparkles className="w-10 h-10 text-white mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Find Your Perfect Routine?
              </h2>
              <p className="text-base text-white/90">
                Join thousands of happy users who transformed their hair health for free.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6">
                  Take the Quiz Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;