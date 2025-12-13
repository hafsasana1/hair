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
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "HairGen Hair Routine Generator",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Free AI-powered hair routine generator that creates personalized daily hair care plans based on hair type, porosity, and goals."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this hair routine generator free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, HairGen is a 100% free tool powered by AI to help you build a personalized hair care routine without any cost."
            }
          },
          {
            "@type": "Question",
            "name": "How do I determine my hair porosity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our quiz includes a specific section to help you identify your hair porosity (low, medium, or high) through simple observation questions, ensuring your routine is perfectly matched to your hair's ability to absorb moisture."
            }
          },
          {
            "@type": "Question",
            "name": "Does this work for curly hair (2a-4c)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our AI is trained on the specific needs of all curl patterns, from loose wavy 2a hair to tight coily 4c hair, providing product recommendations and techniques suited for each texture."
            }
          },
          {
            "@type": "Question",
            "name": "Can this help with damaged or frizzy hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our algorithm identifies damage levels and frizz concerns to recommend reparative treatments, protein balances, and hydration techniques to restore hair health."
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
    { icon: Wind, title: 'Wavy Hair Care', subtitle: 'Types 2a, 2b, 2c', link: '/hair-routine-for-2b-hair', color: 'from-teal-500 to-cyan-600', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
    { icon: ArrowDown, title: 'Straight Hair', subtitle: 'Types 1a, 1b, 1c', link: '/hair-routine-for-straight-hair', color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { icon: TrendingUp, title: 'Hair Growth', subtitle: 'Length & Volume', link: '/hair-routine-for-hair-growth', color: 'from-pink-500 to-rose-600', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
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
      q: "Is this hair routine generator free?",
      a: "Yes, HairGen is a 100% free tool powered by AI to help you build a personalized hair care routine without any cost."
    },
    {
      q: "How do I determine my hair porosity?",
      a: "Our quiz includes a specific section to help you identify your hair porosity (low, medium, or high) through simple observation questions, ensuring your routine is perfectly matched to your hair's ability to absorb moisture."
    },
    {
      q: "Does this work for curly hair (2a-4c)?",
      a: "Absolutely. Our AI is trained on the specific needs of all curl patterns, from loose wavy 2a hair to tight coily 4c hair, providing product recommendations and techniques suited for each texture."
    },
    {
      q: "Can this help with damaged or frizzy hair?",
      a: "Yes, our algorithm identifies damage levels and frizz concerns to recommend reparative treatments, protein balances, and hydration techniques to restore hair health."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Hair Routine Generator (AI-Powered) | HairGen</title>
        <meta name="description" content="Generate a free, personalized hair care routine with our AI tool. Perfect for curly, wavy, coily, or straight hair. Identify your porosity and build a daily plan." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    ✨ AI-Powered Analysis
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Free Hair Routine Generator{' '}
                  <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                    (AI-Powered)
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Build a fully personalized hair care routine in seconds. Our AI analyzes your hair type, porosity, and goals to create a custom day-by-day plan just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quiz">
                    <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold text-lg px-8 py-6 group">
                      Generate My Routine
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-6">
                      How It Works
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-500">100%</p>
                    <p className="text-sm text-gray-600">Free to Use</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">4.9★</p>
                    <p className="text-sm text-gray-600">User Rating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img alt="Woman with beautiful healthy hair" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1608875848903-06eec0bd71e2" />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What the Tool Does Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent">
                  What Our Tool Does
                </span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A complete hair analysis and routine builder in <span className="text-green-600 font-semibold">4 simple steps</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-green-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Helps Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                Perfect For Everyone
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Who This </span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Hair Routine Generator</span>
                <span className="text-gray-900"> Helps</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
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
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 h-full hover:border-transparent hover:ring-2 hover:ring-offset-2 flex flex-col items-center text-center group`}
                    style={{ '--ring-color': 'currentColor' }}
                  >
                    <div className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 ${item.textColor} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className={`font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.title}</h3>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.subtitle}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Internal Link Guide Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <Link to="/hair-routine-for-curly-hair" className="text-green-600 hover:underline">Curly Hair Guide</Link>
                <span className="text-gray-300">•</span>
                <Link to="/hair-routine-for-2b-hair" className="text-green-600 hover:underline">2B Hair Routine</Link>
                <span className="text-gray-300">•</span>
                <Link to="/hair-routine-for-low-porosity" className="text-green-600 hover:underline">Low Porosity Care</Link>
                <span className="text-gray-300">•</span>
                <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 hover:underline">Anti-Frizz Solutions</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (Existing) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img alt="Hair care products and routine" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1686121544192-6112bb5ffded" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                  Complete Care System
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Comprehensive
                  </span>
                  <span className="text-gray-900"> Hair Care Plans</span>
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed">
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-900">Frequently </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Asked Questions</span>
              </h2>
              <p className="text-gray-500 text-lg">Common questions about our <span className="text-blue-600 font-medium">AI hair routine generator</span></p>
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

        {/* AdSense Placeholder */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 font-semibold">Advertisement</p>
              <p className="text-sm text-gray-400 mt-2">Support HairGen by keeping us free</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <Sparkles className="w-16 h-16 text-white mx-auto" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Find Your Perfect Routine?
              </h2>
              <p className="text-xl text-white/90">
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