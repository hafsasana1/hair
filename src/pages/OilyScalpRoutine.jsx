import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplet, 
  Leaf, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  XCircle,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const OilyScalpRoutine = () => {
  const oilyCauses = [
    { title: 'Over-washing', desc: 'Daily washing with harsh sulfates strips natural oils, triggering your scalp to produce even more to compensate.', icon: Droplet },
    { title: 'Product Buildup', desc: 'Heavy conditioners, silicones, and styling products applied to roots clog follicles and trap oil.', icon: Leaf },
    { title: 'Hormonal Factors', desc: 'Hormonal changes during puberty, pregnancy, or stress can increase sebum production.', icon: Zap },
    { title: 'Genetics', desc: 'Some people simply produce more sebum than others - it runs in families.', icon: Sparkles }
  ];

  const dosDonts = {
    dos: [
      'Use lukewarm or cool water (hot water stimulates oil glands)',
      'Massage scalp for 60 seconds when shampooing',
      'Apply conditioner only from ears down to ends',
      'Use a clarifying shampoo once a week',
      'Let hair air dry when possible',
      'Wash your hairbrush regularly'
    ],
    donts: [
      'Touch or brush your hair frequently throughout the day',
      'Apply heavy oils or serums near the scalp',
      'Use very hot water to wash',
      'Skip shampoo entirely (co-washing usually doesn\'t work for oily scalps)',
      'Tie hair up while wet',
      'Over-use dry shampoo without eventually washing'
    ]
  };

  return (
    <>
      <Helmet>
        <title>Oily Scalp Routine: How to Balance Sebum | HairGen</title>
        <meta name="description" content="Struggling with greasy roots? Discover the ultimate routine for oily scalp care. Learn how to balance sebum production, choose the right shampoo, and extend wash days." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-lime-50 via-green-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-6 inline-block">
              Scalp Health Series
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Balancing Routine for <span className="text-lime-600">Oily Scalp</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop the cycle of constant washing. Learn how to balance your scalp's natural oil production for hair that stays fresh longer without stripping it dry.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Is My Scalp So Oily?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Sebum is natural and actually beneficial - it protects your scalp and keeps hair shiny. But when production goes into overdrive, you end up with greasy roots and limp hair. Understanding the causes helps you find the solution.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oilyCauses.map((cause, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white shadow-lg border border-gray-100 rounded-xl"
                >
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
                    <cause.icon className="w-6 h-6 text-lime-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cause.title}</h3>
                  <p className="text-sm text-gray-600">{cause.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
              <h3 className="font-bold text-gray-900 text-xl mb-4">The "Training" Myth</h3>
              <p className="text-gray-600">
                You've probably heard that you can "train" your scalp to produce less oil by washing less frequently. Unfortunately, there's no scientific evidence that this works. Sebum production is controlled by hormones and genetics, not by how often you wash.
              </p>
              <p className="text-gray-600 mt-4">
                However, using gentle products instead of harsh sulfates can reduce irritation-induced overproduction. The goal isn't to stop washing - it's to find the right balance for your scalp.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Your Oil-Balancing Routine</h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-lime-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-100 text-lime-600 text-sm font-bold">1</span>
                  Double Cleanse (The Game Changer)
                </h3>
                <p className="text-gray-600 mb-4">
                  The first shampoo breaks down oil, product buildup, and pollution. It's doing the heavy lifting. The second shampoo actually cleans the scalp now that the barrier is broken down. This method is far more effective than one long wash.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-lime-500" /> Use lukewarm water (hot water stimulates oil glands)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-lime-500" /> Massage scalp with fingertips for 60 seconds each time</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-lime-500" /> Rinse thoroughly between shampoos</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 text-sm font-bold">2</span>
                  Condition Correctly
                </h3>
                <p className="text-gray-600">
                  Never apply conditioner to your scalp if you have oily roots. Apply only from the ears down to the ends. Your scalp produces its own conditioning oils - it doesn't need more. Your ends, however, are likely dry and do need the moisture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-lime-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-100 text-lime-600 text-sm font-bold">3</span>
                  Weekly Scalp Detox
                </h3>
                <p className="text-gray-600 mb-4">
                  Once a week, use a scalp exfoliant or clarifying shampoo to deep clean your scalp. This removes stubborn buildup, dead skin cells, and residue that regular shampoo misses.
                </p>
                <p className="text-gray-600">
                  Look for products with salicylic acid (BHA) which dissolves oil and unclogs follicles, or try a physical scalp scrub. Follow with your regular shampoo and conditioner.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 text-sm font-bold">4</span>
                  Strategic Dry Shampoo Use
                </h3>
                <p className="text-gray-600">
                  Dry shampoo is a great tool for extending time between washes, but it's not a replacement for actual washing. Apply at roots before they get visibly oily - it works better as prevention than cure. Don't use it more than 2 days in a row without a real wash.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Dos and Don'ts for Oily Scalp</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-lime-50 p-8 rounded-2xl border border-lime-100">
                <h3 className="font-bold text-xl text-lime-700 mb-6">Do This</h3>
                <ul className="space-y-4">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h3 className="font-bold text-xl text-red-600 mb-6">Avoid This</h3>
                <ul className="space-y-4">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Oily Scalp FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I wash oily hair?</h3>
                <p className="text-gray-600">There's no one-size-fits-all answer. Some people with very oily scalps need to wash daily, while others can stretch to every other day. Listen to your scalp - if it's itchy, flaky, or visibly greasy, it's time to wash. Don't force yourself to skip wash days if your scalp isn't happy.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Is dry shampoo bad for oily hair?</h3>
                <p className="text-gray-600">Dry shampoo is a helpful tool when used correctly. It absorbs oil and can extend time between washes. However, it doesn't actually clean your scalp - it just masks the oil. Don't rely on it for more than 1-2 days between real washes, as buildup can clog follicles and irritate your scalp.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I avoid all oils if I have an oily scalp?</h3>
                <p className="text-gray-600">Not necessarily. While you should avoid applying heavy oils to your scalp, lightweight oils like argan or jojoba can still be beneficial for your ends (which are likely dry). Just keep oils away from your roots and scalp area.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Why are my roots oily but my ends are dry?</h3>
                <p className="text-gray-600">This is extremely common. Your scalp produces oil, but that oil has a hard time traveling down long hair, especially if it's curly or wavy. Your ends don't get the benefit of natural oils and can become dry and damaged. This is why you should only condition your ends while keeping scalp treatments oil-free.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Can diet affect scalp oiliness?</h3>
                <p className="text-gray-600">Yes, to some extent. Diets high in refined carbohydrates and dairy have been linked to increased sebum production in some studies. Staying hydrated and eating a balanced diet may help, though genetics and hormones play a larger role. If you notice certain foods make your scalp oilier, it's worth experimenting with reducing them.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">When should I see a dermatologist?</h3>
                <p className="text-gray-600">If your oily scalp is accompanied by severe itching, redness, flaking, or hair loss, it could indicate a skin condition like seborrheic dermatitis rather than just naturally oily skin. A dermatologist can diagnose and prescribe appropriate treatment if needed.</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-lime-50 rounded-xl">
              <p className="text-gray-600 mb-4">Related guides you might find helpful:</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/hair-routine-for-dry-scalp" className="text-lime-600 font-medium hover:underline">
                  Dry Scalp Care →
                </Link>
                <Link to="/hair-routine-for-hair-growth" className="text-lime-600 font-medium hover:underline">
                  Hair Growth Tips →
                </Link>
                <Link to="/hair-routine-for-straight-hair" className="text-lime-600 font-medium hover:underline">
                  Straight Hair Routine →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-br from-lime-50 to-green-50">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-lime-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Personalized Scalp Care Routine</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our AI analyzes your specific scalp concerns and creates a balanced routine to keep oil under control without over-stripping.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-lime-600 text-white hover:bg-lime-700">
                Start Free Analysis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default OilyScalpRoutine;
