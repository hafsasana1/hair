import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Droplets, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  AlertCircle,
  Clock,
  Heart,
  Scissors
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CurlyHairRoutine = () => {
  const curlTypes = [
    { type: 'Type 2 (Wavy)', desc: 'S-shaped waves ranging from loose (2A) to defined (2C). These waves often need lightweight products to avoid being weighed down.' },
    { type: 'Type 3 (Curly)', desc: 'Spiral curls ranging from loose loops (3A) to tight corkscrews (3C). These curls thrive with moisture and definition products.' },
    { type: 'Type 4 (Coily)', desc: 'Tight coils and zig-zags ranging from defined (4A) to undefined (4C). This hair type needs the most moisture and gentle handling.' }
  ];

  const commonMistakes = [
    'Brushing curls when dry - this disrupts the curl pattern and causes frizz',
    'Using products with drying alcohols or harsh sulfates',
    'Touching hair while it dries - let curls set completely',
    'Skipping deep conditioning treatments',
    'Using too much heat without protection'
  ];

  const nighttimeRoutine = [
    { step: 'Pineapple Method', desc: 'Loosely gather hair at the top of your head with a silk scrunchie to preserve curls overnight.' },
    { step: 'Silk Pillowcase', desc: 'Cotton absorbs moisture and creates friction. Silk or satin keeps curls hydrated and prevents breakage.' },
    { step: 'Refresh Spray', desc: 'Keep a spray bottle with water and a little leave-in conditioner to revive curls in the morning.' }
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Curly Hair Routine (2A-4C) | Hair Routine Generator Guide</title>
        <meta name="description" content="The comprehensive guide to curly hair care. Discover the best routine for 2A to 4C hair types, product recommendations, and expert tips for defined, healthy curls." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Curly Hair Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                The Ultimate <span className="text-green-600">Curly Hair Routine</span> (2A-4C)
              </h1>
              <p className="text-xl text-gray-600">
                Master your natural texture with our step-by-step guide for healthy, defined curls.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Your Curl Pattern</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Knowing your curl type helps you choose the right products and techniques. Curly hair ranges from loose waves to tight coils, and each pattern has unique needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {curlTypes.map((curl, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-300 transition-colors"
                >
                  <Waves className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{curl.type}</h3>
                  <p className="text-gray-600">{curl.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Not sure exactly what type you have?</p>
              <Link to="/quiz">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Take the Free Hair Analysis Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Step-by-Step Curly Routine</h2>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Cleanse (Gently)</h3>
                  <p className="text-gray-700 mb-4">Curly hair is naturally drier because the oils from your scalp have a harder time traveling down the spiral shape. Use a sulfate-free shampoo to cleanse without stripping natural oils. Focus on massaging the scalp, not the ends.</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-green-700 text-sm">Recommended:</p>
                    <p className="text-gray-600">Hydrating Cream Shampoo or Co-wash (conditioner-only wash)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Condition & Detangle</h3>
                  <p className="text-gray-700 mb-4">Apply a rich conditioner with a lot of "slip" (slippery texture). Detangle gently with your fingers or a wide-tooth comb while hair is soaking wet and coated with conditioner. Always start from the ends and work your way up to avoid breakage.</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-green-700 text-sm">Expert Tip:</p>
                    <p className="text-gray-600">Try "Squish to Condish" - scrunching water and conditioner into hair to encourage curl clumping and hydration.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Style & Define</h3>
                  <p className="text-gray-700 mb-4">Apply leave-in conditioner to soaking wet hair, followed by a curl cream or gel. Use the "praying hands" method to smooth product over curl clumps, then scrunch upward to encourage definition.</p>
                  <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 underline text-sm">
                    Learn how to prevent frizz during styling →
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Dry with Care</h3>
                  <p className="text-gray-700 mb-4">Never rub your hair with a regular towel. Use a microfiber towel or cotton t-shirt to gently scrunch out excess water. Air dry for the healthiest results, or diffuse on low heat if you need to speed up the process.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Scrunch Out the Crunch</h3>
                  <p className="text-gray-700 mb-4">If you used gel and your hair dried with a hard cast, wait until completely dry, then scrunch gently to break the cast and reveal soft, defined curls.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Curly Hair Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-red-50 rounded-lg"
                >
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{mistake}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Protect Your Curls While You Sleep</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {nighttimeRoutine.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.step}</h3>
                  <p className="text-green-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Deep Conditioning: The Secret to Healthy Curls</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Curly hair needs regular deep conditioning treatments to stay moisturized and strong. Here's what you need to know about making the most of your treatments.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Clock className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">How Often?</h3>
                <p className="text-gray-600">Most curly hair types benefit from deep conditioning once a week. If your hair is very dry or damaged, you may need to do it twice a week until it recovers.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Heart className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">Best Ingredients</h3>
                <p className="text-gray-600">Look for masks with shea butter, coconut oil, argan oil, honey, or aloe vera. These ingredients penetrate the hair shaft and provide lasting moisture.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Curly Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I wash curly hair?</h3>
                <p className="text-gray-600">Most people with curly hair do well washing 1-2 times per week. Over-washing can strip away natural oils and lead to dryness. If you work out frequently or your scalp feels oily, consider a co-wash (conditioner-only wash) between regular washes.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why are my curls frizzy even after styling?</h3>
                <p className="text-gray-600">Frizz usually indicates a lack of moisture or that products aren't being applied correctly. Make sure you're applying products to soaking wet hair, not just damp hair. Also, avoid touching your curls while they dry. Check our <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 hover:underline">Frizzy Hair Guide</Link> for detailed tips.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Does hair porosity affect how I should care for my curls?</h3>
                <p className="text-gray-600">Absolutely! High porosity hair absorbs moisture quickly but loses it just as fast, so it needs heavier products and protein treatments. Low porosity hair has trouble absorbing moisture, so it benefits from heat during conditioning and lighter products. Our <Link to="/hair-routine-for-low-porosity" className="text-green-600 hover:underline">Low Porosity Guide</Link> has more details.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">What's the best way to refresh second-day curls?</h3>
                <p className="text-gray-600">Mix water with a small amount of leave-in conditioner in a spray bottle. Lightly mist your curls and scrunch to reactivate them. You can also add a tiny amount of gel to the areas that need more definition. Sleep with a silk pillowcase or pineapple your hair to preserve curls overnight.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I use a wide-tooth comb or my fingers to detangle?</h3>
                <p className="text-gray-600">Either works, as long as you're gentle and your hair is wet with conditioner. Many curlies prefer finger detangling because it allows you to feel tangles and be more careful. A wide-tooth comb can be faster, especially for thicker hair. Never brush dry curly hair with a regular brush.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How can I add more volume to my curls?</h3>
                <p className="text-gray-600">Try diffusing upside down or clipping your roots with curl clips while drying. Using a mousse instead of a heavy cream can also add lift. Make sure you're not weighing down your curls with too much product, especially near the roots.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">When should I trim my curly hair?</h3>
                <p className="text-gray-600">Regular trims every 8-12 weeks help remove split ends before they travel up the hair shaft. Even if you're growing your hair out, small trims keep your ends healthy and prevent breakage that would undo your progress.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-400 text-center">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Personalized Curly Hair Routine</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Knowing your curl type is just the start. Let our AI build your complete schedule with product recommendations tailored to your specific needs.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-lg">
                Start Quiz Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CurlyHairRoutine;
